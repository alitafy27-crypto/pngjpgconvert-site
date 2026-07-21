"use client";

import { useState } from "react";

import UploadZone from "@/components/upload/UploadZone";
import RotateControls from "./RotateControls";

import { rotateImage } from "@/lib/converter";

type Props = {
  outputMime?: string;
  outputExtension?: string;
};

export default function RotateTool({
  outputMime = "image/png",
  outputExtension = "png",
}: Props) {
  const [file, setFile] = useState<File | null>(null);

  const [angle, setAngle] =
    useState<90 | 180 | 270>(90);

  async function convert() {
    if (!file) return;

    const blob = await rotateImage(
      file,
      angle
    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = `rotated.${outputExtension}`;

    a.click();

    URL.revokeObjectURL(url);
  }

  return (
    <div className="space-y-6">

      <RotateControls
        angle={angle}
        onChange={setAngle}
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
        Rotate Image
      </button>

    </div>
  );
}