type Props = {
  file: File | null;
  blob: Blob | null;
  dimensions: {
    width: number;
    height: number;
  } | null;
};

export default function ImageInfo({
  file,
  blob,
  dimensions,
}: Props) {
  if (!file) {
    return (
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900">
          Image Information
        </h2>

        <p className="mt-4 text-gray-500">
          Upload an image to see its information.
        </p>
      </div>
    );
  }

  const originalSize =
    file.size < 1024 * 1024
      ? `${(file.size / 1024).toFixed(1)} KB`
      : `${(file.size / 1024 / 1024).toFixed(2)} MB`;

  const convertedSize = blob
    ? blob.size < 1024 * 1024
      ? `${(blob.size / 1024).toFixed(1)} KB`
      : `${(blob.size / 1024 / 1024).toFixed(2)} MB`
    : "-";

  const format =
    file.type.replace("image/", "").toUpperCase();

  let saved = "-";

  if (blob) {
    const percent =
      ((file.size - blob.size) / file.size) * 100;

    saved = `${percent.toFixed(1)}%`;
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">
        Image Information
      </h2>

      <div className="space-y-4">
        <InfoRow
          icon="📄"
          label="File Name"
          value={file.name}
        />

        <InfoRow
          icon="🖼️"
          label="Format"
          value={format}
        />

        <InfoRow
          icon="📐"
          label="Dimensions"
          value={
            dimensions
              ? `${dimensions.width} × ${dimensions.height}`
              : "-"
          }
        />

        <InfoRow
          icon="💾"
          label="Original Size"
          value={originalSize}
        />

        <InfoRow
          icon="⚡"
          label="Converted Size"
          value={convertedSize}
        />

        <InfoRow
          icon="📉"
          label="Saved"
          value={saved}
        />
      </div>
    </div>
  );
}

type InfoRowProps = {
  icon: string;
  label: string;
  value: string;
};

function InfoRow({
  icon,
  label,
  value,
}: InfoRowProps) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
      <div className="flex items-center gap-3">
        <span className="text-2xl">
          {icon}
        </span>

        <span className="font-medium text-gray-600">
          {label}
        </span>
      </div>

      <span className="max-w-[220px] break-all text-right font-semibold text-gray-900">
        {value}
      </span>
    </div>
  );
}