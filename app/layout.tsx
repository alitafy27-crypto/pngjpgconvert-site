import "./globals.css";
import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://pngjpgconvert.com"),

  title: {
    default: "PNG JPG Convert - Free Online Image Converter | 100% Private",
    template: "%s | PNG JPG Convert - Free Online Image Converter",
  },

  description:
    "Convert PNG, JPG, WEBP, AVIF, and PDF instantly in your browser. Free, secure, and private image converter with no uploads. Fast processing, high quality, and unlimited usage.",

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
    "Convert PNG to JPG",
    "Convert JPG to PNG",
    "Free Online Converter",
    "Browser Image Converter",
    "No Upload Image Converter",
    "Private Image Converter",
  ],

  authors: [
    {
      name: "PNG JPG Convert",
      url: "https://pngjpgconvert.com",
    },
  ],

  creator: "PNG JPG Convert",
  publisher: "PNG JPG Convert",

  alternates: {
    canonical: "https://pngjpgconvert.com",
    languages: {
      "en-US": "https://pngjpgconvert.com",
    },
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
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
    title: "PNG JPG Convert - Free Online Image Converter | 100% Private",
    description:
      "Convert PNG, JPG, WEBP, AVIF, and PDF instantly in your browser. No uploads, no registration, completely free and secure.",
    siteName: "PNG JPG Convert",
    locale: "en_US",
    alternateLocale: ["en_GB"],
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
    title: "PNG JPG Convert - Free Online Image Converter",
    description:
      "Convert PNG, JPG, WEBP, AVIF, and PDF online instantly. 100% free, private, and no uploads required.",
    images: {
      url: "/og-image.png",
      alt: "PNG JPG Convert - Free Online Image Converter",
    },
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
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
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },

  verification: {
    google: "your-google-verification-code",
  },

  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2563eb",
  colorScheme: "light",
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
    description:
      "Free online image converter supporting PNG, JPG, WEBP, AVIF, PDF and more. Fast, secure and browser-based.",
    email: "support@pngjpgconvert.com",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "support@pngjpgconvert.com",
      url: "https://pngjpgconvert.com/contact",
    },
    sameAs: [
      "https://twitter.com/pngjpgconvert",
      "https://facebook.com/pngjpgconvert",
      "https://pinterest.com/pngjpgconvert",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "PNG JPG Convert",
    url: "https://pngjpgconvert.com",
    description:
      "Free online image converter supporting PNG, JPG, WEBP, AVIF, PDF and more. Fast, secure and browser-based.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://pngjpgconvert.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://pngjpgconvert.com",
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />

        <GoogleAnalytics gaId="G-ZJ95NDYYHE" />
      </body>
    </html>
  );
}