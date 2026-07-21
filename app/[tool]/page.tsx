import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { getTool } from "@/data/tools";

import ImageToolPage from "@/components/templates/ImageToolPage";

import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import UploadSection from "@/components/sections/UploadSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import HowToSection from "@/components/sections/HowToSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import SupportedFormatsSection from "@/components/sections/SupportedFormatsSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import FAQSection from "@/components/sections/FAQSection";
import RelatedToolsSection from "@/components/sections/RelatedToolsSection";
import ContentSection from "@/components/sections/ContentSection";

import ToolSchema from "@/components/schema/ToolSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import FAQSchema from "@/components/schema/FAQSchema";
import HowToSchema from "@/components/schema/HowToSchema";

type Props = {
  params: Promise<{
    tool: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { tool: slug } = await params;

  const tool = getTool(slug);

  if (!tool) {
    return {};
  }

  const url = `https://pngjpgconvert.com/${tool.slug}`;

  return {
    title: tool.seoTitle,

    description: tool.seoDescription,

    keywords: tool.keywords,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: tool.seoTitle,

      description: tool.seoDescription,

      url,

      siteName: "PNG JPG Convert",

      locale: "en_US",

      type: "website",

      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${tool.title} | PNG JPG Convert`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title: tool.seoTitle,

      description: tool.seoDescription,

      images: ["/og-image.png"],
    },

    robots: {
      index: true,

      follow: true,

      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export default async function ToolPage({
  params,
}: Props) {
  const { tool: slug } = await params;

  const tool = getTool(slug);

  if (!tool) {
    notFound();
  }

  return (
    <>
      <ToolSchema tool={tool} />

      <BreadcrumbSchema
        title={tool.title}
        slug={tool.slug}
      />

      <FAQSchema tool={tool} />

      <HowToSchema tool={tool} />

      <ImageToolPage
        hero={<HeroSection tool={tool} />}
        stats={<StatsSection />}
        tool={<UploadSection tool={tool} />}
        benefits={<BenefitsSection tool={tool} />}
        howTo={<HowToSection tool={tool} />}
        comparison={<ComparisonSection tool={tool} />}
        supportedFormats={<SupportedFormatsSection />}
        whyChoose={<WhyChooseSection />}
        faq={<FAQSection tool={tool} />}
        relatedTools={<RelatedToolsSection tool={tool} />}
        content={<ContentSection tool={tool} />}
      />
    </>
  );
}