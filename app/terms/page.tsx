import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read our Terms of Service.",
};

export default function TermsPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">
        Terms of Service
      </h1>

      <p className="mb-6">
        By using this website you agree to these terms.
      </p>

      <p className="mb-6">
        Our tools are provided without warranties.
      </p>

      <p className="mb-6">
        You are responsible for the files you process.
      </p>

      <p>
        We may update these terms at any time.
      </p>
    </main>
  );
}