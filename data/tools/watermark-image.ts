import type { ToolData } from "../tool.types";

const watermarkImage: ToolData = {
  slug: "watermark-image",

  mode: "watermark",

  title: "Watermark Image",
  heroTitle: "Add Watermark to Images",

  description:
    "Add text watermarks to JPG, PNG and WEBP images directly inside your browser.",

  heroDescription:
    "Protect your images by adding custom text watermarks. Fast, private and completely browser-based.",

  seoTitle:
  "Add Watermark to Images Online - Free JPG, PNG & WEBP Watermark Tool",

  seoDescription:
    "Add text watermarks to JPG, PNG and WEBP images online for free. Protect your images without uploading them.",

  keywords: [
    "watermark image",
    "add watermark",
    "image watermark",
    "photo watermark",
    "watermark tool",
    "online watermark",
    "free watermark",
    "protect images",
  ],

  category: "Image Tools",

  from: "Image",
  to: "Watermarked Image",

  inputMime: "image/*",
  outputMime: "image/jpeg",

  outputExtension: "jpg",

  supportsQuality: true,

  icon: "💧",

  features: [
    {
      title: "Custom Text Watermark",
      description: "Add your own watermark text.",
    },
    {
      title: "Maintain Image Quality",
      description: "Keep excellent image quality.",
    },
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
      description: "Apply watermarks within seconds.",
    },
    {
      title: "Free",
      description: "Unlimited watermarking with no registration.",
    },
  ],

  howTo: [
    {
      title: "Upload your image",
      description: "Choose the image you want to protect.",
    },
    {
      title: "Enter watermark text",
      description: "Type the text you want to display.",
    },
    {
      title: "Apply watermark",
      description: "Click Apply to generate the new image.",
    },
    {
      title: "Download",
      description: "Save the watermarked image.",
    },
  ],

  faq: [
    {
      question: "Can I add my own watermark text?",
      answer: "Yes. You can use any custom text as a watermark.",
    },
    {
      question: "Will image quality decrease?",
      answer: "The tool preserves image quality while adding the watermark.",
    },
    {
      question: "Are my images uploaded?",
      answer: "No. Everything happens locally inside your browser.",
    },
  ],

  comparison: [
    {
      feature: "Protection",
      from: "None",
      to: "Watermarked",
    },
    {
      feature: "Quality",
      from: "Original",
      to: "High",
    },
    {
      feature: "Privacy",
      from: "Local",
      to: "Local",
    },
    {
      feature: "Processing",
      from: "-",
      to: "Instant",
    },
  ],
content: {
  introduction:
    "Adding a watermark is one of the best ways to protect your photos and graphics from unauthorized use. Our Watermark Image tool lets you place custom text watermarks directly inside your browser without uploading your files.",

  whyConvert:
    "Watermarks help identify ownership, strengthen your brand, discourage unauthorized copying and protect your digital content before sharing it online.",

  whyChoose:
  "This tool processes every image directly inside your browser. Your files are never uploaded to any server, ensuring complete privacy, fast performance and unlimited free usage.",
  comparisonText:
    "Unlike image compression or resizing, watermarking does not change the image dimensions. It simply adds visible ownership information while preserving the original image quality.",

  privacy:
    "Every watermark is added locally on your device. Your images remain completely private and are never stored or transmitted over the internet.",

  conclusion:
    "Upload your image, enter your custom watermark text, generate the protected image instantly and download it within seconds. Fast, secure and completely free.",
},
  relatedTools: [
    {
      title: "Resize Image",
      href: "/resize-image",
    },
    {
      title: "Crop Image",
      href: "/crop-image",
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

export default watermarkImage;