import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import App from "../src/App";
import ServicesPage from "../src/pages/ServicesPage";
import IndustriesPage from "../src/pages/IndustriesPage";
import ProposalPage from "../src/pages/ProposalPage";
import Header from "../src/components/Header";

function renderPage(component, path = "/") {
  return render(
    <MemoryRouter initialEntries={[path]}>{component}</MemoryRouter>,
  );
}

describe("page navigation", () => {
  const routes = [
    ["/", /Cleaner Environments Stronger Businesses\./],
    ["/services", /Comprehensive Cleaning Solutions for Every Business\./],
    ["/industries", /Clean Environments for Every Industry\./],
    ["/why-cera", /A Higher Standard For Your Business\./],
    ["/our-standards", /A Higher Standard You Can See\./],
    ["/about", /People Behind Cleaner Environments\./],
    [
      "/request-a-proposal",
      /Let’s Create a Cleaner Environment for Your Business\./,
    ],
    ["/contact", /Let’s Create a Cleaner Environment for Your Business\./],
  ];

  it.each(routes)(
    "renders %s with the expected content and page title",
    async (path, title) => {
      renderPage(<App />, path);
      expect(
        await screen.findByRole("heading", { level: 1, name: title }),
      ).toBeVisible();
      expect(document.title).toMatch(/^CERA \|/);
      expect(document.title).not.toContain("Page Not Found");
      expect(document.querySelectorAll("main")).toHaveLength(1);
      expect(document.querySelectorAll("h1")).toHaveLength(1);
    },
  );

  it("handles an unknown route with a working home link", async () => {
    renderPage(<App />, "/missing");
    await userEvent.click(screen.getByRole("link", { name: "Back to home" }));
    expect(
      await screen.findByRole("heading", {
        level: 1,
        name: /Cleaner Environments/,
      }),
    ).toBeVisible();
  });

  it("scrolls to sections without leaving the current page", async () => {
    renderPage(<App />, "/services");
    const link = await screen.findByRole("link", {
      name: "View All Capabilities",
    });
    await userEvent.click(link);
    expect(
      screen.getByRole("heading", { level: 1, name: /Comprehensive Cleaning/ }),
    ).toBeVisible();
    expect(link).toHaveAttribute("href", "/services#service-catalog");
    expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
  });
});

describe("service catalog and maintenance calculator", () => {
  it("filters the catalog and restores every service", async () => {
    const { container } = renderPage(<ServicesPage />);
    const cards = [...container.querySelectorAll(".service-card")];
    expect(cards).toHaveLength(8);
    const clinical = container.querySelector('[data-filter="clinical"]');
    await userEvent.click(clinical);
    for (const card of cards)
      expect(card.hidden).toBe(card.dataset.category !== "clinical");
    expect(clinical).toHaveAttribute("aria-pressed", "true");
    await userEvent.click(container.querySelector('[data-filter="all"]'));
    expect(cards.every((card) => !card.hidden)).toBe(true);
  });

  it("updates staffing and supervision for the selected size and frequency", async () => {
    const { container } = renderPage(<ServicesPage />);
    expect(container.querySelector("#crew-count")).toHaveTextContent(
      "3 Specialists",
    );
    fireEvent.change(
      screen.getByRole("slider", { name: "Facility size in square feet" }),
      { target: { value: "100000" } },
    );
    expect(container.querySelector("#sqft-display")).toHaveTextContent(
      "100,000 sq ft",
    );
    expect(container.querySelector("#crew-count")).toHaveTextContent(
      "10 Specialists",
    );
    await userEvent.click(container.querySelector('[data-freq="7"]'));
    expect(container.querySelector("#crew-count")).toHaveTextContent(
      "15 Specialists",
    );
    expect(container.querySelector("#audit-freq")).toHaveTextContent("Weekly");
    fireEvent.change(screen.getByRole("slider"), { target: { value: "5000" } });
    await userEvent.click(container.querySelector('[data-freq="3"]'));
    expect(container.querySelector("#crew-count")).toHaveTextContent(
      "1 Specialist",
    );
    expect(container.querySelector("#audit-freq")).toHaveTextContent("Monthly");
  });
});

it("filters industries by operational requirements", async () => {
  const { container } = renderPage(<IndustriesPage />);
  const articles = [...container.querySelectorAll("article")];
  expect(articles).toHaveLength(9);
  await userEvent.click(
    screen.getByRole("button", { name: "Industrial & Logistics" }),
  );
  expect(articles.filter((article) => !article.hidden)).toHaveLength(1);
  expect(
    screen.getByRole("heading", { name: "Warehouse & Industrial" }),
  ).toBeVisible();
  await userEvent.click(screen.getAllByRole("button")[0]);
  expect(articles.every((article) => !article.hidden)).toBe(true);
});

describe("proposal request", () => {
  function fillProposal() {
    for (const [label, value] of [
      [/Company \/ Business Name/, "Test Company"],
      [/Your Name/, "Test Person"],
      [/Title \/ Position/, "Facilities Manager"],
      [/Email Address/, "test@example.com"],
      [/Phone Number/, "+1 555 0100"],
      [/Facility Address/, "Test Address"],
      [/Total Square Footage/, "25000"],
      [/Number of Floors/, "2"],
      [/Preferred Start Date/, "2030-01-15"],
      [/Additional Details/, "Please call before arriving."],
    ])
      fireEvent.change(screen.getByLabelText(label), { target: { value } });
    fireEvent.click(
      screen.getByRole("radio", { name: "Healthcare Facilities" }),
    );
    fireEvent.change(screen.getByLabelText(/How often do you need cleaning/), {
      target: { value: "daily" },
    });
  }

  it("requires contact and facility information", async () => {
    const fetcher = vi.fn();
    vi.stubGlobal("fetch", fetcher);
    const { container } = renderPage(<ProposalPage />);
    await userEvent.click(
      screen.getByRole("button", { name: "SUBMIT REQUEST" }),
    );
    expect(container.querySelector("form").checkValidity()).toBe(false);
    expect(container.querySelector("#form-toast")).not.toBeVisible();
    expect(fetcher).not.toHaveBeenCalled();
  });

  it("posts the actual details to the server and shows success only after confirmation", async () => {
    let finish;
    const fetcher = vi.fn(
      () =>
        new Promise((resolve) => {
          finish = resolve;
        }),
    );
    vi.stubGlobal("fetch", fetcher);
    renderPage(<ProposalPage />);
    fillProposal();
    await userEvent.click(
      screen.getByRole("button", { name: "SUBMIT REQUEST" }),
    );
    expect(screen.getByRole("button", { name: "SENDING…" })).toBeDisabled();
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
    expect(screen.getByLabelText(/Company \/ Business Name/)).toHaveValue(
      "Test Company",
    );
    fireEvent.submit(document.querySelector("form"));
    expect(fetcher).toHaveBeenCalledTimes(1);
    const [url, options] = fetcher.mock.calls[0];
    expect(url).toMatch(/api\/proposal$/);
    const payload = JSON.parse(options.body);
    expect(payload.company_name).toBe("Test Company");
    expect(payload.industry).toBe("healthcare");
    expect(payload.frequency).toBe("daily");
    expect(payload.startedAt).toBeGreaterThan(0);
    expect(payload.requestId).toMatch(/^[a-f0-9-]{36}$/);
    finish(Response.json({ success: true }));
    const status = await screen.findByRole("status");
    expect(status).toHaveTextContent("Your proposal request has been sent");
    expect(status).toHaveFocus();
    expect(screen.getByRole("button", { name: "REQUEST SENT" })).toBeDisabled();
    for (const field of document.querySelectorAll(
      'form input:not([type="radio"]), form textarea, form select',
    )) {
      expect(field).toHaveValue("");
    }
    expect(
      screen.getByRole("radio", { name: "Corporate Offices" }),
    ).toBeChecked();
    expect(
      screen.getByRole("radio", { name: "Healthcare Facilities" }),
    ).not.toBeChecked();
  });

  it("allows a new request after clearing the successful submission", async () => {
    const fetcher = vi
      .fn()
      .mockImplementation(() =>
        Promise.resolve(Response.json({ success: true })),
      );
    vi.stubGlobal("fetch", fetcher);
    renderPage(<ProposalPage />);
    fillProposal();
    fireEvent.click(screen.getByRole("radio", { name: "Corporate Offices" }));
    await userEvent.click(
      screen.getByRole("button", { name: "SUBMIT REQUEST" }),
    );
    expect(await screen.findByRole("status")).toBeVisible();
    expect(
      screen.getByRole("radio", { name: "Corporate Offices" }),
    ).toBeChecked();
    fillProposal();
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
    await userEvent.click(
      screen.getByRole("button", { name: "SUBMIT REQUEST" }),
    );
    expect(await screen.findByRole("status")).toBeVisible();
    expect(fetcher).toHaveBeenCalledTimes(2);
    const first = JSON.parse(fetcher.mock.calls[0][1].body);
    const second = JSON.parse(fetcher.mock.calls[1][1].body);
    expect(first.industry).toBe("corporate");
    expect(second.industry).toBe("healthcare");
    expect(second.requestId).not.toBe(first.requestId);
  });

  it("keeps the form data and focuses a field rejected by the server", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        Response.json(
          {
            error: "Please check the highlighted fields.",
            errors: { email: "Please enter a valid email address." },
          },
          { status: 400 },
        ),
      ),
    );
    renderPage(<ProposalPage />);
    fillProposal();
    await userEvent.click(
      screen.getByRole("button", { name: "SUBMIT REQUEST" }),
    );
    expect(await screen.findByRole("alert")).toHaveTextContent(
      "Please enter a valid email address.",
    );
    expect(screen.getByLabelText(/Email Address/)).toHaveFocus();
    expect(screen.getByLabelText(/Company \/ Business Name/)).toHaveValue(
      "Test Company",
    );
    expect(screen.getByLabelText(/Additional Details/)).toHaveValue(
      "Please call before arriving.",
    );
    expect(
      screen.getByRole("radio", { name: "Healthcare Facilities" }),
    ).toBeChecked();
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });

  it("supports retrying a failed request with the same idempotency ID", async () => {
    const fetcher = vi
      .fn()
      .mockRejectedValueOnce(new Error("Network error"))
      .mockResolvedValueOnce(Response.json({ success: true }));
    vi.stubGlobal("fetch", fetcher);
    renderPage(<ProposalPage />);
    fillProposal();
    await userEvent.click(
      screen.getByRole("button", { name: "SUBMIT REQUEST" }),
    );
    expect(await screen.findByRole("alert")).toHaveTextContent(
      "We could not send your request",
    );
    await userEvent.click(
      screen.getByRole("button", { name: "SUBMIT REQUEST" }),
    );
    expect(await screen.findByRole("status")).toBeVisible();
    expect(JSON.parse(fetcher.mock.calls[0][1].body).requestId).toBe(
      JSON.parse(fetcher.mock.calls[1][1].body).requestId,
    );
  });
});

describe("mobile navigation", () => {
  it("opens, supports Escape, and closes after navigation", async () => {
    renderPage(<Header />);
    const user = userEvent.setup();
    const toggle = screen.getByRole("button", { name: "Open navigation" });
    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    await user.keyboard("{Escape}");
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(toggle).toHaveFocus();
    await user.click(toggle);
    const nav = screen.getByRole("navigation", { name: "Mobile navigation" });
    await user.click(within(nav).getByRole("link", { name: "Services" }));
    await waitFor(() =>
      expect(
        screen.queryByRole("navigation", { name: "Mobile navigation" }),
      ).not.toBeInTheDocument(),
    );
  });
});
