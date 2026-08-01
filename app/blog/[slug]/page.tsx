import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import {
  getBlogArticle,
  getAllBlogSlugs,
} from "@/constants/blog";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllBlogSlugs();
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticle(slug);

  if (!article) {
    return {
      title: "Article Not Found | PNG JPG Convert",
      description:
        "The requested article could not be found.",
    };
  }

  return {
    title: article.title,
    description: article.description,

    keywords: article.keywords,

    authors: [
      {
        name: article.author,
      },
    ],

    alternates: {
      canonical: `/blog/${article.slug}`,
    },

    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      url: `/blog/${article.slug}`,

      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,

      authors: [article.author],

      siteName: "PNG JPG Convert",
    },

    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

export default async function BlogArticlePage({
  params,
}: PageProps) {
  const { slug } = await params;

  const article = getBlogArticle(slug);

  if (!article) {
    notFound();
  }

  const articleUrl =
    `https://pngjpgconvert.com/blog/${article.slug}`;

  return (
    <>
      {/* ============================================
          ARTICLE SCHEMA
      ============================================ */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",

            headline: article.title,

            description: article.description,

            url: articleUrl,

            datePublished: article.publishedAt,

            dateModified: article.updatedAt,

            author: {
              "@type": "Organization",
              name: article.author,
            },

            publisher: {
              "@type": "Organization",
              name: "PNG JPG Convert",
              url: "https://pngjpgconvert.com",
            },

            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": articleUrl,
            },

            keywords: article.keywords.join(", "),
          }),
        }}
      />

      {/* ============================================
          FAQ SCHEMA
      ============================================ */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",

            mainEntity: article.content.faq.map(
              (item) => ({
                "@type": "Question",

                name: item.question,

                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })
            ),
          }),
        }}
      />

      <main className="min-h-screen bg-white">
        {/* ============================================
            BREADCRUMBS
        ============================================ */}

        <nav
          aria-label="Breadcrumb"
          className="border-b border-gray-100 bg-gray-50"
        >
          <div className="mx-auto max-w-5xl px-6 py-4">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
              <li>
                <Link
                  href="/"
                  className="transition hover:text-blue-600"
                >
                  Home
                </Link>
              </li>

              <li aria-hidden="true">
                /
              </li>

              <li>
                <Link
                  href="/blog"
                  className="transition hover:text-blue-600"
                >
                  Blog
                </Link>
              </li>

              <li aria-hidden="true">
                /
              </li>

              <li className="font-medium text-gray-900">
                {article.title}
              </li>
            </ol>
          </div>
        </nav>

        {/* ============================================
            ARTICLE HEADER
        ============================================ */}

        <header className="border-b border-gray-100">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <div className="mx-auto max-w-4xl">
              <div className="mb-6 flex flex-wrap items-center gap-3 text-sm">
                <span className="rounded-full bg-blue-50 px-4 py-2 font-medium text-blue-600">
                  {article.category}
                </span>

                <span className="text-gray-500">
                  {article.readingTime}
                </span>

                <span className="text-gray-400">
                  •
                </span>

                <time
                  dateTime={article.updatedAt}
                  className="text-gray-500"
                >
                  Updated {article.updatedAt}
                </time>
              </div>

              <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl">
                {article.title}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
                {article.description}
              </p>

              <div className="mt-6 text-sm text-gray-500">
                By{" "}
                <span className="font-medium text-gray-900">
                  {article.author}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* ============================================
            ARTICLE CONTENT AREA
        ============================================ */}

        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-12 lg:grid-cols-[260px_minmax(0,1fr)]">
          {/* ============================================
              TABLE OF CONTENTS
          ============================================ */}

          <aside className="lg:sticky lg:top-8 lg:self-start">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <h2 className="text-lg font-bold text-gray-900">
                Table of Contents
              </h2>

              <nav className="mt-5">
                <ul className="space-y-3">
                  {article.tableOfContents.map(
                    (item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="text-sm leading-6 text-gray-600 transition hover:text-blue-600"
                        >
                          {item.title}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </nav>
            </div>
          </aside>

          {/* ============================================
              MAIN ARTICLE
          ============================================ */}

          <article className="min-w-0">
            {/* Introduction */}

            <section className="mb-12">
              {article.content.introduction
                .trim()
                .split("\n\n")
                .map((paragraph, index) => (
                  <p
                    key={index}
                    className="mb-6 text-lg leading-8 text-gray-700"
                  >
                    {paragraph.trim()}
                  </p>
                ))}
            </section>

            {/* Article Sections */}

            {article.content.sections.map(
              (section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="mb-14 scroll-mt-8"
                >
                  <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">
                    {section.title}
                  </h2>

                  {section.paragraphs.map(
                    (paragraph, index) => (
                      <p
                        key={index}
                        className="mb-6 text-lg leading-8 text-gray-700"
                      >
                        {paragraph.trim()}
                      </p>
                    )
                  )}

                  {/* ====================================
                      INTERNAL TOOL LINK
                  ==================================== */}

                  {section.id ===
                    "how-to-convert-png-to-jpg" && (
                    <div className="my-8 rounded-2xl border border-blue-100 bg-blue-50 p-6">
                      <h3 className="text-xl font-bold text-gray-900">
                        Ready to Convert Your PNG Image?
                      </h3>

                      <p className="mt-2 text-gray-600">
                        Convert your PNG image to JPG quickly
                        with our online image conversion tool.
                      </p>

                      <Link
                        href="/png-to-jpg"
                        className="mt-5 inline-flex rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                      >
                        Convert PNG to JPG
                      </Link>
                    </div>
                  )}

                  {/* ====================================
                      INTERNAL SEO LINKS
                  ==================================== */}

                  {section.id ===
                    "reduce-file-size" && (
                    <div className="my-8 rounded-2xl border border-gray-200 p-6">
                      <h3 className="text-xl font-bold text-gray-900">
                        Related Image Tools
                      </h3>

                      <div className="mt-4 flex flex-wrap gap-3">
                        <Link
                          href="/image-compressor"
                          className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-blue-500 hover:text-blue-600"
                        >
                          Image Compressor
                        </Link>

                        <Link
                          href="/image-resizer"
                          className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-blue-500 hover:text-blue-600"
                        >
                          Image Resizer
                        </Link>
                      </div>
                    </div>
                  )}
                </section>
              )
            )}

            {/* ============================================
                FAQ SECTION
            ============================================ */}

            <section
              id="faq"
              className="mb-14 scroll-mt-8"
            >
              <h2 className="mb-8 text-3xl font-bold tracking-tight text-gray-900">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {article.content.faq.map(
                  (item, index) => (
                    <details
                      key={index}
                      className="group rounded-xl border border-gray-200 p-5"
                    >
                      <summary className="cursor-pointer list-none font-semibold text-gray-900">
                        <div className="flex items-center justify-between gap-4">
                          <span>
                            {item.question}
                          </span>

                          <span className="text-xl text-blue-600 transition-transform group-open:rotate-45">
                            +
                          </span>
                        </div>
                      </summary>

                      <p className="mt-4 leading-7 text-gray-600">
                        {item.answer}
                      </p>
                    </details>
                  )
                )}
              </div>
            </section>

            {/* ============================================
                FINAL THOUGHTS
            ============================================ */}

            <section
              id="final-thoughts"
              className="mb-14 scroll-mt-8"
            >
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">
                Final Thoughts: Should You Convert PNG to JPG?
              </h2>

              {article.content.conclusion
                .trim()
                .split("\n\n")
                .map((paragraph, index) => (
                  <p
                    key={index}
                    className="mb-6 text-lg leading-8 text-gray-700"
                  >
                    {paragraph.trim()}
                  </p>
                ))}
            </section>

            {/* ============================================
                RELATED TOOLS
            ============================================ */}

            <section className="border-t border-gray-200 pt-10">
              <h2 className="text-2xl font-bold text-gray-900">
                Related Image Tools
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {article.internalLinks
                  .filter(
                    (link) => link.type === "tool"
                  )
                  .slice(0, 6)
                  .map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="rounded-xl border border-gray-200 p-5 transition hover:border-blue-500 hover:shadow-sm"
                    >
                      <h3 className="font-semibold text-gray-900">
                        {link.title}
                      </h3>

                      <span className="mt-2 block text-sm text-blue-600">
                        Try this tool →
                      </span>
                    </Link>
                  ))}
              </div>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}