import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read our Privacy Policy.",
};

export default function PrivacyPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

      <p className="mb-6">
        Your privacy is important to us.
      </p>

      <p className="mb-6">
        All image processing happens locally inside your browser.
        Your files are never uploaded to our servers.
      </p>

      <p className="mb-6">
        We do not collect your images or documents.
      </p>

      <p>
        If you contact us, we only use the information you provide to
        respond to your request.
      </p>
    </main>
  );
}