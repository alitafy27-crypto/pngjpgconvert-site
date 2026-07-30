import type { ToolData } from "../tool.types";

const imageRotate: ToolData = {
  slug: "image-rotate",
  mode: "rotate",
  title: "Rotate Image",
  heroTitle: "Rotate Image - Free Online Image Rotator",

  description:
    "Rotate images instantly in your browser. Correct orientation with 90°, 180°, or 270°. Free, secure, and 100% private with no uploads.",

  heroDescription:
    "Rotate JPG, PNG, WEBP and AVIF images by 90°, 180° or 270° without uploading your files. No uploads, no registration, and completely private. The best free image rotator online.",

  seoTitle:
    "Rotate Image Online - Rotate JPG, PNG, WEBP & AVIF Free | 100% Private",

  seoDescription:
    "Rotate JPG, PNG, WEBP and AVIF images online for free. Correct orientation with 90°, 180°, or 270°. Fast, secure, and private browser-based image rotator. No uploads, instant downloads.",

  keywords: [
    "rotate image",
    "image rotator",
    "rotate jpg",
    "rotate png",
    "rotate webp",
    "rotate avif",
    "online image rotator",
    "free image rotate",
    "rotate photo",
    "image orientation",
    "rotate image online",
    "rotate image free",
    "browser image rotator",
    "free image rotator",
    "photo rotator",
    "image rotation",
  ],

  category: "Image Tools",
  from: "Image",
  to: "Rotated Image",
  inputMime: "image/*",
  outputMime: "image/jpeg",
  outputExtension: "jpg",
  supportsQuality: true,
  icon: "🔄",

  features: [
    {
      title: "Multiple Rotation Angles",
      description: "Rotate images by 90°, 180°, or 270° in any direction.",
    },
    {
      title: "Correct Orientation",
      description: "Fix rotated or upside-down images instantly.",
    },
    {
      title: "Preserve Quality",
      description: "Rotate images while maintaining excellent quality.",
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
      description: "Unlimited rotations with no registration required.",
    },
  ],

  howTo: [
    {
      title: "Upload your image",
      description: "Select or drag and drop the image you want to rotate.",
    },
    {
      title: "Choose rotation angle",
      description: "Select 90°, 180°, or 270° rotation direction.",
    },
    {
      title: "Rotate image",
      description: "Click the Rotate button to change image orientation.",
    },
    {
      title: "Download rotated image",
      description: "Save the rotated image to your device instantly.",
    },
  ],

  faq: [
    {
      question: "Is this image rotator free?",
      answer: "Yes, it is completely free with no hidden charges or limits. You can rotate unlimited images.",
    },
    {
      question: "Will image quality decrease when rotating?",
      answer: "No. Rotating only changes the orientation of your image and preserves the original quality.",
    },
    {
      question: "Are my images uploaded to your server?",
      answer: "No. Everything happens locally inside your browser. Your images are never uploaded to any server.",
    },
    {
      question: "Which image formats are supported?",
      answer: "You can rotate JPG, PNG, WEBP, AVIF, and most common image formats directly in your browser.",
    },
    {
      question: "Why should I rotate my images?",
      answer: "Rotating images helps correct orientation, fix upside-down photos, and prepare images for websites, social media, documents, and printing.",
    },
    {
      question: "Does this work on mobile devices?",
      answer: "Yes, the image rotator works on desktop, tablet, and mobile browsers.",
    },
  ],

  comparison: [
    {
      feature: "Image Orientation",
      from: "Original (0°)",
      to: "Custom (90°, 180°, 270°)",
    },
    {
      feature: "Image Quality",
      from: "Original",
      to: "Preserved (Lossless)",
    },
    {
      feature: "Best For",
      from: "Original Use",
      to: "Correcting Orientation, Fixing Photos",
    },
    {
      feature: "Processing Speed",
      from: "N/A",
      to: "Fast (Seconds)",
    },
    {
      feature: "Privacy",
      from: "Local",
      to: "Local (No Uploads)",
    },
  ],

  relatedTools: [
    {
      title: "Image Flip",
      href: "/image-flip",
    },
    {
      title: "Image Resizer",
      href: "/image-resizer",
    },
    {
      title: "Image Crop Tool",
      href: "/image-crop",
    },
    {
      title: "Image Compressor",
      href: "/image-compressor",
    },
    {
      title: "PNG to JPG Converter",
      href: "/png-to-jpg",
    },
    {
      title: "Image Watermark",
      href: "/image-watermark",
    },
  ],

  content: {
    introduction:
      "Rotate images directly inside your browser without uploading your files. This free image rotator allows you to rotate JPG, PNG, WEBP, and AVIF images by 90°, 180°, or 270° quickly and securely. Everything runs locally on your device for maximum privacy and speed.",

    whyConvert:
      "Rotating images is useful for correcting orientation, preparing photos for websites, social media, documents, and printing while preserving image quality. Correctly oriented images look more professional and improve user experience. Rotating is essential for fixing upside-down or sideways photos.",

    whyChoose:
      "PNG JPG Convert rotates images locally inside your browser. Your files never leave your device, ensuring complete privacy and instant processing. Unlike other online image rotators that upload your images to their servers, we process everything on your device. This means faster rotation, complete privacy, and unlimited free usage.",

    comparisonText:
      "Rotating changes the orientation of an image without affecting its quality or content. Unlike resizing or cropping, rotation keeps the entire image but changes its angle. This is perfect for correcting photos taken at the wrong angle or preparing images for different displays.",

    privacy:
      "All image processing happens locally inside your browser. Your files are never uploaded or stored. No file is uploaded, stored, or shared with any server. Your privacy is guaranteed, and your images are processed entirely within your browser. You can rotate with complete confidence.",

    conclusion:
      "Upload your image, rotate it in seconds, and download the result instantly. This image rotator is fast, secure, private, and completely free. Start rotating your images now for perfect orientation every time.",
  },
};

export default imageRotate;