import type { ToolData } from "../tool.types";

const jpgToPng: ToolData = {
  slug: "jpg-to-png",

  mode: "convert",

  title: "JPG to PNG Converter",
  heroTitle: "JPG to PNG Converter",

  description:
    "Convert JPG images to PNG instantly. Fast, secure and browser-based.",

  heroDescription:
    "Convert JPG images into PNG format directly inside your browser while preserving image quality.",

 seoTitle:
  "JPG to PNG Converter - Convert JPG Images to PNG Online Free",

  seoDescription:
    "Convert JPG images to PNG online for free. Fast, secure, private and browser-based. No upload required.",

  keywords: [
    "jpg to png",
    "convert jpg to png",
    "jpg converter",
    "png converter",
    "image converter",
    "online image converter",
    "free jpg to png",
  ],

  category: "Image Converter",

  from: "JPG",
  to: "PNG",

  inputMime: "image/jpeg",
  outputMime: "image/png",

  outputExtension: "png",

  supportsQuality: false,

  icon: "🖼️",

  features: [
    {
      title: "100% Browser Based",
      description: "Everything runs locally inside your browser.",
    },
    {
      title: "Private",
      description: "Your images are never uploaded.",
    },
    {
      title: "Fast",
      description: "Convert images within seconds.",
    },
    {
      title: "Lossless Output",
      description: "PNG preserves image quality.",
    },
    {
      title: "Free",
      description: "Unlimited conversions with no registration.",
    },
    {
      title: "Easy",
      description: "Upload, convert and download.",
    },
  ],

  howTo: [
    {
      title: "Upload your JPG image",
      description: "Select the JPG file you want to convert.",
    },
    {
      title: "Convert",
      description: "Click Convert to start.",
    },
    {
      title: "Download",
      description: "Save the PNG image.",
    },
  ],

  faq: [
    {
      question: "Is this converter free?",
      answer: "Yes, completely free.",
    },
    {
      question: "Will the quality decrease?",
      answer: "No. PNG uses lossless compression.",
    },
    {
      question: "Are my images private?",
      answer: "Yes. Files never leave your browser.",
    },
  ],

  comparison: [
    {
      feature: "Compression",
      from: "Lossy",
      to: "Lossless",
    },
    {
      feature: "Transparency",
      from: "Not Supported",
      to: "Supported",
    },
    {
      feature: "Best For",
      from: "Photos",
      to: "Graphics",
    },
    {
      feature: "File Size",
      from: "Smaller",
      to: "Larger",
    },
  ],

  relatedTools: [
    {
      title: "PNG to JPG Converter",
      href: "/png-to-jpg",
    },
    {
      title: "JPG to WEBP Converter",
      href: "/jpg-to-webp",
    },
    {
      title: "WEBP to JPG Converter",
      href: "/webp-to-jpg",
    },
    {
      title: "Image Compressor",
      href: "/image-compressor",
    },
  ],

  content: {
    introduction:
      "JPG is one of the most widely used image formats thanks to its excellent compression and universal compatibility. However, JPG uses lossy compression and does not support transparent backgrounds. Our JPG to PNG Converter lets you convert JPG images into high-quality PNG files directly inside your browser without uploading your images.",

    whyConvert:
      "Converting JPG to PNG is useful when you need lossless image quality, transparent backgrounds, or better editing capabilities. PNG is ideal for graphics, logos, screenshots and images that require maximum quality.",

    whyChoose:
  "Unlike many online converters, this tool processes every image directly inside your browser. Your files are never uploaded, ensuring complete privacy, faster conversion speeds and unlimited free usage.",

    comparisonText:
      "JPG is optimized for photographs with smaller file sizes, while PNG uses lossless compression and supports transparent backgrounds. PNG is the preferred format for graphics, editing and images that require the highest possible quality.",

    privacy:
      "Every conversion happens entirely inside your browser. Your images never leave your device and are never uploaded to any server, giving you maximum privacy and security.",

    conclusion:
      "Upload your JPG image, convert it into PNG format instantly and download the result within seconds. Fast, secure, private and completely free.",
  },
};

export default jpgToPng;