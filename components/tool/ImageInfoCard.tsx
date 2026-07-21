type Props = {
  file: File | null;
  blob: Blob | null;
};

export default function ImageInfoCard({
  file,
  blob,
}: Props) {
  if (!file) {
    return (
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900">
          Image Information
        </h3>

        <p className="mt-4 text-gray-500">
          Upload an image to view its information.
        </p>
      </div>
    );
  }

  const originalKB = (file.size / 1024).toFixed(1);

  const convertedKB = blob
    ? (blob.size / 1024).toFixed(1)
    : "-";

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      <h3 className="text-xl font-bold text-gray-900">
        Image Information
      </h3>

      <div className="mt-6 space-y-4">

        <InfoRow
          label="File Name"
          value={file.name}
        />

        <InfoRow
          label="Original Format"
          value={file.type || "-"}
        />

        <InfoRow
          label="Original Size"
          value={`${originalKB} KB`}
        />

        <InfoRow
          label="Converted Size"
          value={
            blob
              ? `${convertedKB} KB`
              : "Not converted yet"
          }
        />

      </div>

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
    <div className="flex items-center justify-between border-b border-gray-100 pb-3">

      <span className="font-medium text-gray-500">
        {label}
      </span>

      <span className="font-semibold text-gray-900">
        {value}
      </span>

    </div>
  );
}