"use client";

import { useState } from "react";

import UploadZone from "@/components/upload/UploadZone";
import WatermarkControls from "./WatermarkControls";

import { watermarkImage } from "@/lib/converter";

type Props = {
  outputMime?: string;
  outputExtension?: string;
};

export default function WatermarkTool({
  outputMime = "image/png",
  outputExtension = "png",
}: Props) {
  const [file, setFile] = useState<File | null>(null);

  const [text, setText] = useState("SmartToolZone");
  const [size, setSize] = useState(36);
  const [opacity, setOpacity] = useState(0.5);
  const [color, setColor] = useState("#ffffff");

  async function convert() {
    if (!file) return;

const blob = await watermarkImage(
  file,
  text,
  size,
  opacity,
  color
);

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `watermarked.${outputExtension}`;

    document.body.appendChild(a);
    a.click();
    a.remove();

    URL.revokeObjectURL(url);
  }

  return (
    <div className="space-y-6">

      <WatermarkControls
        text={text}
        onTextChange={setText}
        size={size}
        onSizeChange={setSize}
        opacity={opacity}
        onOpacityChange={setOpacity}
        color={color}
        onColorChange={setColor}
      />

      <UploadZone
        onChange={setFile}
      />

      <button
        type="button"
        disabled={!file}
        onClick={convert}
        className="w-full rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
      >
        Add Watermark
      </button>

    </div>
  );
}