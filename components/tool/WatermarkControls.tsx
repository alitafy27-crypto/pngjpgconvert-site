interface WatermarkControlsProps {
  text: string;
  onTextChange: (value: string) => void;

  size: number;
  onSizeChange: (value: number) => void;

  opacity: number;
  onOpacityChange: (value: number) => void;

  color: string;
  onColorChange: (value: string) => void;
}

export default function WatermarkControls({
  text,
  onTextChange,
  size,
  onSizeChange,
  opacity,
  onOpacityChange,
  color,
  onColorChange,
}: WatermarkControlsProps) {
  return (
    <div className="space-y-6">
      <div>
        <label className="mb-2 block font-medium">
          Watermark Text
        </label>

        <input
          value={text}
          onChange={(e) => onTextChange(e.target.value)}
          className="w-full rounded-xl border px-4 py-3"
          placeholder="Your watermark..."
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Font Size
        </label>

        <input
          type="range"
          min={12}
          max={120}
          value={size}
          onChange={(e) =>
            onSizeChange(Number(e.target.value))
          }
          className="w-full"
        />

        <p className="mt-2 text-sm text-gray-500">
          {size}px
        </p>
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Opacity
        </label>

        <input
          type="range"
          min={0.1}
          max={1}
          step={0.1}
          value={opacity}
          onChange={(e) =>
            onOpacityChange(Number(e.target.value))
          }
          className="w-full"
        />

        <p className="mt-2 text-sm text-gray-500">
          {opacity}
        </p>
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Text Color
        </label>

        <input
          type="color"
          value={color}
          onChange={(e) => onColorChange(e.target.value)}
        />
      </div>
    </div>
  );
}