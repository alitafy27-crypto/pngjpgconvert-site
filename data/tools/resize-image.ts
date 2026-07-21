import type { ToolData } from "../tool.types";

const resizeImage: ToolData = {
  slug: "resize-image",

  mode: "resize",

  title: "Resize Image",
  heroTitle: "Resize Images Online",

  description:
    "Resize JPG, PNG, WEBP and other images directly in your browser.",

  heroDescription:
    "Resize images by changing their width and height while maintaining excellent quality. Fast, private and browser-based.",

seoTitle:
  "Resize Image Online - Free JPG, PNG & WEBP Image Resizer",

  seoDescription:
    "Resize JPG, PNG and WEBP images online for free. Change image dimensions quickly without uploading your files.",

  keywords: [
    "resize image",
    "image resizer",
    "resize jpg",
    "resize png",
    "resize webp",
    "change image size",
    "online image resizer",
    "free image resizer",
  ],

  category: "Image Tools",

  from: "Image",
  to: "Resized Image",

  inputMime: "image/*",
  outputMime: "image/jpeg",

  outputExtension: "jpg",

  supportsQuality: true,

  icon: "📏",

  features: [
    {
      title: "Custom Dimensions",
      description: "Resize images to any width and height.",
    },
    {
      title: "Keep Aspect Ratio",
      description: "Prevent image distortion while resizing.",
    },
    {
      title: "High Quality",
      description: "Resize without noticeable quality loss.",
    },
    {
      title: "Private",
      description: "Everything runs locally in your browser.",
    },
    {
      title: "Fast",
      description: "Resize images within seconds.",
    },
    {
      title: "Free",
      description: "Unlimited resizing with no registration.",
    },
  ],

  howTo: [
    {
      title: "Upload your image",
      description: "Choose the image you want to resize.",
    },
    {
      title: "Enter new dimensions",
      description: "Set the desired width and height.",
    },
    {
      title: "Resize",
      description: "Click Resize to process the image.",
    },
    {
      title: "Download",
      description: "Save the resized image.",
    },
  ],

  faq: [
    {
      question: "Can I keep the aspect ratio?",
      answer:
        "Yes. The tool can automatically maintain the original aspect ratio.",
    },
    {
      question: "Will image quality decrease?",
      answer:
        "The tool is optimized to preserve image quality during resizing.",
    },
    {
      question: "Are my images uploaded?",
      answer:
        "No. Everything happens locally inside your browser.",
    },
  ],

  comparison: [
    {
      feature: "Dimensions",
      from: "Original Size",
      to: "Custom Size",
    },
    {
      feature: "Aspect Ratio",
      from: "Original",
      to: "Optional",
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
  ],
content: {
  introduction:
    "Resizing images allows you to change their dimensions while keeping them clear and suitable for different purposes. Our Resize Image tool works directly inside your browser, providing fast and private image resizing without uploading your files.",

  whyConvert:
    "Image resizing is useful for websites, social media, email attachments, presentations and printing. Smaller dimensions can reduce file size, while larger dimensions help meet specific display requirements.",

whyChoose:
  "This tool resizes your images directly inside your browser. Your files never leave your device, ensuring complete privacy, fast processing and unlimited free usage.",

  comparisonText:
    "Resizing changes the dimensions of an image, while cropping removes part of it. Our tool also lets you preserve the original aspect ratio to avoid stretching or distortion.",

  privacy:
    "All resizing is performed locally inside your browser. Your images are never uploaded or stored on any server.",

  conclusion:
    "Upload your image, choose the new dimensions, resize it instantly and download the result in seconds. Fast, secure and completely free.",
},
  relatedTools: [
    {
      title: "Crop Image",
      href: "/crop-image",
    },
    {
      title: "Image Compressor",
      href: "/image-compressor",
    },
    {
      title: "Rotate Image",
      href: "/rotate-image",
    },
    {
      title: "PNG to JPG Converter",
      href: "/png-to-jpg",
    },
  ],
};

export default resizeImage;