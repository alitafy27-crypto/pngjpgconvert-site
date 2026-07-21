import type { ToolData } from "../tool.types";

const avifToWebp: ToolData = {
  slug: "avif-to-webp",

  mode: "convert",

  title: "AVIF to WEBP Converter",
  heroTitle: "Convert AVIF to WEBP Online",

  description:
    "Convert AVIF images to WEBP instantly. Fast, secure and browser-based.",

  heroDescription:
    "Convert AVIF images into WEBP format for better compatibility and excellent compression. No uploads required.",

  seoTitle:
    "AVIF to WEBP Converter - Convert AVIF Images to WEBP Online Free",

  seoDescription:
    "Convert AVIF images to WEBP online for free. Fast, secure and browser-based image conversion with no uploads required.",

  keywords: [
    "avif to webp",
    "convert avif to webp",
    "avif converter",
    "webp converter",
    "online image converter",
    "free avif to webp",
  ],

  category: "Image Converter",

  from: "AVIF",
  to: "WEBP",

  inputMime: "image/avif",
  outputMime: "image/webp",

  outputExtension: "webp",

  supportsQuality: true,

  icon: "🖼️",

  features: [
    {
      title: "Excellent Compression",
      description: "WEBP offers small file sizes with high quality.",
    },
    {
      title: "Wide Browser Support",
      description: "WEBP is supported by all major browsers.",
    },
    {
      title: "Private",
      description: "No files are uploaded to any server.",
    },
    {
      title: "Fast",
      description: "Conversion happens instantly in your browser.",
    },
  ],

  howTo: [
    {
      title: "Upload AVIF",
      description: "Choose your AVIF image.",
    },
    {
      title: "Adjust Quality",
      description: "Select the desired WEBP quality.",
    },
    {
      title: "Convert",
      description: "Generate your WEBP image.",
    },
    {
      title: "Download",
      description: "Save the converted WEBP file.",
    },
  ],

  faq: [
    {
      question: "Why convert AVIF to WEBP?",
      answer:
        "WEBP is supported by more browsers and applications while still providing excellent image compression.",
    },
  ],

  comparison: [
    {
      feature: "Compatibility",
      from: "Modern",
      to: "Very Wide",
    },
  ],

  content: {
    introduction:
      "Convert AVIF images into WEBP format directly inside your browser without uploading your files.",

    whyConvert:
      "WEBP offers excellent compression, faster loading times and broad compatibility across modern browsers and websites.",

    whyChoose:
      "PNG JPG Convert performs every conversion locally inside your browser. Your images never leave your device, ensuring complete privacy and fast processing.",

    comparisonText:
      "AVIF provides outstanding compression efficiency, while WEBP offers a better balance between compression, quality and browser compatibility.",

    privacy:
      "All conversions happen locally in your browser. Your files are never uploaded or stored.",

    conclusion:
      "Upload your AVIF image, convert it to WEBP in seconds and download the optimized result instantly.",
  },

  relatedTools: [
    {
      title: "WEBP to AVIF Converter",
      href: "/webp-to-avif",
    },
  ],
};

export default avifToWebp;