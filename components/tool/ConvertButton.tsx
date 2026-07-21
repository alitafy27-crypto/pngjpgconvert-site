
import type { ReactNode } from "react";

type Props = {
  disabled?: boolean;
  loading?: boolean;

  text?: string;
  children?: ReactNode;

  onClick: () => void;
};

export default function ConvertButton({
  disabled = false,
  loading = false,
  text,
  children,
  onClick,
}: Props) {
  return (
    <button
      type="button"
      disabled={disabled || loading}
      onClick={onClick}
      className="w-full rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
    >
      {loading ? (
        "Converting..."
      ) : (
        children ?? text ?? "Convert"
      )}
    </button>
  );
}