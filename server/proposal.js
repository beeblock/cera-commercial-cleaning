import {
  frequencyNames,
  industryNames,
  proposalFields,
} from "../src/lib/proposal.js";

const MAX_BODY_BYTES = 20000;
const MIN_FILL_MS = 2000;
const emailPattern = /^[^\s@<>\r\n]+@[^\s@<>\r\n]+\.[^\s@<>\r\n]+$/;
const genericError =
  "We could not send your request. Please try again or email contact@ceraccs.com.";

function json(status, data, headers = {}) {
  return Response.json(data, {
    status,
    headers: { "Cache-Control": "no-store", ...headers },
  });
}

function escapeHtml(value) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        character
      ],
  );
}

async function readBody(request) {
  if (Number(request.headers.get("content-length")) > MAX_BODY_BYTES)
    return null;
  const reader = request.body?.getReader();
  if (!reader) return {};
  const chunks = [];
  let size = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.length;
    if (size > MAX_BODY_BYTES) {
      await reader.cancel();
      return null;
    }
    chunks.push(value);
  }
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.length;
  }
  return JSON.parse(new TextDecoder().decode(bytes));
}

function validate(data) {
  const values = {};
  const errors = {};
  for (const [name, field] of Object.entries(proposalFields)) {
    const value =
      typeof data[name] === "string"
        ? data[name].trim().replace(/\u0000/g, "")
        : "";
    values[name] = value.slice(0, field.max);
    if (field.required && !value) errors[name] = `${field.label} is required.`;
    if (value.length > field.max)
      errors[name] = `${field.label} must be ${field.max} characters or fewer.`;
  }
  if (values.email && !emailPattern.test(values.email))
    errors.email = "Please enter a valid email address.";
  if (!Object.hasOwn(industryNames, values.industry))
    errors.industry = "Please select an industry.";
  if (!Object.hasOwn(frequencyNames, values.frequency))
    errors.frequency = "Please select a cleaning frequency.";
  if (
    values.start_date &&
    (!/^\d{4}-\d{2}-\d{2}$/.test(values.start_date) ||
      Number.isNaN(Date.parse(`${values.start_date}T00:00:00Z`)) ||
      new Date(`${values.start_date}T00:00:00Z`).toISOString().slice(0, 10) !==
        values.start_date)
  )
    errors.start_date = "Please enter a valid start date.";
  return { values, errors };
}

function buildEmail(values) {
  const display = {
    ...values,
    industry: industryNames[values.industry],
    frequency: frequencyNames[values.frequency],
  };
  const rows = Object.entries(proposalFields)
    .map(([name, field]) => {
      const value = display[name] || "Not specified";
      return `<tr><th style="padding:12px;text-align:left;vertical-align:top;border-bottom:1px solid #e2e8f0;color:#46607e;font-size:12px;width:35%">${escapeHtml(field.label)}</th><td style="padding:12px;border-bottom:1px solid #e2e8f0;white-space:pre-wrap;overflow-wrap:anywhere">${escapeHtml(value)}</td></tr>`;
    })
    .join("");
  return {
    subject: `New commercial cleaning proposal — ${values.company_name.replace(/[\r\n]/g, " ")}`,
    html: `<!doctype html><html lang="en"><body style="margin:0;background:#f7f9ff;font-family:Arial,sans-serif;color:#141c25"><div style="max-width:680px;margin:24px auto;background:#fff"><div style="padding:28px;background:#071f38;color:#fff"><p style="margin:0;font-size:26px;font-weight:bold">CERA</p><h1 style="font-size:20px;font-weight:normal">New proposal request</h1></div><div style="padding:20px"><p>A visitor submitted the commercial cleaning proposal form. Reply to this email to contact them directly.</p><table style="width:100%;border-collapse:collapse;font-size:14px">${rows}</table></div></div></body></html>`,
    text: `CERA — New proposal request\n\n${Object.entries(proposalFields)
      .map(
        ([name, field]) =>
          `${field.label}: ${display[name] || "Not specified"}`,
      )
      .join("\n")}\n\nReply to this email to contact the client.`,
  };
}

export async function handleProposal(
  request,
  { env = process.env, fetcher = fetch, now = Date.now } = {},
) {
  if (request.method !== "POST")
    return json(405, { error: "Method not allowed." }, { Allow: "POST" });
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin)
    return json(403, { error: "This request is not allowed." });
  if (
    !request.headers
      .get("content-type")
      ?.toLowerCase()
      .startsWith("application/json")
  )
    return json(415, { error: "Please submit the form as JSON." });

  let data;
  try {
    data = await readBody(request);
  } catch {
    return json(400, {
      error: "The request could not be read. Please try again.",
    });
  }
  if (data === null) return json(413, { error: "The request is too large." });
  if (!data || typeof data !== "object" || Array.isArray(data))
    return json(400, { error: "Invalid form data." });

  // Match Altivum's honeypot and minimum-fill-time bot protection.
  const startedAt = Number(data.startedAt);
  if (
    data.website ||
    !Number.isFinite(startedAt) ||
    startedAt <= 0 ||
    now() - startedAt < MIN_FILL_MS
  )
    return json(200, { success: true });
  const { values, errors } = validate(data);
  if (Object.keys(errors).length)
    return json(400, { error: "Please check the highlighted fields.", errors });
  if (
    typeof data.requestId !== "string" ||
    !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
      data.requestId,
    )
  )
    return json(400, { error: "Please refresh the page and try again." });

  const key = env.RESEND_API_KEY?.trim();
  const to = env.CONTACT_TO_EMAIL?.trim();
  const from = env.CONTACT_FROM_EMAIL?.trim();
  if (!key || !to || !from || !emailPattern.test(to) || /[\r\n]/.test(from))
    return json(503, {
      error:
        "Online requests are temporarily unavailable. Please email contact@ceraccs.com.",
    });

  try {
    const response = await fetcher("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        "Idempotency-Key": `cera-proposal/${data.requestId}`,
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: values.email,
        ...buildEmail(values),
      }),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) return json(502, { error: genericError });
    return json(200, { success: true });
  } catch {
    return json(502, { error: genericError });
  }
}
