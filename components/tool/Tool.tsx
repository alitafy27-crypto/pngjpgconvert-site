"use client";

import { useEffect, useState } from "react";

import UploadZone from "../upload/UploadZone";
import ImagePreview from "./ImagePreview";
import ImageInfo from "./ImageInfo";
import SettingsCard from "./SettingsCard";

import type { ToolData } from "@/data/tool.types";

type Props = {
  tool: ToolData;
};

export default function Tool({ tool }: Props) {
  const [file, setFile] = useState<File | null>(null);
  const [blob, setBlob] = useState<Blob | null>(null);

  const [preview, setPreview] = useState<string | null>(null);
  const [convertedPreview, setConvertedPreview] =
    useState<string | null>(null);

  const [quality, setQuality] = useState(92);

  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);

  function handleFile(selectedFile: File | null) {
    setFile(selectedFile);
    setBlob(null);
    setDimensions(null);

    if (preview) {
      URL.revokeObjectURL(preview);
    }

    if (convertedPreview) {
      URL.revokeObjectURL(convertedPreview);
    }

    setConvertedPreview(null);

    if (!selectedFile) {
      setPreview(null);
      return;
    }

    const url = URL.createObjectURL(selectedFile);

    const img = new Image();

    img.onload = () => {
      setDimensions({
        width: img.width,
        height: img.height,
      });
    };

    img.src = url;

    setPreview(url);
  }

  function handleConverted(convertedBlob: Blob) {
    setBlob(convertedBlob);

    if (convertedPreview) {
      URL.revokeObjectURL(convertedPreview);
    }

    const url = URL.createObjectURL(convertedBlob);

    setConvertedPreview(url);
  }

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }

      if (convertedPreview) {
        URL.revokeObjectURL(convertedPreview);
      }
    };
  }, [preview, convertedPreview]);

  return (
    <section className="space-y-8">
      <UploadZone onChange={handleFile} />

      <div className="grid gap-6 lg:grid-cols-2">
        <ImagePreview
          title={`Original ${tool.from}`}
          image={preview}
          emptyText={`Upload a ${tool.from} image.`}
        />

        <ImagePreview
          title={`Converted ${tool.to}`}
          image={convertedPreview}
          emptyText={`Your ${tool.to} image will appear here.`}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <ImageInfo
          file={file}
          blob={blob}
          dimensions={dimensions}
        />

        <SettingsCard
          tool={tool}
          file={file}
          blob={blob}
          quality={quality}
          onQualityChange={setQuality}
          onConverted={handleConverted}
        />
      </div>
    </section>
  );
}