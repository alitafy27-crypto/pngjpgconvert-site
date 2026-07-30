import type { ToolData } from "../tool.types";

const jpgToPng: ToolData = {
  slug: "jpg-to-png",
  mode: "convert",
  title: "JPG to PNG Converter",
  heroTitle: "JPG to PNG Converter - Free Online Image Converter",

  description:
    "Convert JPG images to PNG instantly in your browser. Fast, secure, and 100% private with no uploads. Free online JPG to PNG converter.",

  heroDescription:
    "Convert JPG images into high-quality PNG format directly inside your browser. No uploads, no registration, and completely private. The best free JPG to PNG converter online.",

  seoTitle:
    "JPG to PNG Converter - Convert JPG Images to PNG Online Free | 100% Private",

  seoDescription:
    "Convert JPG images to PNG online for free. Fast, secure, and private browser-based JPG to PNG converter. No uploads, no registration, instant downloads.",

  keywords: [
    "jpg to png",
    "convert jpg to png",
    "jpg to png converter",
    "jpg converter",
    "png converter",
    "image converter",
    "free jpg to png",
    "online image converter",
    "jpg to png online",
    "jpg to png free",
    "convert jpg to png online",
    "jpg to png browser",
    "jpg to png no upload",
    "free image converter",
    "jpg to png lossless",
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
      title: "100% Private",
      description: "Your images are never uploaded to our servers.",
    },
    {
      title: "Fast Processing",
      description: "Convert JPG images to PNG within seconds.",
    },
    {
      title: "Lossless Output",
      description: "PNG preserves every detail with lossless compression.",
    },
    {
      title: "Free Forever",
      description: "Unlimited conversions with no registration required.",
    },
    {
      title: "Easy to Use",
      description: "Upload, convert, and download in just a few clicks.",
    },
  ],

  howTo: [
    {
      title: "Upload your JPG image",
      description: "Select or drag and drop the JPG file you want to convert.",
    },
    {
      title: "Convert to PNG",
      description: "Click the Convert button to start the conversion.",
    },
    {
      title: "Download your PNG",
      description: "Save the converted PNG image to your device instantly.",
    },
  ],

  faq: [
    {
      question: "Is this JPG to PNG converter free?",
      answer: "Yes, it is completely free with no hidden charges or limits.",
    },
    {
      question: "Will I lose image quality when converting JPG to PNG?",
      answer: "No. PNG uses lossless compression, so your image quality is fully preserved. However, JPG is already a lossy format, so the original quality from the JPG file is maintained.",
    },
    {
      question: "Are my JPG images uploaded to your server?",
      answer: "No. Everything happens locally in your browser. Your images are never uploaded to any server.",
    },
    {
      question: "Why should I convert JPG to PNG?",
      answer: "PNG supports transparent backgrounds and lossless compression, making it ideal for graphics, logos, and images that require editing or high quality.",
    },
    {
      question: "Does this work on mobile devices?",
      answer: "Yes, the converter works on desktop, tablet, and mobile browsers.",
    },
    {
      question: "Do I need to register or create an account?",
      answer: "No registration or account is required. You can convert images instantly.",
    },
  ],

  comparison: [
    {
      feature: "Compression Type",
      from: "Lossy",
      to: "Lossless",
    },
    {
      feature: "Transparency Support",
      from: "Not Supported",
      to: "Supported",
    },
    {
      feature: "Best For",
      from: "Photos, Web Images",
      to: "Graphics, Logos, Screenshots",
    },
    {
      feature: "File Size",
      from: "Smaller",
      to: "Larger",
    },
    {
      feature: "Color Support",
      from: "Millions of colors",
      to: "Millions of colors + Alpha",
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
    {
      title: "PNG to WEBP Converter",
      href: "/png-to-webp",
    },
    {
      title: "Image Resizer",
      href: "/image-resizer",
    },
  ],

  content: {
    introduction:
      "JPG is one of the most widely used image formats thanks to its excellent compression and universal compatibility. However, JPG uses lossy compression and does not support transparent backgrounds. Our JPG to PNG Converter lets you convert JPG images into high-quality PNG files directly inside your browser without uploading your images. It's fast, secure, and completely private.",

    whyConvert:
      "Converting JPG to PNG is useful when you need lossless image quality, transparent backgrounds, or better editing capabilities. PNG is ideal for graphics, logos, screenshots, and images that require maximum quality. Unlike JPG, PNG preserves every detail and supports alpha channels for transparent backgrounds.",

    whyChoose:
      "Unlike many online converters, this tool processes every image directly inside your browser. Your files are never uploaded, ensuring complete privacy, faster conversion speeds, and unlimited free usage. No registration, no hidden fees, no limits.",

    comparisonText:
      "JPG is optimized for photographs with smaller file sizes, while PNG uses lossless compression and supports transparent backgrounds. PNG is the preferred format for graphics, editing, and images that require the highest possible quality. While JPG files are smaller, PNG offers superior quality and editing flexibility.",

    privacy:
      "Every conversion happens entirely inside your browser. Your images never leave your device and are never uploaded to any server, giving you maximum privacy and security. Unlike other online converters that store your files, we process everything locally.",

    conclusion:
      "Upload your JPG image, convert it into PNG format instantly, and download the result within seconds. Fast, secure, private, and completely free. Start converting your JPG images to PNG now for better quality and transparency support.",
  },
};

export default jpgToPng;