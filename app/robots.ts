import type { MetadataRoute } from "next";

const BASE_URL = "https://pngjpgconvert.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/static/",
          "/admin/",
          "/dashboard/",
        ],
        crawlDelay: 1,
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
        ],
        crawlDelay: 0.5,
      },
      {
        userAgent: "Googlebot-Image",
        allow: [
          "/*.png",
          "/*.jpg",
          "/*.jpeg",
          "/*.webp",
          "/*.avif",
        ],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
        ],
        crawlDelay: 1,
      },
      {
        userAgent: "YandexBot",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
        ],
        crawlDelay: 1,
      },
      {
        userAgent: "DuckDuckBot",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
        ],
      },
      {
        userAgent: "Twitterbot",
        allow: "/",
      },
      {
        userAgent: "facebookexternalhit",
        allow: "/",
      },
      {
        userAgent: "LinkedInBot",
        allow: "/",
      },
      {
        userAgent: "Pinterestbot",
        allow: "/",
      },
      {
        userAgent: "Slackbot",
        allow: "/",
      },
      {
        userAgent: "WhatsApp",
        allow: "/",
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}