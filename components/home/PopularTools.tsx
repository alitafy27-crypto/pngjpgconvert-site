import Section from "../ui/Section";
import ToolCard from "../ui/ToolCard";

const tools = [
  {
    slug: "png-to-jpg",
    icon: "🖼️",
    title: "PNG to JPG",
    description: "Convert PNG images into JPG format.",
  },
  {
    slug: "jpg-to-png",
    icon: "🖼️",
    title: "JPG to PNG",
    description: "Convert JPG images into PNG format.",
  },
  {
    slug: "png-to-webp",
    icon: "🖼️",
    title: "PNG to WebP",
    description: "Convert PNG images into WebP format.",
  },
  {
    slug: "webp-to-png",
    icon: "🖼️",
    title: "WebP to PNG",
    description: "Convert WebP images into PNG format.",
  },
  {
    slug: "jpg-to-webp",
    icon: "🖼️",
    title: "JPG to WebP",
    description: "Convert JPG images into WebP format.",
  },
  {
    slug: "webp-to-jpg",
    icon: "🖼️",
    title: "WebP to JPG",
    description: "Convert WebP images into JPG format.",
  },
];

export default function PopularTools() {
  return (
    <Section>
      <div className="text-center">
        <h2 className="text-4xl font-bold">
          Popular Image Tools
        </h2>

        <p className="mt-4 text-gray-600">
          Choose the image conversion tool you need.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <ToolCard
            key={tool.slug}
            tool={tool}
          />
        ))}
      </div>
    </Section>
  );
}