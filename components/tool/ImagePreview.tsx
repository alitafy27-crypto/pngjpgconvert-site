type Props = {
  title: string;
  image: string | null;
  emptyText: string;
};

export default function ImagePreview({
  title,
  image,
  emptyText,
}: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
        <h3 className="text-lg font-bold text-gray-900">
          {title}
        </h3>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            image
              ? "bg-green-100 text-green-700"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          {image ? "Ready" : "Waiting"}
        </span>
      </div>

      <div className="flex h-[420px] items-center justify-center bg-gray-50 p-6">
        {image ? (
          <img
            src={image}
            alt={title}
            className="max-h-full max-w-full rounded-xl object-contain transition duration-300 hover:scale-105"
          />
        ) : (
          <div className="text-center">
            <div className="text-7xl">🖼️</div>

            <p className="mt-6 text-gray-500">
              {emptyText}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}