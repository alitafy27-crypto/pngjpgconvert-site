import type { ToolData } from "./tool.types";
import pdfMerge from "./tools/pdf-merge";
import pngToJpg from "./tools/png-to-jpg";
import jpgToPng from "./tools/jpg-to-png";

import pngToWebp from "./tools/png-to-webp";
import webpToPng from "./tools/webp-to-png";

import jpgToWebp from "./tools/jpg-to-webp";
import webpToJpg from "./tools/webp-to-jpg";

import pngToAvif from "./tools/png-to-avif";
import avifToPng from "./tools/avif-to-png";

import jpgToAvif from "./tools/jpg-to-avif";
import avifToJpg from "./tools/avif-to-jpg";

import webpToAvif from "./tools/webp-to-avif";
import avifToWebp from "./tools/avif-to-webp";

import imageCompressor from "./tools/image-compressor";
import imageResizer from "./tools/image-resizer";
import imageCrop from "./tools/image-crop";
import imageRotate from "./tools/image-rotate";
import imageFlip from "./tools/image-flip";
import imageWatermark from "./tools/image-watermark";

import imageToPdf from "./tools/image-to-pdf";
import pdfToImage from "./tools/pdf-to-image";

export const tools: Record<string, ToolData> = {
  "png-to-jpg": pngToJpg,
  "jpg-to-png": jpgToPng,

  "png-to-webp": pngToWebp,
  "webp-to-png": webpToPng,

  "jpg-to-webp": jpgToWebp,
  "webp-to-jpg": webpToJpg,

  "png-to-avif": pngToAvif,
  "avif-to-png": avifToPng,

  "jpg-to-avif": jpgToAvif,
  "avif-to-jpg": avifToJpg,

  "webp-to-avif": webpToAvif,
  "avif-to-webp": avifToWebp,

  "image-compressor": imageCompressor,
  "image-resizer": imageResizer,
  "image-crop": imageCrop,
  "image-rotate": imageRotate,
  "image-flip": imageFlip,
  "image-watermark": imageWatermark,

  "image-to-pdf": imageToPdf,
  "pdf-to-image": pdfToImage,
  "pdf-merge": pdfMerge,
};

export const toolsList = Object.values(tools);

export function getTool(
  slug: string
): ToolData | undefined {
  return tools[slug];
}