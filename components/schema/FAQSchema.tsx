import type { ToolData } from "@/data/tool.types";

type Props = {
  tool: ToolData;
};

const SITE_URL = "https://pngjpgconvert.com";

function cleanText(value: string | undefined): string {
  return (
    value
      ?.replace(/\s+/g, " ")
      .trim() || ""
  );
}

export default function FAQSchema({ tool }: Props) {
  /*
   * Do not generate FAQ structured data when there
   * are no real FAQ items.
   */
  if (!tool.faq || tool.faq.length === 0) {
    return null;
  }

  /*
   * Clean and validate FAQ items before putting them
   * into JSON-LD.
   */
  const questions = tool.faq
    .map((item) => {
      const question = cleanText(item.question);
      const answer = cleanText(item.answer);

      if (!question || !answer) {
        return null;
      }

      return {
        "@type": "Question",

        name: question,

        acceptedAnswer: {
          "@type": "Answer",

          text: answer,
        },
      };
    })
    .filter(Boolean);

  /*
   * Never output an empty FAQPage.
   */
  if (questions.length === 0) {
    return null;
  }

  const url = `${SITE_URL}/${tool.slug}`;

  const schema = {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    "@id": `${url}#faq`,

    url: `${url}#faq`,

    name: `${tool.title} - Frequently Asked Questions`,

    description:
      `Frequently asked questions about ${tool.title}.`,

    inLanguage: "en",

    isPartOf: {
      "@type": "WebPage",

      "@id": url,
    },

    mainEntity: questions,
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