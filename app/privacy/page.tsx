import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | PNG JPG Convert - 100% Private Image Converter",
  description:
    "Read our Privacy Policy. Your images are processed locally in your browser and never uploaded to our servers. We don't collect your files or personal data.",
  keywords: [
    "privacy policy",
    "image converter privacy",
    "private image converter",
    "no upload image converter",
    "secure image converter",
    "data privacy",
    "png jpg convert privacy",
    "browser privacy",
  ],
  alternates: {
    canonical: "https://pngjpgconvert.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy | PNG JPG Convert - 100% Private Image Converter",
    description:
      "Your images are processed locally in your browser and never uploaded to our servers. We don't collect your files or personal data.",
    url: "https://pngjpgconvert.com/privacy",
    siteName: "PNG JPG Convert",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy - PNG JPG Convert",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@pngjpgconvert",
    creator: "@pngjpgconvert",
    title: "Privacy Policy | PNG JPG Convert - 100% Private Image Converter",
    description:
      "Your images are processed locally in your browser and never uploaded to our servers.",
    images: {
      url: "/og-image.png",
      alt: "Privacy Policy - PNG JPG Convert",
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

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-8 text-4xl font-bold">Privacy Policy - PNG JPG Convert</h1>

      <p className="mb-6 text-lg">
        Your privacy is important to us. This policy explains how we handle
        your data when you use PNG JPG Convert.
      </p>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">1. No File Uploads</h2>
      <p className="mb-6">
        All image processing happens locally inside your browser.
        <strong> Your files are never uploaded to our servers.</strong>
        Everything stays on your device.
      </p>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">2. No Data Collection</h2>
      <p className="mb-6">
        We do not collect, store, or process your images or documents.
        No data is sent to our servers during the conversion process.
      </p>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">3. No Registration Required</h2>
      <p className="mb-6">
        You can use PNG JPG Convert without creating an account.
        We don't require any personal information to use our tools.
      </p>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">4. Cookies</h2>
      <p className="mb-6">
        We use minimal cookies for basic functionality and analytics.
        You can choose to disable cookies in your browser settings.
      </p>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">5. Contact Information</h2>
      <p className="mb-6">
        If you contact us via email, we only use the information you provide
        to respond to your request. We do not store or share your contact
        information.
      </p>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">6. Third-Party Services</h2>
      <p className="mb-6">
        We may use third-party analytics to understand how users interact
        with our site. These services may use cookies but do not have access
        to your files.
      </p>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">7. Changes to This Policy</h2>
      <p className="mb-6">
        We may update this privacy policy from time to time. Please review
        it periodically for any changes.
      </p>

      <p className="mt-8 text-lg">
        <strong>Last updated:</strong> {new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </main>
  );
}