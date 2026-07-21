import type { ToolData } from "@/data/tool.types";

type Props = {
  tool: ToolData;
};

export default function FAQSchema({ tool }: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: tool.faq.map((item) => ({
      "@type": "Question",

      name: item.question,

      acceptedAnswer: {
        "@type": "Answer",

        text: item.answer,
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