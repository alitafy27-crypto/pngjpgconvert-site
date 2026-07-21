import type { ToolData } from "../tool.types";

const pdfMerge: ToolData = {
  slug: "pdf-merge",

  mode: "image-to-pdf",

  title: "Merge PDF",

  heroTitle: "Merge PDF Files Online",

  description:
    "Combine multiple PDF files into a single PDF directly inside your browser.",

  heroDescription:
    "Merge PDF documents quickly, securely and completely offline without uploading your files.",

  seoTitle:
    "Merge PDF Online - Combine PDF Files for Free",

  seoDescription:
    "Merge multiple PDF files into one document online for free. Fast, secure and browser-based PDF merger with no uploads required.",

  keywords: [
    "merge pdf",
    "combine pdf",
    "pdf merger",
    "join pdf",
    "merge pdf online",
    "free pdf merger",
    "combine pdf files",
  ],

  category: "PDF Tools",

  from: "PDF",

  to: "Merged PDF",

  inputMime: "application/pdf",

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
      "Merge multiple PDF files directly inside your browser without uploading your documents.",

    whyConvert:
      "Combining PDFs makes it easier to organize documents, create reports, submit files and share multiple pages as a single document.",

    whyChoose:
      "PNG JPG Convert merges PDF files locally inside your browser. Your documents never leave your device, ensuring complete privacy and fast processing.",

    comparisonText:
      "Instead of managing multiple PDF files separately, merging them creates one organized document that's easier to share and store.",

    privacy:
      "All PDF processing happens locally inside your browser. Your files are never uploaded or stored.",

    conclusion:
      "Select your PDF files, merge them in seconds and download a single combined PDF instantly.",
  },

  relatedTools: [
    {
      title: "Image to PDF",
      href: "/tools/image-to-pdf",
    },
    {
      title: "PDF to Image",
      href: "/tools/pdf-to-image",
    },
  ],
};

export default pdfMerge;