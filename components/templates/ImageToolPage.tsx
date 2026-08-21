import React from "react";

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
    <main className="min-h-screen">
      {/* =========================================================
          HERO
          ---------------------------------------------------------
          The first section introduces the tool and its main value.
          Keep this section focused and conversion-friendly.
      ========================================================= */}
      <section aria-labelledby="tool-hero-heading">
        {hero}
      </section>

      {/* =========================================================
          TRUST / STATS
          ---------------------------------------------------------
          Useful for trust signals, supported formats, speed,
          privacy, or other important product facts.
      ========================================================= */}
      {stats && (
        <section
          aria-label="Tool statistics and key information"
          className="border-y"
        >
          {stats}
        </section>
      )}

      {/* =========================================================
          TOOL
          ---------------------------------------------------------
          The actual converter/editor should appear early so the
          user can immediately perform the main action.
      ========================================================= */}
      <section
        aria-labelledby="tool-interface-heading"
        className="relative"
      >
        {tool}
      </section>

      {/* =========================================================
          BENEFITS
          ---------------------------------------------------------
          Explain why the user should use this tool.
      ========================================================= */}
      {benefits && (
        <section
          aria-labelledby="tool-benefits-heading"
        >
          {benefits}
        </section>
      )}

      {/* =========================================================
          HOW TO USE
          ---------------------------------------------------------
          Helps users understand the process and can also support
          HowTo structured data when implemented correctly.
      ========================================================= */}
      {howTo && (
        <section
          aria-labelledby="how-to-use-heading"
        >
          {howTo}
        </section>
      )}

      {/* =========================================================
          COMPARISON
          ---------------------------------------------------------
          Useful for explaining format differences, quality,
          file size, compatibility, and use cases.
      ========================================================= */}
      {comparison && (
        <section
          aria-labelledby="comparison-heading"
        >
          {comparison}
        </section>
      )}

      {/* =========================================================
          SUPPORTED FORMATS
          ---------------------------------------------------------
          Helps users quickly determine whether their file type
          is compatible with the tool.
      ========================================================= */}
      {supportedFormats && (
        <section
          aria-labelledby="supported-formats-heading"
        >
          {supportedFormats}
        </section>
      )}

      {/* =========================================================
          WHY CHOOSE US / PRIVACY
          ---------------------------------------------------------
          This is an important place to communicate the site's
          strongest differentiator: browser-side/local processing.
      ========================================================= */}
      {whyChoose && (
        <section
          aria-labelledby="why-choose-heading"
        >
          {whyChoose}
        </section>
      )}

      {/* =========================================================
          FAQ
          ---------------------------------------------------------
          Provides useful answers to common user questions.
          FAQ schema should be handled separately by FAQSchema.
      ========================================================= */}
      {faq && (
        <section
          aria-labelledby="faq-heading"
        >
          {faq}
        </section>
      )}

      {/* =========================================================
          RELATED TOOLS
          ---------------------------------------------------------
          Important for internal linking and helping users discover
          other relevant tools.
      ========================================================= */}
      {relatedTools && (
        <section
          aria-labelledby="related-tools-heading"
        >
          {relatedTools}
        </section>
      )}

      {/* =========================================================
          SEO / EDUCATIONAL CONTENT
          ---------------------------------------------------------
          Detailed textual content should come near the end of the
          page so the tool remains the primary user action while
          search engines can still understand the topic deeply.
      ========================================================= */}
      {content && (
        <section
          aria-labelledby="tool-content-heading"
        >
          {content}
        </section>
      )}
    </main>
  );
}