import type { ToolData } from "@/data/tool.types";

type Props = {
  tool: ToolData;
};

export default function HowToSchema({
  tool,
}: Props) {
  const schema = {
    "@context": "https://schema.org",

    "@type": "HowTo",

    name: tool.title,

    description: tool.description,

    step: tool.howTo.map((item) => ({
      "@type": "HowToStep",

      name: item.title,

      text: item.description,
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