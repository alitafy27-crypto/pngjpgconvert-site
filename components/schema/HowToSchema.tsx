import type { ToolData } from "@/data/tool.types";

type Props = {
  tool: ToolData;
};

const SITE_URL = "https://pngjpgconvert.com";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

function cleanText(value: string | undefined): string {
  return (
    value
      ?.replace(/\s+/g, " ")
      .trim() || ""
  );
}

export default function HowToSchema({
  tool,
}: Props) {
  /**
   * Do not generate HowTo structured data if the tool
   * does not have real, visible steps.
   */
  if (!tool.howTo || tool.howTo.length === 0) {
    return null;
  }

  const steps = tool.howTo
    .map((item, index) => {
      const name = cleanText(item.title);
      const text = cleanText(item.description);

      if (!name || !text) {
        return null;
      }

      return {
        "@type": "HowToStep",

        position: index + 1,

        name,

        text,

        url: `${SITE_URL}/${tool.slug}#step-${index + 1}`,
      };
    })
    .filter(Boolean);

  /**
   * A HowTo schema without valid steps is not useful.
   */
  if (steps.length === 0) {
    return null;
  }

  const description =
    cleanText(tool.howToConfig?.introduction) ||
    cleanText(tool.heroDescription) ||
    cleanText(tool.description);

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",

    "@type": "HowTo",

    "@id": `${SITE_URL}/${tool.slug}#howto`,

    name: `How to Use the ${tool.title}`,

    description,

    url: `${SITE_URL}/${tool.slug}#how-to`,

    inLanguage: "en",

    step: steps,
  };

  /**
   * Use configured duration only when it actually exists.
   *
   * We intentionally do NOT hard-code PT1M because different
   * tools can take different amounts of time.
   */
  if (tool.howToConfig?.estimatedTime) {
    schema.totalTime = tool.howToConfig.estimatedTime;
  }

  /**
   * Add requirements only when they are actually defined.
   */
  if (
    tool.howToConfig?.requirements &&
    tool.howToConfig.requirements.length > 0
  ) {
    schema.supply =
      tool.howToConfig.requirements.map((requirement) => ({
        "@type": "HowToSupply",
        name: requirement,
      }));
  }

  /**
   * Add difficulty information when available.
   */
  if (tool.howToConfig?.difficulty) {
    schema.tool =
      tool.howToConfig.difficulty;
  }

  /**
   * Use the site's real image as the step image.
   *
   * The image is kept consistent across steps rather than
   * inventing separate images that do not exist.
   */
  const validSteps = steps as Array<Record<string, unknown>>;

  for (const step of validSteps) {
    step.image = {
      "@type": "ImageObject",

      url: OG_IMAGE,

      contentUrl: OG_IMAGE,

      width: 1200,

      height: 630,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}