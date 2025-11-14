import sharp from "sharp";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, "..", "public", "icons");
const outputDir = path.join(__dirname, "..", "public", "icons_white");
const targetColor = { r: 0, g: 141, b: 77, a: 255 };
const replaceColor = { r: 255, g: 255, b: 255, a: 255 };

async function recolorImage(filePath, outputFilePath) {
  try {
    const { data, info } = await sharp(filePath)
      .raw()
      .toBuffer({ resolveWithObject: true });
    const { width, height, channels } = info;

    for (let i = 0; i < data.length; i += channels) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const a = channels === 4 ? data[i + 3] : 255;

      // Check if the pixel is a shade of green and not too dark
      if (g > r && g > b && g > 60 && a > 0) {
        data[i] = 255;
        data[i + 1] = 255;
        data[i + 2] = 255;

        if (channels === 4) {
          data[i + 3] = a; // Preserve original alpha
        }
      }
    }

    await sharp(data, { raw: { width, height, channels } }).toFile(
      outputFilePath
    );
    console.log(`Processed ${path.basename(filePath)}`);
  } catch (error) {
    console.error(`Error processing ${path.basename(filePath)}:`, error);
  }
}

async function main() {
  try {
    await fs.mkdir(outputDir, { recursive: true });
    const files = await fs.readdir(inputDir);

    for (const file of files) {
      if (path.extname(file).toLowerCase() === ".png") {
        const inputFilePath = path.join(inputDir, file);
        const outputFilePath = path.join(outputDir, file);
        await recolorImage(inputFilePath, outputFilePath);
      }
    }
    console.log("All icons have been processed.");
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

main();
