import "./globals.css";

import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const SITE_URL = "https://pngjpgconvert.com";
const SITE_NAME = "PNG JPG Convert";
const SITE_DESCRIPTION =
  "Convert, compress, resize, crop, rotate, flip, watermark, and create PDFs from images online for free. Fast, private, and browser-based.";

/**
 * Global metadata
 *
 * These values apply to the entire website.
 * Individual tool pages can override them with generateMetadata().
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: `${SITE_NAME} - Free Online Image Converter`,
    template: `%s | ${SITE_NAME}`,
  },

  description: SITE_DESCRIPTION,

  applicationName: SITE_NAME,

  authors: [
    {
      name: SITE_NAME,
      url: SITE_URL,
    },
  ],

  creator: SITE_NAME,
  publisher: SITE_NAME,

  category: "technology",

  alternates: {
    canonical: SITE_URL,
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
    siteName: SITE_NAME,
    url: SITE_URL,
    locale: "en_US",

    title: `${SITE_NAME} - Free Online Image Converter`,

    description:
      "Free browser-based image conversion and editing tools. Convert, compress, resize, crop, rotate, flip, watermark, and create PDFs without uploading your files.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: `${SITE_NAME} - Free Online Image Converter`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: `${SITE_NAME} - Free Online Image Converter`,

    description:
      "Free online image conversion and editing tools. Fast, private, and browser-based.",

    images: ["/og-image.png"],
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
    ],

    apple: [
      {
        url: "/apple-touch-icon.png",
        type: "image/png",
        sizes: "180x180",
      },
    ],
  },

  /*
   * Add the real verification code when the site
   * is connected to Google Search Console.
   *
   * verification: {
   *   google: "REAL_GOOGLE_VERIFICATION_CODE",
   * },
   */

  formatDetection: {
    telephone: false,
  },
};

/**
 * Global viewport configuration.
 *
 * Mobile-first configuration with a reasonable
 * maximum zoom level for accessibility.
 */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2563eb",
  colorScheme: "light",
};

/**
 * Organization structured data.
 *
 * Helps search engines understand the website
 * and the organization behind it.
 */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",

  "@id": `${SITE_URL}/#organization`,

  name: SITE_NAME,
  url: SITE_URL,

  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.png`,
  },

  description:
    "Free online image conversion and editing tools that work directly in the browser.",

  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "support@pngjpgconvert.com",
    url: `${SITE_URL}/contact`,
  },
};

/**
 * WebSite structured data.
 *
 * Gives search engines a clear representation
 * of the website itself.
 */
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",

  "@id": `${SITE_URL}/#website`,

  name: SITE_NAME,
  url: SITE_URL,

  description: SITE_DESCRIPTION,

  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },

  inLanguage: "en",
};

/**
 * Root layout.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/*
         * Establish early connections for external font resources.
         *
         * Keep these only if Google Fonts are actually used
         * by the application.
         */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />

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

        {/* -------------------------------------------------
            Organization structured data
           ------------------------------------------------- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              organizationSchema,
            ),
          }}
        />

        {/* -------------------------------------------------
            WebSite structured data
           ------------------------------------------------- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              websiteSchema,
            ),
          }}
        />

        {/* -------------------------------------------------
            Google Analytics
           ------------------------------------------------- */}
        <GoogleAnalytics gaId="G-ZJ95NDYYHE" />
      </body>
    </html>
  );
}
