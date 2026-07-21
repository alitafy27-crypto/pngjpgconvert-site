import type { ToolData } from "../tool.types";

const cropImage: ToolData = {
  slug: "crop-image",

  mode: "crop",

  title: "Crop Image",
  heroTitle: "Crop Images Online",

  description:
    "Crop JPG, PNG, WEBP and other images directly inside your browser.",

  heroDescription:
    "Crop images to remove unwanted areas or focus on important content. Fast, secure and browser-based.",

  seoTitle:
  "Crop Image Online - Free JPG, PNG & WEBP Cropper",
  seoDescription:
    "Crop JPG, PNG and WEBP images online for free. Remove unwanted parts of your images without uploading them.",

  keywords: [
    "crop image",
    "image cropper",
    "crop jpg",
    "crop png",
    "crop webp",
    "online image cropper",
    "free image crop",
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
      title: "Precise Cropping",
      description: "Remove unwanted areas easily.",
    },
    {
      title: "Maintain Quality",
      description: "Crop images without losing quality.",
    },
    {
      title: "Fast",
      description: "Crop images in seconds.",
    },
    {
      title: "Private",
      description: "Everything runs locally inside your browser.",
    },
    {
      title: "Browser Based",
      description: "No software installation required.",
    },
    {
      title: "Free",
      description: "Unlimited image cropping.",
    },
  ],

  howTo: [
    {
      title: "Upload your image",
      description: "Choose the image you want to crop.",
    },
    {
      title: "Select crop area",
      description: "Choose the area you want to keep.",
    },
    {
      title: "Crop image",
      description: "Click Crop to process the image.",
    },
    {
      title: "Download",
      description: "Save the cropped image.",
    },
  ],

  faq: [
    {
      question: "Will cropping reduce image quality?",
      answer:
        "No. Cropping only removes unwanted areas without reducing quality.",
    },
    {
      question: "Are my images uploaded?",
      answer:
        "No. Everything happens locally inside your browser.",
    },
    {
      question: "Can I crop PNG and JPG images?",
      answer:
        "Yes. Most common image formats are supported.",
    },
  ],

  comparison: [
    {
      feature: "Image Area",
      from: "Full Image",
      to: "Selected Area",
    },
    {
      feature: "Quality",
      from: "Original",
      to: "Original",
    },
    {
      feature: "Privacy",
      from: "Local",
      to: "Local",
    },
    {
      feature: "Speed",
      from: "-",
      to: "Instant",
    },
  ],
content: {
  introduction:
    "Cropping images allows you to remove unwanted areas and focus on the most important part of your picture. Our Crop Image tool works entirely inside your browser, giving you fast results while keeping your images private.",

  whyConvert:
    "Cropping is useful for social media posts, profile pictures, presentations, documents and websites. It helps improve composition and removes unnecessary parts of an image without affecting its quality.",

  whyChoose:
  "Unlike many online image editors, PNG JPG Convert performs every crop directly inside your browser. Your images never leave your device, ensuring complete privacy, unlimited usage and instant processing.",

  comparisonText:
    "Cropping changes only the visible area of an image while preserving the remaining quality. It is different from resizing, which changes the image dimensions.",

  privacy:
    "Your images are never uploaded to any server. Everything happens locally inside your browser for maximum security and privacy.",

  conclusion:
    "Upload your image, select the area you want to keep, crop it instantly and download the result. Fast, private and completely free.",
},
  relatedTools: [
    {
      title: "Resize Image",
      href: "/resize-image",
    },
    {
      title: "Rotate Image",
      href: "/rotate-image",
    },
    {
      title: "Image Compressor",
      href: "/image-compressor",
    },
    {
      title: "PNG to JPG Converter",
      href: "/png-to-jpg",
    },
  ],
};

export default cropImage;