import type { ToolData } from "@/data/tool.types";

type Props = {
  tool: ToolData;
};

const SITE_URL = "https://pngjpgconvert.com";
const SITE_NAME = "PNG JPG Convert";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;
const LANGUAGE = "en";

/**
 * ------------------------------------------------------------------
 * HELPERS
 * ------------------------------------------------------------------
 */

function cleanText(value: unknown): string {
  if (typeof value !== "string") {
    return "";
  }

  return value.replace(/\s+/g, " ").trim();
}

function uniqueStrings(values: unknown[]): string[] {
  return [
    ...new Set(
      values
        .filter(
          (value): value is string =>
            typeof value === "string",
        )
        .map((value) => value.trim())
        .filter(Boolean),
    ),
  ];
}

function normalizePath(value: unknown): string {
  const path = cleanText(value);

  if (!path) {
    return "";
  }

  const normalized = path.startsWith("/")
    ? path
    : `/${path}`;

  return (
    normalized
      .replace(/\/{2,}/g, "/")
      .replace(/\/$/, "") || "/"
  );
}

function getToolPath(tool: ToolData): string {
  return (
    normalizePath(tool.seo?.canonicalPath) ||
    normalizePath(`/${tool.slug}`)
  );
}

function getToolUrl(tool: ToolData): string {
  return `${SITE_URL}${getToolPath(tool)}`;
}

function getSchemaType(tool: ToolData): string {
  return tool.schema?.schemaType ===
    "SoftwareApplication"
    ? "SoftwareApplication"
    : "WebApplication";
}

/**
 * ------------------------------------------------------------------
 * MAIN SCHEMA
 * ------------------------------------------------------------------
 */

export default function ToolSchema({
  tool,
}: Props) {
  /**
   * --------------------------------------------------------------
   * URLS / IDS
   * --------------------------------------------------------------
   */

  const url = getToolUrl(tool);

  const pageId = `${url}#webpage`;
  const applicationId = `${url}#application`;
  const imageId = `${url}#primaryimage`;
  const breadcrumbId = `${url}#breadcrumb`;

  const organizationId =
    `${SITE_URL}#organization`;

  const websiteId =
    `${SITE_URL}#website`;

  /**
   * --------------------------------------------------------------
   * BASIC CONTENT
   * --------------------------------------------------------------
   */

  const title =
    cleanText(tool.seoTitle) ||
    cleanText(tool.title) ||
    `${cleanText(tool.from)} to ${cleanText(tool.to)} Converter`;

  const description =
    cleanText(tool.seoDescription) ||
    cleanText(tool.description) ||
    cleanText(tool.heroDescription);

  const headline =
    cleanText(tool.heroTitle) ||
    title;

  /**
   * --------------------------------------------------------------
   * FORMAT INFORMATION
   * --------------------------------------------------------------
   */

  const inputFormat =
    cleanText(tool.from);

  const outputFormat =
    cleanText(tool.to);

  const conversionName =
    inputFormat && outputFormat
      ? `${inputFormat} to ${outputFormat} conversion`
      : "Online file conversion";

  /**
   * --------------------------------------------------------------
   * FEATURES
   * --------------------------------------------------------------
   */

  const features = uniqueStrings([
    ...tool.features.map(
      (feature) =>
        cleanText(feature.title),
    ),

    ...(tool.capabilities?.supportsQuality
      ? ["Adjustable output quality"]
      : []),

    ...(tool.capabilities?.supportsMultipleFiles
      ? ["Multiple file support"]
      : []),

    ...(tool.capabilities?.supportsBatch
      ? ["Batch processing"]
      : []),

    ...(tool.privacyConfig?.isClientSide
      ? ["Browser-based processing"]
      : []),

    ...(tool.privacyConfig?.noRegistration
      ? ["No registration required"]
      : []),
  ]);

  /**
   * --------------------------------------------------------------
   * KEYWORDS
   * --------------------------------------------------------------
   *
   * Keywords are kept limited to meaningful terms.
   * No artificial keyword combinations are generated.
   */

  const keywords = uniqueStrings([
    tool.seo?.primaryKeyword,

    ...(tool.seo?.secondaryKeywords ?? []),

    ...(tool.seo?.keywordVariants ?? []),

    ...(tool.keywords ?? []),
  ]);

  /**
   * --------------------------------------------------------------
   * ORGANIZATION
   * --------------------------------------------------------------
   */

  const organization = {
    "@type": "Organization",

    "@id": organizationId,

    name: SITE_NAME,

    url: SITE_URL,

    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
    },
  };

  /**
   * --------------------------------------------------------------
   * WEBSITE
   * --------------------------------------------------------------
   */

  const website = {
    "@type": "WebSite",

    "@id": websiteId,

    name: SITE_NAME,

    url: SITE_URL,

    inLanguage: LANGUAGE,

    publisher: {
      "@id": organizationId,
    },
  };

  /**
   * --------------------------------------------------------------
   * PRIMARY IMAGE
   * --------------------------------------------------------------
   */

  const image = {
    "@type": "ImageObject",

    "@id": imageId,

    url: DEFAULT_OG_IMAGE,

    contentUrl: DEFAULT_OG_IMAGE,

    width: 1200,

    height: 630,

    caption: title,
  };

  /**
   * --------------------------------------------------------------
   * BREADCRUMBS
   * --------------------------------------------------------------
   */

  const breadcrumb = {
    "@type": "BreadcrumbList",

    "@id": breadcrumbId,

    itemListElement: [
      {
        "@type": "ListItem",

        position: 1,

        name: "Home",

        item: SITE_URL,
      },

      {
        "@type": "ListItem",

        position: 2,

        name: "Tools",

        item: `${SITE_URL}/tools`,
      },

      {
        "@type": "ListItem",

        position: 3,

        name: title,

        item: url,
      },
    ],
  };

  /**
   * --------------------------------------------------------------
   * APPLICATION CATEGORY
   * --------------------------------------------------------------
   */

  const applicationCategory =
    cleanText(
      tool.schema?.schemaCategory,
    ) ||
    "UtilitiesApplication";

  /**
   * --------------------------------------------------------------
   * SOFTWARE / WEB APPLICATION
   * --------------------------------------------------------------
   */

  const application: Record<
    string,
    unknown
  > = {
    "@type": getSchemaType(tool),

    "@id": applicationId,

    name: title,

    description,

    url,

    image: {
      "@id": imageId,
    },

    applicationCategory,

    operatingSystem: "Any",

    browserRequirements:
      "Requires a modern web browser with JavaScript enabled",

    isAccessibleForFree: true,

    inLanguage: LANGUAGE,

    creator: {
      "@id": organizationId,
    },

    publisher: {
      "@id": organizationId,
    },

    featureList: features,

    mainEntityOfPage: {
      "@id": pageId,
    },

    about: [
      {
        "@type": "Thing",
        name: conversionName,
      },
    ],
  };

  /**
   * --------------------------------------------------------------
   * KEYWORDS
   * --------------------------------------------------------------
   */

  if (keywords.length > 0) {
    application.keywords =
      keywords.join(", ");
  }

  /**
   * --------------------------------------------------------------
   * FORMAT SEMANTICS
   * --------------------------------------------------------------
   *
   * Do not invent unsupported Schema.org properties such as
   * "supportedFileFormat".
   *
   * Instead, represent the actual formats through the semantic
   * description and mentions.
   */

  const mentions: Record<
    string,
    unknown
  >[] = [];

  if (inputFormat) {
    mentions.push({
      "@type": "Thing",
      name: inputFormat,
      description:
        `Input format supported by ${title}.`,
    });
  }

  if (
    outputFormat &&
    outputFormat !== inputFormat
  ) {
    mentions.push({
      "@type": "Thing",
      name: outputFormat,
      description:
        `Output format supported by ${title}.`,
    });
  }

  if (mentions.length > 0) {
    application.mentions = mentions;
  }

  /**
   * --------------------------------------------------------------
   * DESCRIPTION ENRICHMENT
   * --------------------------------------------------------------
   */

  if (inputFormat || outputFormat) {
    const formatSentence =
      inputFormat && outputFormat
        ? `Converts ${inputFormat} files to ${outputFormat} format.`
        : inputFormat
          ? `Supports ${inputFormat} files.`
          : outputFormat
            ? `Creates ${outputFormat} files.`
            : "";

    application.description = [
      description,
      formatSentence,
    ]
      .filter(Boolean)
      .join(" ");
  }

  /**
   * --------------------------------------------------------------
   * FREE OFFER
   * --------------------------------------------------------------
   *
   * The offer is only describing the actual free access model.
   */

  application.offers = {
    "@type": "Offer",

    price: "0",

    priceCurrency: "USD",

    availability:
      "https://schema.org/InStock",

    url,
  };

  /**
   * --------------------------------------------------------------
   * WEB PAGE
   * --------------------------------------------------------------
   */

  const webPage: Record<
    string,
    unknown
  > = {
    "@type": "WebPage",

    "@id": pageId,

    url,

    name: title,

    headline,

    description,

    inLanguage: LANGUAGE,

    isPartOf: {
      "@id": websiteId,
    },

    primaryImageOfPage: {
      "@id": imageId,
    },

    mainEntity: {
      "@id": applicationId,
    },

    publisher: {
      "@id": organizationId,
    },

    about: [
      {
        "@type": "Thing",
        name: conversionName,
      },
    ],

    breadcrumb: {
      "@id": breadcrumbId,
    },
  };

  /**
   * --------------------------------------------------------------
   * AUDIENCE
   * --------------------------------------------------------------
   */

  const audience = uniqueStrings(
    tool.seo?.targetAudience ?? [],
  );

  if (audience.length > 0) {
    webPage.audience = audience.map(
      (audienceType) => ({
        "@type": "Audience",
        audienceType,
      }),
    );
  }

  /**
   * --------------------------------------------------------------
   * POTENTIAL ACTION
   * --------------------------------------------------------------
   *
   * UseAction describes what the visitor can actually do.
   */

  webPage.potentialAction = {
    "@type": "UseAction",

    name: title,

    target: {
      "@type": "EntryPoint",

      urlTemplate: url,

      actionPlatform: [
        "https://schema.org/DesktopWebPlatform",
        "https://schema.org/MobileWebPlatform",
      ],
    },
  };

  /**
   * --------------------------------------------------------------
   * DATE INFORMATION
   * --------------------------------------------------------------
   *
   * Only add publication/update dates when real data exists
   * in ToolData. Never generate fake dates.
   */

  const toolWithDates =
    tool as ToolData & {
      datePublished?: string;
      dateModified?: string;
    };

  const datePublished =
    cleanText(
      toolWithDates.datePublished,
    );

  const dateModified =
    cleanText(
      toolWithDates.dateModified,
    );

  if (datePublished) {
    webPage.datePublished =
      datePublished;
  }

  if (dateModified) {
    webPage.dateModified =
      dateModified;
  }

  /**
   * --------------------------------------------------------------
   * ACCESSIBILITY
   * --------------------------------------------------------------
   */

  webPage.isAccessibleForFree = true;

  /**
   * --------------------------------------------------------------
   * GRAPH
   * --------------------------------------------------------------
   *
   * Entity relationship:
   *
   * Organization
   *      ↓
   * WebSite
   *      ↓
   * WebPage
   *      ↓
   * WebApplication
   *      ↓
   * Format / Topic entities
   *
   * Breadcrumb is connected to the WebPage.
   */

  const schema = {
    "@context": "https://schema.org",

    "@graph": [
      organization,
      website,
      image,
      breadcrumb,
      webPage,
      application,
    ],
  };

  /**
   * --------------------------------------------------------------
   * OUTPUT
   * --------------------------------------------------------------
   */

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}

