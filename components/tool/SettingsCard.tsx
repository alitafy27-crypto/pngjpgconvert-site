
import Card from "../ui/Card";
import QualitySlider from "./QualitySlider";
import ConvertButton from "./ConvertButton";
import DownloadButton from "./DownloadButton";

import type { ToolData } from "@/data/tool.types";

type Props = {
  tool: ToolData;

  file: File | null;
  blob: Blob | null;

  quality: number;

  onQualityChange: (value: number) => void;
  onConverted: (blob: Blob) => void;
};

export default function SettingsCard({
  tool,
  file,
  blob,
  quality,
  onQualityChange,
}: Props) {
  const estimatedSize = file
    ? Math.max(
        Math.round(file.size * (quality / 100) * 0.8),
        1024
      )
    : 0;

  const estimatedText =
    estimatedSize < 1024 * 1024
      ? `${(estimatedSize / 1024).toFixed(1)} KB`
      : `${(estimatedSize / 1024 / 1024).toFixed(2)} MB`;

  const saving = file
    ? Math.max(
        0,
        Math.round(
          ((file.size - estimatedSize) / file.size) * 100
        )
      )
    : 0;

  return (
    <Card>
      <h2 className="mb-6 text-2xl font-bold">
        Convert {tool.from} to {tool.to}
      </h2>

      {tool.supportsQuality && (
        <div className="mb-8">
          <div className="mb-3 flex items-center justify-between">
            <span className="font-semibold">
              Image Quality
            </span>

            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-700">
              {quality}%
            </span>
          </div>

          <QualitySlider
            value={quality}
            onChange={onQualityChange}
          />

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-gray-50 p-4">
              <p className="text-sm text-gray-500">
                Estimated Size
              </p>

              <p className="mt-2 text-xl font-bold">
                {file ? estimatedText : "-"}
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-4">
              <p className="text-sm text-gray-500">
                Estimated Saving
              </p>

              <p className="mt-2 text-xl font-bold text-green-600">
                {file ? `${saving}%` : "-"}
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Estimated values may vary depending on the image content.
          </p>
        </div>
      )}

      <ConvertButton
        disabled={!file}
        onClick={() => {}}
      >
        Convert Image
      </ConvertButton>

      <div className="mt-5">
        <DownloadButton
          blob={blob}
          filename={`converted.${tool.to.toLowerCase()}`}
        />
      </div>
    </Card>
  );
}