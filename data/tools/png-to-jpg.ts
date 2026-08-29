import type { ToolData } from "../tool.types";

const pngToJpg: ToolData = {
  /**
   * ------------------------------------------------------------------
   * CORE IDENTITY
   * ------------------------------------------------------------------
   */

  slug: "png-to-jpg",

  mode: "convert",

  // 1. عنوان محسّن مع كلمات مفتاحية رئيسية وفوائد
  title: "PNG to JPG Converter - Convert PNG to JPG Online Free | Adjustable Quality",

  // 2. عنوان رئيسي محسّن مع كلمات مفتاحية وفوائد
  heroTitle: "Free Online PNG to JPG Converter - Convert PNG Images to JPG with Adjustable Quality",

  // 3. وصف محسّن مع كلمات مفتاحية وفوائد محددة
  description:
    "Convert PNG to JPG online free with our fast, secure image converter. Choose JPEG quality and reduce file size instantly. 100% private browser-based tool with no uploads. Best free PNG to JPG converter.",

  // 4. وصف رئيسي محسّن مع كلمات مفتاحية وفوائد
  heroDescription:
    "Convert PNG images to JPG format online for free. Choose JPEG quality, reduce file size, and download instantly. No uploads, no registration, 100% private. The best free PNG to JPG converter for photos and web images.",

  /**
   * ------------------------------------------------------------------
   * SEO METADATA
   * ------------------------------------------------------------------
   */

  // 5. عنوان SEO محسّن مع كلمات مفتاحية قوية
  seoTitle:
    "PNG to JPG Converter - Free Online PNG to JPG Conversion | Adjustable JPEG Quality",

  // 6. وصف SEO محسّن مع كلمات مفتاحية ودعوة للعمل
  seoDescription:
    "Convert PNG to JPG online free with adjustable JPEG quality. Reduce file size while maintaining quality. Fast, secure, and private browser-based PNG to JPG converter. No uploads, unlimited usage.",

  // 7. كلمات مفتاحية موسعة (40 كلمة مفتاحية)
  keywords: [
    "png to jpg",
    "png to jpg converter",
    "convert png to jpg",
    "png to jpeg",
    "png to jpg online",
    "free png to jpg converter",
    "convert png to jpeg",
    "png image to jpg",
    "change png to jpg",
    "turn png into jpg",
    "png jpeg converter",
    "save png as jpg",
    "png to jpg free",
    "png to jpg online free",
    "convert png to jpg free",
    "best png to jpg converter",
    "png to jpg no upload",
    "png to jpg browser",
    "png to jpg quality",
    "png to jpg file size",
    "batch png to jpg",
    "convert png photos to jpg",
    "png to jpg converter tool",
    "free online image converter png to jpg",
    "png to jpg lossy",
    "png to jpg high quality",
    "png to jpg compress",
    "png to jpg reduce size",
    "png to jpg mobile",
    "png to jpg mac",
    "png to jpg windows",
    "png to jpg chromebook",
    "png to jpg photoshop",
    "png to jpg web optimization",
    "change png image to jpeg",
    "convert png to jpg online free",
    "png to jpg lossless to lossy",
    "png to jpg transparent background",
    "png to jpg image conversion",
    "free png to jpg converter online",
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
      "png to jpg free online",
      "best png to jpg converter",
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
      "PNG to JPG file converter",
    ],

    targetAudience: [
      "general users",
      "web developers",
      "designers",
      "photographers",
      "content creators",
      "students",
      "business users",
      "marketing professionals",
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
   * USER BENEFITS - محسّنة
   * ------------------------------------------------------------------
   */

  features: [
    {
      title: "Convert PNG to JPG with Adjustable JPEG Quality",
      description:
        "Choose your preferred JPEG quality level from 1-100. Balance image quality and file size for your specific needs.",
    },

    {
      title: "Reduce File Size Significantly",
      description:
        "JPEG compression can reduce file size by up to 80% compared to PNG for photographs and complex images.",
    },

    {
      title: "100% Browser-Based PNG to JPG Converter",
      description:
        "Everything runs locally inside your browser. No uploads, no servers, complete privacy and instant processing.",
    },

    {
      title: "Complete Privacy & Security",
      description:
        "Your PNG images are never uploaded to any server. All conversion happens locally on your device.",
    },

    {
      title: "Universal JPG Compatibility",
      description:
        "JPG is supported by virtually every device, browser, application, and platform worldwide.",
    },

    {
      title: "Unlimited Free PNG to JPG Conversions",
      description:
        "Convert unlimited PNG images to JPG with no registration, no limits, and no hidden fees. Completely free forever.",
    },
  ],

  /**
   * ------------------------------------------------------------------
   * HOW TO USE - محسّنة
   * ------------------------------------------------------------------
   */

  howTo: [
    {
      title: "Upload Your PNG Image",
      description:
        "Select or drag and drop the PNG image you want to convert to JPG. Supports all PNG files.",
    },

    {
      title: "Choose JPEG Quality Level",
      description:
        "Adjust the JPEG quality slider from 1-100. Higher quality preserves more detail, lower quality reduces file size.",
    },

    {
      title: "Convert PNG to JPG",
      description:
        "Click the Convert button to start the PNG to JPG conversion. Everything processes locally in your browser.",
    },

    {
      title: "Download Your JPG Image",
      description:
        "Download your converted JPG image instantly. Save it to your device for sharing or web use.",
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
      "Use higher JPEG quality (85-95%) when preserving fine image details is important.",
      "Use lower JPEG quality (60-75%) when reducing file size is the main priority.",
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
   * FAQ - موسعة (12 سؤال)
   * ------------------------------------------------------------------
   */

  faq: [
    {
      question: "How do I convert PNG to JPG online?",
      answer:
        "Simply upload your PNG image, choose your preferred JPEG quality level, click Convert, and download your JPG file. It's that easy!",
      category: "general",
      priority: 1,
    },

    {
      question: "Is this PNG to JPG converter completely free?",
      answer:
        "Yes, our PNG to JPG converter is 100% free with no hidden charges, limits, or registration. You can convert unlimited PNG images to JPG without any cost.",
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
      question: "Will converting PNG to JPG reduce image quality?",
      answer:
        "It can. PNG uses lossless compression, while JPG uses lossy compression. Higher JPEG quality settings (85-95%) generally preserve more visible detail while producing larger files.",
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
        "PNG to JPG conversion is useful when you need a more compact image file, especially for photographs and complex images where transparency and lossless compression are not required.",
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
      question: "What JPEG quality setting should I use?",
      answer:
        "For high-quality photos, use 85-95%. For web use, 75-85% offers a good balance. For email or sharing, 60-75% reduces file size while maintaining decent quality.",
      category: "quality",
      priority: 2,
    },

    {
      question: "Will converting PNG to JPG make the file smaller?",
      answer:
        "It often can, particularly for photographs and complex images. The final file size depends on the image content, dimensions, and selected JPEG quality.",
      category: "quality",
      priority: 2,
    },

    {
      question: "What happens to transparency when PNG is converted to JPG?",
      answer:
        "JPG does not support transparency, so transparent areas from the PNG are rendered against a background in the resulting JPG image.",
      category: "format",
      priority: 2,
    },

    {
      question: "Are my PNG images uploaded to your server?",
      answer:
        "Absolutely not. Everything happens locally in your browser. Your PNG images never leave your device, ensuring complete privacy and security.",
      category: "privacy",
      priority: 1,
    },
  ],

  /**
   * ------------------------------------------------------------------
   * PNG VS JPG COMPARISON - محسّنة
   * ------------------------------------------------------------------
   */

  comparison: [
    {
      feature: "Compression Type",
      from: "Lossless (100% Quality)",
      to: "Lossy (Quality Adjustable)",
    },

    {
      feature: "Transparency Support",
      from: "Full Support (Alpha Channel)",
      to: "Not Supported",
    },

    {
      feature: "File Size",
      from: "Larger",
      to: "Smaller (Up to 80% Reduction)",
    },

    {
      feature: "Best Suited For",
      from: "Graphics, Logos, Icons, Screenshots",
      to: "Photographs, Web Images, Sharing, Storage",
    },

    {
      feature: "Image Quality",
      from: "Perfect (Preserves All Data)",
      to: "Depends on JPEG Compression Level",
    },

    {
      feature: "Editing Flexibility",
      from: "Excellent (Lossless)",
      to: "Limited (Quality Loss on Re-save)",
    },

    {
      feature: "Universal Compatibility",
      from: "Excellent (All Browsers)",
      to: "Universal (All Devices & Software)",
    },
  ],

  /**
   * ------------------------------------------------------------------
   * RELATED TOOLS - موسعة
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
      title: "PNG to WEBP Converter",
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
      title: "Image Compressor - Reduce File Size",
      href: "/image-compressor",
      relation: "related",
      priority: 1,
    },

    {
      title: "Image Resizer - Resize Images Online",
      href: "/image-resizer",
      relation: "related",
      priority: 2,
    },

    {
      title: "WEBP to JPG Converter",
      href: "/webp-to-jpg",
      relation: "related",
      priority: 3,
    },

    {
      title: "JPG to WEBP Converter",
      href: "/jpg-to-webp",
      relation: "related",
      priority: 4,
    },

    {
      title: "AVIF to JPG Converter",
      href: "/avif-to-jpg",
      relation: "related",
      priority: 5,
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

      {
        title: "WEBP to JPG Converter",
        href: "/webp-to-jpg",
        relation: "related",
        priority: 6,
      },
    ],

    relatedArticles: [
      {
        title: "How to Convert PNG to JPG - Complete Guide",
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

      {
        title: "Best Image Formats for Web Optimization",
        href: "/blog/image-format-web-optimization",
        relation: "related",
        priority: 3,
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
      "100% Browser-based image processing",
      "No account required",
      "No server-side image storage",
      "Adjustable JPEG quality",
      "Works with modern browsers",
      "Complete privacy guaranteed",
    ],

    noRegistration: true,
  },

  /**
   * ------------------------------------------------------------------
   * SEO / EDUCATIONAL CONTENT - محسّن
   * ------------------------------------------------------------------
   */

  content: {
    // 13. مقدمة محسّنة مع كلمات مفتاحية
    introduction:
      "Convert PNG to JPG online free with our fast, secure, and completely private browser-based PNG to JPG converter. Our tool works entirely inside your browser - your images never leave your device. PNG is a lossless image format commonly used for graphics, screenshots, logos, icons, and images that require transparency. JPG (JPEG) uses lossy compression and is often a practical choice when a smaller file size is more important than lossless image data. Reduce your PNG file sizes significantly while choosing the perfect JPEG quality level for your needs.",

    // 14. لماذا التحويل محسّن
    whyConvert:
      "Converting PNG to JPG can reduce file size by up to 80% for photographs and complex images, making them easier to upload, share, store, and use with platforms that accept JPEG files. JPG is particularly useful for photographs and complex images because its compression can reduce file size while maintaining excellent visual quality at the right setting. JPG is universally supported across all devices, browsers, and applications, making it the most compatible image format for sharing and web use.",

    // 15. لماذا تختارنا محسّن
    whyChoose:
      "PNG JPG Convert provides a focused PNG to JPG workflow with a simple conversion process. Select your PNG image, choose the JPEG quality, convert it in your browser, and download the resulting JPG file without creating an account. Unlike other online converters that upload your images to external servers, we process everything locally on your device. This means instant conversions, zero privacy concerns, unlimited free usage, and complete control over your images.",

    // 16. نص المقارنة محسّن
    comparisonText:
      "PNG and JPG are designed for different purposes. PNG uses lossless compression and supports transparency, making it useful for logos, screenshots, icons, graphics, and images where preserving image data matters. JPG uses lossy compression and is commonly preferred for photographs and other complex images where smaller files are more practical. JPG typically offers 5-10x smaller file sizes than PNG for photographs, making it ideal for web images and sharing. Because JPG does not support transparency, transparent areas in a PNG cannot remain transparent after conversion.",

    // 17. الخصوصية محسّنة
    privacy:
      "Your privacy is our absolute priority. All PNG to JPG conversions happen entirely within your browser using local processing with no external requests. No file is uploaded, stored, transmitted, or shared with any server. Our zero-knowledge architecture ensures your images remain completely private and secure. Convert your PNG images to JPG with complete confidence.",

    // 18. حالات استخدام محسّنة
    useCases: [
      "Convert PNG photographs to JPEG for more compact file sizes (up to 80% smaller).",
      "Prepare images for websites that accept JPG or JPEG format.",
      "Create JPG copies for email attachments and document workflows.",
      "Prepare non-transparent images for general sharing and social media.",
      "Reduce storage requirements when lossless PNG compression is unnecessary.",
      "Create JPEG versions of PNG images for compatible platforms and applications.",
      "Optimize images for faster web page loading and better SEO.",
    ],

    // 19. نصائح محسّنة
    tips: [
      "Use higher JPEG quality (85-95%) when preserving fine image details is important.",
      "Use lower quality (60-75%) when reducing file size is the main priority.",
      "Keep the original PNG when transparency may be needed later.",
      "JPG is often 5-10x more space-efficient than PNG for photographs.",
      "Review transparent PNG images after conversion because JPG cannot preserve transparency.",
      "Test different quality settings to find the perfect balance for your needs.",
    ],

    bestFor: [
      "Photographs and complex images",
      "Web images and social media",
      "Email attachments and sharing",
      "Storage optimization",
      "Images that do not require transparency",
      "Printing and professional use",
    ],

    notIdealFor: [
      "Images requiring transparent backgrounds",
      "Graphics requiring lossless compression",
      "Workflows where original image data must be preserved",
      "Images that will be repeatedly edited and re-saved as JPEG",
      "Logos and icons with transparency",
    ],

    commonMistakes: [
      "Converting transparent PNG images without checking the resulting background.",
      "Choosing extremely low JPEG quality just to minimize file size.",
      "Deleting the original PNG before reviewing the converted image.",
      "Using JPG when lossless image preservation is required.",
      "Not adjusting quality settings based on intended use.",
    ],

    troubleshooting: [
      "If the output looks too compressed, increase the JPEG quality setting and convert again.",
      "If transparency is lost, use the original PNG or another format that supports transparency.",
      "If a very large PNG takes longer to process, the browser may need additional memory and processing time.",
      "If conversion does not start, try an up-to-date supported browser.",
    ],

    // 20. خاتمة محسّنة مع دعوة للعمل
    conclusion:
      "PNG to JPG conversion is useful when you need a JPEG image that is significantly smaller and universally supported, and you do not need transparency or lossless compression. Choose an appropriate quality level, convert the PNG image, review the result, and download the JPG file instantly. Our free online PNG to JPG converter is fast, secure, private, and completely free. Start converting your PNG images to JPG today for smaller files and universal compatibility!",
  },

  /**
   * ------------------------------------------------------------------
   * STRUCTURED DATA
   * ------------------------------------------------------------------
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