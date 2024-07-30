import sharp from "sharp";
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, "..", "src", "assets", "images");
const outputDir = path.join(__dirname, "..", "public", "images");

async function optimizeImages() {
  try {
    await fs.mkdir(outputDir, { recursive: true });

    const files = await fs.readdir(inputDir);

    for (const file of files) {
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(
        outputDir,
        file.replace(/\.[^/.]+$/, ".webp")
      );

      try {
        const info = await sharp(inputPath)
          .webp({ quality: 80 })
          .toFile(outputPath);

        console.log(`Optimized ${file}: ${info.size} bytes`);
      } catch (err) {
        console.error(`Error processing ${file}: ${err}`);
      }
    }
  } catch (err) {
    console.error("Error reading directory:", err);
  }
}

optimizeImages();
