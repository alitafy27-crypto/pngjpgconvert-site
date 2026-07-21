import type { ToolData } from "../tool.types";

const imageFlip: ToolData = {
  slug: "image-flip",

  mode: "flip",

  title: "Flip Image",
  heroTitle: "Flip Images Online",

  description:
    "Flip images horizontally or vertically directly inside your browser.",

  heroDescription:
    "Mirror any image instantly without uploading it. Fast, secure and browser-based.",

  seoTitle:
    "Flip Image Online - Free Horizontal & Vertical Image Flipper",

  seoDescription:
    "Flip JPG, PNG, WEBP and AVIF images online for free. Mirror images horizontally or vertically directly inside your browser.",

  keywords: [
    "flip image",
    "mirror image",
    "image flipper",
    "flip jpg",
    "flip png",
    "flip webp",
    "horizontal flip",
    "vertical flip",
  ],

  category: "Image Tools",

  from: "Image",
  to: "Flipped Image",

  inputMime: "image/*",
  outputMime: "image/jpeg",

  outputExtension: "jpg",

  supportsQuality: true,

  icon: "↔️",

  features: [],

  howTo: [],

  faq: [],

  comparison: [],

  content: {
    introduction:
      "Flip images horizontally or vertically directly inside your browser without uploading your files.",

    whyConvert:
      "Flipping images is useful for correcting orientation, creating mirrored graphics and preparing photos for design or social media.",

    whyChoose:
      "PNG JPG Convert flips images locally inside your browser. Your files never leave your device, ensuring complete privacy and instant processing.",

    comparisonText:
      "Horizontal and vertical flipping changes the orientation of an image without affecting its quality.",

    privacy:
      "All image processing happens locally inside your browser. Nothing is uploaded or stored.",

    conclusion:
      "Upload your image, flip it instantly and download the result in seconds.",
  },

  relatedTools: [],
};

export default imageFlip;