type Props = {
  blob: Blob | null;
  file: File | null;
  format: string;
};

export default function DownloadCard({
  blob,
  file,
  format,
}: Props) {
  if (!blob || !file) {
    return (
      <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

        <h2 className="text-2xl font-bold">
          Download
        </h2>

        <p className="mt-4 text-gray-500">
          Convert an image to enable downloading.
        </p>

      </div>
    );
  }

  const extension = format.split("/")[1];

  const fileName =
    file.name.replace(/\.[^/.]+$/, "") +
    "." +
    extension;

  const size =
    blob.size < 1024 * 1024
      ? `${(blob.size / 1024).toFixed(1)} KB`
      : `${(blob.size / 1024 / 1024).toFixed(2)} MB`;

  const url = URL.createObjectURL(blob);

  return (
    <div className="rounded-3xl border border-green-200 bg-green-50 p-8 shadow-sm">

      <div className="flex items-center gap-3">

        <div className="text-4xl">
          ✅
        </div>

        <div>

          <h2 className="text-2xl font-bold text-green-700">
            Conversion Complete
          </h2>

          <p className="text-green-600">
            Your image is ready to download.
          </p>

        </div>

      </div>

      <div className="mt-8 space-y-4">

        <InfoRow
          label="File Name"
          value={fileName}
        />

        <InfoRow
          label="Size"
          value={size}
        />

        <InfoRow
          label="Format"
          value={extension.toUpperCase()}
        />

      </div>

      <a
        href={url}
        download={fileName}
        className="mt-8 flex w-full items-center justify-center rounded-xl bg-green-600 px-6 py-4 font-semibold text-white transition hover:bg-green-700"
      >
        Download Image
      </a>

    </div>
  );
}

type RowProps = {
  label: string;
  value: string;
};

function InfoRow({
  label,
  value,
}: RowProps) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-white px-4 py-3">

      <span className="text-gray-500">
        {label}
      </span>

      <span className="font-semibold">
        {value}
      </span>

    </div>
  );
}