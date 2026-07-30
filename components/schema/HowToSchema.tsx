import type { ToolData } from "@/data/tool.types";

type Props = {
  tool: ToolData;
};

export default function HowToSchema({
  tool,
}: Props) {
  if (!tool.howTo || tool.howTo.length === 0) {
    return null;
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to ${tool.title}`,
    description: tool.description,
    totalTime: "PT1M",
    step: tool.howTo.map((item, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: item.title,
      text: item.description,
      image: {
        "@type": "ImageObject",
        url: "https://pngjpgconvert.com/og-image.png",
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}