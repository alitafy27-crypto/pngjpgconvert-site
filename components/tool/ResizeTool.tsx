"use client";

import { useState } from "react";

import UploadZone from "@/components/upload/UploadZone";
import ResizeControls from "./ResizeControls";

import { resizeImage } from "@/lib/converter";

type Props = {
  outputMime?: string;
  outputExtension?: string;
};

export default function ResizeTool({
  outputMime = "image/png",
  outputExtension = "png",
}: Props) {
  const [file, setFile] = useState<File | null>(null);

  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(600);
  const [keepAspect, setKeepAspect] = useState(true);

  async function convert() {
    if (!file) return;

    const blob = await resizeImage(
      file,
      width,
      height,
      outputMime
    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `resized.${outputExtension}`;
    a.click();

    URL.revokeObjectURL(url);
  }

  return (
    <div className="space-y-6">

      <ResizeControls
        width={width}
        height={height}
        keepAspect={keepAspect}
        onWidthChange={setWidth}
        onHeightChange={setHeight}
        onKeepAspectChange={setKeepAspect}
      />

      <UploadZone onChange={setFile} />

      <button
        onClick={convert}
        disabled={!file}
        className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white disabled:opacity-50"
      >
        Resize Image
      </button>

    </div>
  );
}