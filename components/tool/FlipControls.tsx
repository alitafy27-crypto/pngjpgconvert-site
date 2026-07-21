
export type FlipDirection =
  | "horizontal"
  | "vertical";

interface FlipControlsProps {
  flip: FlipDirection;
  onChange: (value: FlipDirection) => void;
}

export default function FlipControls({
  flip,
  onChange,
}: FlipControlsProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold">
        Flip Settings
      </h3>

      <select
        value={flip}
        onChange={(e) =>
          onChange(
            e.target.value as FlipDirection
          )
        }
        className="w-full rounded-xl border px-4 py-3"
      >
        <option value="horizontal">
          Flip Horizontal
        </option>

        <option value="vertical">
          Flip Vertical
        </option>
      </select>
    </div>
  );
}