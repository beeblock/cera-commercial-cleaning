// @vitest-environment node
import { describe, expect, it, vi } from "vitest";
import { handleProposal } from "../server/proposal.js";
import api from "../api/proposal.js";

const now = () => 1900000000000;
const env = {
  RESEND_API_KEY: "test-private-key",
  CONTACT_TO_EMAIL: "contact@ceraccs.com",
  CONTACT_FROM_EMAIL: "CERA <noreply@ceraccs.com>",
};
const validData = {
  company_name: "Example Company",
  full_name: "Test Person",
  position: "Facility Manager",
  email: "test@example.com",
  phone: "+1 555 0100",
  industry: "corporate",
  address: "Example Facility",
  sqft: "25000",
  floors: "2",
  frequency: "daily",
  start_date: "2030-01-15",
  details: "Please call before arriving.",
  website: "",
  startedAt: now() - 5000,
  requestId: "b7efdd79-0ddd-4411-8bc2-3a96252c49d4",
};

function request(data = validData, init = {}) {
  return new Request("https://cera.example/api/proposal", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Origin: "https://cera.example",
    },
    body: JSON.stringify(data),
    ...init,
  });
}

function options(
  fetcher = vi.fn().mockResolvedValue(Response.json({ id: "test-id" })),
) {
  return { env, fetcher, now };
}

describe("proposal endpoint", () => {
  it("sends only through the server, using the configured recipient and client reply address", async () => {
    const config = options();
    const response = await handleProposal(
      request({ ...validData, to: "untrusted@example.com" }),
      config,
    );
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ success: true });
    const [url, settings] = config.fetcher.mock.calls[0];
    expect(url).toBe("https://api.resend.com/emails");
    expect(settings.headers.Authorization).toBe("Bearer test-private-key");
    expect(settings.headers["Idempotency-Key"]).toBe(
      `cera-proposal/${validData.requestId}`,
    );
    const message = JSON.parse(settings.body);
    expect(message.to).toEqual(["contact@ceraccs.com"]);
    expect(message.reply_to).toBe(validData.email);
    expect(message.html).toContain("Corporate Offices");
    expect(message.text).toContain("Daily Service (7 Days/Week)");
    expect(response.headers.get("cache-control")).toBe("no-store");
    expect(await response.text().catch(() => "")).not.toContain(
      "test-private-key",
    );
  });

  it("escapes markup in the email and rejects newline injection in email addresses", async () => {
    const config = options();
    await handleProposal(
      request({
        ...validData,
        company_name: '<script>alert("x")</script>',
        details: "<img src=x onerror=alert(1)>",
      }),
      config,
    );
    const message = JSON.parse(config.fetcher.mock.calls[0][1].body);
    expect(message.html).not.toContain("<script>");
    expect(message.html).toContain("&lt;script&gt;");
    expect(message.html).not.toContain("<img src=x");
    const invalid = await handleProposal(
      request({
        ...validData,
        email: "test@example.com\r\nBcc: other@example.com",
      }),
      options(),
    );
    expect(invalid.status).toBe(400);
  });

  it.each([
    ["missing name", { full_name: "  " }, "full_name"],
    ["invalid email", { email: "invalid-email" }, "email"],
    ["unknown industry", { industry: "invalid" }, "industry"],
    ["unknown frequency", { frequency: "invalid" }, "frequency"],
    ["invalid date", { start_date: "2030-02-30" }, "start_date"],
    ["oversized field", { company_name: "a".repeat(161) }, "company_name"],
  ])("rejects %s without contacting Resend", async (_, fields, fieldName) => {
    const config = options();
    const response = await handleProposal(
      request({ ...validData, ...fields }),
      config,
    );
    expect(response.status).toBe(400);
    expect((await response.json()).errors[fieldName]).toBeTruthy();
    expect(config.fetcher).not.toHaveBeenCalled();
  });

  it.each([
    { website: "spam.example" },
    { startedAt: now() - 100 },
    { startedAt: now() + 5000 },
    { startedAt: undefined },
  ])("silently discards bot submissions: %j", async (fields) => {
    const config = options();
    const response = await handleProposal(
      request({ ...validData, ...fields }),
      config,
    );
    expect(await response.json()).toEqual({ success: true });
    expect(config.fetcher).not.toHaveBeenCalled();
  });

  it("handles provider failures without exposing the response or configuration", async () => {
    const config = options(
      vi
        .fn()
        .mockResolvedValue(
          Response.json(
            { message: "Internal details and test-private-key" },
            { status: 403 },
          ),
        ),
    );
    const response = await handleProposal(request(), config);
    expect(response.status).toBe(502);
    expect(await response.text()).not.toContain("test-private-key");
  });

  it("handles network timeouts without claiming success", async () => {
    const response = await handleProposal(
      request(),
      options(vi.fn().mockRejectedValue(new Error("timeout"))),
    );
    expect(response.status).toBe(502);
    expect((await response.json()).success).not.toBe(true);
  });

  it("explains unavailable configuration without contacting the provider", async () => {
    const config = { ...options(), env: {} };
    const response = await handleProposal(request(), config);
    expect(response.status).toBe(503);
    expect(config.fetcher).not.toHaveBeenCalled();
  });

  it("rejects malformed JSON, oversized requests, wrong media types, and external origins", async () => {
    expect(
      (await handleProposal(request({}, { body: "{broken" }), options()))
        .status,
    ).toBe(400);
    expect(
      (
        await handleProposal(
          request({ ...validData, details: "x".repeat(22000) }),
          options(),
        )
      ).status,
    ).toBe(413);
    expect(
      (
        await handleProposal(
          request({}, { headers: { "Content-Type": "text/plain" } }),
          options(),
        )
      ).status,
    ).toBe(415);
    expect(
      (
        await handleProposal(
          request(
            {},
            {
              headers: {
                "Content-Type": "application/json",
                Origin: "https://other.example",
              },
            },
          ),
          options(),
        )
      ).status,
    ).toBe(403);
  });

  it("supports the Vercel handler and restricts unsupported HTTP methods", async () => {
    const response = await api.fetch(
      new Request("https://cera.example/api/proposal"),
    );
    expect(response.status).toBe(405);
    expect(response.headers.get("allow")).toBe("POST");
  });
});
