type Props = {
  file: File;
  selected?: boolean;
  onClick?: () => void;
};

export default function FileCard({
  file,
  selected = false,
  onClick,
}: Props) {
  const size =
    file.size < 1024 * 1024
      ? `${(file.size / 1024).toFixed(1)} KB`
      : `${(
          file.size /
          1024 /
          1024
        ).toFixed(2)} MB`;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-2xl border p-4 text-left transition ${
        selected
          ? "border-blue-600 bg-blue-50"
          : "border-gray-200 bg-white hover:border-blue-400"
      }`}
    >
      <div className="flex items-center justify-between">

        <div>
          <h3 className="break-all font-semibold">
            {file.name}
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            {size}
          </p>
        </div>

        <div className="text-3xl">
          🖼️
        </div>

      </div>
    </button>
  );
}