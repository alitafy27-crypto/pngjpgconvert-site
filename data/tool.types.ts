export type Feature = {
  title: string;
  description: string;
};

export type FAQItem = {
  question: string;
  answer: string;
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
};

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

export type ToolContent = {
  introduction: string;

  whyConvert: string;

  whyChoose: string;

  comparisonText: string;

  privacy: string;

  conclusion: string;
};

export type ToolData = {
  slug: string;

  mode: ToolMode;

  title: string;
  heroTitle: string;

  description: string;
  heroDescription: string;

  seoTitle: string;
  seoDescription: string;

  keywords: string[];

  category: string;

  icon: string;

  from: string;
  to: string;

  inputMime: string;
  outputMime: string;

  outputExtension: string;

  supportsQuality: boolean;

  features: Feature[];

  howTo: HowToStep[];

  faq: FAQItem[];

  comparison: ComparisonItem[];

  relatedTools: RelatedTool[];

  // SEO Content
  content: ToolContent;
};