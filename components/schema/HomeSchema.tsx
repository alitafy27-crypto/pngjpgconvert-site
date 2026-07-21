export default function HomeSchema() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "PNG JPG Convert",
      url: "https://pngjpgconvert.com",
      logo: "https://pngjpgconvert.com/logo.png",
    },

    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "PNG JPG Convert",
      url: "https://pngjpgconvert.com",
      potentialAction: {
        "@type": "SearchAction",
        target:
          "https://pngjpgconvert.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },

    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "PNG JPG Convert",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Any",
      browserRequirements: "Requires JavaScript",
      url: "https://pngjpgconvert.com",
      description:
        "Free online image converter supporting PNG, JPG, WEBP, AVIF and PDF formats.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },

    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://pngjpgconvert.com",
        },
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}