import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});
if (typeof window !== "undefined") {
  window.scrollTo = vi.fn();
  Element.prototype.scrollIntoView = vi.fn();
}
