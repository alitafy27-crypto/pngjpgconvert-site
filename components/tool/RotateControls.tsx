type Props = {
  angle: 90 | 180 | 270;
  onChange: (value: 90 | 180 | 270) => void;
};

export default function RotateControls({
  angle,
  onChange,
}: Props) {
  return (
    <div className="space-y-4">

      <h3 className="text-xl font-bold">
        Rotation
      </h3>

      <div className="grid grid-cols-3 gap-4">

        <button
          onClick={() => onChange(90)}
          className={`rounded-xl border p-4 font-semibold transition ${
            angle === 90
              ? "border-blue-600 bg-blue-600 text-white"
              : "border-gray-300 hover:border-blue-500"
          }`}
        >
          ↻ 90°
        </button>

        <button
          onClick={() => onChange(180)}
          className={`rounded-xl border p-4 font-semibold transition ${
            angle === 180
              ? "border-blue-600 bg-blue-600 text-white"
              : "border-gray-300 hover:border-blue-500"
          }`}
        >
          ↺ 180°
        </button>

        <button
          onClick={() => onChange(270)}
          className={`rounded-xl border p-4 font-semibold transition ${
            angle === 270
              ? "border-blue-600 bg-blue-600 text-white"
              : "border-gray-300 hover:border-blue-500"
          }`}
        >
          ↻ 270°
        </button>

      </div>

    </div>
  );
}