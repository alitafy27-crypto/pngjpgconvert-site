type Props = {
  value: number;
  onChange: (value: number) => void;
};

export default function QualitySlider({
  value,
  onChange,
}: Props) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="font-medium text-gray-700">
          Quality
        </span>

        <span className="font-semibold text-blue-600">
          {Math.round(value * 100)}%
        </span>
      </div>

      <input
        type="range"
        min={0.1}
        max={1}
        step={0.01}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-gray-200 accent-blue-600"
      />

      <div className="flex justify-between text-sm">
        <div className="text-center">
          <p className="font-semibold text-red-500">Low</p>
          <p className="text-gray-500">Smaller file</p>
        </div>

        <div className="text-center">
          <p className="font-semibold text-blue-600">Balanced</p>
          <p className="text-gray-500">Recommended</p>
        </div>

        <div className="text-center">
          <p className="font-semibold text-green-600">Best</p>
          <p className="text-gray-500">Highest quality</p>
        </div>
      </div>
    </div>
  );
}