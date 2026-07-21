import type { ToolData } from "../tool.types";

const pngToJpg: ToolData = {
  slug: "png-to-jpg",

  mode: "convert",

  title: "PNG to JPG Converter",
  heroTitle: "PNG to JPG Converter",

  description:
    "Convert PNG images to JPG instantly. Fast, secure and browser-based.",

  heroDescription:
    "Convert PNG images into high-quality JPG files directly inside your browser. No uploads, no registration and completely private.",

 seoTitle:
  "PNG to JPG Converter - Convert PNG Images to JPG Online Free",

  seoDescription:
    "Convert PNG images to JPG online for free. Fast, secure, private and browser-based. No upload required.",

  keywords: [
    "png to jpg",
    "convert png to jpg",
    "png converter",
    "jpg converter",
    "image converter",
    "free png to jpg",
    "online image converter",
  ],

  category: "Image Converter",

  from: "PNG",
  to: "JPG",

  inputMime: "image/png",
  outputMime: "image/jpeg",

  outputExtension: "jpg",

  supportsQuality: true,

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
      title: "High Quality",
      description: "Keep excellent image quality.",
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
      title: "Upload your PNG image",
      description: "Select the PNG file you want to convert.",
    },
    {
      title: "Adjust quality",
      description: "Choose the desired JPG quality.",
    },
    {
      title: "Convert",
      description: "Click Convert to start.",
    },
    {
      title: "Download",
      description: "Save the converted JPG image.",
    },
  ],

  faq: [
    {
      question: "Is this converter free?",
      answer: "Yes, it is completely free.",
    },
    {
      question: "Are my files uploaded?",
      answer: "No. Everything happens locally in your browser.",
    },
    {
      question: "Can I convert large images?",
      answer: "Yes, depending on your browser memory.",
    },
  ],

  comparison: [
    {
      feature: "Compression",
      from: "Lossless",
      to: "Lossy",
    },
    {
      feature: "Transparency",
      from: "Supported",
      to: "Not Supported",
    },
    {
      feature: "Best For",
      from: "Graphics",
      to: "Photos",
    },
    {
      feature: "File Size",
      from: "Larger",
      to: "Smaller",
    },
  ],

  relatedTools: [
    {
      title: "JPG to PNG Converter",
      href: "/jpg-to-png",
    },
    {
      title: "PNG to WEBP Converter",
      href: "/png-to-webp",
    },
    {
      title: "WEBP to PNG Converter",
      href: "/webp-to-png",
    },
    {
      title: "Image Compressor",
      href: "/image-compressor",
    },
  ],

  content: {
    introduction:
      "PNG is one of the most popular image formats because it preserves image quality and supports transparent backgrounds. However, PNG files are often much larger than JPG files. This free PNG to JPG Converter allows you to convert PNG images into high-quality JPG files directly inside your browser without uploading your files.",

    whyConvert:
      "Converting PNG to JPG reduces file size, making images easier to upload, share and store. JPG is the preferred format for photographs, websites, email attachments and social media because of its excellent compression.",

    whyChoose:
  "PNG JPG Convert performs every conversion directly inside your browser. Your images are never uploaded, giving you maximum privacy, faster processing and unlimited free conversions.",
    comparisonText:
      "PNG uses lossless compression and supports transparency, making it perfect for logos, graphics and screenshots. JPG uses lossy compression to create much smaller files, making it ideal for photographs and web images.",

    privacy:
      "Your privacy is our priority. Every conversion happens entirely inside your browser. No file is uploaded, stored or shared with any server.",

    conclusion:
      "Upload your PNG image, choose the JPG quality you prefer and download the converted file instantly. Fast, secure, free and works on any modern browser.",
  },
};

export default pngToJpg;