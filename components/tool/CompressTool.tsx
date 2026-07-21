"use client";

import { useState } from "react";

import UploadZone from "@/components/upload/UploadZone";
import { compressImage } from "@/lib/converter";

type Props = {
  outputMime?: string;
  outputExtension?: string;
};

export default function CompressTool({
  outputMime = "image/webp",
  outputExtension = "webp",
}: Props) {
  const [file, setFile] = useState<File | null>(null);

  async function convert() {
    if (!file) return;

    const blob = await compressImage(file, 0.8);

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `compressed.${outputExtension}`;
    a.click();

    URL.revokeObjectURL(url);
  }

  return (
    <div className="space-y-6">

      <UploadZone
        onChange={setFile}
      />

      <button
        onClick={convert}
        disabled={!file}
        className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white disabled:opacity-50"
      >
        Compress Image
      </button>

    </div>
  );
}