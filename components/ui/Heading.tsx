type Props = {
  title: string;
  description?: string;
  center?: boolean;
};

export default function Heading({
  title,
  description,
  center = false,
}: Props) {
  return (
    <div
      className={
        center
          ? "mx-auto mb-12 max-w-3xl text-center"
          : "mb-12"
      }
    >
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-lg text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}