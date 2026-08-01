export type BlogInternalLinkType =
  | "article"
  | "tool";

export interface BlogInternalLink {
  title: string;
  href: string;
  type: BlogInternalLinkType;
}

export interface BlogTableOfContentsItem {
  id: string;
  title: string;
}

export interface BlogSection {
  id: string;
  title: string;
  paragraphs: string[];
}

export interface BlogFAQ {
  question: string;
  answer: string;
}

export interface BlogContent {
  introduction: string;

  sections: BlogSection[];

  faq: BlogFAQ[];

  conclusion: string;
}

export interface BlogArticle {
  slug: string;

  title: string;

  description: string;

  category: string;

  publishedAt: string;

  updatedAt: string;

  author: string;

  readingTime: string;

  keywords: string[];

  tableOfContents: BlogTableOfContentsItem[];

  content: BlogContent;

  internalLinks: BlogInternalLink[];
}