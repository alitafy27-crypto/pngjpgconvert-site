"use client";

import { useState } from "react";

import UploadZone from "@/components/upload/UploadZone";
import FlipControls, {
  type FlipDirection,
} from "./FlipControls";

import { flipImage } from "@/lib/converter";

type Props = {
  outputMime?: string;
  outputExtension?: string;
};

export default function FlipTool({
  outputMime = "image/png",
  outputExtension = "png",
}: Props) {
  const [file, setFile] = useState<File | null>(null);

  const [flip, setFlip] =
    useState<FlipDirection>("horizontal");

  async function convert() {
    if (!file) return;

    const blob = await flipImage(
      file,
      flip
    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = `flipped.${outputExtension}`;

    document.body.appendChild(a);
    a.click();
    a.remove();

    URL.revokeObjectURL(url);
  }

  return (
    <div className="space-y-6">

      <FlipControls
        flip={flip}
        onChange={setFlip}
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
        Flip Image
      </button>

    </div>
  );
}