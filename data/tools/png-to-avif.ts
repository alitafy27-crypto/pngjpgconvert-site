import type { ToolData } from "../tool.types";

const pngToAvif: ToolData = {
  slug: "png-to-avif",

  mode: "convert",

  title: "PNG to AVIF Converter",
  heroTitle: "Convert PNG to AVIF Online",

  description:
    "Convert PNG images to AVIF instantly. Fast, secure and browser-based.",

  heroDescription:
    "Convert PNG images into AVIF format for maximum compression while maintaining excellent image quality. No uploads required.",

  seoTitle:
    "PNG to AVIF Converter - Convert PNG Images to AVIF Online Free",

  seoDescription:
    "Convert PNG images to AVIF online for free. Fast, secure and browser-based image conversion with no uploads required.",

  keywords: [
    "png to avif",
    "convert png to avif",
    "png converter",
    "avif converter",
    "online image converter",
    "free png to avif",
  ],

  category: "Image Converter",

  from: "PNG",
  to: "AVIF",

  inputMime: "image/png",
  outputMime: "image/avif",

  outputExtension: "avif",

  supportsQuality: true,

  icon: "🖼️",

  features: [
    {
      title: "Maximum Compression",
      description: "AVIF provides outstanding compression efficiency.",
    },
    {
      title: "High Quality",
      description: "Excellent image quality with smaller files.",
    },
    {
      title: "Private",
      description: "Everything runs locally in your browser.",
    },
    {
      title: "Fast",
      description: "Convert images in seconds.",
    },
  ],

  howTo: [
    {
      title: "Upload PNG",
      description: "Choose your PNG image.",
    },
    {
      title: "Adjust Quality",
      description: "Select your preferred AVIF quality.",
    },
    {
      title: "Convert",
      description: "Generate the AVIF image.",
    },
    {
      title: "Download",
      description: "Save your AVIF image.",
    },
  ],

  faq: [
    {
      question: "Why use AVIF?",
      answer:
        "AVIF usually produces much smaller files than PNG while maintaining excellent image quality.",
    },
  ],

  comparison: [
    {
      feature: "Compression",
      from: "Lossless",
      to: "Ultra Efficient",
    },
  ],

  content: {
    introduction:
      "Convert PNG images into AVIF format directly inside your browser without uploading your files.",

    whyConvert:
      "AVIF delivers excellent image quality while significantly reducing file size, making it perfect for websites and modern applications.",

    whyChoose:
      "PNG JPG Convert performs every conversion locally inside your browser. Your images never leave your device, ensuring complete privacy and fast processing.",

    comparisonText:
      "PNG uses lossless compression, while AVIF provides much better compression with excellent visual quality.",

    privacy:
      "All conversions happen locally inside your browser. Your files are never uploaded or stored.",

    conclusion:
      "Upload your PNG image, convert it to AVIF in seconds and download the optimized result instantly.",
  },

  relatedTools: [
    {
      title: "AVIF to PNG Converter",
      href: "/avif-to-png",
    },
  ],
};

export default pngToAvif;