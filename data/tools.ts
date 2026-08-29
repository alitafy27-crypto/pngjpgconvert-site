import type { ToolData } from "@/data/tool.types";

/**
 * =====================================================================
 * TOOLS REGISTRY
 * =====================================================================
 *
 * Central registry for all available tools.
 *
 * ToolData is defined centrally in:
 *
 *   @/data/tool.types
 *
 * Do NOT redefine ToolData in this file.
 * =====================================================================
 */

// ✅ استيراد الفئات
import { categories } from "./categories";

// ✅ استيراد جميع الأدوات من ملفاتها
import avifToJpg from "./tools/avif-to-jpg";
import avifToPng from "./tools/avif-to-png";
import avifToWebp from "./tools/avif-to-webp";
import cropImage from "./tools/crop-image";
import flipImage from "./tools/flip-image";
import imageCompressor from "./tools/image-compressor";
import imageCrop from "./tools/image-crop";
import imageFlip from "./tools/image-flip";
import imageResizer from "./tools/image-resizer";
import imageRotate from "./tools/image-rotate";
import imageToPdf from "./tools/image-to-pdf";
import imageWatermark from "./tools/image-watermark";
import jpgToAvif from "./tools/jpg-to-avif";
import jpgToPng from "./tools/jpg-to-png";
import jpgToWebp from "./tools/jpg-to-webp";
import mergeImagesTool from "./tools/MergeImagesTool"; // إذا كان موجود
import pdfMerge from "./tools/pdf-merge";
import pdfToImage from "./tools/pdf-to-image";
import pngToAvif from "./tools/png-to-avif";
import pngToJpg from "./tools/png-to-jpg";
import pngToWebp from "./tools/png-to-webp";
import resizeImage from "./tools/resize-image";
import rotateImage from "./tools/rotate-image";
import watermarkImage from "./tools/watermark-image";
import webpToAvif from "./tools/webp-to-avif";
import webpToJpg from "./tools/webp-to-jpg";
import webpToPng from "./tools/webp-to-png";

/**
 * =====================================================================
 * TOOL LIST
 * =====================================================================
 *
 * Add complete ToolData objects here.
 */
export const toolsList: ToolData[] = [
  avifToJpg,
  avifToPng,
  avifToWebp,
  cropImage,
  flipImage,
  imageCompressor,
  imageCrop,
  imageFlip,
  imageResizer,
  imageRotate,
  imageToPdf,
  imageWatermark,
  jpgToAvif,
  jpgToPng,
  jpgToWebp,
  pdfMerge,
  pdfToImage,
  pngToAvif,
  pngToJpg,
  pngToWebp,
  resizeImage,
  rotateImage,
  watermarkImage,
  webpToAvif,
  webpToJpg,
  webpToPng,
];

// إذا كان MergeImagesTool موجوداً، أضفه:
// mergeImagesTool,

/**
 * =====================================================================
 * INTERNAL HELPERS
 * =====================================================================
 */

function normalizeSlug(value: string): string {
  return value
    .trim()
    .replace(/^\/+|\/+$/g, "")
    .toLowerCase();
}

function normalizeText(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

function isToolPublished(tool: ToolData): boolean {
  return (
    tool.availability?.enabled !== false &&
    tool.availability?.status !== "draft" &&
    tool.availability?.status !== "archived"
  );
}

function isToolActive(tool: ToolData): boolean {
  return tool.availability?.enabled !== false;
}

/**
 * =====================================================================
 * GET ALL TOOLS
 * =====================================================================
 *
 * Returns all active and published tools.
 *
 * This is the preferred function for public pages, navigation,
 * related tools, sitemap generation and SEO.
 */
export function getAllTools(): ToolData[] {
  return toolsList.filter(isToolPublished);
}

/**
 * =====================================================================
 * GET TOOL BY SLUG
 * =====================================================================
 *
 * Finds a public tool using its URL slug.
 *
 * The lookup is normalized to tolerate:
 *
 *   png-to-jpg
 *   /png-to-jpg
 *   PNG-TO-JPG
 */
export function getTool(
  slug: string,
): ToolData | undefined {
  const normalizedSlug = normalizeSlug(slug);

  if (!normalizedSlug) {
    return undefined;
  }

  return getAllTools().find(
    (tool) =>
      normalizeSlug(tool.slug) === normalizedSlug,
  );
}

/**
 * Alias with a more explicit name.
 */
export const getToolBySlug = getTool;

/**
 * =====================================================================
 * GET ALL SLUGS
 * =====================================================================
 *
 * Useful for static routes, generateStaticParams and sitemap generation.
 */
export function getAllSlugs(): string[] {
  return getAllTools()
    .map((tool) => normalizeSlug(tool.slug))
    .filter(Boolean);
}

/**
 * =====================================================================
 * GET TOOLS BY STATUS
 * =====================================================================
 */
export function getToolsByStatus(
  status: ToolData["availability"] extends infer T
    ? T extends { status?: infer S }
      ? S
      : never
    : never,
): ToolData[] {
  return toolsList.filter(
    (tool) => tool.availability?.status === status,
  );
}

/**
 * =====================================================================
 * GET TOOLS BY CATEGORY
 * =====================================================================
 */
export function getToolsByCategory(
  category: string,
): ToolData[] {
  const normalizedCategory =
    normalizeText(category);

  if (!normalizedCategory) {
    return [];
  }

  return getAllTools().filter(
    (tool) =>
      normalizeText(tool.category) ===
      normalizedCategory,
  );
}

/**
 * =====================================================================
 * GET CATEGORIES WITH TOOLS
 * =====================================================================
 *
 * Returns categories with their associated tools.
 */
export function getCategoriesWithTools() {
  return categories.map((category) => ({
    ...category,
    tools: category.items
      .map((slug) => getTool(slug))
      .filter(Boolean) as ToolData[],
  }));
}

/**
 * =====================================================================
 * GET TOOLS BY SEARCH INTENT
 * =====================================================================
 */
export function getToolsBySearchIntent(
  intent: NonNullable<
    ToolData["seo"]
  >["searchIntent"],
): ToolData[] {
  if (!intent) {
    return [];
  }

  return getAllTools().filter(
    (tool) =>
      tool.seo?.searchIntent === intent,
  );
}

/**
 * =====================================================================
 * GET TOOLS BY FORMAT
 * =====================================================================
 *
 * Searches both input and output formats.
 *
 * Example:
 *
 *   getToolsByFormat("PNG")
 */
export function getToolsByFormat(
  format: ToolData["from"],
): ToolData[] {
  const normalizedFormat =
    normalizeText(format);

  return getAllTools().filter((tool) => {
    const inputFormats =
      tool.capabilities?.inputFormats ?? [
        tool.from,
      ];

    const outputFormats =
      tool.capabilities?.outputFormats ?? [
        tool.to,
      ];

    return [
      ...inputFormats,
      ...outputFormats,
    ].some(
      (item) =>
        normalizeText(item) ===
        normalizedFormat,
    );
  });
}

/**
 * =====================================================================
 * GET TOOLS BY FEATURE
 * =====================================================================
 *
 * Searches feature titles and capability flags.
 */
export function getToolsByFeature(
  feature: string,
): ToolData[] {
  const normalizedFeature =
    normalizeText(feature);

  if (!normalizedFeature) {
    return [];
  }

  return getAllTools().filter((tool) => {
    const featureTitles =
      tool.features.map(
        (item) => item.title,
      );

    const capabilityNames = [
      tool.capabilities?.supportsBatch
        ? "batch"
        : "",
      tool.capabilities?.supportsMultipleFiles
        ? "multiple files"
        : "",
      tool.capabilities?.supportsQuality
        ? "quality"
        : "",
      tool.capabilities?.supportsOffline
        ? "offline"
        : "",
      tool.capabilities?.supportsPreview
        ? "preview"
        : "",
      tool.capabilities?.supportsDragAndDrop
        ? "drag and drop"
        : "",
      tool.capabilities?.supportsClipboard
        ? "clipboard"
        : "",
    ];

    return [
      ...featureTitles,
      ...capabilityNames,
    ]
      .filter(Boolean)
      .some((value) =>
        normalizeText(value).includes(
          normalizedFeature,
        ),
      );
  });
}

/**
 * =====================================================================
 * GET TOOLS BY PRIVACY
 * =====================================================================
 *
 * Example:
 *
 *   getToolsByPrivacy("client-side")
 *   getToolsByPrivacy("no-registration")
 *   getToolsByPrivacy("offline")
 */
export function getToolsByPrivacy(
  type:
    | "client-side"
    | "server"
    | "no-registration"
    | "offline",
): ToolData[] {
  return getAllTools().filter((tool) => {
    switch (type) {
      case "client-side":
        return (
          tool.privacyConfig?.isClientSide ===
          true
        );

      case "server":
        return (
          tool.privacyConfig?.processingMode ===
          "server"
        );

      case "no-registration":
        return (
          tool.privacyConfig?.noRegistration ===
          true
        );

      case "offline":
        return (
          tool.privacyConfig?.offlineCapable ===
            true ||
          tool.capabilities?.supportsOffline ===
            true
        );

      default:
        return false;
    }
  });
}

/**
 * =====================================================================
 * GET RELATED TOOLS
 * =====================================================================
 *
 * Uses real ToolData relationships:
 *
 *   1. Same mode
 *   2. Same category
 *   3. Matching input/output formats
 *
 * The current tool itself is excluded.
 */
export function getRelatedTools(
  tool: ToolData,
  limit = 6,
): ToolData[] {
  if (limit <= 0) {
    return [];
  }

  const currentSlug =
    normalizeSlug(tool.slug);

  const scored = getAllTools()
    .filter(
      (candidate) =>
        normalizeSlug(candidate.slug) !==
        currentSlug,
    )
    .map((candidate) => {
      let score = 0;

      if (
        candidate.mode === tool.mode
      ) {
        score += 4;
      }

      if (
        normalizeText(
          candidate.category,
        ) ===
        normalizeText(tool.category)
      ) {
        score += 3;
      }

      if (
        candidate.from === tool.from ||
        candidate.to === tool.to
      ) {
        score += 2;
      }

      if (
        candidate.from === tool.to ||
        candidate.to === tool.from
      ) {
        score += 2;
      }

      return {
        tool: candidate,
        score,
      };
    });

  return scored
    .filter((item) => item.score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }

      return (
        a.tool.title.localeCompare(
          b.tool.title,
        )
      );
    })
    .slice(0, limit)
    .map((item) => item.tool);
}

/**
 * =====================================================================
 * SEARCH TOOLS
 * =====================================================================
 *
 * Searches:
 *
 *   - title
 *   - hero title
 *   - description
 *   - keywords
 *   - SEO keywords
 *   - category
 */
export function searchTools(
  query: string,
  limit = 10,
): ToolData[] {
  const normalizedQuery =
    normalizeText(query);

  if (
    !normalizedQuery ||
    limit <= 0
  ) {
    return [];
  }

  const results = getAllTools()
    .map((tool) => {
      const title =
        normalizeText(tool.title);

      const heroTitle =
        normalizeText(tool.heroTitle);

      const description =
        normalizeText(tool.description);

      const category =
        normalizeText(tool.category);

      const keywords = [
        ...tool.keywords,
        ...(tool.seo?.secondaryKeywords ??
          []),
        ...(tool.seo?.keywordVariants ??
          []),
        tool.seo?.primaryKeyword ?? "",
      ].map(normalizeText);

      let score = 0;

      if (title === normalizedQuery) {
        score += 100;
      } else if (
        title.includes(normalizedQuery)
      ) {
        score += 60;
      }

      if (
        heroTitle.includes(
          normalizedQuery,
        )
      ) {
        score += 35;
      }

      if (
        keywords.some((keyword) =>
          keyword.includes(
            normalizedQuery,
          ),
        )
      ) {
        score += 30;
      }

      if (
        category.includes(
          normalizedQuery,
        )
      ) {
        score += 20;
      }

      if (
        description.includes(
          normalizedQuery,
        )
      ) {
        score += 10;
      }

      return {
        tool,
        score,
      };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }

      return a.tool.title.localeCompare(
        b.tool.title,
      );
    });

  return results
    .slice(0, limit)
    .map((item) => item.tool);
}

/**
 * =====================================================================
 * GET SITEMAP TOOLS
 * =====================================================================
 *
 * Returns only public, indexable tools.
 */
export function getSitemapTools(): ToolData[] {
  return getAllTools().filter(
    (tool) =>
      tool.seo?.indexable !== false,
  );
}

/**
 * =====================================================================
 * GET BREADCRUMB TOOLS
 * =====================================================================
 *
 * Provides the minimum data required by breadcrumb generation.
 */
export function getBreadcrumbTools(): Array<{
  title: string;
  slug: string;
  href: string;
}> {
  return getAllTools()
    .filter(
      (tool) =>
        Boolean(
          normalizeSlug(tool.slug),
        ),
    )
    .map((tool) => ({
      title: tool.title,
      slug: normalizeSlug(tool.slug),
      href: `/${normalizeSlug(
        tool.slug,
      )}`,
    }));
}

/**
 * =====================================================================
 * GET TOOLS WITH MISSING SEO
 * =====================================================================
 *
 * Detects incomplete SEO configuration.
 */
export function getToolsWithMissingSEO(): ToolData[] {
  return toolsList.filter((tool) => {
    const missingTitle =
      !tool.seoTitle.trim();

    const missingDescription =
      !tool.seoDescription.trim();

    const missingKeywords =
      tool.keywords.length === 0;

    const missingPrimaryKeyword =
      !tool.seo?.primaryKeyword;

    const missingCanonicalPath =
      !tool.seo?.canonicalPath;

    return (
      missingTitle ||
      missingDescription ||
      missingKeywords ||
      missingPrimaryKeyword ||
      missingCanonicalPath
    );
  });
}

/**
 * =====================================================================
 * GET TOOLS WITH SCHEMA
 * =====================================================================
 *
 * Returns tools where structured-data generation
 * is explicitly configured.
 */
export function getToolsWithSchema(): ToolData[] {
  return getAllTools().filter(
    (tool) => {
      const schema = tool.schema;

      if (!schema) {
        return false;
      }

      return (
        schema.schemaType !== undefined ||
        schema.softwareApplicationSchema ===
          true ||
        schema.faqSchemaEnabled === true ||
        schema.howToSchemaEnabled === true ||
        schema.breadcrumbEnabled === true
      );
    },
  );
}

/**
 * =====================================================================
 * GET TOOLS SORTED BY PRIORITY
 * =====================================================================
 *
 * Priority is derived from real content data.
 *
 * No artificial popularity or ranking data is invented.
 */
export function getToolsSortedByPriority(): ToolData[] {
  return [...getAllTools()].sort(
    (a, b) => {
      const aPriority =
        Math.max(
          0,
          ...a.features.map(
            (feature) =>
              feature.priority ?? 0,
          ),
          ...a.relatedTools.map(
            (related) =>
              related.priority ?? 0,
          ),
        );

      const bPriority =
        Math.max(
          0,
          ...b.features.map(
            (feature) =>
              feature.priority ?? 0,
          ),
          ...b.relatedTools.map(
            (related) =>
              related.priority ?? 0,
          ),
        );

      return bPriority - aPriority;
    },
  );
}

/**
 * =====================================================================
 * GET TOOLS FOR LANGUAGE
 * =====================================================================
 */
export function getToolsForLanguage(
  language: string,
): ToolData[] {
  const normalizedLanguage =
    normalizeText(language);

  if (!normalizedLanguage) {
    return [];
  }

  return getAllTools().filter(
    (tool) =>
      normalizeText(
        tool.seo?.language ?? "",
      ) === normalizedLanguage,
  );
}

/**
 * =====================================================================
 * TOOL STATISTICS
 * =====================================================================
 *
 * Provides safe aggregate information without
 * introducing fake usage or popularity metrics.
 */
export function getToolStats() {
  const tools = getAllTools();

  const categories = new Set<string>();
  const inputFormats = new Set<string>();
  const outputFormats = new Set<string>();
  const modes = new Set<string>();

  for (const tool of tools) {
    categories.add(tool.category);
    inputFormats.add(tool.from);
    outputFormats.add(tool.to);
    modes.add(tool.mode);
  }

  return {
    total: tools.length,
    categories: [...categories].sort(),
    inputFormats: [...inputFormats].sort(),
    outputFormats: [...outputFormats].sort(),
    modes: [...modes].sort(),
  };
}

/**
 * =====================================================================
 * REGISTRY VALIDATION
 * =====================================================================
 *
 * Finds duplicate or malformed slugs.
 *
 * Useful during development and build validation.
 */
export function validateToolsRegistry(): {
  valid: boolean;
  duplicateSlugs: string[];
  missingSlugs: string[];
} {
  const seen = new Set<string>();
  const duplicates = new Set<string>();
  const missingSlugs: string[] = [];

  for (const tool of toolsList) {
    const slug = normalizeSlug(tool.slug);

    if (!slug) {
      missingSlugs.push(tool.title);
      continue;
    }

    if (seen.has(slug)) {
      duplicates.add(slug);
    }

    seen.add(slug);
  }

  return {
    valid:
      duplicates.size === 0 &&
      missingSlugs.length === 0,
    duplicateSlugs: [
      ...duplicates,
    ].sort(),
    missingSlugs,
  };
}