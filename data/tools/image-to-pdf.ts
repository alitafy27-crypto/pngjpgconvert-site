import type { ToolData } from "../tool.types";

const imageToPdf: ToolData = {
  slug: "image-to-pdf",

  mode: "convert",

  title: "Image to PDF",
  heroTitle: "Convert Images to PDF",

  description:
    "Convert JPG, PNG, WEBP and AVIF images into PDF directly inside your browser.",

  heroDescription:
    "Merge one or multiple images into a high-quality PDF document without uploading your files.",

  seoTitle:
    "Image to PDF Converter - Convert JPG & PNG to PDF Online Free",

  seoDescription:
    "Convert JPG, PNG, WEBP and AVIF images into PDF online for free. Fast, secure and browser-based PDF conversion with no uploads required.",

  keywords: [
    "image to pdf",
    "jpg to pdf",
    "png to pdf",
    "webp to pdf",
    "avif to pdf",
    "convert image to pdf",
    "online image to pdf",
    "free image to pdf",
  ],

  category: "PDF Tools",

  from: "Image",
  to: "PDF",

  inputMime: "image/*",
  outputMime: "application/pdf",

  outputExtension: "pdf",

  supportsQuality: false,

  icon: "📄",

  features: [],

  howTo: [],

  faq: [],

  comparison: [],

  content: {
    introduction:
      "Convert one or multiple images into a PDF document directly inside your browser without uploading your files.",

    whyConvert:
      "PDF files are perfect for sharing documents, printing images, submitting files and keeping multiple images together in a single document.",

    whyChoose:
      "PNG JPG Convert creates PDF files locally inside your browser. Your images never leave your device, ensuring complete privacy and fast processing.",

    comparisonText:
      "Images are ideal for viewing individual pictures, while PDF combines multiple images into one easy-to-share document.",

    privacy:
      "All PDF generation happens locally inside your browser. Your files are never uploaded or stored.",

    conclusion:
      "Upload your images, convert them into a PDF in seconds and download the final document instantly.",
  },

  relatedTools: [],
};

export default imageToPdf;