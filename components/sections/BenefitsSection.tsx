import Container from "../ui/Container";

import type { ToolData } from "@/data/tool.types";
type Props = {
  tool: ToolData;
};

export default function BenefitsSection({
  tool,
}: Props) {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Why Use This Tool
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Why Choose Our {tool.from} to {tool.to} Converter?
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Convert {tool.from} images into {tool.to} quickly,
            securely and directly inside your browser.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {tool.features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 text-4xl">
                {tool.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}