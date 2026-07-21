import type { ToolData } from "../tool.types";

const flipImage: ToolData = {
  slug: "flip-image",

  mode: "flip",

  title: "Flip Image",
  heroTitle: "Flip Images Online",

  description:
    "Flip JPG, PNG, WEBP and other images horizontally or vertically directly inside your browser.",

  heroDescription:
    "Mirror images horizontally or vertically while preserving image quality. Fast, secure and browser-based.",

 seoTitle:
  "Flip Image Online - Free JPG, PNG & WEBP Image Flipper",

  seoDescription:
    "Flip JPG, PNG and WEBP images online for free. Mirror images horizontally or vertically without uploading your files.",

  keywords: [
    "flip image",
    "mirror image",
    "flip jpg",
    "flip png",
    "flip webp",
    "image flipper",
    "online image flip",
    "free image flipper",
  ],

  category: "Image Tools",

  from: "Image",
  to: "Flipped Image",

  inputMime: "image/*",
  outputMime: "image/jpeg",

  outputExtension: "jpg",

  supportsQuality: true,

  icon: "↔️",

  features: [
    {
      title: "Horizontal Flip",
      description: "Mirror your image horizontally.",
    },
    {
      title: "Vertical Flip",
      description: "Flip your image vertically.",
    },
    {
      title: "Maintain Quality",
      description: "Keep excellent image quality after flipping.",
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
      title: "Free",
      description: "Unlimited image flipping with no registration.",
    },
  ],

  howTo: [
    {
      title: "Upload your image",
      description: "Choose the image you want to flip.",
    },
    {
      title: "Choose direction",
      description: "Select horizontal or vertical flip.",
    },
    {
      title: "Flip image",
      description: "Click Flip to process the image.",
    },
    {
      title: "Download",
      description: "Save the flipped image.",
    },
  ],

  faq: [
    {
      question: "Will flipping reduce image quality?",
      answer:
        "No. The image is flipped while preserving its quality.",
    },
    {
      question: "Can I flip images vertically and horizontally?",
      answer:
        "Yes. Both flip directions are supported.",
    },
    {
      question: "Are my images uploaded?",
      answer:
        "No. Everything happens locally inside your browser.",
    },
  ],

  comparison: [
    {
      feature: "Direction",
      from: "Original",
      to: "Horizontal / Vertical",
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
    "Flipping an image lets you create a mirrored version either horizontally or vertically while keeping the original quality. Our Flip Image tool works entirely inside your browser, making image editing fast, private and secure.",

  whyConvert:
    "Flipping images is useful for correcting camera orientation, creating mirrored graphics, preparing product photos, designing social media content and many other editing tasks.",

 whyChoose:
  "This tool flips your images directly inside your browser. Nothing is uploaded to any server, so your files remain completely private while processing is almost instant.",

  comparisonText:
    "Unlike rotating an image, flipping creates a mirror effect. You can flip horizontally to reverse left and right, or vertically to reverse top and bottom without changing image quality.",

  privacy:
    "Every image is processed locally on your device. Your files never leave your browser, guaranteeing maximum privacy and security.",

  conclusion:
    "Upload your image, choose horizontal or vertical flip, generate the mirrored image instantly and download it in seconds. Fast, secure and completely free.",
},
  relatedTools: [
    {
      title: "Rotate Image",
      href: "/rotate-image",
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

export default flipImage;