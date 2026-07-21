import type { ToolData } from "../tool.types";

const rotateImage: ToolData = {
  slug: "rotate-image",

  mode: "rotate",

  title: "Rotate Image",
  heroTitle: "Rotate Images Online",

  description:
    "Rotate JPG, PNG, WEBP and other images directly inside your browser.",

  heroDescription:
    "Rotate images by 90°, 180° or 270° instantly while preserving image quality. Fast, private and browser-based.",

  seoTitle:
  "Rotate Image Online - Free JPG, PNG & WEBP Image Rotator",

  seoDescription:
    "Rotate JPG, PNG and WEBP images online for free. Rotate images 90°, 180° or 270° without uploading your files.",

  keywords: [
    "rotate image",
    "image rotator",
    "rotate jpg",
    "rotate png",
    "rotate webp",
    "online image rotator",
    "free rotate image",
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
      title: "90°, 180° & 270° Rotation",
      description: "Rotate images to any common angle.",
    },
    {
      title: "Maintain Quality",
      description: "Keep excellent image quality after rotation.",
    },
    {
      title: "Fast",
      description: "Rotate images within seconds.",
    },
    {
      title: "Private",
      description: "Everything runs locally inside your browser.",
    },
    {
      title: "Browser Based",
      description: "No software installation required.",
    },
    {
      title: "Free",
      description: "Unlimited image rotation.",
    },
  ],

  howTo: [
    {
      title: "Upload your image",
      description: "Choose the image you want to rotate.",
    },
    {
      title: "Choose rotation angle",
      description: "Select 90°, 180° or 270°.",
    },
    {
      title: "Rotate",
      description: "Click Rotate to process the image.",
    },
    {
      title: "Download",
      description: "Save the rotated image.",
    },
  ],

  faq: [
    {
      question: "Will rotation reduce image quality?",
      answer:
        "No. The tool preserves image quality during rotation.",
    },
    {
      question: "Are my images uploaded?",
      answer:
        "No. Everything happens locally inside your browser.",
    },
    {
      question: "Can I rotate PNG, JPG and WEBP images?",
      answer:
        "Yes. Most common image formats are supported.",
    },
  ],

  comparison: [
    {
      feature: "Orientation",
      from: "Original",
      to: "Rotated",
    },
    {
      feature: "Quality",
      from: "Original",
      to: "Original",
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
    "Rotating images is one of the most common editing tasks. Whether your photo was taken in the wrong orientation or you simply want to adjust its layout, our Rotate Image tool lets you rotate images instantly without uploading them to a server.",

  whyConvert:
    "Image rotation is useful for correcting photos taken with phones or cameras, preparing images for websites, presentations, social media and printing while preserving the original quality.",

  whyChoose:
  "This tool rotates images directly inside your browser. No files are uploaded, making the process completely private, secure and extremely fast.",

  comparisonText:
    "Rotating changes the orientation of an image without affecting its content. Unlike flipping, which mirrors an image, rotation simply changes the viewing angle.",

  privacy:
    "All image processing is performed locally on your device. Your images never leave your browser, ensuring complete privacy.",

  conclusion:
    "Upload your image, choose the rotation angle, rotate it instantly and download the result within seconds. Fast, secure and completely free.",
},
  relatedTools: [
    {
      title: "Flip Image",
      href: "/flip-image",
    },
    {
      title: "Crop Image",
      href: "/crop-image",
    },
    {
      title: "Resize Image",
      href: "/resize-image",
    },
    {
      title: "Image Compressor",
      href: "/image-compressor",
    },
  ],
};

export default rotateImage;