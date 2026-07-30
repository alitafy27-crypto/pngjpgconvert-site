import type { ToolData } from "../tool.types";

const imageResizer: ToolData = {
  slug: "image-resizer",
  mode: "resize",
  title: "Image Resizer",
  heroTitle: "Image Resizer - Free Online Image Resizer",

  description:
    "Resize images instantly in your browser. Change width and height without uploading. Free, secure, and 100% private with no uploads.",

  heroDescription:
    "Change image width and height without uploading your files. Fast, secure, and browser-based. No uploads, no registration, and completely private. The best free image resizer online.",

  seoTitle:
    "Image Resizer - Resize JPG, PNG, WEBP & AVIF Online Free | 100% Private",

  seoDescription:
    "Resize JPG, PNG, WEBP and AVIF images online for free. Change image dimensions instantly. Fast, secure, and private browser-based image resizer. No uploads, instant downloads.",

  keywords: [
    "resize image",
    "image resizer",
    "resize jpg",
    "resize png",
    "resize webp",
    "resize avif",
    "online image resizer",
    "free image resize",
    "change image size",
    "image dimensions",
    "resize photo",
    "image scaling",
    "free image resizer",
    "browser image resizer",
    "resize image online",
    "resize image free",
  ],

  category: "Image Tools",
  from: "Image",
  to: "Resized Image",
  inputMime: "image/*",
  outputMime: "image/jpeg",
  outputExtension: "jpg",
  supportsQuality: true,
  icon: "📐",

  features: [
    {
      title: "Custom Dimensions",
      description: "Set exact width and height for your images.",
    },
    {
      title: "Maintain Aspect Ratio",
      description: "Keep proportions locked while resizing.",
    },
    {
      title: "Preserve Quality",
      description: "Resize images while maintaining excellent quality.",
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
      description: "Unlimited resizing with no registration required.",
    },
  ],

  howTo: [
    {
      title: "Upload your image",
      description: "Select or drag and drop the image you want to resize.",
    },
    {
      title: "Set new dimensions",
      description: "Enter the desired width and height for your image.",
    },
    {
      title: "Resize image",
      description: "Click the Resize button to change the image dimensions.",
    },
    {
      title: "Download resized image",
      description: "Save the resized image to your device instantly.",
    },
  ],

  faq: [
    {
      question: "Is this image resizer free?",
      answer: "Yes, it is completely free with no hidden charges or limits. You can resize unlimited images.",
    },
    {
      question: "Will image quality decrease when resizing?",
      answer: "You can maintain excellent quality when resizing. We preserve image quality while changing dimensions.",
    },
    {
      question: "Are my images uploaded to your server?",
      answer: "No. Everything happens locally inside your browser. Your images are never uploaded to any server.",
    },
    {
      question: "Which image formats are supported?",
      answer: "You can resize JPG, PNG, WEBP, AVIF, and most common image formats directly in your browser.",
    },
    {
      question: "Can I maintain aspect ratio?",
      answer: "Yes. You can lock the aspect ratio to keep proportions when resizing your images.",
    },
    {
      question: "Does this work on mobile devices?",
      answer: "Yes, the image resizer works on desktop, tablet, and mobile browsers.",
    },
  ],

  comparison: [
    {
      feature: "Image Dimensions",
      from: "Original",
      to: "Custom (New Size)",
    },
    {
      feature: "Aspect Ratio",
      from: "Original",
      to: "Maintained or Custom",
    },
    {
      feature: "File Size",
      from: "Original",
      to: "Reduced (Smaller) or Larger",
    },
    {
      feature: "Best For",
      from: "Original Use",
      to: "Websites, Social Media, Email",
    },
    {
      feature: "Privacy",
      from: "Local",
      to: "Local (No Uploads)",
    },
  ],

  relatedTools: [
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
    {
      title: "JPG to WEBP Converter",
      href: "/jpg-to-webp",
    },
    {
      title: "Rotate Image",
      href: "/image-rotate",
    },
    {
      title: "Flip Image",
      href: "/image-flip",
    },
  ],

  content: {
    introduction:
      "Resize images directly inside your browser without uploading your files. This free image resizer allows you to change the dimensions of JPG, PNG, WEBP, and AVIF images quickly and securely. Everything runs locally on your device for maximum privacy and speed.",

    whyConvert:
      "Resizing images helps reduce file size, fit specific dimensions for websites, social media, documents, and presentations while keeping excellent quality. Properly sized images load faster, look better on different devices, and improve user experience. This is essential for web design and digital content creation.",

    whyChoose:
      "PNG JPG Convert resizes images locally inside your browser. Your files never leave your device, ensuring complete privacy and instant processing. Unlike other online image resizers that upload your images to their servers, we process everything on your device. This means faster resizing, complete privacy, and unlimited free usage.",

    comparisonText:
      "Resizing changes the dimensions of an image, while cropping removes unwanted areas without changing the overall resolution. Resizing is perfect for fitting images into specific spaces, while cropping is ideal for removing unwanted parts. Use both tools together for perfect image optimization.",

    privacy:
      "All image processing happens locally inside your browser. Your files are never uploaded or stored. No file is uploaded, stored, or shared with any server. Your privacy is guaranteed, and your images are processed entirely within your browser. You can resize with complete confidence.",

    conclusion:
      "Upload your image, resize it in seconds, and download the optimized result instantly. This image resizer is fast, secure, private, and completely free. Start resizing your images now for perfect dimensions every time.",
  },
};

export default imageResizer;