import Link from "next/link";

const articles = [
  {
    slug: "how-to-convert-png-to-jpg",
    title: "How to Convert PNG to JPG Online",
    description:
      "Learn how to convert PNG images to JPG format quickly and easily. Discover the differences between PNG and JPG and when to use each format.",
    category: "Image Conversion",
    date: "2026-01-01",
  },
  {
    slug: "png-vs-jpg",
    title: "PNG vs JPG: Which Image Format Is Better?",
    description:
      "Compare PNG and JPG image formats, including image quality, file size, transparency, compression, and the best use cases for each format.",
    category: "Image Formats",
    date: "2026-01-02",
  },
  {
    slug: "how-to-convert-jpg-to-png",
    title: "How to Convert JPG to PNG Online",
    description:
      "Learn how to convert JPG images to PNG format and understand when PNG is a better choice for your images.",
    category: "Image Conversion",
    date: "2026-01-03",
  },
  {
    slug: "webp-vs-jpg",
    title: "WEBP vs JPG: Which Format Should You Use?",
    description:
      "Discover the differences between WEBP and JPG, including file size, image quality, browser support, and website performance.",
    category: "Image Formats",
    date: "2026-01-04",
  },
  {
    slug: "how-to-compress-images",
    title: "How to Compress Images Without Losing Quality",
    description:
      "Learn practical ways to reduce image file sizes while maintaining excellent visual quality for websites, social media, and online use.",
    category: "Image Optimization",
    date: "2026-01-05",
  },
  {
    slug: "how-to-resize-an-image",
    title: "How to Resize an Image Online",
    description:
      "Learn how to resize images to specific dimensions for websites, social media, documents, and other digital platforms.",
    category: "Image Editing",
    date: "2026-01-06",
  },
  {
    slug: "what-is-avif",
    title: "What Is AVIF? A Complete Guide to the AVIF Image Format",
    description:
      "Learn what AVIF is, how it compares with JPG, PNG, and WEBP, and why it can be useful for modern websites.",
    category: "Image Formats",
    date: "2026-01-07",
  },
  {
    slug: "png-vs-webp",
    title: "PNG vs WEBP: Which Image Format Is Better?",
    description:
      "Compare PNG and WEBP to understand image quality, compression, transparency, browser support, and website performance.",
    category: "Image Formats",
    date: "2026-01-08",
  },
  {
    slug: "how-to-optimize-images-for-seo",
    title: "How to Optimize Images for SEO",
    description:
      "Learn how image formats, file sizes, alt text, dimensions, and performance can help improve your website's SEO and user experience.",
    category: "SEO",
    date: "2026-01-09",
  },
  {
    slug: "best-image-format-for-websites",
    title: "Best Image Format for Websites in 2026",
    description:
      "Discover which image formats are best for websites, including JPG, PNG, WEBP, and AVIF, and learn when to use each one.",
    category: "Web Performance",
    date: "2026-01-10",
  },
];

export const metadata = {
  title: "Image Conversion & Optimization Blog | PNG JPG Convert",
  description:
    "Learn everything about image conversion, compression, optimization, JPG, PNG, WEBP, AVIF, image SEO, and website performance.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="border-b border-gray-200 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Image Tools & Guides
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Learn how to convert, compress, resize, optimize, and manage your
            images with our helpful guides and tutorials.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"
              >
                {/* Category */}
                <div className="mb-4">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                    {article.category}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-semibold leading-7 text-gray-900 transition-colors group-hover:text-blue-600">
                  {article.title}
                </h2>

                {/* Description */}
                <p className="mt-3 flex-1 text-sm leading-6 text-gray-600">
                  {article.description}
                </p>

                {/* Date */}
                <p className="mt-5 text-xs text-gray-500">
                  {new Date(article.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>

                {/* Read More */}
                <Link
                  href={`/blog/${article.slug}`}
                  className="mt-5 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  Read Article →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 px-6 py-16">
        <div className="mx-auto max-w-3xl text-center text-white">
          <h2 className="text-3xl font-bold">
            Ready to Convert Your Images?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-blue-100">
            Use our free online image conversion tools to convert, compress,
            resize, and optimize your images directly in your browser.
          </p>

          <Link
            href="/tools"
            className="mt-7 inline-flex rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-gray-100"
          >
            Explore All Tools
          </Link>
        </div>
      </section>
    </main>
  );
}