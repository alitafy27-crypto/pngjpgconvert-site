import { toolsList } from "@/data/tools";
import type { ToolData } from "@/data/tool.types";

export function getTool(
  slug: string
): ToolData | undefined {
  // ✅ استخدم find للبحث في المصفوفة
  return toolsList.find((tool) => tool.slug === slug);
}

export function getAllTools(): ToolData[] {
  // ✅ toolsList هي مصفوفة بالفعل
  return toolsList;
}

export function getRelatedTools(
  slug: string
): ToolData[] {
  // ✅ استخدم filter على المصفوفة
  return toolsList.filter(
    (tool) => tool.slug !== slug
  );
}