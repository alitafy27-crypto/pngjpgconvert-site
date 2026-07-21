import type { ToolData } from "../tool.types";

const avifToPng: ToolData = {
  slug: "avif-to-png",

  mode: "convert",

  title: "AVIF to PNG Converter",
  heroTitle: "Convert AVIF to PNG Online",

  description:
    "Convert AVIF images to PNG instantly. Fast, secure and browser-based.",

  heroDescription:
    "Convert AVIF images into PNG format while preserving image quality. No uploads required.",

  seoTitle:
    "AVIF to PNG Converter - Convert AVIF Images to PNG Online Free",

  seoDescription:
    "Convert AVIF images to PNG online for free. Fast, secure and browser-based image conversion with no uploads required.",

  keywords: [
    "avif to png",
    "convert avif to png",
    "avif converter",
    "png converter",
    "online image converter",
    "free avif to png",
  ],

  category: "Image Converter",

  from: "AVIF",
  to: "PNG",

  inputMime: "image/avif",
  outputMime: "image/png",

  outputExtension: "png",

  supportsQuality: false,

  icon: "🖼️",

  features: [
    {
      title: "Lossless Output",
      description: "PNG preserves image quality.",
    },
    {
      title: "Browser Based",
      description: "Everything happens locally.",
    },
    {
      title: "Private",
      description: "Nothing is uploaded.",
    },
    {
      title: "Fast",
      description: "Instant conversion.",
    },
  ],

  howTo: [
    {
      title: "Upload AVIF",
      description: "Choose your AVIF image.",
    },
    {
      title: "Convert",
      description: "Generate PNG.",
    },
    {
      title: "Download",
      description: "Save PNG.",
    },
  ],

  faq: [
    {
      question: "Does PNG preserve quality?",
      answer: "Yes. PNG uses lossless compression, preserving image quality.",
    },
  ],

  comparison: [
    {
      feature: "Compression",
      from: "Modern",
      to: "Lossless",
    },
  ],

  content: {
    introduction:
      "Convert AVIF images into PNG format directly inside your browser without uploading your files.",

    whyConvert:
      "PNG is ideal when you need lossless image quality, transparency support and wide compatibility.",

    whyChoose:
      "PNG JPG Convert performs every conversion locally inside your browser. Your images never leave your device, ensuring complete privacy and fast processing.",

    comparisonText:
      "AVIF provides excellent compression, while PNG focuses on preserving every image detail without quality loss.",

    privacy:
      "All image conversions happen locally in your browser. Your files are never uploaded or stored.",

    conclusion:
      "Upload your AVIF image, convert it to PNG in seconds and download the result instantly.",
  },

  relatedTools: [
    {
      title: "PNG to AVIF Converter",
      href: "/png-to-avif",
    },
  ],
};

export default avifToPng;