import type { ToolData } from "../tool.types";

const pdfToImage: ToolData = {
  slug: "pdf-to-image",

  mode: "convert",

  title: "PDF to Image",

  heroTitle: "Convert PDF to Images",

  description:
    "Convert PDF pages into high-quality images directly inside your browser.",

  heroDescription:
    "Extract every PDF page as an image without uploading your files. Fast, secure and browser-based.",

  seoTitle:
    "PDF to Image Converter - Convert PDF Pages to Images Online Free",

  seoDescription:
    "Convert PDF pages to JPG or PNG images online for free. Fast, secure and browser-based PDF to image conversion with no uploads required.",

  keywords: [
    "pdf to image",
    "pdf to png",
    "pdf to jpg",
    "convert pdf to image",
    "extract pdf pages",
    "online pdf converter",
    "free pdf to image",
  ],

  category: "PDF Tools",

  from: "PDF",
  to: "Image",

  inputMime: "application/pdf",
  outputMime: "image/png",

  outputExtension: "png",

  supportsQuality: false,

  icon: "🖼️",

  features: [],

  howTo: [],

  faq: [],

  comparison: [],

  content: {
    introduction:
      "Convert PDF pages into high-quality images directly inside your browser without uploading your files.",

    whyConvert:
      "Extracting PDF pages as images is useful for presentations, websites, social media, design projects and sharing individual pages.",

    whyChoose:
      "PNG JPG Convert processes every PDF locally inside your browser. Your documents never leave your device, ensuring complete privacy and fast conversion.",

    comparisonText:
      "PDF files are ideal for documents, while image files make it easier to edit, share and reuse individual pages.",

    privacy:
      "All PDF processing happens locally inside your browser. Your files are never uploaded or stored.",

    conclusion:
      "Upload your PDF, convert every page into images and download the results instantly.",
  },

  relatedTools: [
    {
      title: "Image to PDF",
      href: "/tools/image-to-pdf",
    },
    {
      title: "Merge PDF",
      href: "/tools/pdf-merge",
    },
  ],
};

export default pdfToImage;