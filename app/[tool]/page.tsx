
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { getTool, toolsList } from "@/data/tools";

import ImageToolPage from "@/components/templates/ImageToolPage";

import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import UploadSection from "@/components/sections/UploadSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import HowToSection from "@/components/sections/HowToSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import SupportedFormatsSection from "@/components/sections/SupportedFormatsSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import FAQSection from "@/components/sections/FAQSection";
import RelatedToolsSection from "@/components/sections/RelatedToolsSection";
import ContentSection from "@/components/sections/ContentSection";

import ToolSchema from "@/components/schema/ToolSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import FAQSchema from "@/components/schema/FAQSchema";
import HowToSchema from "@/components/schema/HowToSchema";

/**
 * ------------------------------------------------------------------
 * TYPES
 * ------------------------------------------------------------------
 */

type Props = {
  params: Promise<{
    tool: string;
  }>;
};

/**
 * ------------------------------------------------------------------
 * SITE CONFIGURATION
 * ------------------------------------------------------------------
 *
 * Keep the site identity in one place.
 */
const SITE_URL = "https://pngjpgconvert.com";
const SITE_NAME = "PNG JPG Convert";
const SITE_DESCRIPTION =
  "Free online image conversion and editing tools. Convert, compress, resize, crop, rotate, flip, watermark and work with images directly in your browser.";

const OG_IMAGE = "/og-image.png";

/**
 * ------------------------------------------------------------------
 * HELPERS
 * ------------------------------------------------------------------
 */

/**
 * Normalize metadata text.
 *
 * Prevents accidental duplicated spaces and malformed metadata.
 */
function cleanText(value: unknown): string {
  if (typeof value !== "string") {
    return "";
  }

  return value.replace(/\s+/g, " ").trim();
}

/**
 * Keep titles reasonably concise.
 *
 * The exact displayed title length depends on Google's rendering,
 * so this is only a sensible safety limit rather than a ranking rule.
 */
function optimizeTitle(value: unknown): string {
  const title = cleanText(value);

  if (!title) {
    return SITE_NAME;
  }

  if (title.length <= 65) {
    return title;
  }

  return `${title.slice(0, 62).trimEnd()}...`;
}

/**
 * Keep descriptions concise and useful.
 */
function optimizeDescription(value: unknown): string {
  const description = cleanText(value);

  if (!description) {
    return SITE_DESCRIPTION;
  }

  if (description.length <= 160) {
    return description;
  }

  return `${description.slice(0, 157).trimEnd()}...`;
}

/**
 * ------------------------------------------------------------------
 * STATIC PARAMS
 * ------------------------------------------------------------------
 *
 * Because your tools.ts already exports toolsList, use it directly.
 *
 * This allows Next.js to know all valid tool routes during build.
 */
export function generateStaticParams() {
  return toolsList
    .filter((tool) => Boolean(tool?.slug))
    .map((tool) => ({
      tool: tool.slug,
    }));
}

/**
 * ------------------------------------------------------------------
 * METADATA
 * ------------------------------------------------------------------
 */

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { tool: slug } = await params;

  const tool = getTool(slug);

  /**
   * Unknown routes should not receive indexable metadata.
   */
  if (!tool) {
    return {
      title: "Tool Not Found | PNG JPG Convert",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  /**
   * Canonical URL for this exact tool.
   */
  const canonicalUrl = `${SITE_URL}/${tool.slug}`;

  /**
   * Tool-specific metadata.
   */
  const title = optimizeTitle(
    tool.seoTitle || tool.title
  );

  const description = optimizeDescription(
    tool.seoDescription ||
      `${tool.title} - free online image tool from ${SITE_NAME}.`
  );

  /**
   * Keywords are retained for compatibility with your existing
   * ToolData structure.
   *
   * They should NOT be treated as the main SEO mechanism.
   */
  const keywords = Array.isArray(tool.keywords)
    ? tool.keywords
        .map(cleanText)
        .filter(Boolean)
    : undefined;

  /**
   * Dynamic image alt text.
   */
  const imageAlt =
    `${tool.title} - Free Online Tool | ${SITE_NAME}`;

  return {
    /**
     * Primary SEO metadata.
     */
    title,
    description,
    keywords,

    /**
     * Canonical.
     *
     * Do not add hreflang until the site actually has separate
     * localized versions of the pages.
     */
    alternates: {
      canonical: canonicalUrl,
    },

    /**
     * Open Graph.
     */
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",

      images: [
        {
          url: `${SITE_URL}${OG_IMAGE}`,
          width: 1200,
          height: 630,
          alt: imageAlt,
          type: "image/png",
        },
      ],
    },

    /**
     * Twitter / X.
     */
    twitter: {
      card: "summary_large_image",
      title,
      description,

      images: [
        {
          url: `${SITE_URL}${OG_IMAGE}`,
          alt: imageAlt,
        },
      ],
    },

    /**
     * Robots.
     */
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

    /**
     * Site identity.
     */
    applicationName: SITE_NAME,

    authors: [
      {
        name: SITE_NAME,
        url: SITE_URL,
      },
    ],

    creator: SITE_NAME,
    publisher: SITE_NAME,

    category: "technology",

    /**
     * Metadata base.
     *
     * NOTE:
     * Ideally this should also exist globally in app/layout.tsx.
     * Keeping it here makes this route self-contained.
     */
    metadataBase: new URL(SITE_URL),
  };
}

/**
 * ------------------------------------------------------------------
 * PAGE
 * ------------------------------------------------------------------
 */

export default async function ToolPage({
  params,
}: Props) {
  const { tool: slug } = await params;

  /**
   * Get the tool from the centralized tool registry.
   */
  const tool = getTool(slug);

  /**
   * Invalid tool URL.
   */
  if (!tool) {
    notFound();
  }

  return (
    <>
      {/**
       * ============================================================
       * STRUCTURED DATA
       * ============================================================
       *
       * These schemas should describe information that is actually
       * visible on the page.
       */}

      <ToolSchema tool={tool} />

      <BreadcrumbSchema
        title={tool.title}
        slug={tool.slug}
      />

      <FAQSchema tool={tool} />

      <HowToSchema tool={tool} />

      {/**
       * ============================================================
       * MAIN TOOL PAGE
       * ============================================================
       *
       * The order is intentional:
       *
       * 1. Hero
       * 2. Trust / Stats
       * 3. Main tool
       * 4. Benefits
       * 5. How to use
       * 6. Comparison
       * 7. Supported formats
       * 8. Why choose us / privacy
       * 9. FAQ
       * 10. Related tools
       * 11. Detailed educational content
       */}

      <ImageToolPage
        hero={
          <HeroSection
            tool={tool}
          />
        }

        stats={
          <StatsSection />
        }

        tool={
          <UploadSection
            tool={tool}
          />
        }

        benefits={
          <BenefitsSection
            tool={tool}
          />
        }

        howTo={
          <HowToSection
            tool={tool}
          />
        }

        comparison={
          <ComparisonSection
            tool={tool}
          />
        }

        supportedFormats={
          <SupportedFormatsSection />
        }

        whyChoose={
          <WhyChooseSection />
        }

        faq={
          <FAQSection
            tool={tool}
          />
        }

        relatedTools={
          <RelatedToolsSection
            tool={tool}
          />
        }

        content={
          <ContentSection
            tool={tool}
          />
        }
      />
    </>
  );
}

