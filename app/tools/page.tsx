import Link from "next/link";

const imageTools = [
  {
    slug: "png-to-jpg",
    name: "PNG to JPG Converter",
    description:
      "Convert PNG images to JPG format quickly and easily with our free online image converter.",
  },
  {
    slug: "jpg-to-png",
    name: "JPG to PNG Converter",
    description:
      "Convert JPG images to PNG format online while keeping your images clear and easy to use.",
  },
  {
    slug: "png-to-webp",
    name: "PNG to WEBP Converter",
    description:
      "Convert PNG images to WEBP format for smaller file sizes and faster website performance.",
  },
  {
    slug: "webp-to-png",
    name: "WEBP to PNG Converter",
    description:
      "Convert WEBP images to PNG format quickly and securely in your browser.",
  },
  {
    slug: "jpg-to-webp",
    name: "JPG to WEBP Converter",
    description:
      "Convert JPG images to modern WEBP format for better compression and faster loading.",
  },
  {
    slug: "webp-to-jpg",
    name: "WEBP to JPG Converter",
    description:
      "Convert WEBP images to JPG format for compatibility with different platforms and applications.",
  },
  {
    slug: "png-to-avif",
    name: "PNG to AVIF Converter",
    description:
      "Convert PNG images to AVIF format for modern web performance and efficient image compression.",
  },
  {
    slug: "avif-to-png",
    name: "AVIF to PNG Converter",
    description:
      "Convert AVIF images to PNG format for easy editing, sharing, and compatibility.",
  },
  {
    slug: "jpg-to-avif",
    name: "JPG to AVIF Converter",
    description:
      "Convert JPG images to AVIF format with excellent compression and modern image quality.",
  },
  {
    slug: "avif-to-jpg",
    name: "AVIF to JPG Converter",
    description:
      "Convert AVIF images to JPG format quickly using our free online converter.",
  },
  {
    slug: "webp-to-avif",
    name: "WEBP to AVIF Converter",
    description:
      "Convert WEBP images to AVIF format for efficient modern image delivery.",
  },
  {
    slug: "avif-to-webp",
    name: "AVIF to WEBP Converter",
    description:
      "Convert AVIF images to WEBP format for broad browser and platform compatibility.",
  },
  {
    slug: "image-compressor",
    name: "Image Compressor",
    description:
      "Compress images online to reduce file size while maintaining good visual quality.",
  },
  {
    slug: "image-resizer",
    name: "Image Resizer",
    description:
      "Resize images online to the exact dimensions you need quickly and easily.",
  },
  {
    slug: "image-crop",
    name: "Image Cropper",
    description:
      "Crop your images online to remove unwanted areas and create the perfect composition.",
  },
  {
    slug: "image-rotate",
    name: "Image Rotator",
    description:
      "Rotate images online clockwise or counterclockwise with a simple and easy-to-use tool.",
  },
  {
    slug: "image-flip",
    name: "Image Flipper",
    description:
      "Flip images horizontally or vertically directly in your browser.",
  },
  {
    slug: "image-watermark",
    name: "Image Watermark Tool",
    description:
      "Add watermarks to your images online to protect your content and brand.",
  },
  {
    slug: "image-to-pdf",
    name: "Image to PDF Converter",
    description:
      "Convert images to PDF documents quickly and easily without installing software.",
  },
  {
    slug: "pdf-to-image",
    name: "PDF to Image Converter",
    description:
      "Convert PDF pages into image files for easy sharing, editing, and use.",
  },
  {
    slug: "pdf-merge",
    name: "PDF Merge Tool",
    description:
      "Merge multiple PDF files into one document quickly and easily.",
  },
];

export const metadata = {
  title: "All Image Tools | PNG JPG Convert",
  description:
    "Explore free online image conversion and editing tools. Convert PNG, JPG, WEBP and AVIF, compress, resize, crop, rotate, flip, watermark images and convert images to PDF.",
};

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="px-6 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            All Image Tools
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Choose from our collection of free online image tools. Convert,
            compress, resize, crop, rotate, flip, watermark and manage your
            images quickly and securely.
          </p>
        </div>
      </section>

      {/* Tools */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {imageTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/${tool.slug}`}
                className="group rounded-xl border border-gray-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-2xl">
                  🖼️
                </div>

                <h2 className="text-xl font-semibold text-gray-900 transition-colors group-hover:text-blue-600">
                  {tool.name}
                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {tool.description}
                </p>

                <div className="mt-5 text-sm font-semibold text-blue-600">
                  Use Tool →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}