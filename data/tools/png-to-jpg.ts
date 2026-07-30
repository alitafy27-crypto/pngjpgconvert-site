import type { ToolData } from "../tool.types";

const pngToJpg: ToolData = {
  slug: "png-to-jpg",
  mode: "convert",
  title: "PNG to JPG Converter",
  heroTitle: "PNG to JPG Converter - Free Online Image Converter",

  description:
    "Convert PNG images to JPG instantly in your browser. Fast, secure, and 100% private with no uploads. Free online PNG to JPG converter.",

  heroDescription:
    "Convert PNG images into high-quality JPG files directly inside your browser. No uploads, no registration, and completely private. The best free PNG to JPG converter online.",

  seoTitle:
    "PNG to JPG Converter - Convert PNG Images to JPG Online Free | 100% Private",

  seoDescription:
    "Convert PNG images to JPG online for free. Fast, secure, and private browser-based PNG to JPG converter. No uploads, no registration, instant downloads.",

  keywords: [
    "png to jpg",
    "convert png to jpg",
    "png to jpg converter",
    "png converter",
    "jpg converter",
    "image converter",
    "free png to jpg",
    "online image converter",
    "png to jpg online",
    "png to jpg free",
    "convert png to jpg online",
    "png to jpg browser",
    "png to jpg no upload",
    "free image converter",
    "png to jpg high quality",
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
      title: "100% Private",
      description: "Your images are never uploaded to our servers.",
    },
    {
      title: "Fast Processing",
      description: "Convert PNG images to JPG within seconds.",
    },
    {
      title: "High Quality",
      description: "Keep excellent image quality with adjustable JPG quality.",
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
      title: "Upload your PNG image",
      description: "Select or drag and drop the PNG file you want to convert.",
    },
    {
      title: "Adjust JPG quality",
      description: "Choose the desired JPG quality level (1-100).",
    },
    {
      title: "Convert to JPG",
      description: "Click the Convert button to start the conversion.",
    },
    {
      title: "Download your JPG",
      description: "Save the converted JPG image to your device instantly.",
    },
  ],

  faq: [
    {
      question: "Is this PNG to JPG converter free?",
      answer: "Yes, it is completely free with no hidden charges or limits.",
    },
    {
      question: "Are my PNG images uploaded to your server?",
      answer: "No. Everything happens locally in your browser. Your images are never uploaded to any server.",
    },
    {
      question: "Can I convert large PNG images?",
      answer: "Yes, but very large images may require more memory and take longer to process.",
    },
    {
      question: "Will I lose image quality when converting PNG to JPG?",
      answer: "JPG uses lossy compression, which means some quality is lost. However, you can adjust the quality level to balance file size and image quality.",
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
      from: "Lossless",
      to: "Lossy",
    },
    {
      feature: "Transparency Support",
      from: "Supported",
      to: "Not Supported",
    },
    {
      feature: "Best For",
      from: "Graphics, Logos, Screenshots",
      to: "Photos, Web Images, Sharing",
    },
    {
      feature: "File Size",
      from: "Larger",
      to: "Smaller",
    },
    {
      feature: "Color Support",
      from: "Millions of colors + Alpha",
      to: "Millions of colors",
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
    {
      title: "PNG to AVIF Converter",
      href: "/png-to-avif",
    },
    {
      title: "Image Resizer",
      href: "/image-resizer",
    },
  ],

  content: {
    introduction:
      "PNG is one of the most popular image formats because it preserves image quality and supports transparent backgrounds. However, PNG files are often much larger than JPG files. This free PNG to JPG Converter allows you to convert PNG images into high-quality JPG files directly inside your browser without uploading your files. It's fast, secure, and completely private.",

    whyConvert:
      "Converting PNG to JPG reduces file size, making images easier to upload, share, and store. JPG is the preferred format for photographs, websites, email attachments, and social media because of its excellent compression and smaller file sizes. Smaller files mean faster loading times and better user experience.",

    whyChoose:
      "PNG JPG Convert performs every conversion directly inside your browser. Your images are never uploaded, giving you maximum privacy, faster processing, and unlimited free conversions. Unlike other online converters, we don't store, share, or access your files in any way. Your data stays on your device.",

    comparisonText:
      "PNG uses lossless compression and supports transparency, making it perfect for logos, graphics, and screenshots. JPG uses lossy compression to create much smaller files, making it ideal for photographs, web images, and sharing on social media. While PNG preserves every detail, JPG offers superior file size reduction for faster loading and easier sharing.",

    privacy:
      "Your privacy is our priority. Every conversion happens entirely inside your browser. No file is uploaded, stored, or shared with any server. Unlike other PNG to JPG converters that upload your images to their servers, we process everything locally. This means your images are 100% private and secure.",

    conclusion:
      "Upload your PNG image, choose the JPG quality you prefer, and download the converted file instantly. This PNG to JPG converter is fast, secure, free, and works on any modern browser. Start converting your PNG images to JPG now and enjoy smaller files without compromising on quality.",
  },
};

export default pngToJpg;