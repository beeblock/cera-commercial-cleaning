import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = fileURLToPath(new URL("../", import.meta.url));
const imagesDirectory = path.join(root, "public", "images");
const logoIndex = process.argv.indexOf("--logo");
const logoSource = logoIndex >= 0 ? process.argv[logoIndex + 1] : undefined;
if (logoIndex >= 0 && !logoSource)
  throw new Error("Provide a PNG logo path after --logo.");

const replacements = new Map();
const images = (await fs.readdir(imagesDirectory)).filter((file) =>
  /\.(jpe?g|png)$/i.test(file),
);
let originalBytes = 0;
let optimizedBytes = 0;

for (const file of images) {
  const sourcePath = path.join(imagesDirectory, file);
  const destination = file.replace(/\.(jpe?g|png)$/i, ".webp");
  const destinationPath = path.join(imagesDirectory, destination);
  originalBytes += (await fs.stat(sourcePath)).size;
  const result = await sharp(sourcePath)
    .rotate()
    .resize({ width: 1920, withoutEnlargement: true })
    .webp({ quality: 82, effort: 6 })
    .toFile(destinationPath);
  const metadata = await sharp(destinationPath).metadata();
  if (metadata.format !== "webp" || !metadata.width)
    throw new Error(`Invalid output for ${file}.`);
  optimizedBytes += result.size;
  replacements.set(`images/${file}`, `images/${destination}`);
}

async function updateReferences(directory) {
  for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await updateReferences(fullPath);
    } else if (/\.(jsx?|css)$/.test(entry.name)) {
      const before = await fs.readFile(fullPath, "utf8");
      let after = before;
      for (const [previous, next] of replacements)
        after = after.replaceAll(previous, next);
      if (before !== after) await fs.writeFile(fullPath, after);
    }
  }
}

await updateReferences(path.join(root, "src"));

// Only remove the converted working copies after their WebP output has been verified.
// The original Stitch export and the user-provided source logo remain unchanged.
for (const file of images) await fs.unlink(path.join(imagesDirectory, file));

if (logoSource) {
  const logoPath = path.resolve(logoSource);
  const metadata = await sharp(logoPath).metadata();
  const trimmed = await sharp(logoPath)
    .trim({ background: "#00000000", threshold: 10 })
    .resize({ width: 640, withoutEnlargement: true })
    .webp({ lossless: true, effort: 6 })
    .toFile(path.join(imagesDirectory, "cera-logo.webp"));
  console.log(
    `Logo: ${metadata.width}×${metadata.height} → ${trimmed.width}×${trimmed.height}, ${trimmed.size} bytes (lossless WebP).`,
  );
}

if (images.length) {
  console.log(
    `Photos: ${images.length} converted. ${originalBytes} → ${optimizedBytes} bytes (${((1 - optimizedBytes / originalBytes) * 100).toFixed(1)}% smaller).`,
  );
} else {
  console.log("All site photos already use WebP.");
}
