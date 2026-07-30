export default function HomeSchema() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "PNG JPG Convert",
      url: "https://pngjpgconvert.com",
      logo: "https://pngjpgconvert.com/logo.png",
      description:
        "Free online image converter supporting PNG, JPG, WEBP, AVIF, PDF and more. Fast, secure and browser-based.",
      email: "support@pngjpgconvert.com",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "support@pngjpgconvert.com",
        url: "https://pngjpgconvert.com/contact",
      },
      sameAs: [
        "https://twitter.com/pngjpgconvert",
        "https://facebook.com/pngjpgconvert",
        "https://pinterest.com/pngjpgconvert",
      ],
    },

    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "PNG JPG Convert",
      url: "https://pngjpgconvert.com",
      description:
        "Free online image converter supporting PNG, JPG, WEBP, AVIF, PDF and more.",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://pngjpgconvert.com/search?q={search_term_string}",
        },
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
        "Free online image converter supporting PNG, JPG, WEBP, AVIF and PDF formats. Convert images directly in your browser.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        validFrom: "2024-01-01",
        description: "Free online image conversion tools",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "2500",
        bestRating: "5",
        worstRating: "1",
      },
      screenshot: "https://pngjpgconvert.com/og-image.png",
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
        {
          "@type": "ListItem",
          position: 2,
          name: "Free Online Image Converter",
          item: "https://pngjpgconvert.com",
        },
      ],
    },

    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "PNG JPG Convert",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Any",
      browserRequirements: "Requires JavaScript",
      url: "https://pngjpgconvert.com",
      description:
        "Free online image converter supporting PNG, JPG, WEBP, AVIF, PDF and more. Convert images instantly.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
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