"use client";

import { useState } from "react";

import UploadZone from "@/components/upload/UploadZone";
import { convertImage } from "@/lib/converter";

type Props = {
  from: string;
  to: string;

  outputMime: string;
  outputExtension: string;

  supportsQuality?: boolean;
};

export default function ConvertTool({
  from,
  to,
  outputMime,
  outputExtension,
  supportsQuality = true,
}: Props) {
  const [file, setFile] = useState<File | null>(null);
  const [quality, setQuality] = useState(0.9);

  async function convert() {
    if (!file) return;

    const blob = await convertImage(
      file,
      outputMime,
      quality
    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `converted.${outputExtension}`;
    a.click();

    URL.revokeObjectURL(url);
  }

  return (
    <div className="space-y-6">

      <UploadZone
        onChange={setFile}
      />

      {supportsQuality && (
        <div>
          <label className="mb-2 block font-medium">
            Quality ({Math.round(quality * 100)}%)
          </label>

          <input
            type="range"
            min={0.1}
            max={1}
            step={0.05}
            value={quality}
            onChange={(e) =>
              setQuality(Number(e.target.value))
            }
            className="w-full"
          />
        </div>
      )}

      <button
        onClick={convert}
        disabled={!file}
        className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white disabled:opacity-50"
      >
        Convert {from} to {to}
      </button>

    </div>
  );
}