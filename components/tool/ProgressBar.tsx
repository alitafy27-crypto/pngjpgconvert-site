type Props = {
  progress: number;
};

export default function ProgressBar({
  progress,
}: Props) {
  return (
    <div className="mt-6">

      <div className="mb-2 flex items-center justify-between">

        <span className="text-sm font-medium text-gray-600">
          Converting...
        </span>

        <span className="text-sm font-semibold text-blue-600">
          {progress}%
        </span>

      </div>

      <div className="h-3 overflow-hidden rounded-full bg-gray-200">

        <div
          className="h-full rounded-full bg-blue-600 transition-all duration-300"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

    </div>
  );
}