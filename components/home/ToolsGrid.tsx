import ToolCard from "../ui/ToolCard";

import { getAllTools } from "@/lib/tool";

export default function ToolsGrid() {
  const tools = getAllTools();

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Image Converter Tools
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Choose any image conversion tool.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard
              key={tool.slug}
              tool={tool}
            />
          ))}
        </div>
      </div>
    </section>
  );
}