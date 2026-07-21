import type { ToolContent } from "./tool.types";

export function createContent(
  from: string,
  to: string
): ToolContent {
  return {
    introduction: `${from} is one of the most widely used image formats. Our converter allows you to convert ${from} images into ${to} directly inside your browser without uploading your files. Everything is processed locally on your device for maximum privacy and speed.`,

    whyConvert: `Converting ${from} to ${to} can improve compatibility, reduce file size or preserve image quality depending on your needs. This tool provides a simple way to get professional results in seconds.`,

    whyChoose:
      "PNG JPG Convert performs every conversion directly inside your browser. Your images are never uploaded to a server, ensuring complete privacy, unlimited usage and fast processing.",

    comparisonText: `${from} and ${to} are designed for different purposes. Choosing the right format depends on whether you need smaller file sizes, better compatibility or higher image quality.`,

    privacy:
      "Every conversion happens locally inside your browser. Your files remain on your device and are never stored, uploaded or shared with anyone.",

    conclusion: `Upload your ${from} file, convert it into ${to} instantly and download the result in seconds. PNG JPG Convert is fast, secure and completely free.`,
  };
}