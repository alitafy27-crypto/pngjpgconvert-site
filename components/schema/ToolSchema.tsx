import type { ToolData } from "@/data/tool.types";

type Props = {
  tool: ToolData;
};

export default function ToolSchema({ tool }: Props) {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",

    name: tool.title,

    description: tool.description,

    applicationCategory: "UtilitiesApplication",

    operatingSystem: "Any",

    browserRequirements: "Requires JavaScript",

    url: `https://pngjpgconvert.com/${tool.slug}`,

    image: "https://pngjpgconvert.com/og-image.png",

    softwareVersion: "1.0",

    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },

    author: {
      "@type": "Organization",
      name: "PNG JPG Convert",
    },

    publisher: {
      "@type": "Organization",
      name: "PNG JPG Convert",
    },

    featureList: tool.features.map((feature) => feature.title),
  };

  const webPageSchema = {
    "@context": "https://schema.org",

    "@type": "WebPage",

    name: tool.title,

    headline: tool.heroTitle,

    description: tool.heroDescription,

    url: `https://pngjpgconvert.com/${tool.slug}`,

    inLanguage: "en",

    isPartOf: {
      "@type": "WebSite",
      name: "PNG JPG Convert",
      url: "https://pngjpgconvert.com",
    },

    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://pngjpgconvert.com/og-image.png",
    },
  };

  const faqSchema =
    tool.faq.length > 0
      ? {
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
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />

      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}
    </>
  );
}