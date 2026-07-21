import "./globals.css";
import type { Metadata, Viewport } from "next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://pngjpgconvert.com"),

  title: {
    default: "PNG JPG Convert - Free Online Image Converter",
    template: "%s | PNG JPG Convert",
  },

  description:
    "Convert PNG, JPG, WEBP, AVIF, PDF and more directly in your browser. Free online image converter with fast processing, privacy, and no uploads required.",

  applicationName: "PNG JPG Convert",

  keywords: [
    "PNG to JPG",
    "JPG to PNG",
    "WEBP Converter",
    "AVIF Converter",
    "PNG Converter",
    "Image Converter",
    "Online Image Converter",
    "Image Compressor",
    "Image Resizer",
    "Crop Image",
    "Rotate Image",
    "Flip Image",
    "Watermark Image",
    "Image to PDF",
    "PDF to Image",
    "Merge PDF",
    "Free Image Converter",
  ],

  authors: [
    {
      name: "PNG JPG Convert",
    },
  ],

  creator: "PNG JPG Convert",

  publisher: "PNG JPG Convert",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",

    url: "https://pngjpgconvert.com",

    title: "PNG JPG Convert - Free Online Image Converter",

    description:
      "Free online image converter supporting PNG, JPG, WEBP, AVIF, PDF and more. Fast, secure and browser-based.",

    siteName: "PNG JPG Convert",

    locale: "en_US",

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

    title: "PNG JPG Convert - Free Online Image Converter",

    description:
      "Convert PNG, JPG, WEBP, AVIF and PDF online for free. No uploads. Fast and secure.",

    images: ["/og-image.png"],
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],

    shortcut: "/favicon.ico",

    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2563eb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PNG JPG Convert",
    url: "https://pngjpgconvert.com",
    logo: "https://pngjpgconvert.com/logo.png",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "PNG JPG Convert",
    url: "https://pngjpgconvert.com",

    potentialAction: {
      "@type": "SearchAction",
      target:
        "https://pngjpgconvert.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <body>
        <Header />

        <main>{children}</main>

        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </body>
    </html>
  );
}