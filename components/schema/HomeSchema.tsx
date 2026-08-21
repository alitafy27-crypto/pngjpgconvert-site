export default function HomeSchema() {
  const BASE_URL = "https://pngjpgconvert.com";

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "PNG JPG Convert",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        "@id": `${BASE_URL}/#logo`,
        url: `${BASE_URL}/logo.png`,
        contentUrl: `${BASE_URL}/logo.png`,
        width: 512,
        height: 512,
      },
      description:
        "PNG JPG Convert provides free online image conversion tools for PNG, JPG, WEBP, AVIF, PDF and other formats.",
      email: "support@pngjpgconvert.com",
      contactPoint: {
        "@type": "ContactPoint",
        "@id": `${BASE_URL}/#contact`,
        contactType: "customer support",
        email: "support@pngjpgconvert.com",
        url: `${BASE_URL}/contact`,
        availableLanguage: ["English"],
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
      "@id": `${BASE_URL}/#website`,
      name: "PNG JPG Convert",
      url: BASE_URL,
      description:
        "Free online image converter for PNG, JPG, WEBP, AVIF, PDF and more. Fast, secure and browser-based.",
      publisher: {
        "@id": `${BASE_URL}/#organization`,
      },
      inLanguage: "en",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },

    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${BASE_URL}/#webpage`,
      url: BASE_URL,
      name: "Free Online Image Converter - PNG, JPG, WEBP, AVIF & PDF",
      description:
        "Convert PNG, JPG, WEBP, AVIF and PDF files online for free. Fast, secure image conversion directly in your browser.",
      isPartOf: {
        "@id": `${BASE_URL}/#website`,
      },
      about: {
        "@id": `${BASE_URL}/#application`,
      },
      publisher: {
        "@id": `${BASE_URL}/#organization`,
      },
      primaryImageOfPage: {
        "@id": `${BASE_URL}/#ogimage`,
      },
      inLanguage: "en",
    },

    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "@id": `${BASE_URL}/#application`,
      name: "PNG JPG Convert",
      alternateName: "PNG JPG Image Converter",
      url: BASE_URL,
      applicationCategory: "UtilitiesApplication",
      applicationSubCategory: "Image Conversion",
      operatingSystem: "Any",
      browserRequirements: "Requires JavaScript",
      description:
        "Free browser-based image conversion tools for PNG, JPG, WEBP, AVIF, PDF and other image formats.",
      creator: {
        "@id": `${BASE_URL}/#organization`,
      },
      publisher: {
        "@id": `${BASE_URL}/#organization`,
      },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      featureList: [
        "PNG to JPG conversion",
        "JPG to PNG conversion",
        "WEBP conversion",
        "AVIF conversion",
        "PDF image conversion",
        "Browser-based image conversion",
      ],
      screenshot: {
        "@type": "ImageObject",
        url: `${BASE_URL}/og-image.png`,
        contentUrl: `${BASE_URL}/og-image.png`,
      },
    },

    {
      "@context": "https://schema.org",
      "@type": "ImageObject",
      "@id": `${BASE_URL}/#ogimage`,
      url: `${BASE_URL}/og-image.png`,
      contentUrl: `${BASE_URL}/og-image.png`,
      caption: "PNG JPG Convert - Free Online Image Converter",
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