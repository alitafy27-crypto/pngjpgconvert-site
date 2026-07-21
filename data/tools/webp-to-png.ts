import type { ToolData } from "../tool.types";

const webpToPng: ToolData = {
  slug: "webp-to-png",

  mode: "convert",

  title: "WEBP to PNG Converter",
  heroTitle: "WEBP to PNG Converter",

  description:
    "Convert WEBP images to PNG instantly. Fast, secure and browser-based.",

  heroDescription:
    "Convert WEBP images into PNG format while preserving image quality and transparency directly inside your browser.",

seoTitle:
  "WEBP to PNG Converter - Convert WEBP Images to PNG Online Free",

  seoDescription:
    "Convert WEBP images to PNG online for free. Fast, secure, private and browser-based. Preserve transparency and image quality.",

  keywords: [
    "webp to png",
    "convert webp to png",
    "webp converter",
    "png converter",
    "online image converter",
    "free webp to png",
    "image converter",
  ],

  category: "Image Converter",

  from: "WEBP",
  to: "PNG",

  inputMime: "image/webp",
  outputMime: "image/png",

  outputExtension: "png",

  supportsQuality: false,

  icon: "🖼️",

  features: [
    {
      title: "Lossless Output",
      description: "PNG preserves the original image quality.",
    },
    {
      title: "Transparency Support",
      description: "Keep transparent backgrounds after conversion.",
    },
    {
      title: "100% Browser Based",
      description: "Everything runs locally inside your browser.",
    },
    {
      title: "Private",
      description: "Your files never leave your browser.",
    },
    {
      title: "Fast",
      description: "Convert images within seconds.",
    },
    {
      title: "Free",
      description: "Unlimited conversions with no registration.",
    },
  ],

  howTo: [
    {
      title: "Upload your WEBP image",
      description: "Select the WEBP image you want to convert.",
    },
    {
      title: "Convert",
      description: "Click Convert to start the conversion.",
    },
    {
      title: "Download",
      description: "Save the converted PNG image.",
    },
  ],

  faq: [
    {
      question: "Does PNG support transparency?",
      answer: "Yes. PNG fully supports transparent backgrounds.",
    },
    {
      question: "Will image quality decrease?",
      answer: "No. PNG uses lossless compression.",
    },
    {
      question: "Are my images uploaded?",
      answer: "No. Everything happens locally inside your browser.",
    },
  ],

  comparison: [
    {
      feature: "Compression",
      from: "Modern Compression",
      to: "Lossless",
    },
    {
      feature: "Transparency",
      from: "Supported",
      to: "Supported",
    },
    {
      feature: "File Size",
      from: "Smaller",
      to: "Larger",
    },
    {
      feature: "Best For",
      from: "Web Images",
      to: "Editing & Graphics",
    },
  ],

  relatedTools: [
    {
      title: "PNG to WEBP Converter",
      href: "/png-to-webp",
    },
    {
      title: "WEBP to JPG Converter",
      href: "/webp-to-jpg",
    },
    {
      title: "PNG to JPG Converter",
      href: "/png-to-jpg",
    },
    {
      title: "Image Compressor",
      href: "/image-compressor",
    },
  ],
  content: {
  introduction:
    "Convert WEBP images into PNG format quickly and securely inside your browser.",

  whyConvert:
    "PNG offers better editing compatibility and supports transparency across many applications.",

  whyChoose:
    "No uploads. No registration. Unlimited browser-based conversions.",

  comparisonText:
    "WEBP focuses on modern compression while PNG focuses on lossless quality and transparency.",

  privacy:
    "All files remain on your device during conversion.",

  conclusion:
    "Upload your WEBP image and download the PNG version instantly.",
},
};

export default webpToPng;