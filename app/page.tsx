import type { Metadata } from "next";

import Hero from "@/components/home/Hero";
import TrustedBy from "@/components/home/TrustedBy";
import Stats from "@/components/home/Stats";
import Features from "@/components/home/Features";
import Categories from "@/components/home/Categories";
import PopularTools from "@/components/home/PopularTools";
import HowItWorks from "@/components/home/HowItWorks";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";
import AllTools from "@/components/home/AllTools";

import HomeSchema from "@/components/schema/HomeSchema";

export const metadata: Metadata = {
  title: "Free Online Image Converter | PNG, JPG, WEBP, AVIF, PDF | No Upload",
  description:
    "Convert PNG, JPG, WEBP, AVIF, and PDF files online for free directly in your browser. 100% private, no uploads, instant processing, and unlimited usage. The best free image converter.",
  keywords: [
    "image converter",
    "png to jpg",
    "jpg to png",
    "png to webp",
    "webp to png",
    "jpg to webp",
    "webp to jpg",
    "png to avif",
    "avif to png",
    "jpg to avif",
    "avif to jpg",
    "webp to avif",
    "avif to webp",
    "image compressor",
    "image resizer",
    "crop image",
    "rotate image",
    "flip image",
    "watermark image",
    "image to pdf",
    "pdf to image",
    "merge pdf",
    "online image converter",
    "free image converter",
    "browser image converter",
    "private image converter",
    "convert images online",
    "image conversion tool",
  ],
  alternates: {
    canonical: "https://pngjpgconvert.com",
  },
  openGraph: {
    title: "Free Online Image Converter | PNG, JPG, WEBP, AVIF, PDF | No Upload",
    description:
      "Convert PNG, JPG, WEBP, AVIF, and PDF files online for free directly in your browser. 100% private, no uploads, instant processing.",
    url: "https://pngjpgconvert.com",
    siteName: "PNG JPG Convert",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PNG JPG Convert - Free Online Image Converter",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@pngjpgconvert",
    creator: "@pngjpgconvert",
    title: "Free Online Image Converter | PNG, JPG, WEBP, AVIF, PDF | No Upload",
    description:
      "Convert PNG, JPG, WEBP, AVIF, and PDF files online for free. 100% private, no uploads, instant processing.",
    images: {
      url: "/og-image.png",
      alt: "PNG JPG Convert - Free Online Image Converter",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function HomePage() {
  return (
    <>
      <HomeSchema />
      <Hero />
      <TrustedBy />
      <Stats />
      <Features />
      <Categories />
      <PopularTools />
      <HowItWorks />
      <AllTools />
      <FAQ />
      <CTA />
    </>
  );
}