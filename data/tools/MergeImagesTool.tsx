"use client";

import { useState } from "react";

import FileList from "@/components/tool/FileList";
import ConvertButton from "@/components/tool/ConvertButton";
import DownloadButton from "@/components/tool/DownloadButton";

import { mergeImages } from "@/lib/converter";

export default function MergeImagesTool() {
  const [files, setFiles] = useState<File[]>([]);
  const [merged, setMerged] = useState<Blob | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleMerge() {
    if (files.length < 2) return;

    try {
      setLoading(true);

      const blob = await mergeImages(files);

      setMerged(blob);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <label className="cursor-pointer">
        <div className="rounded-xl border-2 border-dashed p-10 text-center">
          <div className="text-6xl">🖼️</div>

          <h2 className="mt-4 text-3xl font-bold">
            Merge Images
          </h2>

          <p className="mt-2 text-gray-500">
            Select multiple images
          </p>
        </div>

        <input
          hidden
          multiple
          type="file"
          accept="image/*"
          onChange={(e) => {
            const selected = Array.from(
              e.target.files || []
            );

            setFiles(selected);
            setMerged(null);
          }}
        />
      </label>

      {files.length > 0 && (
        <>
          <FileList files={files} />

          <ConvertButton
            loading={loading}
            disabled={loading || files.length < 2}
            text="Merge Images"
            onClick={handleMerge}
          />
        </>
      )}

      {merged && (
        <DownloadButton
          blob={merged}
          filename="merged-image.png"
          text="Download"
        />
      )}
    </div>
  );
}