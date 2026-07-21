"use client";

import { useEffect, useRef, useState } from "react";
import type {
  ChangeEvent,
  DragEvent,
} from "react";

type Props = {
  onChange?: (file: File | null) => void;
};

const MAX_SIZE = 20 * 1024 * 1024;

const SUPPORTED_TYPES = [
  "image/png",
  "image/jpeg",
  "image/webp",
  "image/avif",
];

export default function UploadZone({
  onChange,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState("");

  function validate(selected: File) {
    if (!SUPPORTED_TYPES.includes(selected.type)) {
      setError(
        "Unsupported file format. Please upload PNG, JPG, WEBP or AVIF."
      );
      return false;
    }

    if (selected.size > MAX_SIZE) {
      setError("Maximum file size is 20 MB.");
      return false;
    }

    setError("");
    return true;
  }

  function handleFile(selected: File | null) {
    if (!selected) return;

    if (!validate(selected)) return;

    setFile(selected);

    if (onChange) {
      onChange(selected);
    }

    if (preview) {
      URL.revokeObjectURL(preview);
    }

    const url = URL.createObjectURL(selected);
    setPreview(url);
  }

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    handleFile(e.target.files?.[0] || null);
  }

  function handleDrop(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setDragging(false);

    handleFile(e.dataTransfer.files?.[0] || null);
  }

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  return (
    <div
      onClick={() => inputRef.current?.click()}
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
      className={`cursor-pointer rounded-3xl border-2 border-dashed p-12 text-center transition-all duration-200 ${
        dragging
          ? "border-blue-600 bg-blue-50"
          : "border-gray-300 bg-gray-50 hover:border-blue-500 hover:bg-blue-50"
      }`}
    >
      {!preview ? (
        <>
          <div className="text-6xl">📤</div>

          <h2 className="mt-6 text-3xl font-bold">
            {dragging
              ? "Drop your image here"
              : "Drag & Drop your image"}
          </h2>

          <p className="mt-3 text-gray-500">
            or click anywhere to browse
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <span className="rounded-full bg-white px-4 py-2 text-sm shadow">
              PNG
            </span>

            <span className="rounded-full bg-white px-4 py-2 text-sm shadow">
              JPG
            </span>

            <span className="rounded-full bg-white px-4 py-2 text-sm shadow">
              WEBP
            </span>

            <span className="rounded-full bg-white px-4 py-2 text-sm shadow">
              AVIF
            </span>
          </div>

          <p className="mt-6 text-sm text-gray-400">
            Maximum file size: 20 MB
          </p>

          {error && (
            <p className="mt-4 font-medium text-red-600">
              {error}
            </p>
          )}
        </>
      ) : (
        <>
          <img
            src={preview}
            alt="Preview"
            className="mx-auto max-h-80 rounded-2xl shadow-lg"
          />

          <h3 className="mt-6 text-xl font-bold">
            {file?.name}
          </h3>

          <p className="mt-2 text-gray-500">
            {((file?.size || 0) / 1024).toFixed(1)} KB
          </p>

          <button
            type="button"
            className="mt-8 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Choose Another Image
          </button>
        </>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp,image/avif"
        className="hidden"
        onChange={handleInput}
      />
    </div>
  );
}