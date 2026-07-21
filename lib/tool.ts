import { tools } from "@/data/tools";
import type { ToolData } from "@/data/tool.types";

export function getTool(
  slug: string
): ToolData | undefined {
  return tools[slug];
}

export function getAllTools(): ToolData[] {
  return Object.values(tools);
}

export function getRelatedTools(
  slug: string
): ToolData[] {
  return Object.values(tools).filter(
    (tool) => tool.slug !== slug
  );
}