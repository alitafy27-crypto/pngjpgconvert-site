import type { ToolData } from "../tool.types";

const imageCrop: ToolData = {
  slug: "image-crop",

  mode: "crop",

  title: "Image Crop Tool",
  heroTitle: "Crop Images Online",

  description:
    "Crop images directly inside your browser.",

  heroDescription:
    "Crop any image without uploading it. Fast, secure and completely private.",

  seoTitle:
    "Crop Image Online - Free Browser-Based Image Crop Tool",

  seoDescription:
    "Crop JPG, PNG, WEBP and AVIF images online for free. Fast, secure and browser-based image cropping with no uploads required.",

  keywords: [
    "crop image",
    "image crop tool",
    "online crop image",
    "crop jpg",
    "crop png",
    "crop webp",
    "free image cropper",
  ],

  category: "Image Tools",

  from: "Image",
  to: "Cropped Image",

  inputMime: "image/*",
  outputMime: "image/jpeg",

  outputExtension: "jpg",

  supportsQuality: true,

  icon: "✂️",

  features: [],

  howTo: [],

  faq: [],

  comparison: [],

  content: {
    introduction:
      "Crop images directly inside your browser without uploading your files.",

    whyConvert:
      "Cropping helps remove unwanted areas, improve composition and prepare images for websites, documents and social media.",

    whyChoose:
      "PNG JPG Convert crops images locally inside your browser. Your files never leave your device, ensuring complete privacy and instant processing.",

    comparisonText:
      "Cropping changes only the visible area of an image while preserving its quality.",

    privacy:
      "All image processing happens locally in your browser. Nothing is uploaded or stored.",

    conclusion:
      "Upload your image, crop it in seconds and download the result instantly.",
  },

  relatedTools: [],
};

export default imageCrop;