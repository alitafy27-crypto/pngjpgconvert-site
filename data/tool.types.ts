/**
 * =====================================================================
 * TOOL TYPES
 * =====================================================================
 *
 * Single source of truth for the application's tool architecture.
 *
 * This file defines:
 * - Tool identity
 * - Conversion capabilities
 * - SEO metadata
 * - Structured data configuration
 * - FAQ / HowTo configuration
 * - Internal linking
 * - Privacy / security
 * - Content quality
 * - Analytics
 * - Availability
 *
 * IMPORTANT:
 * SEO-related fields should describe REAL page/content data.
 * Do not populate fields merely to manipulate search engines.
 * =====================================================================
 */

/* =====================================================================
 * BASIC TYPES
 * ===================================================================== */

export type ContentStatus =
  | "draft"
  | "published"
  | "archived";

export type Priority =
  | "low"
  | "medium"
  | "high"
  | "critical";

export type LanguageCode = string;

export type ProcessingStatus =
  | "idle"
  | "queued"
  | "processing"
  | "completed"
  | "failed"
  | "cancelled";

/* =====================================================================
 * TOOL MODES
 * ===================================================================== */

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

/* =====================================================================
 * PROCESSING
 * ===================================================================== */

export type ProcessingMode =
  | "browser"
  | "server"
  | "hybrid";

export type ProcessingStrategy =
  | "canvas"
  | "webcodecs"
  | "wasm"
  | "native-browser"
  | "server"
  | "hybrid";

/* =====================================================================
 * SEO
 * ===================================================================== */

export type SearchIntent =
  | "convert"
  | "compress"
  | "resize"
  | "edit"
  | "merge"
  | "download"
  | "learn";

/* =====================================================================
 * CONTENT
 * ===================================================================== */

export type Feature = {
  title: string;
  description: string;
  icon?: string;
  priority?: number;
};

export type ToolContentSection = {
  title: string;
  content: string;
  id?: string;
  priority?: number;
};

/* =====================================================================
 * FAQ
 * ===================================================================== */

export type FAQCategory =
  | "general"
  | "privacy"
  | "format"
  | "quality"
  | "technical"
  | "limits"
  | "compatibility"
  | "usage";

export type FAQItem = {
  question: string;
  answer: string;
  category?: FAQCategory;
  priority?: number;
  id?: string;
};

/**
 * Dedicated FAQ Schema configuration.
 *
 * This controls structured-data generation without mixing
 * presentation/content data with Schema settings.
 */
export type FAQSchemaConfig = {
  enabled?: boolean;

  /**
   * Optional limit to prevent excessive FAQ structured data.
   */
  maxItems?: number;

  /**
   * Main FAQ topic/category.
   */
  category?: FAQCategory;

  /**
   * Explicit language override.
   */
  language?: LanguageCode;
};

/* =====================================================================
 * HOW TO
 * ===================================================================== */

export type HowToStep = {
  title: string;
  description: string;

  /**
   * Stable identifier used for internal anchors and Schema @id.
   */
  id?: string;

  /**
   * Optional visual explanation for this step.
   */
  image?: string;

  /**
   * Optional estimated duration in ISO 8601 format.
   *
   * Example:
   * PT10S
   * PT1M
   * PT2M30S
   */
  timeRequired?: string;

  /**
   * Optional practical tip shown with the step.
   */
  tip?: string;
};

export type ToolDifficulty =
  | "easy"
  | "medium"
  | "advanced";

export type ToolHowTo = {
  estimatedTime?: string;
  totalSteps?: number;
  difficulty?: ToolDifficulty;

  requirements?: string[];

  introduction?: string;
  conclusion?: string;

  tips?: string[];

  commonMistakes?: string[];
  troubleshooting?: string[];

  /**
   * Optional final result description.
   */
  result?: string;

  /**
   * Optional educational level.
   */
  educationalLevel?: string;

  /**
   * Dedicated HowTo Schema configuration.
   */
  schemaConfig?: HowToSchemaConfig;
};

/**
 * Dedicated HowTo Schema configuration.
 */
export type HowToSchemaConfig = {
  enabled?: boolean;

  /**
   * Whether step images should be included
   * when real images exist.
   */
  includeStepImages?: boolean;

  /**
   * Whether step videos should be included
   * when real videos exist.
   */
  includeStepVideos?: boolean;

  /**
   * Whether actual digital/physical tools should
   * be represented in Schema.
   */
  includeTools?: boolean;

  /**
   * Whether supplies/requirements should be included.
   */
  includeSupplies?: boolean;

  /**
   * Explicit language override.
   */
  language?: LanguageCode;
};

/* =====================================================================
 * COMPARISON
 * ===================================================================== */

export type ComparisonItem = {
  feature: string;
  from: string;
  to: string;
  description?: string;
  priority?: number;
};

/* =====================================================================
 * RELATED TOOLS
 * ===================================================================== */

export type RelatedToolRelation =
  | "alternative"
  | "related"
  | "conversion"
  | "next"
  | "recommended";

export type RelatedTool = {
  title: string;
  href: string;

  relation?: RelatedToolRelation;
  priority?: number;

  description?: string;
  icon?: string;

  /**
   * Explicit SEO-friendly anchor text.
   *
   * If omitted, title may be used as fallback.
   */
  anchorText?: string;
};

/* =====================================================================
 * INTERNAL LINKS
 * ===================================================================== */

export type InternalLink = {
  href: string;
  anchorText: string;

  /**
   * Optional contextual description.
   */
  description?: string;

  /**
   * Higher priority links can be surfaced earlier.
   */
  priority?: number;

  /**
   * Optional semantic relationship.
   */
  relation?:
    | "related"
    | "parent"
    | "child"
    | "alternative"
    | "conversion"
    | "guide";
};

/* =====================================================================
 * FILE FORMATS
 * ===================================================================== */

export type FileCategory =
  | "image"
  | "document"
  | "pdf";

export type ImageFormat =
  | "PNG"
  | "JPG"
  | "JPEG"
  | "WEBP"
  | "AVIF"
  | "GIF"
  | "BMP"
  | "TIFF"
  | "SVG";

export type DocumentFormat =
  | "PDF";

export type FileFormat =
  | ImageFormat
  | DocumentFormat;

/* =====================================================================
 * MIME TYPES
 * ===================================================================== */

export type ImageMimeType =
  | "image/png"
  | "image/jpeg"
  | "image/webp"
  | "image/avif"
  | "image/gif"
  | "image/bmp"
  | "image/tiff"
  | "image/svg+xml";

export type DocumentMimeType =
  | "application/pdf";

export type FileMimeType =
  | ImageMimeType
  | DocumentMimeType;

/* =====================================================================
 * CAPABILITIES
 * ===================================================================== */

export type ToolCapabilities = {
  inputFormats?: FileFormat[];
  outputFormats?: FileFormat[];

  inputMimeTypes?: FileMimeType[];
  outputMimeTypes?: FileMimeType[];

  maxFileSize?: string;
  maxFiles?: number;

  maxWidth?: number;
  maxHeight?: number;

  supportsMultipleFiles?: boolean;
  supportsBatch?: boolean;
  supportsQuality?: boolean;
  supportsTransparency?: boolean;
  supportsAnimation?: boolean;
  supportsLossless?: boolean;
  supportsLossy?: boolean;
  supportsDragAndDrop?: boolean;
  supportsClipboard?: boolean;
  supportsMobile?: boolean;
  supportsDesktop?: boolean;
  supportsBrowserProcessing?: boolean;

  /**
   * Indicates genuine offline capability.
   */
  supportsOffline?: boolean;

  supportsPreview?: boolean;
  supportsCustomFilename?: boolean;
  supportsMetadataPreservation?: boolean;
  supportsExif?: boolean;

  /**
   * Progressive Web App support.
   *
   * This is a product capability, not a direct SEO signal.
   */
  supportsProgressiveWebApp?: boolean;

  /**
   * UI capability.
   */
  supportsDarkMode?: boolean;
};

/* =====================================================================
 * LIMITS
 * ===================================================================== */

export type ToolLimits = {
  maxFileSizeBytes?: number;
  maxFiles?: number;
  maxTotalSizeBytes?: number;

  maxWidth?: number;
  maxHeight?: number;
  maxPixels?: number;

  message?: string;
};

/* =====================================================================
 * KEYWORD DATA
 * ===================================================================== */

/**
 * Keyword research data.
 *
 * This is internal SEO planning data and should NOT automatically
 * be exposed in structured data.
 */
export type ToolKeywordData = {
  primaryVolume?: number;

  secondaryVolumes?: Record<
    string,
    number
  >;

  /**
   * Usually represented from 1 to 100.
   */
  keywordDifficulty?: number;

  competitorKeywords?: string[];

  targetKeywords?: string[];
};

/* =====================================================================
 * SEO CONFIGURATION
 * ===================================================================== */

export type ToolSEO = {
  primaryKeyword?: string;

  secondaryKeywords?: string[];

  keywordVariants?: string[];

  searchIntent?: SearchIntent;

  targetAudience?: string[];

  /**
   * More detailed audience definitions.
   *
   * Example:
   * - web designers
   * - developers
   * - content creators
   */
  targetAudienceDetailed?: string[];

  searchEntity?: string;

  canonicalPath?: string;

  indexable?: boolean;
  followLinks?: boolean;

  language?: LanguageCode;

  datePublished?: string;
  lastUpdated?: string;

  /**
   * Date when the content was last reviewed.
   */
  lastReviewed?: string;

  authorName?: string;

  category?: string;

  /**
   * More precise classification.
   */
  primaryCategory?: string;
  subCategory?: string;

  /**
   * Internal SEO research.
   */
  keywordData?: ToolKeywordData;

  /**
   * Optional SEO title specifically for the homepage.
   */
  homepageSeoTitle?: string;

  /**
   * Optional SEO title specifically for tool pages.
   */
  toolPageSeoTitle?: string;

  /**
   * Optional description specifically for tool pages.
   */
  toolPageSeoDescription?: string;

  /**
   * Custom breadcrumb label.
   */
  breadcrumbTitle?: string;
};

/* =====================================================================
 * SOCIAL
 * ===================================================================== */

export type ToolSocial = {
  image?: string;
  imageAlt?: string;

  /**
   * Dedicated social image.
   *
   * Kept separate conceptually from general page images.
   */
  socialImage?: string;
  socialImageAlt?: string;

  locale?: string;

  title?: string;
  description?: string;

  twitterCard?:
    | "summary"
    | "summary_large_image";
};

/* =====================================================================
 * AUTHOR / CREDIBILITY
 * ===================================================================== */

export type ToolAuthor = {
  name: string;

  type:
    | "Person"
    | "Organization";

  url?: string;
};

/**
 * Rating/review information.
 *
 * Only populate this when genuine user reviews/ratings exist.
 */
export type ToolReviews = {
  ratingValue: number;
  reviewCount: number;

  bestRating?: number;
  worstRating?: number;
};

/* =====================================================================
 * PRIVACY
 * ===================================================================== */

export type ToolPrivacy = {
  processingMode?: ProcessingMode;

  isClientSide?: boolean;
  uploadRequired?: boolean;

  privacySummary?: string;
  securityNote?: string;

  dataRetention?: string;

  offlineCapable?: boolean;
  privacyBadge?: boolean;

  trustPoints?: string[];

  noRegistration?: boolean;

  filesSentToServer?: boolean;
  temporaryStorage?: boolean;

  retentionPeriod?: string;
};

/* =====================================================================
 * PROCESSING CONFIGURATION
 * ===================================================================== */

export type ToolProcessing = {
  mode?: ProcessingMode;

  strategy?: ProcessingStrategy;

  preferClientSide?: boolean;
  allowServerFallback?: boolean;

  serverFallbackThreshold?: string;

  timeout?: string;

  performanceNote?: string;
};

/* =====================================================================
 * UI
 * ===================================================================== */

export type ToolUI = {
  showHero?: boolean;
  showStats?: boolean;
  showBenefits?: boolean;
  showHowTo?: boolean;
  showComparison?: boolean;
  showSupportedFormats?: boolean;
  showFAQ?: boolean;
  showRelatedTools?: boolean;
  showContent?: boolean;
  showPrivacy?: boolean;
  showPreview?: boolean;
  showFileSizeComparison?: boolean;
  showProgress?: boolean;
};

/* =====================================================================
 * STRUCTURED DATA
 * ===================================================================== */

export type SchemaType =
  | "WebApplication"
  | "SoftwareApplication"
  | "WebPage";

export type SchemaApplicationCategory =
  | "UtilitiesApplication"
  | "MultimediaApplication"
  | "BusinessApplication"
  | "ProductivityApplication"
  | "DeveloperApplication"
  | "DesignApplication";

/**
 * Main Schema configuration.
 */
export type ToolSchemaConfig = {
  schemaType?: SchemaType;

  schemaName?: string;
  schemaDescription?: string;

  applicationCategory?: SchemaApplicationCategory;
  schemaCategory?: string;

  operatingSystem?: string;
  browserRequirements?: string;

  applicationFeature?: string;
  featureList?: string[];

  /**
   * Legacy/global switches.
   *
   * Kept for compatibility with the existing application.
   */
  howToSchemaEnabled?: boolean;
  faqSchemaEnabled?: boolean;
  breadcrumbEnabled?: boolean;

  softwareApplicationSchema?: boolean;

  schemaVersion?: string;

  /**
   * Dedicated configuration objects.
   */
  faqSchema?: FAQSchemaConfig;
  howToSchema?: HowToSchemaConfig;
  breadcrumbSchema?: BreadcrumbSchemaConfig;
};

/* =====================================================================
 * BREADCRUMB SCHEMA
 * ===================================================================== */

export type BreadcrumbSchemaConfig = {
  enabled?: boolean;

  /**
   * Optional custom hierarchy.
   *
   * Example:
   * Home > Tools > Image > PNG to JPG
   */
  levels?: string[];

  language?: LanguageCode;
};

/* =====================================================================
 * CONTENT QUALITY
 * ===================================================================== */

export type ToolContentQuality = {
  /**
   * Internal editorial score.
   */
  readabilityScore?: number;

  /**
   * Internal editorial metric.
   *
   * This should not be inserted into Schema as keyword density.
   */
  keywordDensity?: number;

  /**
   * Indicates whether content has been manually reviewed.
   */
  manuallyReviewed?: boolean;

  /**
   * Content quality status.
   */
  status?:
    | "basic"
    | "good"
    | "excellent";
};

/* =====================================================================
 * TOOL LINKS
 * ===================================================================== */

export type ToolLinks = {
  relatedTools?: RelatedTool[];

  relatedArticles?: RelatedTool[];

  parentTool?: string;

  categorySlug?: string;

  hubUrl?: string;

  popularRelatedTools?: RelatedTool[];

  conversionAlternatives?: RelatedTool[];

  nextTools?: RelatedTool[];

  contextualLinks?: RelatedTool[];

  /**
   * Explicit internal links with controlled anchor text.
   */
  internalLinks?: InternalLink[];
};

/* =====================================================================
 * TOOL CONTENT
 * ===================================================================== */

export type ToolContent = {
  introduction: string;

  whyConvert: string;

  whyChoose: string;

  comparisonText: string;

  privacy: string;

  conclusion: string;

  /**
   * Search-intent / long-tail content.
   */
  useCases?: string[];

  tips?: string[];

  bestFor?: string[];

  notIdealFor?: string[];

  commonMistakes?: string[];

  troubleshooting?: string[];

  sections?: ToolContentSection[];

  /**
   * Editorial quality information.
   */
  quality?: ToolContentQuality;
};

/* =====================================================================
 * ANALYTICS
 * ===================================================================== */

export type ToolAnalytics = {
  trackConversion?: boolean;
  trackUpload?: boolean;
  trackDownload?: boolean;
  trackErrors?: boolean;
  trackProcessingTime?: boolean;

  /**
   * Engagement tracking.
   *
   * These are analytics values, not SEO Schema properties.
   */
  trackEngagement?: boolean;
};

/* =====================================================================
 * AVAILABILITY
 * ===================================================================== */

export type ToolAvailability = {
  status?: ContentStatus;

  enabled?: boolean;

  releaseDate?: string;

  retirementDate?: string;

  note?: string;
};

/* =====================================================================
 * MAIN TOOL DATA
 * ===================================================================== */

export type ToolData = {
  /* -------------------------------------------------------------------
   * Identity
   * ------------------------------------------------------------------- */

  slug: string;

  mode: ToolMode;

  title: string;

  heroTitle: string;

  description: string;

  heroDescription: string;

  /* -------------------------------------------------------------------
   * SEO
   * ------------------------------------------------------------------- */

  seoTitle: string;

  seoDescription: string;

  keywords: string[];

  seo?: ToolSEO;

  /**
   * Direct breadcrumb override.
   *
   * Example:
   * "PNG to JPG Converter"
   */
  breadcrumbTitle?: string;

  /**
   * Main publication date.
   */
  datePublished?: string;

  /**
   * Last meaningful content modification.
   */
  dateModified?: string;

  /**
   * Last editorial review.
   */
  lastReviewed?: string;

  /**
   * Content author.
   */
  author?: ToolAuthor;

  /**
   * Genuine user rating information.
   */
  reviews?: ToolReviews;

  /* -------------------------------------------------------------------
   * Social
   * ------------------------------------------------------------------- */

  social?: ToolSocial;

  /* -------------------------------------------------------------------
   * Classification
   * ------------------------------------------------------------------- */

  category: string;

  /**
   * More precise classification.
   */
  primaryCategory?: string;

  subCategory?: string;

  icon: string;

  /* -------------------------------------------------------------------
   * Conversion
   * ------------------------------------------------------------------- */

  from: FileFormat;

  to: FileFormat;

  inputMime: FileMimeType;

  outputMime: FileMimeType;

  outputExtension: string;

  /* -------------------------------------------------------------------
   * Capabilities
   * ------------------------------------------------------------------- */

  supportsQuality: boolean;

  capabilities?: ToolCapabilities;

  processing?: ToolProcessing;

  limits?: ToolLimits;

  /* -------------------------------------------------------------------
   * UI
   * ------------------------------------------------------------------- */

  ui?: ToolUI;

  /* -------------------------------------------------------------------
   * Features
   * ------------------------------------------------------------------- */

  features: Feature[];

  /* -------------------------------------------------------------------
   * How To
   * ------------------------------------------------------------------- */

  howTo: HowToStep[];

  howToConfig?: ToolHowTo;

  /* -------------------------------------------------------------------
   * FAQ
   * ------------------------------------------------------------------- */

  faq: FAQItem[];

  /* -------------------------------------------------------------------
   * Comparison
   * ------------------------------------------------------------------- */

  comparison: ComparisonItem[];

  /* -------------------------------------------------------------------
   * Related tools
   * ------------------------------------------------------------------- */

  relatedTools: RelatedTool[];

  links?: ToolLinks;

  /* -------------------------------------------------------------------
   * Content
   * ------------------------------------------------------------------- */

  content: ToolContent;

  /**
   * Long-tail / semantic use cases.
   *
   * Kept at ToolData level for easy access by UI and SEO components.
   */
  useCases?: string[];

  bestFor?: string[];

  notIdealFor?: string[];

  commonMistakes?: string[];

  troubleshooting?: string[];

  /* -------------------------------------------------------------------
   * Privacy
   * ------------------------------------------------------------------- */

  privacyConfig?: ToolPrivacy;

  /**
   * Convenience fields for systems that need to display
   * security/privacy information without traversing privacyConfig.
   */
  securityNote?: string;

  privacyBadge?: boolean;

  retentionPeriod?: string;

  /* -------------------------------------------------------------------
   * Structured data
   * ------------------------------------------------------------------- */

  schema?: ToolSchemaConfig;

  /* -------------------------------------------------------------------
   * Analytics
   * ------------------------------------------------------------------- */

  analytics?: ToolAnalytics;

  /* -------------------------------------------------------------------
   * Availability
   * ------------------------------------------------------------------- */

  availability?: ToolAvailability;
};