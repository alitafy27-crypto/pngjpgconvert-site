"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { ToolData } from "@/data/tool.types";

type ToolCardData = {
  slug: string;
  icon: string;
  title: string;
  description: string;
};

type Props = {
  tool: ToolCardData;
};

export default function ToolCard({
  tool,
}: Props) {
  return (
    <Link
      href={`/${tool.slug}`}
      className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="mb-6 text-5xl">
        {tool.icon}
      </div>

      <h3 className="text-2xl font-bold transition group-hover:text-blue-600">
        {tool.title}
      </h3>

      <p className="mt-4 leading-7 text-gray-600">
        {tool.description}
      </p>

      <div className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600">
        Open Tool
        <ArrowRight
          size={18}
          className="transition group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
}