import Container from "../ui/Container";

import type { ToolData } from "@/data/tool.types";

type Props = {
  tool: ToolData;
};

export default function HowToSection({
  tool,
}: Props) {
  return (
    <section className="bg-gray-50 py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Step by Step
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            How to Convert {tool.from} to {tool.to}
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Convert your images in just a few simple steps.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl space-y-8">
          {tool.howTo.map((step, index) => (
            <div
              key={step.title}
              className="flex gap-6 rounded-3xl bg-white p-8 shadow-sm"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                {index + 1}
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}