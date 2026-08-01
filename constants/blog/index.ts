import type { BlogArticle } from "./blog.types";

import { howToCompressImagesArticle } from "./how-to-compress-images";
import { howToConvertJpgToPngArticle } from "./how-to-convert-jpg-to-png";
import { pngToJpgArticle } from "./how-to-convert-png-to-jpg";
import { howToConvertWebpToJpgArticle } from "./how-to-convert-webp-to-jpg";
import pngVsJpgArticle from './png-vs-jpg';
import { webpVsJpgArticle } from "./webp-vs-jpg";

export const blogArticles: BlogArticle[] = [
  pngToJpgArticle,
  howToConvertJpgToPngArticle,
  howToConvertWebpToJpgArticle,
  howToCompressImagesArticle,
  pngVsJpgArticle,
  webpVsJpgArticle,
];

export function getBlogArticle(
  slug: string
): BlogArticle | undefined {
  return blogArticles.find(
    (article) => article.slug === slug
  );
}

export function getAllBlogSlugs() {
  return blogArticles.map(({ slug }) => ({ slug }));
}