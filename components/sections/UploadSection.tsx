import UploadBox from "../upload/UploadBox";

import type { ToolData } from "@/data/tool.types";

type Props = {
  tool: ToolData;
};

export default function UploadSection({
  tool,
}: Props) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-6">
      <UploadBox
  from={tool.from}
  to={tool.to}
  mode={tool.mode}
  outputMime={tool.outputMime}
  outputExtension={tool.outputExtension}
  supportsQuality={tool.supportsQuality}
/>
      </div>
    </section>
  );
}