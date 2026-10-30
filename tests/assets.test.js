// @vitest-environment node
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import sharp from "sharp";

describe("self-contained assets", () => {
  it("keeps every page image available locally", () => {
    for (const page of readdirSync("src/pages")) {
      const code = readFileSync(`src/pages/${page}`, "utf8");
      expect(code).not.toMatch(/googleusercontent\.com|cdn\.tailwindcss\.com/);
      for (const [, image] of code.matchAll(/asset\(["']([^"']+)["']\)/g)) {
        expect(existsSync(`public/${image}`), `${page}: ${image}`).toBe(true);
      }
    }
    expect(readdirSync("public/images")).toHaveLength(45);
    expect(existsSync("public/fonts/material-symbols-outlined.woff2")).toBe(
      true,
    );
    expect(
      readFileSync("public/fonts/material-symbols-outlined.woff2")
        .subarray(0, 4)
        .toString("ascii"),
    ).toBe("wOF2");
  });

  it("serves only WebP images and preserves the logo transparency", async () => {
    const images = readdirSync("public/images");
    expect(images.every((file) => file.endsWith(".webp"))).toBe(true);
    for (const file of images) {
      const metadata = await sharp(`public/images/${file}`).metadata();
      expect(metadata.format, file).toBe("webp");
      expect(metadata.width, file).toBeLessThanOrEqual(1920);
    }
    const logo = await sharp("public/images/cera-logo.webp").metadata();
    expect(logo.hasAlpha).toBe(true);
    expect(logo.width).toBe(640);
  });
});
