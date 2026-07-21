type Props = {
  originalSize: number;
  compressedSize: number;
};

export default function CompressionResult({
  originalSize,
  compressedSize,
}: Props) {
  const saved = originalSize - compressedSize;

  const percent =
    originalSize > 0
      ? Math.round((saved / originalSize) * 100)
      : 0;

  function format(bytes: number) {
    return (bytes / 1024 / 1024).toFixed(2) + " MB";
  }

  return (
    <div className="grid gap-4 md:grid-cols-4">
      <div className="rounded-2xl border p-5 text-center">
        <p className="text-sm text-gray-500">
          Original
        </p>

        <p className="mt-2 text-xl font-bold">
          {format(originalSize)}
        </p>
      </div>

      <div className="rounded-2xl border p-5 text-center">
        <p className="text-sm text-gray-500">
          Compressed
        </p>

        <p className="mt-2 text-xl font-bold text-blue-600">
          {format(compressedSize)}
        </p>
      </div>

      <div className="rounded-2xl border p-5 text-center">
        <p className="text-sm text-gray-500">
          Saved
        </p>

        <p className="mt-2 text-xl font-bold text-green-600">
          {percent}%
        </p>
      </div>

      <div className="rounded-2xl border p-5 text-center">
        <p className="text-sm text-gray-500">
          Reduced
        </p>

        <p className="mt-2 text-xl font-bold">
          {format(saved)}
        </p>
      </div>
    </div>
  );
}