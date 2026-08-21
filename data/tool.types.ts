
/**
 * ------------------------------------------------------------------
 * BASIC CONTENT TYPES
 * ------------------------------------------------------------------
 */

export type Feature = {
  title: string;
  description: string;
};

export type FAQItem = {
  question: string;
  answer: string;

  /**
   * Optional classification for content organization,
   * filtering and future SEO/content systems.
   */
  category?:
    | "general"
    | "privacy"
    | "format"
    | "quality"
    | "technical"
    | "limits";

  /**
   * Helps prioritize the most useful questions.
   */
  priority?: number;
};

export type HowToStep = {
  title: string;
  description: string;
};

export type ComparisonItem = {
  feature: string;
  from: string;
  to: string;
};

export type RelatedTool = {
  title: string;
  href: string;

  /**
   * Optional relationship type.
   */
  relation?:
    | "alternative"
    | "related"
    | "conversion"
    | "next"
    | "recommended";

  /**
   * Optional relevance score.
   */
  priority?: number;
};

/**
 * ------------------------------------------------------------------
 * TOOL MODES
 * ------------------------------------------------------------------
 */

export type ToolMode =
  | "convert"
  | "compress"
  | "resize"
  | "crop"
  | "rotate"
  | "flip"
  | "watermark"
  | "image-to-pdf"
  | "pdf-to-image"
  | "pdf-merge"
  | "merge-images";

/**
 * ------------------------------------------------------------------
 * PROCESSING
 * ------------------------------------------------------------------
 */

export type ProcessingMode =
  | "browser"
  | "server"
  | "hybrid";

/**
 * ------------------------------------------------------------------
 * SEARCH INTENT
 * ------------------------------------------------------------------
 */

export type SearchIntent =
  | "convert"
  | "compress"
  | "resize"
  | "edit"
  | "merge"
  | "download"
  | "learn";

/**
 * ------------------------------------------------------------------
 * SEO CONTENT
 * ------------------------------------------------------------------
 */

export type ToolContent = {
  /**
   * Main introductory paragraph.
   */
  introduction: string;

  /**
   * Explains the main reason/use case for the tool.
   */
  whyConvert: string;

  /**
   * Explains why users should choose this tool.
   */
  whyChoose: string;

  /**
   * Explains the relevant format/tool comparison.
   */
  comparisonText: string;

  /**
   * Privacy explanation.
   */
  privacy: string;

  /**
   * Closing content.
   */
  conclusion: string;

  /**
   * Additional search-focused content.
   */
  useCases?: string[];

  /**
   * Practical tips users may find useful.
   */
  tips?: string[];

  /**
   * Best use cases for the tool.
   */
  bestFor?: string[];

  /**
   * Situations where another tool may be more appropriate.
   */
  notIdealFor?: string[];

  /**
   * Common user mistakes.
   */
  commonMistakes?: string[];

  /**
   * Troubleshooting information.
   */
  troubleshooting?: string[];
};

/**
 * ------------------------------------------------------------------
 * SEO CONFIGURATION
 * ------------------------------------------------------------------
 */

export type ToolSEO = {
  /**
   * Main target query.
   */
  primaryKeyword?: string;

  /**
   * Supporting search queries.
   */
  secondaryKeywords?: string[];

  /**
   * Search intent behind the page.
   */
  searchIntent?: SearchIntent;

  /**
   * Keyword variations and natural-language alternatives.
   */
  keywordVariants?: string[];

  /**
   * Intended audience.
   */
  targetAudience?: string[];

  /**
   * Entity/topic represented by the page.
   */
  searchEntity?: string;

  /**
   * Optional explicit canonical path.
   */
  canonicalPath?: string;

  /**
   * Whether the page should be indexable.
   */
  indexable?: boolean;
};

/**
 * ------------------------------------------------------------------
 * PRIVACY / TRUST
 * ------------------------------------------------------------------
 */

export type ToolPrivacy = {
  /**
   * How files are processed.
   */
  processingMode?: ProcessingMode;

  /**
   * True when processing happens directly in the browser.
   */
  isClientSide?: boolean;

  /**
   * Whether files need to be uploaded.
   */
  uploadRequired?: boolean;

  /**
   * Short privacy message for the UI.
   */
  privacySummary?: string;

  /**
   * Additional security information.
   */
  securityNote?: string;

  /**
   * Whether files are retained.
   */
  dataRetention?: string;

  /**
   * Whether the tool can work without an internet connection
   * after the required application assets are available.
   */
  offlineCapable?: boolean;

  /**
   * Show a privacy badge.
   */
  privacyBadge?: boolean;

  /**
   * Trust points displayed near the tool.
   */
  trustPoints?: string[];

  /**
   * Whether registration is required.
   */
  noRegistration?: boolean;
};

/**
 * ------------------------------------------------------------------
 * TOOL CAPABILITIES
 * ------------------------------------------------------------------
 */

export type ToolCapabilities = {
  /**
   * Supported source formats.
   */
  inputFormats?: string[];

  /**
   * Supported output formats.
   */
  outputFormats?: string[];

  /**
   * Optional maximum file size.
   */
  maxFileSize?: string;

  /**
   * Multiple files in one operation.
   */
  supportsMultipleFiles?: boolean;

  /**
   * Batch processing.
   */
  supportsBatch?: boolean;

  /**
   * Quality controls.
   */
  supportsQuality?: boolean;

  /**
   * Transparent image support.
   */
  supportsTransparency?: boolean;

  /**
   * Animated image support.
   */
  supportsAnimation?: boolean;

  /**
   * Lossless processing.
   */
  supportsLossless?: boolean;

  /**
   * Lossy processing.
   */
  supportsLossy?: boolean;
};

/**
 * ------------------------------------------------------------------
 * HOW-TO CONFIGURATION
 * ------------------------------------------------------------------
 */

export type ToolHowTo = {
  /**
   * Estimated user completion time.
   */
  estimatedTime?: string;

  /**
   * Number of steps.
   */
  totalSteps?: number;

  /**
   * User-facing difficulty.
   */
  difficulty?: "easy" | "medium" | "advanced";

  /**
   * Requirements needed before starting.
   */
  requirements?: string[];

  /**
   * Introductory explanation.
   */
  introduction?: string;

  /**
   * Closing explanation.
   */
  conclusion?: string;

  /**
   * Practical tips.
   */
  tips?: string[];

  /**
   * Common mistakes.
   */
  commonMistakes?: string[];

  /**
   * Troubleshooting information.
   */
  troubleshooting?: string[];
};

/**
 * ------------------------------------------------------------------
 * INTERNAL LINKING
 * ------------------------------------------------------------------
 */

export type ToolLinks = {
  /**
   * Existing related tools.
   */
  relatedTools?: RelatedTool[];

  /**
   * Related blog/article URLs.
   */
  relatedArticles?: RelatedTool[];

  /**
   * Parent category/tool page.
   */
  parentTool?: string;

  /**
   * Category slug.
   */
  categorySlug?: string;

  /**
   * Main category/hub URL.
   */
  hubUrl?: string;

  /**
   * High-priority related tools.
   */
  popularRelatedTools?: RelatedTool[];

  /**
   * Alternative conversions.
   */
  conversionAlternatives?: RelatedTool[];

  /**
   * Suggested next tools.
   */
  nextTools?: RelatedTool[];

  /**
   * Contextual links inside content.
   */
  contextualLinks?: RelatedTool[];
};

/**
 * ------------------------------------------------------------------
 * STRUCTURED DATA
 * ------------------------------------------------------------------
 */

export type ToolSchemaConfig = {
  /**
   * Schema entity type.
   */
  schemaType?: string;

  /**
   * Schema name.
   */
  schemaName?: string;

  /**
   * Schema description.
   */
  schemaDescription?: string;

  /**
   * Schema category.
   */
  schemaCategory?: string;

  /**
   * Whether HowTo schema is enabled.
   */
  howToSchemaEnabled?: boolean;

  /**
   * Whether FAQ schema is enabled.
   */
  faqSchemaEnabled?: boolean;

  /**
   * Whether breadcrumb schema is enabled.
   */
  breadcrumbEnabled?: boolean;

  /**
   * Whether software application schema is enabled.
   */
  softwareApplicationSchema?: boolean;

  /**
   * Application feature description.
   */
  applicationFeature?: string;

  /**
   * Optional schema version.
   */
  schemaVersion?: string;
};

/**
 * ------------------------------------------------------------------
 * MAIN TOOL DATA
 * ------------------------------------------------------------------
 */

export type ToolData = {
  /**
   * --------------------------------------------------------------
   * Identity
   * --------------------------------------------------------------
   */

  slug: string;

  mode: ToolMode;

  title: string;

  heroTitle: string;

  description: string;

  heroDescription: string;

  /**
   * --------------------------------------------------------------
   * SEO
   * --------------------------------------------------------------
   */

  seoTitle: string;

  seoDescription: string;

  keywords: string[];

  /**
   * Advanced SEO configuration.
   */
  seo?: ToolSEO;

  /**
   * --------------------------------------------------------------
   * Classification
   * --------------------------------------------------------------
   */

  category: string;

  icon: string;

  /**
   * --------------------------------------------------------------
   * Conversion information
   * --------------------------------------------------------------
   */

  from: string;

  to: string;

  inputMime: string;

  outputMime: string;

  outputExtension: string;

  /**
   * --------------------------------------------------------------
   * Existing capabilities
   * --------------------------------------------------------------
   */

  supportsQuality: boolean;

  /**
   * Extended capabilities.
   */
  capabilities?: ToolCapabilities;

  /**
   * --------------------------------------------------------------
   * Main UI content
   * --------------------------------------------------------------
   */

  features: Feature[];

  /**
   * --------------------------------------------------------------
   * How-to content
   * --------------------------------------------------------------
   */

  howTo: HowToStep[];

  /**
   * Extended HowTo configuration.
   */
  howToConfig?: ToolHowTo;

  /**
   * --------------------------------------------------------------
   * FAQ
   * --------------------------------------------------------------
   */

  faq: FAQItem[];

  /**
   * --------------------------------------------------------------
   * Comparison
   * --------------------------------------------------------------
   */

  comparison: ComparisonItem[];

  /**
   * --------------------------------------------------------------
   * Related tools
   * --------------------------------------------------------------
   */

  relatedTools: RelatedTool[];

  /**
   * Extended internal linking.
   */
  links?: ToolLinks;

  /**
   * --------------------------------------------------------------
   * SEO content
   * --------------------------------------------------------------
   */

  content: ToolContent;

  /**
   * --------------------------------------------------------------
   * Privacy / trust
   * --------------------------------------------------------------
   */

  privacyConfig?: ToolPrivacy;

  /**
   * --------------------------------------------------------------
   * Structured data
   * --------------------------------------------------------------
   */

  schema?: ToolSchemaConfig;
};

