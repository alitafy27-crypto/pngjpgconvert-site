import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Free Online Image Converter | PNG JPG Convert",
  description:
    "Learn about PNG JPG Convert - free online image conversion tools. Convert, compress, resize, crop, rotate images directly in your browser. 100% private and secure.",
  keywords: [
    "about png jpg convert",
    "image converter about",
    "free image converter",
    "online image tools",
    "browser image converter",
    "private image converter",
    "about us",
    "image conversion tools",
  ],
  alternates: {
    canonical: "https://pngjpgconvert.com/about",
  },
  openGraph: {
    title: "About Us | Free Online Image Converter | PNG JPG Convert",
    description:
      "Learn about PNG JPG Convert - free online image conversion tools. Convert, compress, resize, crop, rotate images directly in your browser.",
    url: "https://pngjpgconvert.com/about",
    siteName: "PNG JPG Convert",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About PNG JPG Convert - Free Online Image Converter",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@pngjpgconvert",
    creator: "@pngjpgconvert",
    title: "About Us | Free Online Image Converter | PNG JPG Convert",
    description:
      "Learn about PNG JPG Convert - free online image conversion tools. 100% private and secure.",
    images: {
      url: "/og-image.png",
      alt: "About PNG JPG Convert - Free Online Image Converter",
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

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-8 text-4xl font-bold">
        About PNG JPG Convert - Free Online Image Converter
      </h1>

      <p className="mb-6 text-lg">
        PNG JPG Convert is a free collection of browser-based image tools
        designed to help you convert, compress, resize, crop, rotate and
        optimize images quickly without installing any software.
      </p>

      <p className="mb-6 text-lg">
        Every conversion happens directly in your browser whenever possible,
        giving you a faster experience while keeping your files private and
        secure. Your images are never uploaded to our servers.
      </p>

      <p className="mb-6 text-lg">
        Our goal is to provide simple, reliable and accessible image tools
        that anyone can use on any device, completely free of charge. No
        registration, no hidden fees, no limits.
      </p>

      <p className="mb-6 text-lg">
        We support popular formats including PNG, JPG, WEBP, AVIF, and PDF.
        Our tools work on desktop computers, tablets, and mobile devices
        without requiring any downloads or installations.
      </p>

      <p className="text-lg">
        We continuously improve our tools to support more image formats and
        provide the best possible user experience. Your feedback helps us
        grow and serve you better.
      </p>
    </main>
  );
}