"use client";

import { downloadBlob } from "@/lib/download";

type Props = {
  blob: Blob | null;
  filename: string;
  text?: string;
};

export default function DownloadButton({
  blob,
  filename,
  text = "Download",
}: Props) {
  function handleDownload() {
    if (!blob) return;

    downloadBlob(blob, filename);
  }

  return (
    <button
      type="button"
      disabled={!blob}
      onClick={handleDownload}
      className="w-full rounded-xl bg-green-600 px-6 py-4 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-gray-300"
    >
      {text}
    </button>
  );
}