import type { ToolData } from "../tool.types";

const imageResizer: ToolData = {
  slug: "image-resizer",

  mode: "resize",

  title: "Image Resizer",
  heroTitle: "Resize Images Online",

  description:
    "Resize images directly inside your browser.",

  heroDescription:
    "Change image width and height without uploading your files. Fast, secure and browser-based.",

  seoTitle:
    "Resize Image Online - Free JPG, PNG & WEBP Image Resizer",

  seoDescription:
    "Resize JPG, PNG, WEBP and AVIF images online for free. Change image dimensions instantly without uploading your files.",

  keywords: [
    "resize image",
    "image resizer",
    "resize jpg",
    "resize png",
    "resize webp",
    "online image resizer",
    "free image resize",
  ],

  category: "Image Tools",

  from: "Image",
  to: "Resized Image",

  inputMime: "image/*",
  outputMime: "image/jpeg",

  outputExtension: "jpg",

  supportsQuality: true,

  icon: "📐",

  features: [],

  howTo: [],

  faq: [],

  comparison: [],

  content: {
    introduction:
      "Resize images directly inside your browser without uploading your files.",

    whyConvert:
      "Resizing images helps reduce file size, fit specific dimensions for websites, social media, documents and presentations while keeping excellent quality.",

    whyChoose:
      "PNG JPG Convert resizes images locally inside your browser. Your files never leave your device, ensuring complete privacy and instant processing.",

    comparisonText:
      "Resizing changes the dimensions of an image, while cropping removes unwanted areas without changing the overall resolution.",

    privacy:
      "All image processing happens locally inside your browser. Your files are never uploaded or stored.",

    conclusion:
      "Upload your image, resize it in seconds and download the optimized result instantly.",
  },

  relatedTools: [],
};

export default imageResizer;