import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getTool, toolsList } from "@/data/tools";

type ToolPageProps = {
  params: Promise<{
    tool: string;
  }>;
};

/**
 * Generate static routes for all registered tools.
 *
 * SEO benefit:
 * - Allows Next.js to statically generate every registered tool page.
 * - Improves crawlability and initial page performance.
 */
export function generateStaticParams() {
  return toolsList.map((tool) => ({
    tool: tool.slug,
  }));
}

/**
 * Generate SEO metadata for the current tool.
 *
 * Includes:
 * - Title
 * - Meta description
 * - Keywords
 * - Canonical URL
 * - Open Graph
 * - Twitter Card
 * - Robots directives
 */
export async function generateMetadata({
  params,
}: ToolPageProps): Promise<Metadata> {
  const { tool: slug } = await params;
  const tool = getTool(slug);

  if (!tool) {
    return {
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = tool.seoTitle || tool.title;
  const description =
    tool.seoDescription || tool.description || tool.heroDescription;

  const canonicalPath = tool.seo?.canonicalPath;

  const socialTitle = tool.social?.title ?? title;
  const socialDescription =
    tool.social?.description ?? description;

  const socialImage = tool.social?.image;

  return {
    title,

    description,

    keywords:
      tool.keywords?.length > 0
        ? tool.keywords
        : undefined,

    alternates: canonicalPath
      ? {
          canonical: canonicalPath,
        }
      : undefined,

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    openGraph: {
      type: "website",
      title: socialTitle,
      description: socialDescription,
      url: canonicalPath,
      images: socialImage
        ? [
            {
              url: socialImage,
              alt: title,
            },
          ]
        : undefined,
    },

    twitter: {
      card: socialImage
        ? "summary_large_image"
        : "summary",
      title: socialTitle,
      description: socialDescription,
      images: socialImage ? [socialImage] : undefined,
    },
  };
}

/**
 * Create structured data for the tool page.
 *
 * Includes:
 * - WebPage schema
 * - BreadcrumbList schema
 * - FAQPage schema when FAQs exist
 * - HowTo schema when instructions exist
 */
function ToolStructuredData({
  tool,
}: {
  tool: NonNullable<ReturnType<typeof getTool>>;
}) {
  const canonicalPath = tool.seo?.canonicalPath ?? `/tools/${tool.slug}`;

  /**
   * WebPage structured data.
   */
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: tool.seoTitle || tool.title,
    description:
      tool.seoDescription ||
      tool.description ||
      tool.heroDescription,
    url: canonicalPath,
    inLanguage: "en",
  };

  /**
   * Breadcrumb structured data.
   */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tools",
        item: "/tools",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: tool.title,
        item: canonicalPath,
      },
    ],
  };

  const schemas: Record<string, unknown>[] = [
    webPageSchema,
    breadcrumbSchema,
  ];

  /**
   * FAQ structured data.
   *
   * Only generate it when the page actually contains visible FAQs.
   */
  if (tool.faq.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: tool.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  /**
   * HowTo structured data.
   *
   * Only generate it when the page contains actual visible instructions.
   */
  if (tool.howTo.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: `How to use ${tool.title}`,
      description:
        tool.seoDescription ||
        tool.description ||
        tool.heroDescription,
      step: tool.howTo.map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: step.title,
        text: step.description,
      })),
    });
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={`structured-data-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  );
}

/**
 * Tool page.
 */
export default async function ToolPage({
  params,
}: ToolPageProps) {
  const { tool: slug } = await params;

  const tool = getTool(slug);

  if (!tool) {
    notFound();
  }

  const canonicalPath =
    tool.seo?.canonicalPath ?? `/tools/${tool.slug}`;

  return (
    <>
      <ToolStructuredData tool={tool} />

      <main>
        {/* -------------------------------------------------
            Breadcrumb navigation
            ------------------------------------------------- */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6"
        >
          <ol className="flex flex-wrap items-center gap-2 text-sm">
            <li>
              <a
                href="/"
                className="hover:underline"
              >
                Home
              </a>
            </li>

            <li aria-hidden="true">/</li>

            <li>
              <a
                href="/tools"
                className="hover:underline"
              >
                Tools
              </a>
            </li>

            <li aria-hidden="true">/</li>

            <li aria-current="page">
              {tool.title}
            </li>
          </ol>
        </nav>

        {/* -------------------------------------------------
            Hero
            ------------------------------------------------- */}
        <section aria-labelledby="tool-title">
          <h1 id="tool-title">
            {tool.heroTitle}
          </h1>

          <p>
            {tool.heroDescription}
          </p>
        </section>

        {/* -------------------------------------------------
            Main tool description
            ------------------------------------------------- */}
        <section
          aria-labelledby="about-tool-title"
        >
          <h2 id="about-tool-title">
            {tool.title}
          </h2>

          <p>
            {tool.description}
          </p>
        </section>

        {/* -------------------------------------------------
            Features
            ------------------------------------------------- */}
        {tool.features.length > 0 && (
          <section
            aria-labelledby="features-title"
          >
            <h2 id="features-title">
              Features
            </h2>

            <ul>
              {tool.features.map(
                (feature, index) => (
                  <li
                    key={
                      feature.title ||
                      `feature-${index}`
                    }
                  >
                    <h3>
                      {feature.title}
                    </h3>

                    <p>
                      {feature.description}
                    </p>
                  </li>
                ),
              )}
            </ul>
          </section>
        )}

        {/* -------------------------------------------------
            How to use
            ------------------------------------------------- */}
        {tool.howTo.length > 0 && (
          <section
            aria-labelledby="how-to-title"
          >
            <h2 id="how-to-title">
              How to use {tool.title}
            </h2>

            <ol>
              {tool.howTo.map(
                (step, index) => (
                  <li
                    key={
                      step.id ??
                      `step-${index}`
                    }
                  >
                    <h3>
                      {step.title}
                    </h3>

                    <p>
                      {step.description}
                    </p>
                  </li>
                ),
              )}
            </ol>
          </section>
        )}

        {/* -------------------------------------------------
            FAQ
            ------------------------------------------------- */}
        {tool.faq.length > 0 && (
          <section
            aria-labelledby="faq-title"
          >
            <h2 id="faq-title">
              Frequently Asked Questions
            </h2>

            <div>
              {tool.faq.map(
                (item, index) => (
                  <details
                    key={
                      item.id ??
                      `faq-${index}`
                    }
                  >
                    <summary>
                      {item.question}
                    </summary>

                    <p>
                      {item.answer}
                    </p>
                  </details>
                ),
              )}
            </div>
          </section>
        )}

        {/* -------------------------------------------------
            Long-form SEO content
            ------------------------------------------------- */}
        {tool.content && (
          <section
            aria-labelledby="content-title"
          >
            <h2 id="content-title">
              About {tool.title}
            </h2>

            {tool.content.introduction && (
              <div>
                <p>
                  {tool.content.introduction}
                </p>
              </div>
            )}

            {tool.content.whyChoose && (
              <section
                aria-labelledby="why-choose-title"
              >
                <h3 id="why-choose-title">
                  Why use this tool?
                </h3>

                <p>
                  {tool.content.whyChoose}
                </p>
              </section>
            )}

            {tool.content.whyConvert && (
              <section
                aria-labelledby="why-convert-title"
              >
                <h3 id="why-convert-title">
                  Why convert?
                </h3>

                <p>
                  {tool.content.whyConvert}
                </p>
              </section>
            )}

            {tool.content.comparisonText && (
              <section
                aria-labelledby="comparison-title"
              >
                <h3 id="comparison-title">
                  Comparison
                </h3>

                <p>
                  {tool.content.comparisonText}
                </p>
              </section>
            )}

            {tool.content.privacy && (
              <section
                aria-labelledby="privacy-title"
              >
                <h3 id="privacy-title">
                  Privacy
                </h3>

                <p>
                  {tool.content.privacy}
                </p>
              </section>
            )}

            {tool.content.conclusion && (
              <section
                aria-labelledby="conclusion-title"
              >
                <h3 id="conclusion-title">
                  Conclusion
                </h3>

                <p>
                  {tool.content.conclusion}
                </p>
              </section>
            )}
          </section>
        )}

        {/* -------------------------------------------------
            Internal navigation
            -------------------------------------------------
            Links to related tools can be added here later.
            This area is intentionally kept crawlable.
        ------------------------------------------------- */}
        <section
          aria-labelledby="related-tools-title"
        >
          <h2 id="related-tools-title">
            More Tools
          </h2>

          <ul>
            {toolsList
              .filter(
                (item) =>
                  item.slug !== tool.slug,
              )
              .slice(0, 6)
              .map((item) => (
                <li key={item.slug}>
                  <a
                    href={`/tools/${item.slug}`}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
          </ul>
        </section>
      </main>
    </>
  );
}
