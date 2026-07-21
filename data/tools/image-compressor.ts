import type { ToolData } from "../tool.types";

const imageCompressor: ToolData = {
  slug: "image-compressor",

  mode: "compress",

  title: "Image Compressor",
  heroTitle: "Compress Images Online",

  description:
    "Compress PNG, JPG, WEBP and AVIF images directly inside your browser.",

  heroDescription:
    "Reduce image file size while maintaining excellent quality. Fast, secure, private and completely browser-based.",

seoTitle:
  "Compress JPG, PNG & WEBP Images Online for Free",

  seoDescription:
    "Compress JPG, PNG, WEBP and AVIF images online for free. Reduce file size while keeping excellent quality. No upload required.",

  keywords: [
    "image compressor",
    "compress image",
    "compress jpg",
    "compress png",
    "compress webp",
    "reduce image size",
    "online image compressor",
    "free image compressor",
  ],

  category: "Image Tools",

  from: "Image",
  to: "Compressed Image",

  inputMime: "image/*",
  outputMime: "image/jpeg",

  outputExtension: "jpg",

  supportsQuality: true,

  icon: "🗜️",

  features: [
    {
      title: "Reduce File Size",
      description:
        "Shrink image size without noticeably reducing quality.",
    },
    {
      title: "Adjustable Quality",
      description:
        "Control the compression level to fit your needs.",
    },
    {
      title: "100% Browser Based",
      description:
        "Everything runs locally inside your browser.",
    },
    {
      title: "Private",
      description:
        "Your files are never uploaded.",
    },
    {
      title: "Fast Compression",
      description:
        "Compress large images in just a few seconds.",
    },
    {
      title: "Free",
      description:
        "Unlimited compression with no registration.",
    },
  ],

  howTo: [
    {
      title: "Upload your image",
      description:
        "Choose the image you want to compress.",
    },
    {
      title: "Adjust quality",
      description:
        "Select the desired compression level.",
    },
    {
      title: "Compress",
      description:
        "Click Compress to optimize the image.",
    },
    {
      title: "Download",
      description:
        "Save the compressed image.",
    },
  ],

  faq: [
    {
      question: "Will image quality decrease?",
      answer:
        "You can control the quality level. Higher quality keeps more details while lower quality creates smaller files.",
    },
    {
      question: "Are my images uploaded?",
      answer:
        "No. Everything happens locally inside your browser.",
    },
    {
      question: "Which image formats are supported?",
      answer:
        "You can compress JPG, PNG, WEBP and most common image formats.",
    },
  ],

  comparison: [
    {
      feature: "Image Quality",
      from: "Original",
      to: "Adjustable",
    },
    {
      feature: "File Size",
      from: "Larger",
      to: "Smaller",
    },
    {
      feature: "Processing",
      from: "Original File",
      to: "Optimized File",
    },
    {
      feature: "Privacy",
      from: "Local",
      to: "Local",
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
      title: "Resize Image",
      href: "/resize-image",
    },
    {
      title: "Crop Image",
      href: "/crop-image",
    },
  ],

  content: {
  introduction:
    "Reduce image file size directly inside your browser without compromising quality.",

  whyConvert:
    "Compressed images upload faster, load faster and consume less storage.",

  whyChoose:
    "Private browser-based compression with adjustable quality settings.",

  comparisonText:
    "Compression reduces file size while maintaining the best possible visual quality.",

  privacy:
    "No image is uploaded. Every compression happens locally.",

  conclusion:
    "Compress your images in seconds and download the optimized version instantly.",
},
};

export default imageCompressor;