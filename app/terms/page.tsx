import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | PNG JPG Convert - Free Online Image Converter",
  description:
    "Read our Terms of Service. By using PNG JPG Convert, you agree to our terms. Learn about usage guidelines, responsibilities, and limitations.",
  keywords: [
    "terms of service",
    "image converter terms",
    "png jpg convert terms",
    "usage terms",
    "service agreement",
    "terms and conditions",
    "free image converter terms",
  ],
  alternates: {
    canonical: "https://pngjpgconvert.com/terms",
  },
  openGraph: {
    title: "Terms of Service | PNG JPG Convert - Free Online Image Converter",
    description:
      "Read our Terms of Service. By using PNG JPG Convert, you agree to our terms. Learn about usage guidelines, responsibilities, and limitations.",
    url: "https://pngjpgconvert.com/terms",
    siteName: "PNG JPG Convert",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Terms of Service - PNG JPG Convert",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@pngjpgconvert",
    creator: "@pngjpgconvert",
    title: "Terms of Service | PNG JPG Convert - Free Online Image Converter",
    description:
      "Read our Terms of Service. By using PNG JPG Convert, you agree to our terms.",
    images: {
      url: "/og-image.png",
      alt: "Terms of Service - PNG JPG Convert",
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

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-8 text-4xl font-bold">Terms of Service - PNG JPG Convert</h1>

      <p className="mb-6 text-lg">
        Welcome to PNG JPG Convert. By using this website, you agree to the
        following terms and conditions. Please read them carefully before
        using our services.
      </p>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">1. Acceptance of Terms</h2>
      <p className="mb-6">
        By accessing and using PNG JPG Convert, you accept and agree to be
        bound by these Terms of Service. If you do not agree to these terms,
        please do not use our services.
      </p>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">2. Free Service</h2>
      <p className="mb-6">
        PNG JPG Convert is provided as a free service. We reserve the right
        to modify or discontinue any part of the service at any time without
        prior notice.
      </p>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">3. No Warranties</h2>
      <p className="mb-6">
        Our tools are provided "as is" without warranties of any kind.
        We do not guarantee that the service will be uninterrupted,
        error-free, or free from viruses or other harmful components.
      </p>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">4. User Responsibility</h2>
      <p className="mb-6">
        You are solely responsible for the files you process using our tools.
        By using our service, you confirm that you have the right to convert,
        modify, or process the files you upload. You agree not to process
        any illegal, offensive, or copyrighted content without permission.
      </p>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">5. Privacy</h2>
      <p className="mb-6">
        Our tools process files locally in your browser whenever possible.
        Your files are not stored on our servers. Please see our
        <a href="/privacy" className="ml-1 text-blue-600 hover:underline">
          Privacy Policy
        </a>
        for more information.
      </p>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">6. Intellectual Property</h2>
      <p className="mb-6">
        All content on this website, including text, graphics, logos, and
        software, is the property of PNG JPG Convert. You may not reproduce,
        distribute, or create derivative works without our permission.
      </p>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">7. Limitation of Liability</h2>
      <p className="mb-6">
        PNG JPG Convert is not liable for any damages arising from the use
        of our services. This includes, but is not limited to, direct,
        indirect, incidental, punitive, and consequential damages.
      </p>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">8. Changes to Terms</h2>
      <p className="mb-6">
        We reserve the right to update these terms at any time. Continued
        use of the service after changes constitutes acceptance of the new
        terms. Please review this page periodically for updates.
      </p>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">9. Governing Law</h2>
      <p className="mb-6">
        These terms are governed by applicable laws. Any disputes arising
        from these terms will be resolved in accordance with these laws.
      </p>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">10. Contact Us</h2>
      <p className="mb-6">
        If you have questions about these Terms of Service, please
        <a href="/contact" className="ml-1 text-blue-600 hover:underline">
          contact us
        </a>.
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