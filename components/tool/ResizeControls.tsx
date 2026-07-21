type Props = {
  width: number;
  height: number;

  keepAspect: boolean;

  onWidthChange: (value: number) => void;
  onHeightChange: (value: number) => void;

  onKeepAspectChange: (value: boolean) => void;
};

export default function ResizeControls({
  width,
  height,
  keepAspect,
  onWidthChange,
  onHeightChange,
  onKeepAspectChange,
}: Props) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold">
        Resize Settings
      </h3>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Width (px)
          </label>

          <input
            type="number"
            min={1}
            value={width}
            onChange={(e) =>
              onWidthChange(Number(e.target.value))
            }
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Height (px)
          </label>

          <input
            type="number"
            min={1}
            value={height}
            onChange={(e) =>
              onHeightChange(Number(e.target.value))
            }
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={keepAspect}
          onChange={(e) =>
            onKeepAspectChange(e.target.checked)
          }
          className="h-5 w-5"
        />

        <span className="font-medium">
          Keep aspect ratio
        </span>
      </label>
    </div>
  );
}