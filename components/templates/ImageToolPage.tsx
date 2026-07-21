type Props = {
  hero: React.ReactNode;

  stats?: React.ReactNode;

  tool: React.ReactNode;

  benefits?: React.ReactNode;

  howTo?: React.ReactNode;

  comparison?: React.ReactNode;

  supportedFormats?: React.ReactNode;

  whyChoose?: React.ReactNode;

  faq?: React.ReactNode;

  relatedTools?: React.ReactNode;

  content?: React.ReactNode;
};

export default function ImageToolPage({
  hero,
  stats,
  tool,
  benefits,
  howTo,
  comparison,
  supportedFormats,
  whyChoose,
  faq,
  relatedTools,
  content,
}: Props) {
  return (
    <>
      {hero}

      {stats}

      {tool}

      {benefits}

      {howTo}

      {comparison}

      {supportedFormats}

      {whyChoose}

      {faq}

      {relatedTools}

      {content}
    </>
  );
}