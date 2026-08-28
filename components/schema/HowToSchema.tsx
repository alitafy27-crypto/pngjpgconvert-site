import type { ReactElement } from "react";

import type { ToolData } from "@/data/tool.types";

type Props = {
  tool: ToolData;
};

type CleanStep = {
  name: string;
  text: string;
  originalIndex: number;
};

const SITE_URL = "https://pngjpgconvert.com";
const LANGUAGE = "en";

/**
 * ------------------------------------------------------------------
 * HELPERS
 * ------------------------------------------------------------------
 */

/**
 * Clean plain text before inserting it into JSON-LD.
 *
 * HTML is removed because HowTo structured-data text should contain
 * readable text rather than arbitrary markup.
 */
function cleanText(
  value: string | undefined,
): string {
  if (!value) {
    return "";
  }

  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Normalize a tool slug.
 */
function normalizeSlug(
  slug: string | undefined,
): string {
  if (!slug) {
    return "";
  }

  return slug
    .trim()
    .replace(/^\/+|\/+$/g, "")
    .replace(/\/{2,}/g, "/");
}

/**
 * Validate an ISO 8601 duration.
 *
 * Supported examples:
 *
 * PT30S
 * PT1M
 * PT1M30S
 * PT5M
 * PT1H
 * PT1H20M
 */
function isValidDuration(
  value: string,
): boolean {
  return /^P(?:\d+D)?(?:T(?=\d)(?:\d+H)?(?:\d+M)?(?:\d+S)?)$/.test(
    value,
  );
}

/**
 * Remove duplicate steps while preserving order.
 */
function uniqueSteps(
  steps: CleanStep[],
): CleanStep[] {
  const seen = new Set<string>();

  return steps.filter((step) => {
    const key =
      `${step.name.toLowerCase()}::${step.text.toLowerCase()}`;

    if (seen.has(key)) {
      return false;
    }

    seen.add(key);

    return true;
  });
}

/**
 * Normalize configured requirements.
 */
function cleanRequirements(
  requirements: string[] | undefined,
): string[] {
  if (!Array.isArray(requirements)) {
    return [];
  }

  return [
    ...new Set(
      requirements
        .map(cleanText)
        .filter(Boolean),
    ),
  ];
}

/**
 * ------------------------------------------------------------------
 * HOWTO SCHEMA
 * ------------------------------------------------------------------
 */

export default function HowToSchema({
  tool,
}: Props): ReactElement | null {
  /**
   * --------------------------------------------------------------
   * ROUTE VALIDATION
   * --------------------------------------------------------------
   */

  const cleanSlug =
    normalizeSlug(tool.slug);

  if (!cleanSlug) {
    return null;
  }

  const pageUrl =
    `${SITE_URL}/${cleanSlug}`;

  const pageId =
    `${pageUrl}#webpage`;

  const howToId =
    `${pageUrl}#howto`;

  /**
   * --------------------------------------------------------------
   * VALIDATE RAW HOW-TO DATA
   * --------------------------------------------------------------
   */

  if (
    !Array.isArray(tool.howTo) ||
    tool.howTo.length === 0
  ) {
    return null;
  }

  /**
   * --------------------------------------------------------------
   * CLEAN STEPS
   * --------------------------------------------------------------
   */

  const cleanedSteps: CleanStep[] =
    tool.howTo
      .map((item, index) => ({
        name: cleanText(item.title),
        text: cleanText(item.description),
        originalIndex: index,
      }))
      .filter(
        (step) =>
          step.name.length > 0 &&
          step.text.length > 0,
      );

  /**
   * --------------------------------------------------------------
   * REMOVE DUPLICATES
   * --------------------------------------------------------------
   */

  const validSteps =
    uniqueSteps(cleanedSteps);

  if (validSteps.length === 0) {
    return null;
  }

  /**
   * --------------------------------------------------------------
   * BASIC TOOL INFORMATION
   * --------------------------------------------------------------
   */

  const title =
    cleanText(tool.title) ||
    cleanText(tool.heroTitle) ||
    "Online Tool";

  const inputFormat =
    cleanText(tool.from);

  const outputFormat =
    cleanText(tool.to);

  /**
   * --------------------------------------------------------------
   * SEO DESCRIPTION
   * --------------------------------------------------------------
   */

  const configuredIntroduction =
    cleanText(
      tool.howToConfig?.introduction,
    );

  const generatedDescription =
    inputFormat && outputFormat
      ? `Learn how to use ${title} to convert ${inputFormat} files to ${outputFormat} format online.`
      : `Learn how to use ${title} online with this simple step-by-step guide.`;

  const description =
    configuredIntroduction ||
    cleanText(tool.heroDescription) ||
    cleanText(tool.description) ||
    generatedDescription;

  /**
   * --------------------------------------------------------------
   * HOW-TO NAME
   * --------------------------------------------------------------
   */

  const howToName =
    inputFormat && outputFormat
      ? `How to Convert ${inputFormat} to ${outputFormat} Online`
      : `How to Use ${title}`;

  /**
   * --------------------------------------------------------------
   * HOW-TO STEPS
   * --------------------------------------------------------------
   *
   * Every valid step receives:
   *
   * - unique @id
   * - position
   * - name
   * - text
   * - URL
   */

  const steps = validSteps.map(
    ({ name, text }, index) => {
      const stepId =
        `${pageUrl}#step-${index + 1}`;

      return {
        "@type": "HowToStep",

        "@id": stepId,

        position: index + 1,

        name,

        text,

        url: stepId,
      };
    },
  );

  /**
   * --------------------------------------------------------------
   * BASE SCHEMA
   * --------------------------------------------------------------
   */

  const schema: Record<
    string,
    unknown
  > = {
    "@type": "HowTo",

    "@id": howToId,

    name: howToName,

    description,

    url: `${pageUrl}#how-to`,

    inLanguage: LANGUAGE,

    isAccessibleForFree: true,

    mainEntityOfPage: {
      "@type": "WebPage",

      "@id": pageId,
    },

    step: steps,
  };

  /**
   * --------------------------------------------------------------
   * TOTAL TIME
   * --------------------------------------------------------------
   *
   * Only publish time when it is explicitly configured
   * and is a valid ISO 8601 duration.
   */

  const estimatedTime =
    cleanText(
      tool.howToConfig?.estimatedTime,
    );

  if (
    estimatedTime &&
    isValidDuration(estimatedTime)
  ) {
    schema.totalTime =
      estimatedTime;
  }

  /**
   * --------------------------------------------------------------
   * ESTIMATED COST
   * --------------------------------------------------------------
   *
   * The website's tool usage is free.
   *
   * We only expose zero cost for the actual online procedure.
   */

  schema.estimatedCost = {
    "@type": "MonetaryAmount",

    currency: "USD",

    value: 0,
  };

  /**
   * --------------------------------------------------------------
   * YIELD
   * --------------------------------------------------------------
   */

  const result =
    inputFormat && outputFormat
      ? `Converted ${outputFormat} file`
      : "Completed result";

  schema.yield = result;

  /**
   * --------------------------------------------------------------
   * ABOUT
   * --------------------------------------------------------------
   */

  if (
    inputFormat ||
    outputFormat
  ) {
    schema.about = {
      "@type": "Thing",

      name:
        inputFormat && outputFormat
          ? `${inputFormat} to ${outputFormat} conversion`
          : "Online file conversion",
    };
  }

  /**
   * --------------------------------------------------------------
   * REQUIREMENTS / SUPPLIES
   * --------------------------------------------------------------
   *
   * Only configured requirements are published.
   *
   * We do not invent:
   *
   * - Internet connection
   * - Browser
   * - Image editor
   * - Hardware
   *
   * unless they actually exist in the tool configuration.
   */

  const requirements =
    cleanRequirements(
      tool.howToConfig?.requirements,
    );

  if (requirements.length > 0) {
    schema.supply =
      requirements.map(
        (requirement) => ({
          "@type": "HowToSupply",

          name: requirement,
        }),
      );
  }

  /**
   * --------------------------------------------------------------
   * OPTIONAL AUDIENCE
   * --------------------------------------------------------------
   */

  const targetAudience =
    Array.isArray(
      tool.seo?.targetAudience,
    )
      ? [
          ...new Set(
            tool.seo.targetAudience
              .map(cleanText)
              .filter(Boolean),
          ),
        ]
      : [];

  if (
    targetAudience.length > 0
  ) {
    schema.audience =
      targetAudience.map(
        (audienceType) => ({
          "@type": "Audience",

          audienceType,
        }),
      );
  }

  /**
   * --------------------------------------------------------------
   * OPTIONAL KEYWORDS
   * --------------------------------------------------------------
   */

  const keywords = [
    cleanText(
      tool.seo?.primaryKeyword,
    ),

    ...(tool.seo?.secondaryKeywords ??
      []),

    ...(tool.seo?.keywordVariants ??
      []),
  ]
    .map(cleanText)
    .filter(Boolean);

  const uniqueKeywords = [
    ...new Set(keywords),
  ];

  if (
    uniqueKeywords.length > 0
  ) {
    schema.keywords =
      uniqueKeywords.join(", ");
  }

  /**
   * --------------------------------------------------------------
   * GRAPH
   * --------------------------------------------------------------
   *
   * HowTo references the WebPage entity already defined by
   * ToolSchema instead of creating a competing duplicate.
   */

  const graph = {
    "@context":
      "https://schema.org",

    "@graph": [
      schema,
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
        __html:
          JSON.stringify(graph),
      }}
    />
  );
}
