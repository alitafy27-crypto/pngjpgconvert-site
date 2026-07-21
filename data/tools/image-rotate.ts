import type { ToolData } from "../tool.types";

const imageRotate: ToolData = {
  slug: "image-rotate",

  mode: "rotate",

  title: "Rotate Image",
  heroTitle: "Rotate Images Online",

  description:
    "Rotate images instantly directly inside your browser.",

  heroDescription:
    "Rotate JPG, PNG, WEBP and AVIF images by 90°, 180° or 270° without uploading your files.",

  seoTitle:
    "Rotate Image Online - Free JPG, PNG & WEBP Image Rotator",

  seoDescription:
    "Rotate JPG, PNG, WEBP and AVIF images online for free. Fast, secure and browser-based image rotation with no uploads required.",

  keywords: [
    "rotate image",
    "image rotator",
    "rotate jpg",
    "rotate png",
    "rotate webp",
    "rotate avif",
    "online image rotator",
    "free image rotate",
  ],

  category: "Image Tools",

  from: "Image",
  to: "Rotated Image",

  inputMime: "image/*",
  outputMime: "image/jpeg",

  outputExtension: "jpg",

  supportsQuality: true,

  icon: "🔄",

  features: [],

  howTo: [],

  faq: [],

  comparison: [],

  content: {
    introduction:
      "Rotate images directly inside your browser without uploading your files.",

    whyConvert:
      "Rotating images is useful for correcting orientation, preparing photos for websites, social media, documents and printing while preserving image quality.",

    whyChoose:
      "PNG JPG Convert rotates images locally inside your browser. Your files never leave your device, ensuring complete privacy and instant processing.",

    comparisonText:
      "Rotating changes the orientation of an image without affecting its quality or content.",

    privacy:
      "All image processing happens locally inside your browser. Your files are never uploaded or stored.",

    conclusion:
      "Upload your image, rotate it in seconds and download the result instantly.",
  },

  relatedTools: [],
};

export default imageRotate;