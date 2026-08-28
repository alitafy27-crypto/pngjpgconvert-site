import type { ToolData } from "../tool.types";

const pngToJpg: ToolData = {
  /**
   * ------------------------------------------------------------------
   * CORE IDENTITY
   * ------------------------------------------------------------------
   */

  slug: "png-to-jpg",

  mode: "convert",

  title: "PNG to JPG Converter",

  heroTitle: "Convert PNG to JPG Online",

  description:
    "Convert PNG to JPG online for free. Choose JPEG quality, convert your image in your browser, and download the JPG file.",

  heroDescription:
    "Convert PNG to JPG in seconds. Select a PNG image, choose your JPEG quality, convert it directly in your browser, and download the result.",

  /**
   * ------------------------------------------------------------------
   * SEO METADATA
   * ------------------------------------------------------------------
   */

  seoTitle:
    "PNG to JPG Converter - Convert PNG to JPG Online Free",

  seoDescription:
    "Convert PNG to JPG online for free. Choose JPEG quality and create a JPG image directly in your browser with no account required.",

  keywords: [
    "png to jpg",
    "png to jpg converter",
    "convert png to jpg",
    "png to jpeg",
    "png to jpg online",
    "free png to jpg converter",
  ],

  seo: {
    primaryKeyword: "png to jpg",

    secondaryKeywords: [
      "png to jpg converter",
      "convert png to jpg",
      "png to jpeg",
      "png to jpg online",
      "convert png image to jpg",
      "free png to jpg converter",
    ],

    searchIntent: "convert",

    keywordVariants: [
      "convert PNG to JPEG",
      "PNG image to JPG",
      "change PNG to JPG",
      "turn PNG into JPG",
      "PNG JPEG converter",
      "save PNG as JPG",
      "change PNG image to JPEG",
      "convert a PNG image to JPEG",
      "make a JPG from a PNG",
    ],

    targetAudience: [
      "general users",
      "web developers",
      "designers",
      "photographers",
      "content creators",
      "students",
      "business users",
    ],

    searchEntity: "PNG to JPG image conversion",

    canonicalPath: "/png-to-jpg",

    indexable: true,
  },

  /**
   * ------------------------------------------------------------------
   * CLASSIFICATION
   * ------------------------------------------------------------------
   */

  category: "Image Converter",

  icon: "🖼️",

  /**
   * ------------------------------------------------------------------
   * CONVERSION
   * ------------------------------------------------------------------
   */

  from: "PNG",

  to: "JPG",

  inputMime: "image/png",

  outputMime: "image/jpeg",

  outputExtension: "jpg",

  /**
   * ------------------------------------------------------------------
   * CAPABILITIES
   * ------------------------------------------------------------------
   */

  supportsQuality: true,

  capabilities: {
    inputFormats: ["PNG"],

    outputFormats: ["JPG", "JPEG"],

    supportsMultipleFiles: false,

    supportsBatch: false,

    supportsQuality: true,

    supportsTransparency: false,

    supportsAnimation: false,

    supportsLossless: false,

    supportsLossy: true,
  },

  /**
   * ------------------------------------------------------------------
   * USER BENEFITS
   * ------------------------------------------------------------------
   */

  features: [
    {
      title: "Fast PNG to JPG Conversion",
      description:
        "Convert a PNG image to JPG through a simple browser-based workflow without unnecessary steps.",
    },

    {
      title: "Adjustable JPEG Quality",
      description:
        "Choose a JPEG quality level to balance visual detail and output file size for your image.",
    },

    {
      title: "No Account Required",
      description:
        "Convert your PNG image without creating an account or completing a registration process.",
    },

    {
      title: "Useful for Smaller Image Files",
      description:
        "JPEG compression can produce smaller files than PNG for many photographs and complex images.",
    },

    {
      title: "Works in Modern Browsers",
      description:
        "Use the converter from supported desktop, tablet, and mobile browsers without installing separate software.",
    },

    {
      title: "Simple JPG Download",
      description:
        "Review the converted image and download the resulting JPG file directly to your device.",
    },
  ],

  /**
   * ------------------------------------------------------------------
   * HOW TO USE
   * ------------------------------------------------------------------
   */

  howTo: [
    {
      title: "Select a PNG image",
      description:
        "Choose the PNG image you want to convert from your device or drag it into the converter.",
    },

    {
      title: "Choose JPEG quality",
      description:
        "Adjust the JPEG quality to balance image detail and file size according to your needs.",
    },

    {
      title: "Convert PNG to JPG",
      description:
        "Start the conversion and let your browser create the JPG version of your PNG image.",
    },

    {
      title: "Download the JPG file",
      description:
        "Review the converted image and download the resulting JPG file to your device.",
    },
  ],

  howToConfig: {
    estimatedTime: "Less than a minute",

    totalSteps: 4,

    difficulty: "easy",

    requirements: [
      "A supported modern web browser",
      "A PNG image",
      "Sufficient device memory for the image",
    ],

    introduction:
      "Converting PNG to JPG takes four simple steps. Select your PNG image, choose a JPEG quality level, convert the image, and download the resulting JPG file.",

    conclusion:
      "After conversion, review the JPG image to make sure its appearance, background, dimensions, and file size meet your needs.",

    tips: [
      "Use higher JPEG quality when preserving fine image details is important.",
      "Use lower JPEG quality when reducing file size is the main priority.",
      "Keep the original PNG if you may need transparency or lossless editing later.",
      "Check transparent PNG images after conversion because JPG does not preserve transparency.",
    ],

    commonMistakes: [
      "Converting a transparent PNG without checking the resulting background.",
      "Using extremely low JPEG quality simply to minimize file size.",
      "Deleting the original PNG before reviewing the converted JPG.",
      "Using JPG when lossless image preservation is required.",
    ],

    troubleshooting: [
      "If the JPG looks too compressed, increase the JPEG quality and convert the image again.",
      "If transparency is missing, this is expected because standard JPG images do not support transparency.",
      "If a very large PNG takes longer to process, allow the browser additional time and memory.",
      "If conversion does not start, try an up-to-date version of a supported browser.",
    ],
  },

  /**
   * ------------------------------------------------------------------
   * FAQ
   * ------------------------------------------------------------------
   */

  faq: [
    {
      question: "How do I convert PNG to JPG?",
      answer:
        "Select or drag a PNG image into the converter, choose your preferred JPEG quality, start the conversion, and download the resulting JPG file.",
      category: "general",
      priority: 1,
    },

    {
      question: "Is this PNG to JPG converter free?",
      answer:
        "Yes. The PNG to JPG converter is free to use and does not require an account.",
      category: "general",
      priority: 2,
    },

    {
      question: "Is JPG the same as JPEG?",
      answer:
        "Yes. JPG and JPEG refer to the same image format. Both .jpg and .jpeg are commonly used file extensions for JPEG images.",
      category: "format",
      priority: 1,
    },

    {
      question: "Does converting PNG to JPG reduce image quality?",
      answer:
        "It can. PNG uses lossless compression, while JPG uses lossy compression. Higher JPEG quality settings generally preserve more visible detail while producing larger files.",
      category: "quality",
      priority: 1,
    },

    {
      question: "Does JPG support transparent backgrounds?",
      answer:
        "No. Standard JPG images do not support transparency. Transparent areas in a PNG therefore cannot remain transparent after conversion to JPG.",
      category: "format",
      priority: 1,
    },

    {
      question: "Why convert PNG to JPG?",
      answer:
        "PNG to JPG conversion can be useful when you need a more compact image file, especially for photographs and complex images where transparency and lossless compression are not required.",
      category: "general",
      priority: 1,
    },

    {
      question: "What is the difference between PNG and JPG?",
      answer:
        "PNG uses lossless compression and supports transparency, while JPG uses lossy compression and is commonly more efficient for photographs and other images where smaller file sizes are useful.",
      category: "format",
      priority: 1,
    },

    {
      question: "Can I convert PNG to JPG on my phone?",
      answer:
        "Yes. You can use the converter from a supported mobile browser. Very large images may require additional device memory and processing time.",
      category: "technical",
      priority: 2,
    },

    {
      question: "Do I need to install software?",
      answer:
        "No. The converter is designed to work in a modern web browser, so a separate image conversion application is not required.",
      category: "general",
      priority: 3,
    },

    {
      question: "Do I need an account?",
      answer:
        "No. You can use the PNG to JPG converter without creating an account.",
      category: "general",
      priority: 3,
    },

    {
      question: "Will converting PNG to JPG make the file smaller?",
      answer:
        "It often can, particularly for photographs and complex images. The final file size depends on the image content, dimensions, and selected JPEG quality.",
      category: "quality",
      priority: 2,
    },

    {
      question: "Can I convert a large PNG image?",
      answer:
        "Yes, but large images can require more browser memory and processing time. If processing is slow, allow the operation more time or resize the image before conversion.",
      category: "limits",
      priority: 2,
    },

    {
      question: "What happens to transparency when PNG is converted to JPG?",
      answer:
        "JPG does not support transparency, so transparent areas from the PNG must be rendered against a background in the resulting JPG image.",
      category: "format",
      priority: 2,
    },

    {
      question: "Can I convert PNG to JPEG instead of JPG?",
      answer:
        "Yes. JPG and JPEG are two commonly used file extensions for the same JPEG image format.",
      category: "format",
      priority: 2,
    },
  ],

  /**
   * ------------------------------------------------------------------
   * PNG VS JPG COMPARISON
   * ------------------------------------------------------------------
   */

  comparison: [
    {
      feature: "Compression",
      from: "Lossless",
      to: "Lossy",
    },

    {
      feature: "Transparency",
      from: "Supported",
      to: "Not supported",
    },

    {
      feature: "Typical file size",
      from: "Often larger for photographs",
      to: "Often smaller for photographs",
    },

    {
      feature: "Best suited for",
      from: "Graphics, screenshots, logos, icons, and transparent images",
      to: "Photographs, web images, sharing, and storage",
    },

    {
      feature: "Image quality",
      from: "Preserves image information through lossless compression",
      to: "Quality depends on the selected JPEG compression level",
    },

    {
      feature: "Repeated editing",
      from: "Better when preserving original image data matters",
      to: "Repeated JPEG re-saving can introduce additional compression",
    },

    {
      feature: "Transparency workflow",
      from: "Suitable for transparent graphics",
      to: "Requires a solid background",
    },
  ],

  /**
   * ------------------------------------------------------------------
   * RELATED TOOLS
   * ------------------------------------------------------------------
   */

  relatedTools: [
    {
      title: "JPG to PNG Converter",
      href: "/jpg-to-png",
      relation: "alternative",
      priority: 1,
    },

    {
      title: "PNG to WebP Converter",
      href: "/png-to-webp",
      relation: "alternative",
      priority: 2,
    },

    {
      title: "PNG to AVIF Converter",
      href: "/png-to-avif",
      relation: "alternative",
      priority: 3,
    },

    {
      title: "Image Compressor",
      href: "/image-compressor",
      relation: "related",
      priority: 1,
    },

    {
      title: "Image Resizer",
      href: "/image-resizer",
      relation: "related",
      priority: 2,
    },

    {
      title: "WebP to JPG Converter",
      href: "/webp-to-jpg",
      relation: "related",
      priority: 3,
    },
  ],

  links: {
    relatedTools: [
      {
        title: "JPG to PNG Converter",
        href: "/jpg-to-png",
        relation: "alternative",
        priority: 1,
      },

      {
        title: "PNG to WebP Converter",
        href: "/png-to-webp",
        relation: "alternative",
        priority: 2,
      },

      {
        title: "PNG to AVIF Converter",
        href: "/png-to-avif",
        relation: "alternative",
        priority: 3,
      },

      {
        title: "Image Compressor",
        href: "/image-compressor",
        relation: "related",
        priority: 4,
      },

      {
        title: "Image Resizer",
        href: "/image-resizer",
        relation: "related",
        priority: 5,
      },
    ],

    relatedArticles: [
      {
        title: "How to Convert PNG to JPG",
        href: "/blog/how-to-convert-png-to-jpg",
        relation: "related",
        priority: 1,
      },

      {
        title: "PNG vs JPG: Which Image Format Should You Use?",
        href: "/blog/png-vs-jpg",
        relation: "related",
        priority: 2,
      },
    ],

    parentTool: "/tools",

    categorySlug: "image-converter",

    hubUrl: "/tools",

    popularRelatedTools: [
      {
        title: "Image Compressor",
        href: "/image-compressor",
        relation: "recommended",
        priority: 1,
      },

      {
        title: "Image Resizer",
        href: "/image-resizer",
        relation: "recommended",
        priority: 2,
      },
    ],

    conversionAlternatives: [
      {
        title: "PNG to WebP Converter",
        href: "/png-to-webp",
        relation: "alternative",
        priority: 1,
      },

      {
        title: "PNG to AVIF Converter",
        href: "/png-to-avif",
        relation: "alternative",
        priority: 2,
      },
    ],

    nextTools: [
      {
        title: "Image Compressor",
        href: "/image-compressor",
        relation: "next",
        priority: 1,
      },

      {
        title: "Image Resizer",
        href: "/image-resizer",
        relation: "next",
        priority: 2,
      },
    ],

    contextualLinks: [
      {
        title: "JPG to PNG Converter",
        href: "/jpg-to-png",
        relation: "conversion",
        priority: 1,
      },

      {
        title: "PNG to WebP Converter",
        href: "/png-to-webp",
        relation: "conversion",
        priority: 2,
      },

      {
        title: "Image Compressor",
        href: "/image-compressor",
        relation: "related",
        priority: 3,
      },
    ],
  },

  /**
   * ------------------------------------------------------------------
   * PRIVACY / TRUST
   * ------------------------------------------------------------------
   */

  privacyConfig: {
    processingMode: "browser",

    isClientSide: true,

    uploadRequired: false,

    privacySummary:
      "The conversion is performed directly in your browser, so the original image does not need to be uploaded to a conversion server.",

    securityNote:
      "When the browser-based processing workflow is used, the image is converted locally on your device rather than being sent to a server for conversion.",

    dataRetention:
      "The browser-based conversion workflow does not require storing the original image on our servers.",

    offlineCapable: false,

    privacyBadge: true,

    trustPoints: [
      "Browser-based image processing",
      "No account required",
      "No server-side image storage required",
      "Adjustable JPEG quality",
      "Works with modern browsers",
    ],

    noRegistration: true,
  },

  /**
   * ------------------------------------------------------------------
   * SEO / EDUCATIONAL CONTENT
   * ------------------------------------------------------------------
   */

  content: {
    introduction:
      "PNG is a lossless image format commonly used for graphics, screenshots, logos, icons, and images that require transparency. JPG, also known as JPEG, uses lossy compression and is often a practical choice when a smaller file size is more important than lossless image data. This PNG to JPG converter lets you create a JPG version of a PNG image directly in your browser.",

    whyConvert:
      "Converting PNG to JPG can make an image easier to upload, share, store, or use with platforms that accept JPEG files. JPG is particularly useful for photographs and complex images because its compression can reduce file size while maintaining useful visual quality at an appropriate setting.",

    whyChoose:
      "PNG JPG Convert provides a focused PNG to JPG workflow with a simple conversion process. Select your PNG image, choose the JPEG quality, convert it in your browser, and download the resulting JPG file without creating an account.",

    comparisonText:
      "PNG and JPG are designed for different purposes. PNG uses lossless compression and supports transparency, making it useful for logos, screenshots, icons, graphics, and images where preserving image data matters. JPG uses lossy compression and is commonly preferred for photographs and other complex images where smaller files are more practical. Because JPG does not support transparency, transparent areas in a PNG cannot remain transparent after conversion.",

    privacy:
      "This tool uses browser-based image processing. When the conversion runs locally in the browser, the original image does not need to be transferred to a conversion server. This can reduce unnecessary file transfers and keeps the conversion workflow on your device. Privacy statements should always reflect the application's actual processing behavior.",

    conclusion:
      "PNG to JPG conversion is useful when you need a JPEG image that is generally smaller and widely supported, and you do not need transparency or lossless compression. Choose an appropriate quality level, convert the PNG image, review the result, and download the JPG file.",

    useCases: [
      "Convert PNG photographs to JPEG for more compact file sizes.",
      "Prepare images for websites that accept JPG or JPEG.",
      "Create JPG copies for email attachments and document workflows.",
      "Prepare non-transparent images for general sharing.",
      "Reduce storage requirements when lossless PNG compression is unnecessary.",
      "Create JPEG versions of PNG images for compatible platforms.",
    ],

    tips: [
      "Use higher JPEG quality when preserving fine image details is important.",
      "Use lower quality when reducing file size is the main priority.",
      "Keep the original PNG when transparency may be needed later.",
      "JPG is often more space-efficient than PNG for photographs.",
      "Review transparent PNG images after conversion because JPG cannot preserve transparency.",
    ],

    bestFor: [
      "Photographs",
      "Web images",
      "Email attachments",
      "General image sharing",
      "Storage optimization",
      "Images that do not require transparency",
    ],

    notIdealFor: [
      "Images requiring transparent backgrounds",
      "Graphics requiring lossless compression",
      "Workflows where original image data must be preserved",
      "Images that will be repeatedly edited and re-saved as JPEG",
    ],

    commonMistakes: [
      "Converting transparent PNG images without checking the resulting background.",
      "Choosing extremely low JPEG quality just to minimize file size.",
      "Deleting the original PNG before reviewing the converted image.",
      "Using JPG when lossless image preservation is required.",
    ],

    troubleshooting: [
      "If the output looks too compressed, increase the JPEG quality setting and convert again.",
      "If transparency is lost, use the original PNG or another format that supports transparency.",
      "If a very large PNG takes longer to process, the browser may need additional memory and processing time.",
      "If conversion does not start, try an up-to-date supported browser.",
    ],
  },

  /**
   * ------------------------------------------------------------------
   * STRUCTURED DATA
   * ------------------------------------------------------------------
   *
   * FAQ and HowTo rich-result eligibility should not be assumed.
   * Google removed FAQ rich-result eligibility for general sites
   * and deprecated HowTo rich results.
   *
   * Keep these disabled unless your own schema implementation has
   * another explicit purpose beyond Google rich-result eligibility.
   */

  schema: {
    schemaType: "WebApplication",

    schemaName: "PNG to JPG Converter",

    schemaDescription:
      "A free browser-based tool for converting PNG images to JPG format with adjustable JPEG quality.",

    schemaCategory: "Image Conversion",

    howToSchemaEnabled: false,

    faqSchemaEnabled: false,

    breadcrumbEnabled: true,

    softwareApplicationSchema: true,

    applicationFeature:
      "Convert PNG images to JPG in a modern web browser with adjustable JPEG quality.",

    schemaVersion: "3.0",
  },
};

export default pngToJpg;