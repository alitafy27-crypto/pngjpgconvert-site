import type { ToolData } from "../tool.types";

const pdfToImage: ToolData = {
  slug: "pdf-to-image",
  mode: "convert",
  title: "PDF to Image",
  heroTitle: "PDF to Image - Free Online PDF to Image Converter",

  description:
    "Convert PDF pages to images instantly in your browser. Extract each page as JPG or PNG. Free, secure, and 100% private with no uploads.",

  heroDescription:
    "Extract every PDF page as an image without uploading your files. Fast, secure, and browser-based. No uploads, no registration, and completely private. The best free PDF to image converter online.",

  seoTitle:
    "PDF to Image Converter - Convert PDF Pages to JPG & PNG Free | 100% Private",

  seoDescription:
    "Convert PDF pages to JPG or PNG images online for free. Extract every page as an image. Fast, secure, and private browser-based PDF to image converter. No uploads, instant downloads.",

  keywords: [
    "pdf to image",
    "pdf to png",
    "pdf to jpg",
    "convert pdf to image",
    "extract pdf pages",
    "online pdf converter",
    "free pdf to image",
    "pdf to image online",
    "pdf to image free",
    "pdf to jpg converter",
    "pdf to png converter",
    "convert pdf pages to images",
    "browser pdf to image",
    "free pdf to jpg",
    "pdf image extractor",
    "pdf to photo",
  ],

  category: "PDF Tools",
  from: "PDF",
  to: "Image",
  inputMime: "application/pdf",
  outputMime: "image/png",
  outputExtension: "png",
  supportsQuality: false,
  icon: "🖼️",

  features: [
    {
      title: "Extract All Pages",
      description: "Convert every page of your PDF into a separate image.",
    },
    {
      title: "Multiple Formats",
      description: "Save pages as JPG or PNG images.",
    },
    {
      title: "High Quality",
      description: "Extract images with excellent quality and clarity.",
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
      description: "Unlimited conversions with no registration required.",
    },
  ],

  howTo: [
    {
      title: "Upload your PDF",
      description: "Select or drag and drop the PDF file you want to convert.",
    },
    {
      title: "Choose image format",
      description: "Select JPG or PNG as your output format.",
    },
    {
      title: "Convert to images",
      description: "Click the Convert button to extract PDF pages as images.",
    },
    {
      title: "Download images",
      description: "Save the extracted images to your device instantly.",
    },
  ],

  faq: [
    {
      question: "Is this PDF to image converter free?",
      answer: "Yes, it is completely free with no hidden charges or limits. You can convert unlimited PDF files.",
    },
    {
      question: "Can I choose the output image format?",
      answer: "Yes. You can choose between JPG and PNG formats for your extracted images.",
    },
    {
      question: "Are my PDF files uploaded to your server?",
      answer: "No. Everything happens locally inside your browser. Your PDF files are never uploaded to any server.",
    },
    {
      question: "How many pages can I extract?",
      answer: "You can extract all pages from your PDF file. Each page will be converted to a separate image.",
    },
    {
      question: "Why should I convert PDF to images?",
      answer: "Extracting PDF pages as images is useful for presentations, websites, social media, design projects, and sharing individual pages without sharing the entire document.",
    },
    {
      question: "Does this work on mobile devices?",
      answer: "Yes, the PDF to image converter works on desktop, tablet, and mobile browsers.",
    },
  ],

  comparison: [
    {
      feature: "Document Type",
      from: "PDF Document",
      to: "Multiple Images",
    },
    {
      feature: "Page Extraction",
      from: "All Pages in One File",
      to: "Each Page as Separate Image",
    },
    {
      feature: "Best For",
      from: "Documents, Reports",
      to: "Websites, Social Media, Design",
    },
    {
      feature: "Sharing",
      from: "One PDF File",
      to: "Individual Images",
    },
    {
      feature: "Privacy",
      from: "Local",
      to: "Local (No Uploads)",
    },
  ],

  relatedTools: [
    {
      title: "Image to PDF Converter",
      href: "/image-to-pdf",
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
      "Convert PDF pages into high-quality images directly inside your browser without uploading your files. This free PDF to image converter allows you to extract every page of your PDF as a JPG or PNG image quickly and securely. Everything runs locally on your device for maximum privacy and speed.",

    whyConvert:
      "Extracting PDF pages as images is useful for presentations, websites, social media, design projects, and sharing individual pages. Converting PDF to images makes it easy to reuse content, create visual materials, and share specific pages without sharing the entire document. This is essential for content creators and professionals.",

    whyChoose:
      "PNG JPG Convert processes every PDF locally inside your browser. Your documents never leave your device, ensuring complete privacy and fast conversion. Unlike other online PDF to image converters that upload your files to their servers, we process everything on your device. This means faster conversion, complete privacy, and unlimited free usage.",

    comparisonText:
      "PDF files are ideal for documents, while image files make it easier to edit, share, and reuse individual pages. PDFs are perfect for professional documents, while images are better for visual content, social media, and web use. Converting PDF to images gives you the best of both worlds.",

    privacy:
      "All PDF processing happens locally inside your browser. Your files are never uploaded or stored. No file is uploaded, stored, or shared with any server. Your privacy is guaranteed, and your documents are processed entirely within your browser. You can convert with complete confidence.",

    conclusion:
      "Upload your PDF, convert every page into images, and download the results instantly. This PDF to image converter is fast, secure, private, and completely free. Start converting your PDF files to images now for easy sharing and reuse.",
  },
};

export default pdfToImage;