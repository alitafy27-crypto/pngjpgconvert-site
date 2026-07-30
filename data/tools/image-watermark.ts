import type { ToolData } from "../tool.types";

const imageWatermark: ToolData = {
  slug: "image-watermark",
  mode: "watermark",
  title: "Watermark Image",
  heroTitle: "Watermark Image - Free Online Watermark Tool",

  description:
    "Add custom text watermarks to images instantly in your browser. Protect your photos with visible ownership. Free, secure, and 100% private with no uploads.",

  heroDescription:
    "Protect your photos by adding customizable text watermarks. Fast, secure, and completely browser-based. No uploads, no registration, and completely private. The best free image watermark tool online.",

  seoTitle:
    "Watermark Image - Add Watermark to JPG, PNG, WEBP & AVIF Free | 100% Private",

  seoDescription:
    "Add text watermarks to JPG, PNG, WEBP and AVIF images online for free. Protect your photos with visible ownership. Fast, secure, and private browser-based watermark tool. No uploads, instant downloads.",

  keywords: [
    "watermark image",
    "add watermark",
    "image watermark",
    "watermark jpg",
    "watermark png",
    "watermark webp",
    "watermark avif",
    "online watermark tool",
    "free watermark image",
    "protect images",
    "image protection",
    "watermark photos",
    "brand watermark",
    "copyright watermark",
    "text watermark",
    "browser watermark tool",
  ],

  category: "Image Tools",
  from: "Image",
  to: "Watermarked Image",
  inputMime: "image/*",
  outputMime: "image/png",
  outputExtension: "png",
  supportsQuality: true,
  icon: "💧",

  features: [
    {
      title: "Custom Text Watermark",
      description: "Add your own text as a watermark to protect your images.",
    },
    {
      title: "Adjustable Position",
      description: "Place your watermark anywhere on the image.",
    },
    {
      title: "Customizable Opacity",
      description: "Adjust watermark transparency for a professional look.",
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
      description: "Unlimited watermarks with no registration required.",
    },
  ],

  howTo: [
    {
      title: "Upload your image",
      description: "Select or drag and drop the image you want to watermark.",
    },
    {
      title: "Enter watermark text",
      description: "Type the text you want to add as a watermark.",
    },
    {
      title: "Customize watermark",
      description: "Adjust position, size, and opacity of your watermark.",
    },
    {
      title: "Download watermarked image",
      description: "Save the protected image to your device instantly.",
    },
  ],

  faq: [
    {
      question: "Is this watermark tool free?",
      answer: "Yes, it is completely free with no hidden charges or limits. You can watermark unlimited images.",
    },
    {
      question: "Will image quality decrease when adding a watermark?",
      answer: "No. Adding a watermark only overlays text on your image and preserves the original quality.",
    },
    {
      question: "Are my images uploaded to your server?",
      answer: "No. Everything happens locally inside your browser. Your images are never uploaded to any server.",
    },
    {
      question: "Which image formats are supported?",
      answer: "You can add watermarks to JPG, PNG, WEBP, AVIF, and most common image formats directly in your browser.",
    },
    {
      question: "Why should I watermark my images?",
      answer: "Watermarks help protect your images, photos, artwork, and branding by adding visible ownership information before sharing online. This deters unauthorized use and promotes your brand.",
    },
    {
      question: "Does this work on mobile devices?",
      answer: "Yes, the watermark tool works on desktop, tablet, and mobile browsers.",
    },
  ],

  comparison: [
    {
      feature: "Watermark Type",
      from: "No Watermark",
      to: "Custom Text Watermark",
    },
    {
      feature: "Image Protection",
      from: "Unprotected",
      to: "Protected with Owner Info",
    },
    {
      feature: "Position",
      from: "N/A",
      to: "Customizable",
    },
    {
      feature: "Opacity",
      from: "N/A",
      to: "Adjustable",
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
      title: "Image Rotate",
      href: "/image-rotate",
    },
    {
      title: "Image Flip",
      href: "/image-flip",
    },
    {
      title: "Image Compressor",
      href: "/image-compressor",
    },
    {
      title: "Image Crop Tool",
      href: "/image-crop",
    },
    {
      title: "PNG to JPG Converter",
      href: "/png-to-jpg",
    },
  ],

  content: {
    introduction:
      "Add custom text watermarks to your images directly inside your browser without uploading your files. This free watermark tool allows you to protect JPG, PNG, WEBP, and AVIF images with customizable text watermarks. Everything runs locally on your device for maximum privacy and speed.",

    whyConvert:
      "Watermarks help protect your images, photos, artwork, and branding by adding visible ownership information before sharing online. Adding a watermark deters unauthorized use, promotes your brand, and ensures your work is properly attributed. This is essential for photographers, designers, and content creators.",

    whyChoose:
      "PNG JPG Convert processes every image directly inside your browser. Your files are never uploaded to any server, ensuring complete privacy, fast performance, and unlimited free usage. Unlike other online watermark tools that upload your images to their servers, we process everything on your device. This means faster processing, complete privacy, and unlimited free usage.",

    comparisonText:
      "Watermarking adds ownership information while preserving the original image quality. Unlike editing or transforming your image, watermarking overlays text without changing the underlying image. This makes it perfect for protecting images while keeping them intact.",

    privacy:
      "All image processing happens locally inside your browser. Your files are never uploaded or stored. No file is uploaded, stored, or shared with any server. Your privacy is guaranteed, and your images are processed entirely within your browser. You can add watermarks with complete confidence.",

    conclusion:
      "Upload your image, add your custom watermark, and download the protected image instantly. This watermark tool is fast, secure, private, and completely free. Start watermarking your images now to protect your work and brand.",
  },
};

export default imageWatermark;