import type { ToolData } from "../tool.types";

const imageCompressor: ToolData = {
  slug: "image-compressor",
  mode: "compress",
  title: "Image Compressor",
  heroTitle: "Image Compressor - Free Online Image Compressor",

  description:
    "Compress PNG, JPG, WEBP and AVIF images instantly in your browser. Reduce file size while maintaining quality. Free, secure, and 100% private with no uploads.",

  heroDescription:
    "Reduce image file size while maintaining excellent quality. Fast, secure, private, and completely browser-based. No uploads, no registration, and completely private. The best free image compressor online.",

  seoTitle:
    "Image Compressor - Compress JPG, PNG, WEBP & AVIF Online Free | 100% Private",

  seoDescription:
    "Compress JPG, PNG, WEBP and AVIF images online for free. Reduce file size while keeping excellent quality. Fast, secure, and private browser-based image compressor. No uploads, instant downloads.",

  keywords: [
    "image compressor",
    "compress image",
    "compress jpg",
    "compress png",
    "compress webp",
    "compress avif",
    "reduce image size",
    "online image compressor",
    "free image compressor",
    "image compression",
    "compress images online",
    "reduce file size",
    "optimize image",
    "image optimizer",
    "free image compression",
    "browser image compressor",
  ],

  category: "Image Tools",
  from: "Image",
  to: "Compressed Image",
  inputMime: "image/*",
  outputMime: "image/jpeg",
  outputExtension: "jpg",
  supportsQuality: true,
  icon: "🗜️",

  features: [
    {
      title: "Reduce File Size",
      description: "Shrink image size by up to 80% without noticeably reducing quality.",
    },
    {
      title: "Adjustable Quality",
      description: "Control the compression level to fit your needs.",
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
      title: "Fast Compression",
      description: "Compress large images in just a few seconds.",
    },
    {
      title: "Free Forever",
      description: "Unlimited compression with no registration required.",
    },
  ],

  howTo: [
    {
      title: "Upload your image",
      description: "Select or drag and drop the image you want to compress.",
    },
    {
      title: "Adjust compression level",
      description: "Choose the desired compression quality level (1-100).",
    },
    {
      title: "Compress image",
      description: "Click the Compress button to start the optimization.",
    },
    {
      title: "Download compressed image",
      description: "Save the compressed image to your device instantly.",
    },
  ],

  faq: [
    {
      question: "Will image quality decrease when compressing?",
      answer: "You can control the quality level. Higher quality keeps more details while lower quality creates smaller files. You can find the perfect balance between quality and file size.",
    },
    {
      question: "Is this image compressor free?",
      answer: "Yes, it is completely free with no hidden charges or limits. You can compress unlimited images.",
    },
    {
      question: "Are my images uploaded to your server?",
      answer: "No. Everything happens locally inside your browser. Your images are never uploaded to any server.",
    },
    {
      question: "Which image formats are supported?",
      answer: "You can compress JPG, PNG, WEBP, AVIF, and most common image formats directly in your browser.",
    },
    {
      question: "How much can I reduce image size?",
      answer: "You can reduce image size by up to 80% while maintaining excellent visual quality. The exact reduction depends on the original image and compression settings.",
    },
    {
      question: "Does this work on mobile devices?",
      answer: "Yes, the image compressor works on desktop, tablet, and mobile browsers.",
    },
  ],

  comparison: [
    {
      feature: "Image Quality",
      from: "Original",
      to: "Adjustable (1-100)",
    },
    {
      feature: "File Size",
      from: "Larger",
      to: "Smaller (Up to 80%)",
    },
    {
      feature: "Processing",
      from: "Original File",
      to: "Optimized File",
    },
    {
      feature: "Privacy",
      from: "Local",
      to: "Local (No Uploads)",
    },
    {
      feature: "Speed",
      from: "N/A",
      to: "Fast (Seconds)",
    },
  ],

  relatedTools: [
    {
      title: "PNG to JPG Converter",
      href: "/png-to-jpg",
    },
    {
      title: "JPG to WEBP Converter",
      href: "/jpg-to-webp",
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
      title: "PNG to WEBP Converter",
      href: "/png-to-webp",
    },
    {
      title: "JPG to PNG Converter",
      href: "/jpg-to-png",
    },
  ],

  content: {
    introduction:
      "Reduce image file size directly inside your browser without compromising quality. This free image compressor allows you to compress PNG, JPG, WEBP, and AVIF images quickly and securely. Everything runs locally on your device for maximum privacy and speed.",

    whyConvert:
      "Compressed images upload faster, load faster, and consume less storage. Smaller images mean faster websites, better user experience, and improved SEO ranking. Compressing your images can reduce file size by up to 80% while maintaining excellent visual quality. This is essential for web performance and mobile loading times.",

    whyChoose:
      "Private browser-based compression with adjustable quality settings. Unlike other online image compressors that upload your images to their servers, we process everything on your device. This means faster compression, complete privacy, and unlimited free usage. Your files never leave your computer.",

    comparisonText:
      "Compression reduces file size while maintaining the best possible visual quality. You can adjust the quality level to find the perfect balance between file size and image quality. Higher quality keeps more details, while lower quality creates smaller files. The choice is yours.",

    privacy:
      "No image is uploaded. Every compression happens locally. No file is uploaded, stored, or shared with any server. Your privacy is guaranteed, and your images are processed entirely within your browser. You can compress with complete confidence.",

    conclusion:
      "Compress your images in seconds and download the optimized version instantly. This image compressor is fast, secure, private, and completely free. Start compressing your images now for faster loading times and better web performance.",
  },
};

export default imageCompressor;