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
      availability: "https://schema.org/InStock",
      validFrom: "2024-01-01",
    },
    author: {
      "@type": "Organization",
      name: "PNG JPG Convert",
      url: "https://pngjpgconvert.com",
    },
    publisher: {
      "@type": "Organization",
      name: "PNG JPG Convert",
      url: "https://pngjpgconvert.com",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "2500",
      bestRating: "5",
      worstRating: "1",
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
      width: "1200",
      height: "630",
    },
    about: {
      "@type": "Thing",
      name: tool.title,
      description: tool.description,
    },
    audience: {
      "@type": "Audience",
      audienceType: "General Users",
    },
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to ${tool.title}`,
    description: tool.heroDescription,
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Upload your image",
        text: "Upload your image file using the upload button or drag and drop it into the upload area.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Choose output format",
        text: "Select your desired output format from the available options.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Convert and download",
        text: "Click the convert button and download your converted image instantly.",
      },
    ],
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToSchema),
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