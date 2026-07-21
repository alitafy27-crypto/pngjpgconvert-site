import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about PNG JPG Convert and our free online image conversion tools.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-8 text-4xl font-bold">
        About PNG JPG Convert
      </h1>

      <p className="mb-6">
        PNG JPG Convert is a free collection of browser-based image tools
        designed to help you convert, compress, resize, crop, rotate and
        optimize images quickly without installing any software.
      </p>

      <p className="mb-6">
        Every conversion happens directly in your browser whenever possible,
        giving you a faster experience while keeping your files private and
        secure.
      </p>

      <p className="mb-6">
        Our goal is to provide simple, reliable and accessible image tools
        that anyone can use on any device, completely free.
      </p>

      <p>
        We continuously improve our tools to support more image formats and
        provide the best possible user experience.
      </p>
    </main>
  );
}