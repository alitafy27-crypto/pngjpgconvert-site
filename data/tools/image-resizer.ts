import type { ToolData } from "../tool.types";

const imageResizer: ToolData = {
  slug: "image-resizer",
  mode: "resize",
  
  // 1. عنوان محسّن مع كلمات مفتاحية رئيسية وفوائد
  title: "Image Resizer - Resize JPG, PNG, WEBP & AVIF Online Free | Custom Dimensions",
  
  // 2. عنوان رئيسي محسّن مع كلمات مفتاحية وفوائد
  heroTitle: "Free Online Image Resizer - Resize JPG, PNG, WEBP & AVIF Images with Custom Dimensions",
  
  // 3. وصف محسّن مع كلمات مفتاحية وفوائد محددة
  description:
    "Resize JPG, PNG, WEBP and AVIF images online free with our fast, secure image resizer. Change width and height instantly with aspect ratio lock. 100% private browser-based tool with no uploads. Best free online image resizer.",
  
  // 4. وصف رئيسي محسّن مع كلمات مفتاحية وفوائد
  heroDescription:
    "Resize JPG, PNG, WEBP and AVIF images online for free. Change image dimensions instantly with custom width and height. No uploads, no registration, 100% private. The best free image resizer for perfect dimensions.",
  
  // 5. عنوان SEO محسّن مع كلمات مفتاحية قوية
  seoTitle:
    "Image Resizer - Free Online Image Resizer | Resize JPG, PNG, WEBP & AVIF with Custom Dimensions",
  
  // 6. وصف SEO محسّن مع كلمات مفتاحية ودعوة للعمل
  seoDescription:
    "Resize JPG, PNG, WEBP and AVIF images online for free. Change image dimensions with custom width and height. Fast, secure, and private browser-based image resizer. No uploads, unlimited usage.",
  
  // 7. كلمات مفتاحية موسعة (32 كلمة مفتاحية)
  keywords: [
    "resize image",
    "resize image online",
    "image resizer",
    "resize jpg",
    "resize png",
    "resize webp",
    "resize avif",
    "online image resizer",
    "free image resize",
    "change image size",
    "image dimensions",
    "resize photo",
    "image scaling",
    "free image resizer",
    "browser image resizer",
    "resize image free",
    "resize image no upload",
    "best image resizer",
    "resize photo online",
    "image resizer tool",
    "custom image dimensions",
    "change image width",
    "change image height",
    "resize jpg online",
    "resize png online",
    "resize webp online",
    "resize avif online",
    "image dimension changer",
    "free photo resizer",
    "image size adjuster",
    "resize image for web",
    "resize image for social media",
  ],
  
  category: "Image Tools",
  from: "Image",
  to: "Resized Image",
  inputMime: "image/*",
  outputMime: "image/jpeg",
  outputExtension: "jpg",
  supportsQuality: true,
  icon: "📐",
  
  // 8. ميزات محسّنة مع كلمات مفتاحية (7 ميزات)
  features: [
    {
      title: "Custom Image Dimensions",
      description: "Set exact width and height for your images. Enter custom values for pixel-perfect sizing.",
    },
    {
      title: "Maintain Aspect Ratio Lock",
      description: "Keep proportions locked while resizing. Automatically maintain the original aspect ratio for perfect scaling.",
    },
    {
      title: "Support for All Image Formats",
      description: "Resize JPG, PNG, WEBP, AVIF and most common image formats. Fully compatible with all image types.",
    },
    {
      title: "Preserve Image Quality",
      description: "Resize images while maintaining excellent quality. No pixelation or quality loss when resizing.",
    },
    {
      title: "100% Browser-Based Image Resizer",
      description: "Everything runs locally inside your browser. No uploads, no servers, complete privacy and instant processing.",
    },
    {
      title: "Complete Privacy & Security",
      description: "Your images are never uploaded to any server. All resizing happens locally on your device.",
    },
    {
      title: "Unlimited Free Image Resizing",
      description: "Resize unlimited images with no registration, no limits, and no hidden fees. Completely free forever.",
    },
  ],
  
  // 9. خطوات محسّنة مع كلمات مفتاحية (4 خطوات)
  howTo: [
    {
      title: "Upload Your Image",
      description: "Select or drag and drop the JPG, PNG, WEBP, or AVIF image you want to resize. Supports all common formats.",
    },
    {
      title: "Set New Dimensions",
      description: "Enter the desired width and height for your image. Toggle aspect ratio lock to maintain proportions.",
    },
    {
      title: "Apply Image Resize",
      description: "Click the Resize button to change the image dimensions instantly. Everything processes locally in your browser.",
    },
    {
      title: "Download Resized Image",
      description: "Download your resized image instantly. Save it to your device for websites, social media, or printing.",
    },
  ],
  
  // 10. أسئلة شائعة موسعة (10 أسئلة شاملة)
  faq: [
    {
      question: "Is this image resizer completely free?",
      answer: "Yes, our image resizer is 100% free with no hidden charges, limits, or registration. You can resize unlimited images without any cost.",
    },
    {
      question: "Will resizing my image reduce its quality?",
      answer: "You can maintain excellent quality when resizing. Our tool uses advanced algorithms to preserve image quality while changing dimensions. For best results, avoid enlarging images too much as this can cause pixelation.",
    },
    {
      question: "What image formats can I resize?",
      answer: "You can resize JPG, PNG, WEBP, AVIF, and most other common image formats. Our tool supports a wide range of image types for maximum flexibility.",
    },
    {
      question: "Are my images uploaded to your server?",
      answer: "Absolutely not. Everything happens locally in your browser. Your images never leave your device, ensuring complete privacy and security.",
    },
    {
      question: "How do I maintain aspect ratio when resizing?",
      answer: "Simply toggle the aspect ratio lock button. When locked, changing width will automatically adjust height (and vice versa) to maintain proportions.",
    },
    {
      question: "Why should I resize my images?",
      answer: "Resizing images helps reduce file size, fit specific dimensions for websites, social media, documents, and presentations. Properly sized images load faster, look better on different devices, and improve user experience.",
    },
    {
      question: "Can I resize images on my mobile device?",
      answer: "Yes, our image resizer works seamlessly on all devices - desktops, tablets, and smartphones. Resize images on the go with your mobile browser.",
    },
    {
      question: "What's the best size for resizing images?",
      answer: "It depends on your use case. For websites, 1920x1080 for hero images, 1200x630 for social sharing, 800x600 for content images. For social media, follow platform-specific dimensions.",
    },
    {
      question: "Can I resize multiple images at once?",
      answer: "Yes, you can resize multiple images one at a time with unlimited usage. Our tool supports batch processing for efficient workflow.",
    },
    {
      question: "What's the difference between resizing and cropping?",
      answer: "Resizing changes the entire image dimensions, while cropping removes unwanted areas. Resizing is ideal for fitting images into specific spaces, cropping for removing unwanted parts.",
    },
  ],
  
  // 11. مقارنة محسّنة مع ميزات أكثر (7 نقاط)
  comparison: [
    {
      feature: "Image Dimensions",
      from: "Original Size",
      to: "Custom (Width & Height)",
    },
    {
      feature: "Aspect Ratio",
      from: "Original Proportions",
      to: "Maintained or Custom",
    },
    {
      feature: "Image Quality",
      from: "Original Quality",
      to: "Quality Preserved",
    },
    {
      feature: "File Size Impact",
      from: "Original Size",
      to: "Reduced or Increased",
    },
    {
      feature: "Processing Speed",
      from: "N/A",
      to: "Instant",
    },
    {
      feature: "Privacy & Security",
      from: "N/A",
      to: "100% Local Processing",
    },
    {
      feature: "Cost",
      from: "N/A",
      to: "100% Free Forever",
    },
  ],
  
  // 12. أدوات ذات صلة موسعة (8 أدوات)
  relatedTools: [
    {
      title: "Image Compressor - Reduce File Size",
      href: "/image-compressor",
    },
    {
      title: "Image Crop Tool - Crop Images Online",
      href: "/image-crop",
    },
    {
      title: "PNG to JPG Converter",
      href: "/png-to-jpg",
    },
    {
      title: "JPG to WEBP Converter",
      href: "/jpg-to-webp",
    },
    {
      title: "Rotate Image Online",
      href: "/image-rotate",
    },
    {
      title: "Flip Image Online - Mirror Images",
      href: "/image-flip",
    },
    {
      title: "JPG to PNG Converter",
      href: "/jpg-to-png",
    },
    {
      title: "WEBP to JPG Converter",
      href: "/webp-to-jpg",
    },
  ],
  
  // 13. محتوى محسّن - الحقول المدعومة فقط
  content: {
    introduction:
      "Resize JPG, PNG, WEBP and AVIF images online free with our fast, secure, and completely private browser-based image resizer. Our tool works entirely inside your browser - your images never leave your device. Change image dimensions with custom width and height, lock aspect ratio for perfect proportions, and maintain excellent quality. Whether you need to resize images for websites, social media, email, or printing, our image resizer delivers perfect results instantly.",
    
    whyConvert:
      "Resizing images is essential for web optimization, social media, email marketing, and document preparation. Properly sized images load faster on websites, display perfectly across devices, and improve user experience. Whether you need to reduce image dimensions for faster loading, fit specific social media dimensions, resize for email signatures, or prepare images for printing, our image resizer makes it easy. Resizing also helps reduce file size, saving storage space and bandwidth.",
    
    whyChoose:
      "PNG JPG Convert performs every resize locally inside your browser using advanced JavaScript. Your images never leave your device, ensuring complete privacy and blazing-fast processing speeds. Unlike other online image resizers that upload your images to external servers, we process everything locally. This means instant resizing, zero privacy concerns, unlimited free usage, and complete control over your images.",
    
    comparisonText:
      "Resizing changes the dimensions of an image (width and height) to fit specific requirements. Unlike cropping, which removes unwanted areas, resizing adjusts the entire image to new dimensions. Resizing is perfect for fitting images into specific spaces, preparing images for social media, and optimizing images for web use. When combined with aspect ratio lock, resizing maintains perfect proportions for professional-looking results.",
    
    privacy:
      "Your privacy is our absolute priority. All image resizing happens entirely within your browser using local processing with no external requests. No file is uploaded, stored, transmitted, or shared with any server. Our zero-knowledge architecture ensures your images remain completely private and secure. Resize your images with complete confidence.",
    
    // 14. خاتمة محسّنة مع دمج النصائح وحالات الاستخدام
    conclusion:
      "For best results when resizing images, maintain aspect ratio for natural proportions, use common dimensions for your intended platform, avoid enlarging images too much to prevent pixelation, and always preview before downloading to ensure perfect sizing.\n\n" +
      
      "Common use cases for image resizing:\n" +
      "• Website Optimization - Resize images for faster loading times and better web performance.\n" +
      "• Social Media - Resize images to fit Instagram (1080x1080), Facebook (1200x630), Twitter (1200x675), LinkedIn (1200x627).\n" +
      "• Email Marketing - Resize images for email signatures and campaign newsletters.\n" +
      "• E-commerce - Resize product images for consistent catalog display.\n" +
      "• Printing - Resize images to specific print dimensions and DPI requirements.\n" +
      "• Mobile Apps - Optimize images for app performance and device screens.\n" +
      "• Presentations - Resize images for professional slides and documents.\n\n" +
      
      "Upload your image, set custom dimensions, resize it instantly, and download the optimized result. Our free online image resizer is fast, secure, private, and completely free. Start resizing your JPG, PNG, WEBP, and AVIF images today for perfect dimensions every time!",
  },
};

export default imageResizer;