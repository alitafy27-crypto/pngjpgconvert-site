import Link from "next/link";

import Container from "../ui/Container";

import type { ToolData } from "@/data/tool.types";

type Props = {
  tool: ToolData;
};

export default function RelatedToolsSection({
  tool,
}: Props) {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            More Tools
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Related Image Converters
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Discover more free image conversion tools.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {tool.relatedTools.map((related) => (
            <Link
              key={related.href}
              href={related.href}
              className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 text-5xl">
                🖼️
              </div>

              <h3 className="text-lg font-bold text-gray-900">
                {related.title}
              </h3>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}