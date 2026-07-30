import type { ToolData } from "../tool.types";

const imageToPdf: ToolData = {
  slug: "image-to-pdf",
  mode: "convert",
  title: "Image to PDF",
  heroTitle: "Image to PDF - Free Online Image to PDF Converter",

  description:
    "Convert JPG, PNG, WEBP and AVIF images to PDF instantly in your browser. Merge multiple images into one document. Free, secure, and 100% private with no uploads.",

  heroDescription:
    "Merge one or multiple images into a high-quality PDF document without uploading your files. No uploads, no registration, and completely private. The best free image to PDF converter online.",

  seoTitle:
    "Image to PDF Converter - Convert JPG, PNG, WEBP & AVIF to PDF Free | 100% Private",

  seoDescription:
    "Convert JPG, PNG, WEBP and AVIF images to PDF online for free. Merge multiple images into one document. Fast, secure, and private browser-based image to PDF converter. No uploads, instant downloads.",

  keywords: [
    "image to pdf",
    "jpg to pdf",
    "png to pdf",
    "webp to pdf",
    "avif to pdf",
    "convert image to pdf",
    "online image to pdf",
    "free image to pdf",
    "images to pdf",
    "photo to pdf",
    "convert images to pdf",
    "image to pdf online",
    "image to pdf free",
    "browser image to pdf",
    "merge images to pdf",
    "free image to pdf converter",
  ],

  category: "PDF Tools",
  from: "Image",
  to: "PDF",
  inputMime: "image/*",
  outputMime: "application/pdf",
  outputExtension: "pdf",
  supportsQuality: false,
  icon: "📄",

  features: [
    {
      title: "Multiple Images",
      description: "Merge one or multiple images into a single PDF document.",
    },
    {
      title: "Preserve Quality",
      description: "Images are converted to PDF with excellent quality.",
    },
    {
      title: "Easy Sharing",
      description: "Combine images into a professional PDF document.",
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
      description: "Unlimited conversions with no registration required.",
    },
  ],

  howTo: [
    {
      title: "Upload your images",
      description: "Select or drag and drop the images you want to convert to PDF.",
    },
    {
      title: "Arrange images",
      description: "Order your images in the sequence you want in the PDF.",
    },
    {
      title: "Convert to PDF",
      description: "Click the Convert button to create your PDF document.",
    },
    {
      title: "Download PDF",
      description: "Save the PDF document to your device instantly.",
    },
  ],

  faq: [
    {
      question: "Is this image to PDF converter free?",
      answer: "Yes, it is completely free with no hidden charges or limits. You can convert unlimited images to PDF.",
    },
    {
      question: "Can I convert multiple images to one PDF?",
      answer: "Yes. You can upload multiple images and merge them into a single PDF document.",
    },
    {
      question: "Are my images uploaded to your server?",
      answer: "No. Everything happens locally inside your browser. Your images are never uploaded to any server.",
    },
    {
      question: "Which image formats are supported?",
      answer: "You can convert JPG, PNG, WEBP, AVIF, and most common image formats to PDF directly in your browser.",
    },
    {
      question: "Why should I convert images to PDF?",
      answer: "PDF files are perfect for sharing documents, printing images, submitting files, and keeping multiple images together in a single professional document.",
    },
    {
      question: "Does this work on mobile devices?",
      answer: "Yes, the image to PDF converter works on desktop, tablet, and mobile browsers.",
    },
  ],

  comparison: [
    {
      feature: "Document Type",
      from: "Individual Images",
      to: "Single PDF Document",
    },
    {
      feature: "Sharing",
      from: "Multiple Files",
      to: "One Easy-to-Share File",
    },
    {
      feature: "Best For",
      from: "Viewing Individual Images",
      to: "Documents, Printing, Submission",
    },
    {
      feature: "Quality",
      from: "Original",
      to: "Preserved (High Quality)",
    },
    {
      feature: "Privacy",
      from: "Local",
      to: "Local (No Uploads)",
    },
  ],

  relatedTools: [
    {
      title: "PDF to Image Converter",
      href: "/pdf-to-image",
    },
    {
      title: "Merge PDF",
      href: "/pdf-merge",
    },
    {
      title: "Image Compressor",
      href: "/image-compressor",
    },
    {
      title: "Image Resizer",
      href: "/image-resizer",
    },
    {
      title: "PNG to JPG Converter",
      href: "/png-to-jpg",
    },
    {
      title: "JPG to PNG Converter",
      href: "/jpg-to-png",
    },
  ],

  content: {
    introduction:
      "Convert one or multiple images into a PDF document directly inside your browser without uploading your files. This free image to PDF converter allows you to merge JPG, PNG, WEBP, and AVIF images into a professional PDF document quickly and securely. Everything runs locally on your device for maximum privacy and speed.",

    whyConvert:
      "PDF files are perfect for sharing documents, printing images, submitting files, and keeping multiple images together in a single document. Converting images to PDF makes it easy to share collections of photos, create portfolios, and prepare professional documents. PDF is the industry standard for document sharing and printing.",

    whyChoose:
      "PNG JPG Convert creates PDF files locally inside your browser. Your images never leave your device, ensuring complete privacy and fast processing. Unlike other online image to PDF converters that upload your images to their servers, we process everything on your device. This means faster conversion, complete privacy, and unlimited free usage.",

    comparisonText:
      "Images are ideal for viewing individual pictures, while PDF combines multiple images into one easy-to-share document. PDF files are also better for printing, as they maintain formatting across different devices. Converting images to PDF is essential for creating professional documents, portfolios, and reports.",

    privacy:
      "All PDF generation happens locally inside your browser. Your files are never uploaded or stored. No file is uploaded, stored, or shared with any server. Your privacy is guaranteed, and your images are processed entirely within your browser. You can convert with complete confidence.",

    conclusion:
      "Upload your images, convert them into a PDF in seconds, and download the final document instantly. This image to PDF converter is fast, secure, private, and completely free. Start converting your images to PDF now for professional documents every time.",
  },
};

export default imageToPdf;