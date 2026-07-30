import type { ToolData } from "../tool.types";

const imageCrop: ToolData = {
  slug: "image-crop",
  mode: "crop",
  title: "Image Crop Tool",
  heroTitle: "Image Crop Tool - Free Online Image Cropper",

  description:
    "Crop images instantly in your browser. Remove unwanted areas with precision. Free, secure, and 100% private with no uploads.",

  heroDescription:
    "Crop any image without uploading it. Fast, secure, and completely private. No uploads, no registration, and completely private. The best free image crop tool online.",

  seoTitle:
    "Image Crop Tool - Crop JPG, PNG, WEBP & AVIF Online Free | 100% Private",

  seoDescription:
    "Crop JPG, PNG, WEBP and AVIF images online for free. Remove unwanted areas with precision. Fast, secure, and private browser-based image crop tool. No uploads, instant downloads.",

  keywords: [
    "crop image",
    "image crop tool",
    "online crop image",
    "crop jpg",
    "crop png",
    "crop webp",
    "crop avif",
    "free image cropper",
    "crop photo",
    "image cropping",
    "crop image online",
    "crop image free",
    "browser image cropper",
    "free image crop",
    "photo cropper",
    "image trimmer",
  ],

  category: "Image Tools",
  from: "Image",
  to: "Cropped Image",
  inputMime: "image/*",
  outputMime: "image/jpeg",
  outputExtension: "jpg",
  supportsQuality: true,
  icon: "✂️",

  features: [
    {
      title: "Precision Cropping",
      description: "Select exactly the area you want to keep with precision.",
    },
    {
      title: "Custom Selection",
      description: "Choose any area of your image to crop.",
    },
    {
      title: "Preserve Quality",
      description: "Crop images while maintaining excellent quality.",
    },
    {
      title: "100% Browser Based",
      description: "Everything runs locally inside your browser.",
    },
    {
      title: "100% Private",
      description: "Your images are never uploaded to our servers.",
    },
    {
      title: "Free Forever",
      description: "Unlimited cropping with no registration required.",
    },
  ],

  howTo: [
    {
      title: "Upload your image",
      description: "Select or drag and drop the image you want to crop.",
    },
    {
      title: "Select crop area",
      description: "Click and drag to select the area you want to keep.",
    },
    {
      title: "Crop image",
      description: "Click the Crop button to remove unwanted areas.",
    },
    {
      title: "Download cropped image",
      description: "Save the cropped image to your device instantly.",
    },
  ],

  faq: [
    {
      question: "Is this image crop tool free?",
      answer: "Yes, it is completely free with no hidden charges or limits. You can crop unlimited images.",
    },
    {
      question: "Will image quality decrease when cropping?",
      answer: "No. Cropping only removes unwanted areas and preserves the quality of the remaining image.",
    },
    {
      question: "Are my images uploaded to your server?",
      answer: "No. Everything happens locally inside your browser. Your images are never uploaded to any server.",
    },
    {
      question: "Which image formats are supported?",
      answer: "You can crop JPG, PNG, WEBP, AVIF, and most common image formats directly in your browser.",
    },
    {
      question: "Why should I crop my images?",
      answer: "Cropping helps remove unwanted areas, improve composition, focus on important subjects, and prepare images for websites, documents, and social media.",
    },
    {
      question: "Does this work on mobile devices?",
      answer: "Yes, the image crop tool works on desktop, tablet, and mobile browsers.",
    },
  ],

  comparison: [
    {
      feature: "Image Area",
      from: "Full Image",
      to: "Selected Area Only",
    },
    {
      feature: "Composition",
      from: "Original",
      to: "Improved (Custom)",
    },
    {
      feature: "File Size",
      from: "Original",
      to: "Reduced (Smaller)",
    },
    {
      feature: "Best For",
      from: "Original Use",
      to: "Focusing, Removing Unwanted Areas",
    },
    {
      feature: "Privacy",
      from: "Local",
      to: "Local (No Uploads)",
    },
  ],

  relatedTools: [
    {
      title: "Image Resizer",
      href: "/image-resizer",
    },
    {
      title: "Image Compressor",
      href: "/image-compressor",
    },
    {
      title: "Rotate Image",
      href: "/image-rotate",
    },
    {
      title: "Flip Image",
      href: "/image-flip",
    },
    {
      title: "PNG to JPG Converter",
      href: "/png-to-jpg",
    },
    {
      title: "Image Watermark",
      href: "/image-watermark",
    },
  ],

  content: {
    introduction:
      "Crop images directly inside your browser without uploading your files. This free image crop tool allows you to remove unwanted areas, improve composition, and focus on important subjects. Everything runs locally on your device for maximum privacy and speed.",

    whyConvert:
      "Cropping helps remove unwanted areas, improve composition, and prepare images for websites, documents, and social media. A well-cropped image can dramatically improve visual impact and focus attention on what matters most. Cropping also reduces file size by removing unnecessary image areas.",

    whyChoose:
      "PNG JPG Convert crops images locally inside your browser. Your files never leave your device, ensuring complete privacy and instant processing. Unlike other online image croppers that upload your images to their servers, we process everything on your device. This means faster cropping, complete privacy, and unlimited free usage.",

    comparisonText:
      "Cropping changes only the visible area of an image while preserving its quality. Unlike resizing, which changes the dimensions of the entire image, cropping removes unwanted portions and keeps only what you want. Cropping is ideal for removing distractions and focusing on the main subject.",

    privacy:
      "All image processing happens locally in your browser. Nothing is uploaded or stored. No file is uploaded, stored, or shared with any server. Your privacy is guaranteed, and your images are processed entirely within your browser. You can crop with complete confidence.",

    conclusion:
      "Upload your image, crop it in seconds, and download the result instantly. This image crop tool is fast, secure, private, and completely free. Start cropping your images now for better composition and focus.",
  },
};

export default imageCrop;