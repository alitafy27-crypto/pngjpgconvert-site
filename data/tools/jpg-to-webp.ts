import type { ToolData } from "../tool.types";

const jpgToWebp: ToolData = {
  slug: "jpg-to-webp",

  mode: "convert",

  title: "JPG to WEBP Converter",
  heroTitle: "JPG to WEBP Converter",

  description:
    "Convert JPG images to WEBP instantly. Fast, secure and browser-based.",

  heroDescription:
    "Convert JPG images into modern WEBP format for better compression, faster loading and smaller file sizes directly inside your browser.",

  seoTitle:
  "JPG to WEBP Converter - Convert JPG Images to WEBP Online Free",

  seoDescription:
    "Convert JPG images to WEBP online for free. Reduce image size while keeping excellent quality. Fast, secure and browser-based.",

  keywords: [
    "jpg to webp",
    "convert jpg to webp",
    "webp converter",
    "jpg converter",
    "online image converter",
    "free jpg to webp",
    "compress jpg",
  ],

  category: "Image Converter",

  from: "JPG",
  to: "WEBP",

  inputMime: "image/jpeg",
  outputMime: "image/webp",

  outputExtension: "webp",

  supportsQuality: true,

  icon: "🖼️",

  features: [
    {
      title: "Smaller File Size",
      description: "WEBP usually creates much smaller files than JPG.",
    },
    {
      title: "Adjustable Quality",
      description: "Choose the quality that best fits your needs.",
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
      description: "Convert your images within seconds.",
    },
    {
      title: "Free",
      description: "Unlimited conversions with no registration.",
    },
  ],

  howTo: [
    {
      title: "Upload your JPG image",
      description: "Choose the JPG image you want to convert.",
    },
    {
      title: "Adjust quality",
      description: "Select your preferred WEBP quality.",
    },
    {
      title: "Convert",
      description: "Click Convert to start the conversion.",
    },
    {
      title: "Download",
      description: "Save the converted WEBP image.",
    },
  ],

  faq: [
    {
      question: "Is WEBP better than JPG?",
      answer:
        "Yes. WEBP usually provides better compression while maintaining excellent image quality.",
    },
    {
      question: "Can I choose the output quality?",
      answer:
        "Yes. You can adjust the WEBP quality before converting.",
    },
    {
      question: "Are my images uploaded?",
      answer:
        "No. Everything happens locally inside your browser.",
    },
  ],

  comparison: [
    {
      feature: "Compression",
      from: "Lossy",
      to: "Modern Compression",
    },
    {
      feature: "Transparency",
      from: "Not Supported",
      to: "Supported",
    },
    {
      feature: "File Size",
      from: "Small",
      to: "Smaller",
    },
    {
      feature: "Best For",
      from: "Photos",
      to: "Modern Websites",
    },
  ],

  relatedTools: [
    {
      title: "WEBP to JPG Converter",
      href: "/webp-to-jpg",
    },
    {
      title: "PNG to WEBP Converter",
      href: "/png-to-webp",
    },
    {
      title: "JPG to PNG Converter",
      href: "/jpg-to-png",
    },
    {
      title: "Image Compressor",
      href: "/image-compressor",
    },
  ],
  content: {
  introduction:
    "Convert JPG images into modern WEBP format to reduce file size without sacrificing quality.",

  whyConvert:
    "WEBP is ideal for websites because it creates much smaller images than JPG.",

  whyChoose:
    "Everything runs locally inside your browser for maximum privacy.",

  comparisonText:
    "JPG is widely supported while WEBP offers better compression and faster loading websites.",

  privacy:
    "Your files are processed only inside your browser.",

  conclusion:
    "Convert JPG images into WEBP in seconds with no uploads.",
},
};

export default jpgToWebp;