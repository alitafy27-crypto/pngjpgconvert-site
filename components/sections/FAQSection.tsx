import Container from "../ui/Container";

import type { ToolData } from "@/data/tool.types";

type Props = {
  tool: ToolData;
};

export default function FAQSection({
  tool,
}: Props) {
  return (
    <section className="bg-gray-50 py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            {tool.from} to {tool.to} FAQ
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Everything you need to know about our image converter.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl space-y-6">
          {tool.faq.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {item.question}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}