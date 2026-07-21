import type { ToolData } from "../tool.types";

const pngToWebp: ToolData = {
  slug: "png-to-webp",

  mode: "convert",

  title: "PNG to WEBP Converter",
  heroTitle: "PNG to WEBP Converter",

  description:
    "Convert PNG images to WEBP instantly. Fast, secure and browser-based.",

  heroDescription:
    "Convert PNG images into modern WEBP format directly inside your browser for smaller file sizes while maintaining excellent image quality.",

  seoTitle:
  "PNG to WEBP Converter - Convert PNG Images to WEBP Online Free",

  seoDescription:
    "Convert PNG images to WEBP online for free. Reduce file size while preserving quality. Fast, private and browser-based.",

  keywords: [
    "png to webp",
    "convert png to webp",
    "webp converter",
    "png converter",
    "free webp converter",
    "online image converter",
    "compress png",
  ],

  category: "Image Converter",

  from: "PNG",
  to: "WEBP",

  inputMime: "image/png",
  outputMime: "image/webp",

  outputExtension: "webp",

  supportsQuality: true,

  icon: "🖼️",

  features: [
    {
      title: "Smaller File Size",
      description: "WEBP reduces image size while maintaining quality.",
    },
    {
      title: "100% Browser Based",
      description: "Everything runs locally inside your browser.",
    },
    {
      title: "Private",
      description: "Your images are never uploaded.",
    },
    {
      title: "Fast Conversion",
      description: "Convert images within seconds.",
    },
    {
      title: "High Quality",
      description: "Keep excellent image quality.",
    },
    {
      title: "Free",
      description: "Unlimited conversions with no registration.",
    },
  ],

  howTo: [
    {
      title: "Upload your PNG image",
      description: "Select the PNG image you want to convert.",
    },
    {
      title: "Adjust quality",
      description: "Choose your preferred WEBP quality.",
    },
    {
      title: "Convert",
      description: "Click Convert to start.",
    },
    {
      title: "Download",
      description: "Save the converted WEBP image.",
    },
  ],

  faq: [
    {
      question: "Is WEBP smaller than PNG?",
      answer:
        "Yes. WEBP usually produces much smaller files while keeping similar image quality.",
    },
    {
      question: "Are my images uploaded?",
      answer:
        "No. Everything happens locally inside your browser.",
    },
    {
      question: "Can I control the quality?",
      answer:
        "Yes. You can adjust the output quality before converting.",
    },
  ],

  comparison: [
    {
      feature: "Compression",
      from: "Lossless",
      to: "Modern Compression",
    },
    {
      feature: "Transparency",
      from: "Supported",
      to: "Supported",
    },
    {
      feature: "File Size",
      from: "Larger",
      to: "Smaller",
    },
    {
      feature: "Best For",
      from: "Graphics",
      to: "Modern Websites",
    },
  ],

  relatedTools: [
    {
      title: "WEBP to PNG Converter",
      href: "/webp-to-png",
    },
    {
      title: "PNG to JPG Converter",
      href: "/png-to-jpg",
    },
    {
      title: "JPG to WEBP Converter",
      href: "/jpg-to-webp",
    },
    {
      title: "Image Compressor",
      href: "/image-compressor",
    },
  ],
  content: {
  introduction:
    "WEBP is a modern image format developed to reduce file size while maintaining excellent quality. Convert PNG images into WEBP directly inside your browser.",

  whyConvert:
    "WEBP images are much smaller than PNG files, making websites load faster and reducing storage usage.",

  whyChoose:
    "All conversions happen locally inside your browser. No uploads, no waiting and complete privacy.",

  comparisonText:
    "PNG preserves every pixel and supports transparency. WEBP provides similar quality while significantly reducing file size.",

  privacy:
    "Your images never leave your computer. Everything is processed securely inside your browser.",

  conclusion:
    "Convert PNG images into WEBP instantly for faster websites and smaller image files.",
},
};

export default pngToWebp;