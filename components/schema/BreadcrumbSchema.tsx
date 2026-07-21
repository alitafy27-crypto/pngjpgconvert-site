type Props = {
  title: string;
  slug: string;
};

export default function BreadcrumbSchema({
  title,
  slug,
}: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://mysite.com",
      },

      {
        "@type": "ListItem",
        position: 2,
        name: title,
        item: `https://mysite.com/${slug}`,
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