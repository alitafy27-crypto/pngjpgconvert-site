"use client";

import { useEffect, useState } from "react";

type Props = {
  file: File;
};

export default function FilePreview({ file }: Props) {
  const [url, setUrl] = useState<string | null>(null);
  const [size, setSize] = useState("");
  const [dimensions, setDimensions] = useState("");

  useEffect(() => {
    const objectUrl = URL.createObjectURL(file);

    setUrl(objectUrl);
    setSize((file.size / 1024 / 1024).toFixed(2) + " MB");

    const img = new Image();

    img.onload = () => {
      setDimensions(`${img.width} × ${img.height}`);
    };

    img.src = objectUrl;

    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [file]);

  return (
    <div className="flex flex-col gap-8 md:flex-row">
      {url && (
        <img
          src={url}
          alt="Preview"
          className="h-56 w-56 rounded-2xl border object-contain"
        />
      )}

      <div className="flex flex-1 flex-col justify-center">
        <h2 className="text-2xl font-bold break-all">
          {file.name}
        </h2>

        <div className="mt-6 grid grid-cols-2 gap-6">
          <div className="rounded-xl bg-gray-50 p-5">
            <div className="text-sm text-gray-500">
              File Size
            </div>

            <div className="mt-2 text-xl font-bold">
              {size}
            </div>
          </div>

          <div className="rounded-xl bg-gray-50 p-5">
            <div className="text-sm text-gray-500">
              Resolution
            </div>

            <div className="mt-2 text-xl font-bold">
              {dimensions}
            </div>
          </div>

          <div className="rounded-xl bg-gray-50 p-5">
            <div className="text-sm text-gray-500">
              Format
            </div>

            <div className="mt-2 text-xl font-bold uppercase">
              {file.type.replace("image/", "")}
            </div>
          </div>

          <div className="rounded-xl bg-gray-50 p-5">
            <div className="text-sm text-gray-500">
              Status
            </div>

            <div className="mt-2 font-bold text-green-600">
              ✓ Ready
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}