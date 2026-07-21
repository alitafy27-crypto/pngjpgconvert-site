"use client";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const formats = [
  {
    value: "image/jpeg",
    label: "JPG",
    description: "Small file size",
  },
  {
    value: "image/png",
    label: "PNG",
    description: "Lossless quality",
  },
  {
    value: "image/webp",
    label: "WEBP",
    description: "Modern format",
  },
];

export default function FormatSelect({
  value,
  onChange,
}: Props) {
  return (
    <div className="grid gap-3">
      {formats.map((format) => (
        <button
          key={format.value}
          type="button"
          onClick={() => onChange(format.value)}
          className={`rounded-2xl border p-4 text-left transition ${
            value === format.value
              ? "border-blue-600 bg-blue-50"
              : "border-gray-200 hover:border-blue-400"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold">
                {format.label}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                {format.description}
              </p>
            </div>

            {value === format.value && (
              <div className="text-xl">
                ✅
              </div>
            )}
          </div>
        </button>
      ))}
    </div>
  );
}