type Props = {
  title: string;
  slug: string;
};

const BASE_URL = "https://pngjpgconvert.com";

export default function BreadcrumbSchema({
  title,
  slug,
}: Props) {
  const cleanSlug = slug.replace(/^\/+|\/+$/g, "");
  const pageUrl = `${BASE_URL}/${cleanSlug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    "url": pageUrl,
    "inLanguage": "en",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": {
          "@id": `${BASE_URL}/#webpage`,
          "url": BASE_URL,
        },
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Tools",
        "item": {
          "@id": `${BASE_URL}/tools#webpage`,
          "url": `${BASE_URL}/tools`,
        },
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": title,
        "item": {
          "@id": `${pageUrl}#webpage`,
          "url": pageUrl,
        },
      },
    ],
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