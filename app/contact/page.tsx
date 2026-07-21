import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact PNG JPG Convert for support, feedback, or bug reports.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-8 text-4xl font-bold">
        Contact Us
      </h1>

      <p className="mb-6">
        Have a question, found a bug, or want to suggest a new feature?
        We'd love to hear from you.
      </p>

      <p className="mb-6">
        We usually reply within 24–48 hours.
      </p>

      <p>
        Email:
        <br />
        <strong>support@pngjpgconvert.com</strong>
      </p>
    </main>
  );
}