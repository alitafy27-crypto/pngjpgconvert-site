import Container from "../ui/Container";

import type { ToolData } from "@/data/tool.types";

type Props = {
  tool: ToolData;
};

export default function HeroSection({
  tool,
}: Props) {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 text-6xl">
            {tool.icon}
          </div>

          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Free Online {tool.from} to {tool.to} Converter
          </span>

          <h1 className="mt-8 text-5xl font-bold tracking-tight text-gray-900 lg:text-6xl">
            {tool.heroTitle}
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-600">
            {tool.heroDescription}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <div className="rounded-full bg-white px-5 py-3 shadow">
              🔒 Private
            </div>

            <div className="rounded-full bg-white px-5 py-3 shadow">
              ⚡ Fast
            </div>

            <div className="rounded-full bg-white px-5 py-3 shadow">
              🌐 Browser Based
            </div>

            <div className="rounded-full bg-white px-5 py-3 shadow">
              {tool.supportsQuality
                ? "💯 Adjustable Quality"
                : "💎 Lossless Quality"}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}