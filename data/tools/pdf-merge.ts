import type { ToolData } from "../tool.types";

const pdfMerge: ToolData = {
  slug: "pdf-merge",
  mode: "image-to-pdf",
  title: "Merge PDF",
  heroTitle: "Merge PDF - Free Online PDF Merger",

  description:
    "Merge multiple PDF files into one document instantly in your browser. Combine PDFs without uploading. Free, secure, and 100% private with no uploads.",

  heroDescription:
    "Merge PDF documents quickly, securely, and completely offline without uploading your files. No uploads, no registration, and completely private. The best free PDF merger online.",

  seoTitle:
    "Merge PDF Online - Combine PDF Files Free | 100% Private",

  seoDescription:
    "Merge multiple PDF files into one document online for free. Combine PDFs quickly and securely. Fast, secure, and private browser-based PDF merger. No uploads, instant downloads.",

  keywords: [
    "merge pdf",
    "combine pdf",
    "pdf merger",
    "join pdf",
    "merge pdf online",
    "free pdf merger",
    "combine pdf files",
    "pdf merge online",
    "merge pdf free",
    "combine pdf online",
    "pdf combiner",
    "free pdf combiner",
    "merge multiple pdf",
    "browser pdf merger",
    "join pdf files",
    "pdf merge tool",
  ],

  category: "PDF Tools",
  from: "PDF",
  to: "Merged PDF",
  inputMime: "application/pdf",
  outputMime: "application/pdf",
  outputExtension: "pdf",
  supportsQuality: false,
  icon: "📄",

  features: [
    {
      title: "Multiple PDFs",
      description: "Merge two or more PDF files into a single document.",
    },
    {
      title: "Reorder Pages",
      description: "Arrange PDFs in the order you want before merging.",
    },
    {
      title: "Preserve Quality",
      description: "Combine PDFs while maintaining original quality and formatting.",
    },
    {
      title: "100% Browser Based",
      description: "Everything runs locally inside your browser.",
    },
    {
      title: "100% Private",
      description: "Your PDF files are never uploaded to our servers.",
    },
    {
      title: "Free Forever",
      description: "Unlimited merges with no registration required.",
    },
  ],

  howTo: [
    {
      title: "Upload your PDFs",
      description: "Select or drag and drop the PDF files you want to merge.",
    },
    {
      title: "Arrange PDFs",
      description: "Order your PDF files in the sequence you want in the merged document.",
    },
    {
      title: "Merge PDFs",
      description: "Click the Merge button to combine all PDFs into one document.",
    },
    {
      title: "Download merged PDF",
      description: "Save the combined PDF document to your device instantly.",
    },
  ],

  faq: [
    {
      question: "Is this PDF merger free?",
      answer: "Yes, it is completely free with no hidden charges or limits. You can merge unlimited PDF files.",
    },
    {
      question: "How many PDFs can I merge?",
      answer: "You can merge multiple PDF files into one document. There is no limit on the number of files you can combine.",
    },
    {
      question: "Are my PDF files uploaded to your server?",
      answer: "No. Everything happens locally inside your browser. Your PDF files are never uploaded to any server.",
    },
    {
      question: "Will the quality of my PDFs change?",
      answer: "No. Merging PDFs preserves the original quality and formatting of all your documents.",
    },
    {
      question: "Why should I merge PDF files?",
      answer: "Combining PDFs makes it easier to organize documents, create reports, submit files, and share multiple pages as a single document. It saves time and simplifies document management.",
    },
    {
      question: "Does this work on mobile devices?",
      answer: "Yes, the PDF merger works on desktop, tablet, and mobile browsers.",
    },
  ],

  comparison: [
    {
      feature: "Document Type",
      from: "Multiple PDF Files",
      to: "Single PDF Document",
    },
    {
      feature: "Organization",
      from: "Multiple Separate Files",
      to: "One Organized Document",
    },
    {
      feature: "Sharing",
      from: "Multiple Files",
      to: "One Easy-to-Share File",
    },
    {
      feature: "Best For",
      from: "Individual Documents",
      to: "Reports, Submissions, Combined Content",
    },
    {
      feature: "Privacy",
      from: "Local",
      to: "Local (No Uploads)",
    },
  ],

  relatedTools: [
    {
      title: "Image to PDF",
      href: "/image-to-pdf",
    },
    {
      title: "PDF to Image",
      href: "/pdf-to-image",
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
      "Merge multiple PDF files directly inside your browser without uploading your documents. This free PDF merger allows you to combine two or more PDF files into a single document quickly and securely. Everything runs locally on your device for maximum privacy and speed.",

    whyConvert:
      "Combining PDFs makes it easier to organize documents, create reports, submit files, and share multiple pages as a single document. Merging PDFs simplifies document management, reduces file clutter, and makes sharing content more professional. This is essential for business, education, and personal document management.",

    whyChoose:
      "PNG JPG Convert merges PDF files locally inside your browser. Your documents never leave your device, ensuring complete privacy and fast processing. Unlike other online PDF mergers that upload your files to their servers, we process everything on your device. This means faster merging, complete privacy, and unlimited free usage.",

    comparisonText:
      "Instead of managing multiple PDF files separately, merging them creates one organized document that's easier to share and store. A single merged PDF is more professional, easier to distribute, and simpler to manage than multiple separate files. Merging is essential for creating comprehensive reports and documents.",

    privacy:
      "All PDF processing happens locally inside your browser. Your files are never uploaded or stored. No file is uploaded, stored, or shared with any server. Your privacy is guaranteed, and your documents are processed entirely within your browser. You can merge with complete confidence.",

    conclusion:
      "Select your PDF files, merge them in seconds, and download a single combined PDF instantly. This PDF merger is fast, secure, private, and completely free. Start merging your PDF files now for professional document management.",
  },
};

export default pdfMerge;