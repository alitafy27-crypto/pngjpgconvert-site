import Link from "next/link";
import Section from "../ui/Section";

export default function CTA() {
  return (
    <Section>
      <div className="rounded-3xl bg-blue-600 px-8 py-20 text-center text-white">

        <h2 className="text-4xl font-bold">
          Ready to Convert Your Images?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
          Convert PNG, JPG, WebP and AVIF images instantly.
          Everything happens directly in your browser.
        </p>

        <div className="mt-10">
          <Link
            href="#upload"
            className="inline-flex rounded-xl bg-white px-8 py-4 text-lg font-semibold text-blue-600 transition hover:bg-gray-100"
          >
            Start Converting
          </Link>
        </div>

      </div>
    </Section>
  );
}