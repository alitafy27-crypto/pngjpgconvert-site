import type { ToolData } from "../tool.types";

const imageWatermark: ToolData = {
  slug: "image-watermark",

  mode: "watermark",

  title: "Watermark Image",

  heroTitle: "Add Watermark to Images Online",

  description:
    "Add a custom text watermark to JPG, PNG, WEBP and AVIF images directly inside your browser.",

  heroDescription:
    "Protect your photos by adding customizable text watermarks. Fast, secure and completely browser-based.",

  seoTitle:
    "Add Watermark to Images Online - Free JPG, PNG & WEBP Watermark Tool",

  seoDescription:
    "Add text watermarks to JPG, PNG, WEBP and AVIF images online for free. Fast, secure and browser-based image watermarking with no uploads required.",

  keywords: [
    "watermark image",
    "add watermark",
    "image watermark",
    "watermark jpg",
    "watermark png",
    "watermark webp",
    "online watermark tool",
    "free watermark image",
  ],

  category: "Image Tools",

  from: "Image",

  to: "Watermarked Image",

  inputMime: "image/*",

  outputMime: "image/png",

  outputExtension: "png",

  supportsQuality: true,

  icon: "💧",

  features: [],

  howTo: [],

  faq: [],

  comparison: [],

  content: {
    introduction:
      "Add custom text watermarks to your images directly inside your browser without uploading your files.",

    whyConvert:
      "Watermarks help protect your images, photos, artwork and branding by adding visible ownership information before sharing online.",

    whyChoose:
      "PNG JPG Convert processes every image directly inside your browser. Your files are never uploaded to any server, ensuring complete privacy, fast performance and unlimited free usage.",

    comparisonText:
      "Watermarking adds ownership information while preserving the original image quality.",

    privacy:
      "All image processing happens locally inside your browser. Your files are never uploaded or stored.",

    conclusion:
      "Upload your image, add your custom watermark and download the protected image instantly.",
  },

  relatedTools: [
    {
      title: "Image Resizer",
      href: "/tools/image-resizer",
    },
    {
      title: "Image Rotate",
      href: "/tools/image-rotate",
    },
    {
      title: "Image Flip",
      href: "/tools/image-flip",
    },
    {
      title: "Image Compressor",
      href: "/tools/image-compressor",
    },
  ],
};

export default imageWatermark;