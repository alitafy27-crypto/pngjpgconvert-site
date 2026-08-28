import type { ReactElement } from "react";

type Props = {
  title: string;
  slug: string;
};

type BreadcrumbItem = {
  name: string;
  url: string;
  id: string;
};

const BASE_URL = "https://pngjpgconvert.com";
const HOME_URL = `${BASE_URL}/`;
const TOOLS_URL = `${BASE_URL}/tools`;

const LANGUAGE = "en";

/**
 * ------------------------------------------------------------------
 * HELPERS
 * ------------------------------------------------------------------
 */

/**
 * Clean user/content supplied text before placing it
 * inside JSON-LD.
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
 * Normalize a slug and prevent malformed paths.
 *
 * Examples:
 * "png-to-jpg"       -> "png-to-jpg"
 * "/png-to-jpg/"     -> "png-to-jpg"
 * "//png-to-jpg//"   -> "png-to-jpg"
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
 * Build an absolute URL from a path.
 */
function buildUrl(
  path: string,
): string {
  if (
    path.startsWith("http://") ||
    path.startsWith("https://")
  ) {
    return path;
  }

  const normalizedPath =
    path === "/"
      ? "/"
      : `/${path.replace(/^\/+/, "")}`;

  return `${BASE_URL}${normalizedPath}`;
}

/**
 * Convert a slug into a readable fallback title.
 *
 * Example:
 * "png-to-jpg" -> "Png To Jpg"
 */
function slugToTitle(
  slug: string,
): string {
  return slug
    .split("/")
    .filter(Boolean)
    .join(" ")
    .split("-")
    .filter(Boolean)
    .map(
      (word) =>
        word.charAt(0).toUpperCase() +
        word.slice(1),
    )
    .join(" ");
}

/**
 * Create a breadcrumb item only when all required
 * values are valid.
 */
function createItem(
  name: string,
  url: string,
  id: string,
): BreadcrumbItem | null {
  const cleanName = cleanText(name);

  if (!cleanName || !url || !id) {
    return null;
  }

  return {
    name: cleanName,
    url,
    id,
  };
}

/**
 * Remove duplicate breadcrumb URLs while
 * preserving the original order.
 */
function uniqueItems(
  items: BreadcrumbItem[],
): BreadcrumbItem[] {
  const seen = new Set<string>();

  return items.filter((item) => {
    const key = item.url.toLowerCase();

    if (seen.has(key)) {
      return false;
    }

    seen.add(key);

    return true;
  });
}

/**
 * ------------------------------------------------------------------
 * BREADCRUMB SCHEMA
 * ------------------------------------------------------------------
 */

export default function BreadcrumbSchema({
  title,
  slug,
}: Props): ReactElement | null {
  /**
   * --------------------------------------------------------------
   * VALIDATION
   * --------------------------------------------------------------
   */

  const cleanSlug =
    normalizeSlug(slug);

  if (!cleanSlug) {
    return null;
  }

  /**
   * --------------------------------------------------------------
   * PAGE URL
   * --------------------------------------------------------------
   */

  const pageUrl =
    buildUrl(cleanSlug);

  /**
   * --------------------------------------------------------------
   * ENTITY IDS
   * --------------------------------------------------------------
   *
   * These IDs must remain consistent with ToolSchema.
   */

  const pageId =
    `${pageUrl}#webpage`;

  const breadcrumbId =
    `${pageUrl}#breadcrumb`;

  const homeId =
    `${HOME_URL}#webpage`;

  const toolsId =
    `${TOOLS_URL}#webpage`;

  /**
   * --------------------------------------------------------------
   * BREADCRUMB TITLE
   * --------------------------------------------------------------
   */

  const cleanTitle =
    cleanText(title);

  const breadcrumbTitle =
    cleanTitle ||
    slugToTitle(cleanSlug) ||
    "Tool";

  /**
   * --------------------------------------------------------------
   * BREADCRUMB ITEMS
   * --------------------------------------------------------------
   *
   * Current real site hierarchy:
   *
   * Home
   *   ↓
   * Tools
   *   ↓
   * Current Tool
   *
   * Do not invent categories that do not exist
   * in the actual website navigation.
   */

  const rawItems: Array<
    BreadcrumbItem | null
  > = [
    createItem(
      "Home",
      HOME_URL,
      homeId,
    ),

    createItem(
      "Image Conversion Tools",
      TOOLS_URL,
      toolsId,
    ),

    createItem(
      breadcrumbTitle,
      pageUrl,
      pageId,
    ),
  ];

  /**
   * --------------------------------------------------------------
   * CLEAN / DEDUPLICATE ITEMS
   * --------------------------------------------------------------
   */

  const items =
    uniqueItems(
      rawItems.filter(
        (
          item,
        ): item is BreadcrumbItem =>
          item !== null,
      ),
    );

  /**
   * BreadcrumbList should contain
   * at least two meaningful levels.
   */

  if (items.length < 2) {
    return null;
  }

  /**
   * --------------------------------------------------------------
   * LIST ITEMS
   * --------------------------------------------------------------
   *
   * Positions are generated dynamically.
   */

  const itemListElement =
    items.map(
      (item, index) => ({
        "@type": "ListItem",

        position: index + 1,

        name: item.name,

        item: {
          "@type": "WebPage",

          "@id": item.id,

          url: item.url,

          name: item.name,

          inLanguage:
            LANGUAGE,
        },
      }),
    );

  /**
   * --------------------------------------------------------------
   * BREADCRUMB ENTITY
   * --------------------------------------------------------------
   */

  const breadcrumb = {
    "@type": "BreadcrumbList",

    "@id": breadcrumbId,

    name:
      `Breadcrumbs for ${breadcrumbTitle}`,

    inLanguage:
      LANGUAGE,

    numberOfItems:
      itemListElement.length,

    itemListElement,
  };

  /**
   * --------------------------------------------------------------
   * GRAPH
   * --------------------------------------------------------------
   *
   * The current page is referenced through:
   *
   * /tool-slug#webpage
   *
   * ToolSchema owns the WebPage entity itself,
   * preventing duplicate WebPage definitions.
   */

  const schema = {
    "@context": "https://schema.org",

    "@graph": [
      breadcrumb,
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
          JSON.stringify(schema),
      }}
    />
  );
}
