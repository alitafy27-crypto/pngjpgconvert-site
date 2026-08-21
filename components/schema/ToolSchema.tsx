import type { ToolData } from "@/data/tool.types";

type Props = {
  tool: ToolData;
};

const SITE_URL = "https://pngjpgconvert.com";
const SITE_NAME = "PNG JPG Convert";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

function cleanText(value: string | undefined): string {
  return (
    value
      ?.replace(/\s+/g, " ")
      .trim() || ""
  );
}

function uniqueStrings(values: string[]): string[] {
  return [
    ...new Set(
      values
        .map((value) => value.trim())
        .filter(Boolean)
    ),
  ];
}

export default function ToolSchema({ tool }: Props) {
  const url = `${SITE_URL}/${tool.slug}`;

  /*
   * ============================================================
   * BASIC TOOL INFORMATION
   * ============================================================
   */

  const title =
    cleanText(tool.title) ||
    cleanText(tool.seoTitle) ||
    SITE_NAME;

  const description =
    cleanText(tool.seoDescription) ||
    cleanText(tool.description) ||
    cleanText(tool.heroDescription);

  /*
   * ============================================================
   * FEATURES
   * ============================================================
   */

  const features = uniqueStrings([
    ...tool.features.map(
      (feature) => feature.title
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

  /*
   * ============================================================
   * KEYWORDS
   * ============================================================
   */

  const keywords = uniqueStrings([
    ...(tool.keywords ?? []),

    ...(tool.seo?.secondaryKeywords ?? []),

    ...(tool.seo?.keywordVariants ?? []),

    tool.from,
    tool.to,
    `${tool.from} to ${tool.to}`,
    `${tool.from} to ${tool.to} converter`,
  ]);

  /*
   * ============================================================
   * ORGANIZATION
   * ============================================================
   */

  const organization = {
    "@type": "Organization",

    "@id": `${SITE_URL}#organization`,

    name: SITE_NAME,

    url: SITE_URL,

    logo: {
      "@type": "ImageObject",

      url: OG_IMAGE,

      width: 1200,

      height: 630,
    },
  };

  /*
   * ============================================================
   * WEBSITE
   * ============================================================
   */

  const website = {
    "@type": "WebSite",

    "@id": `${SITE_URL}#website`,

    name: SITE_NAME,

    url: SITE_URL,

    inLanguage: "en",

    publisher: {
      "@id": `${SITE_URL}#organization`,
    },
  };

  /*
   * ============================================================
   * PAGE IMAGE
   * ============================================================
   */

  const image = {
    "@type": "ImageObject",

    "@id": `${url}#image`,

    url: OG_IMAGE,

    contentUrl: OG_IMAGE,

    width: 1200,

    height: 630,

    caption: `${tool.title} - PNG JPG Convert`,
  };

  /*
   * ============================================================
   * SOFTWARE APPLICATION
   * ============================================================
   */

  const softwareApplication: Record<
    string,
    unknown
  > = {
    "@type":
      tool.schema?.schemaType === "WebApplication"
        ? "WebApplication"
        : "SoftwareApplication",

    "@id": `${url}#software`,

    name: title,

    description,

    url,

    image: {
      "@id": `${url}#image`,
    },

    applicationCategory:
      tool.schema?.schemaCategory ||
      "UtilitiesApplication",

    applicationSubCategory:
      `${tool.from} to ${tool.to} ${tool.mode}`,

    operatingSystem: "Any",

    browserRequirements:
      "Requires a modern web browser with JavaScript enabled",

    isAccessibleForFree: true,

    inLanguage: "en",

    author: {
      "@id": `${SITE_URL}#organization`,
    },

    publisher: {
      "@id": `${SITE_URL}#organization`,
    },

    mainEntityOfPage: {
      "@id": url,
    },

    featureList: features,

    offers: {
      "@type": "Offer",

      price: "0",

      priceCurrency: "USD",

      availability:
        "https://schema.org/InStock",

      url,
    },
  };

  /*
   * ============================================================
   * KEYWORDS
   * ============================================================
   */

  if (keywords.length > 0) {
    softwareApplication.keywords =
      keywords.join(", ");
  }

  /*
   * ============================================================
   * PRIVACY INFORMATION
   * ============================================================
   */

  if (
    tool.privacyConfig?.isClientSide
  ) {
    softwareApplication.processingMode =
      "Client-side browser processing";
  }

  /*
   * ============================================================
   * WEB PAGE
   * ============================================================
   */

  const webPage: Record<
    string,
    unknown
  > = {
    "@type": "WebPage",

    "@id": url,

    url,

    name: title,

    headline:
      cleanText(tool.heroTitle) ||
      title,

    description:
      cleanText(tool.heroDescription) ||
      description,

    inLanguage: "en",

    isPartOf: {
      "@id": `${SITE_URL}#website`,
    },

    mainEntity: {
      "@id": `${url}#software`,
    },

    about: {
      "@id": `${url}#software`,
    },

    primaryImageOfPage: {
      "@id": `${url}#image`,
    },

    publisher: {
      "@id": `${SITE_URL}#organization`,
    },
  };

  /*
   * ============================================================
   * CATEGORY
   * ============================================================
   */

  if (tool.category) {
    webPage.about = [
      {
        "@id": `${url}#software`,
      },

      {
        "@type": "Thing",

        name: tool.category,
      },
    ];
  }

  /*
   * ============================================================
   * AUDIENCE
   * ============================================================
   */

  webPage.audience = {
    "@type": "Audience",

    audienceType:
      tool.seo?.targetAudience?.length
        ? tool.seo.targetAudience.join(", ")
        : "General users",
  };

  /*
   * ============================================================
   * CONNECTED SCHEMA GRAPH
   * ============================================================
   *
   * Organization
   *      ↓
   * WebSite
   *      ↓
   * WebPage
   *      ↓
   * SoftwareApplication
   *
   * FAQ and HowTo are intentionally excluded because
   * they are generated by their own schema components.
   */

  const schema = {
    "@context": "https://schema.org",

    "@graph": [
      organization,
      website,
      image,
      webPage,
      softwareApplication,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}