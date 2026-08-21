import Link from "next/link";
import Container from "../ui/Container";
import type { ToolData } from "@/data/tool.types";

type Props = {
  tool: ToolData;
};

export default function ContentSection({ tool }: Props) {
  const content = tool.content;

  const hasUseCases =
    "useCases" in content &&
    Array.isArray(content.useCases) &&
    content.useCases.length > 0;

  const hasTips =
    "tips" in content &&
    Array.isArray(content.tips) &&
    content.tips.length > 0;

  const hasBestFor =
    "bestFor" in content &&
    Array.isArray(content.bestFor) &&
    content.bestFor.length > 0;

  const hasNotIdealFor =
    "notIdealFor" in content &&
    Array.isArray(content.notIdealFor) &&
    content.notIdealFor.length > 0;

  const hasCommonMistakes =
    "commonMistakes" in content &&
    Array.isArray(content.commonMistakes) &&
    content.commonMistakes.length > 0;

  const hasTroubleshooting =
    "troubleshooting" in content &&
    Array.isArray(content.troubleshooting) &&
    content.troubleshooting.length > 0;

  const relatedArticles =
    "links" in tool &&
    tool.links?.relatedArticles
      ? tool.links.relatedArticles
      : [];

  return (
    <section
      className="py-16 sm:py-20 lg:py-24"
      aria-labelledby="tool-guide-heading"
    >
      <Container>
        <article className="prose prose-lg max-w-4xl mx-auto">

          {/* =========================================================
              INTRODUCTION
          ========================================================= */}

          <header>
            <h2 id="tool-guide-heading">
              About the {tool.title}
            </h2>

            <p>{content.introduction}</p>
          </header>

          {/* =========================================================
              WHY CONVERT
          ========================================================= */}

          <section aria-labelledby="why-convert-heading">
            <h2 id="why-convert-heading">
              Why Convert {tool.from} to {tool.to}?
            </h2>

            <p>{content.whyConvert}</p>
          </section>

          {/* =========================================================
              USE CASES
          ========================================================= */}

          {hasUseCases && (
            <section aria-labelledby="use-cases-heading">
              <h2 id="use-cases-heading">
                Common Uses for {tool.from} to {tool.to} Conversion
              </h2>

              <p>
                Converting {tool.from} to {tool.to} can be useful in
                different workflows, depending on the required image
                quality, file size, compatibility, and transparency
                requirements.
              </p>

              <ul>
                {content.useCases?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {/* =========================================================
              MAIN ADVANTAGES
          ========================================================= */}

          <section aria-labelledby="advantages-heading">
            <h2 id="advantages-heading">
              Main Advantages
            </h2>

            <ul>
              {tool.features.map((feature) => (
                <li key={feature.title}>
                  <strong>{feature.title}</strong>{" "}
                  — {feature.description}
                </li>
              ))}
            </ul>
          </section>

          {/* =========================================================
              WHY CHOOSE
          ========================================================= */}

          <section aria-labelledby="why-choose-heading">
            <h2 id="why-choose-heading">
              Why Choose This {tool.title}?
            </h2>

            <p>{content.whyChoose}</p>
          </section>

          {/* =========================================================
              BEST USE CASES
          ========================================================= */}

          {hasBestFor && (
            <section aria-labelledby="best-for-heading">
              <h2 id="best-for-heading">
                What Is {tool.to} Best For?
              </h2>

              <p>
                {tool.to} can be a practical choice when you need
                a format that fits the following situations:
              </p>

              <ul>
                {content.bestFor?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {/* =========================================================
              WHEN NOT IDEAL
          ========================================================= */}

          {hasNotIdealFor && (
            <section aria-labelledby="not-ideal-heading">
              <h2 id="not-ideal-heading">
                When {tool.to} May Not Be the Best Choice
              </h2>

              <p>
                No image format is ideal for every situation.
                Consider keeping the original {tool.from} file when
                one of the following requirements applies:
              </p>

              <ul>
                {content.notIdealFor?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {/* =========================================================
              FORMAT COMPARISON
          ========================================================= */}

          <section aria-labelledby="comparison-heading">
            <h2 id="comparison-heading">
              {tool.from} vs {tool.to}
            </h2>

            <p>{content.comparisonText}</p>

            {tool.comparison.length > 0 && (
              <div className="not-prose my-8 overflow-x-auto rounded-xl border">
                <table className="w-full min-w-[600px] text-left text-sm">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 font-semibold">
                        Feature
                      </th>

                      <th className="px-4 py-3 font-semibold">
                        {tool.from}
                      </th>

                      <th className="px-4 py-3 font-semibold">
                        {tool.to}
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {tool.comparison.map((item) => (
                      <tr
                        key={item.feature}
                        className="border-t"
                      >
                        <td className="px-4 py-3 font-medium">
                          {item.feature}
                        </td>

                        <td className="px-4 py-3">
                          {item.from}
                        </td>

                        <td className="px-4 py-3">
                          {item.to}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>

          {/* =========================================================
              TIPS
          ========================================================= */}

          {hasTips && (
            <section aria-labelledby="tips-heading">
              <h2 id="tips-heading">
                Tips for Better {tool.to} Results
              </h2>

              <ul>
                {content.tips?.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </section>
          )}

          {/* =========================================================
              PRIVACY
          ========================================================= */}

          <section aria-labelledby="privacy-heading">
            <h2 id="privacy-heading">
              Privacy and Browser-Based Processing
            </h2>

            <p>{content.privacy}</p>

            {"privacyConfig" in tool && tool.privacyConfig?.privacySummary && (
              <p>
                <strong>
                  Browser-based processing:
                </strong>{" "}
                {tool.privacyConfig.privacySummary}
              </p>
            )}
          </section>

          {/* =========================================================
              COMMON MISTAKES
          ========================================================= */}

          {hasCommonMistakes && (
            <section aria-labelledby="mistakes-heading">
              <h2 id="mistakes-heading">
                Common {tool.from} to {tool.to} Conversion Mistakes
              </h2>

              <ul>
                {content.commonMistakes?.map((mistake) => (
                  <li key={mistake}>{mistake}</li>
                ))}
              </ul>
            </section>
          )}

          {/* =========================================================
              TROUBLESHOOTING
          ========================================================= */}

          {hasTroubleshooting && (
            <section aria-labelledby="troubleshooting-heading">
              <h2 id="troubleshooting-heading">
                Troubleshooting
              </h2>

              <p>
                If you experience an issue while converting your
                image, the following suggestions may help:
              </p>

              <ul>
                {content.troubleshooting?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {/* =========================================================
              RELATED ARTICLES
          ========================================================= */}

          {relatedArticles.length > 0 && (
            <section
              aria-labelledby="related-guides-heading"
              className="not-prose mt-12"
            >
              <h2
                id="related-guides-heading"
                className="mb-4 text-2xl font-bold"
              >
                Related Guides
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                {relatedArticles.map((article) => (
                  <Link
                    key={article.href}
                    href={article.href}
                    className="rounded-xl border p-5 transition hover:shadow-md"
                  >
                    <span className="font-semibold">
                      {article.title}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* =========================================================
              CONCLUSION
          ========================================================= */}

          <section aria-labelledby="conclusion-heading">
            <h2 id="conclusion-heading">
              Conclusion
            </h2>

            <p>{content.conclusion}</p>
          </section>

        </article>
      </Container>
    </section>
  );
}