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
  title: "Free Online Image Converter | PNG JPG Convert",

  description:
    "Convert PNG, JPG, WEBP, AVIF and PDF files online for free. Fast, secure and completely browser-based.",

  keywords: [
    "image converter",
    "png to jpg",
    "jpg to png",
    "png to webp",
    "webp to png",
    "jpg to webp",
    "webp to jpg",
    "image compressor",
    "image resizer",
    "crop image",
    "rotate image",
    "flip image",
    "watermark image",
    "image to pdf",
    "pdf to image",
    "online image converter",
  ],

  alternates: {
    canonical: "https://pngjpgconvert.com",
  },

  openGraph: {
    title: "Free Online Image Converter | PNG JPG Convert",

    description:
      "Convert PNG, JPG, WEBP, AVIF and PDF files online for free directly inside your browser.",

    url: "https://pngjpgconvert.com",

    siteName: "PNG JPG Convert",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PNG JPG Convert",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Free Online Image Converter | PNG JPG Convert",

    description:
      "Convert PNG, JPG, WEBP, AVIF and PDF files online for free.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
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