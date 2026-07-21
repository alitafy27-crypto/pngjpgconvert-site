import Container from "../ui/Container";
import type { ToolData } from "@/data/tool.types";

type Props = {
  tool: ToolData;
};

export default function ContentSection({ tool }: Props) {
  const content = tool.content ?? {
    introduction: `The ${tool.title} allows you to convert ${tool.from} images into ${tool.to} directly inside your browser without installing any software. Everything happens locally on your device for maximum privacy and speed.`,

    whyConvert: `${tool.to} is a great format depending on your workflow. It provides excellent compatibility and quality for modern websites and applications.`,

    whyChoose:
      "This tool is fast, secure, browser-based and completely free. No uploads or registration are required.",

    comparisonText: `${tool.from} and ${tool.to} are designed for different purposes. Choosing the correct format can improve compatibility, quality and file size.`,

    privacy:
      "All image processing happens locally inside your browser. Your files never leave your device.",

    conclusion: `If you need a fast, free and secure way to convert ${tool.from} images into ${tool.to}, this converter is an excellent choice.`,
  };

  return (
    <section className="py-20">
      <Container>
        <article className="prose prose-lg max-w-none">
          <h2>About the {tool.title}</h2>

          <p>{content.introduction}</p>

          <h2>
            Why Convert {tool.from} to {tool.to}?
          </h2>

          <p>{content.whyConvert}</p>

          <h2>Main Advantages</h2>

          <ul>
            {tool.features.map((feature) => (
              <li key={feature.title}>
                <strong>{feature.title}</strong> — {feature.description}
              </li>
            ))}
          </ul>

          <h2>Why Choose This Tool?</h2>

          <p>{content.whyChoose}</p>

          <h2>{tool.from} vs {tool.to}</h2>

          <p>{content.comparisonText}</p>

          <h2>Privacy First</h2>

          <p>{content.privacy}</p>

          <h2>Conclusion</h2>

          <p>{content.conclusion}</p>
        </article>
      </Container>
    </section>
  );
}