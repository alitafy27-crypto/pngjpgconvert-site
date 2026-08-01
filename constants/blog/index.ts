import type { BlogArticle } from "./blog.types";
import howToConvertPngToJpg from "./how-to-convert-png-to-jpg";
import pngVsJpg from "./png-vs-jpg";

export const blogArticles: BlogArticle[] = [
  howToConvertPngToJpg,
  pngVsJpg,
];

export const getBlogArticle = (
  slug: string
): BlogArticle | undefined =>
  blogArticles.find(article => article.slug === slug);

export const getAllBlogSlugs = (): { slug: string }[] =>
  blogArticles.map(article => ({
    slug: article.slug,
  }));