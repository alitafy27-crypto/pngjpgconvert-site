"use client";

import { useEffect, useState } from "react";

type Props = {
  original: File;
  compressed: Blob;
};

export default function BeforeAfterPreview({
  original,
  compressed,
}: Props) {
  const [originalUrl, setOriginalUrl] =
    useState("");

  const [compressedUrl, setCompressedUrl] =
    useState("");

  useEffect(() => {
    const url1 = URL.createObjectURL(original);
    const url2 = URL.createObjectURL(compressed);

    setOriginalUrl(url1);
    setCompressedUrl(url2);

    return () => {
      URL.revokeObjectURL(url1);
      URL.revokeObjectURL(url2);
    };
  }, [original, compressed]);

  return (
    <div className="grid gap-6 md:grid-cols-2">

      <div>
        <h3 className="mb-3 text-center text-lg font-semibold">
          Before
        </h3>

        <img
          src={originalUrl}
          alt="Original"
          className="w-full rounded-2xl border shadow"
        />
      </div>

      <div>
        <h3 className="mb-3 text-center text-lg font-semibold">
          After
        </h3>

        <img
          src={compressedUrl}
          alt="Compressed"
          className="w-full rounded-2xl border shadow"
        />
      </div>

    </div>
  );
}