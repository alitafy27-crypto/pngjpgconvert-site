import FileCard from "./FileCard";

type Props = {
  files: File[];
};

export default function FileList({
  files,
}: Props) {
  if (files.length === 0) return null;

  return (
    <section className="space-y-4">

      <h2 className="mb-4 text-2xl font-bold">
        Uploaded Files
      </h2>

      <div className="grid gap-4">

        {files.map((file, index) => (
          <FileCard
            key={`${file.name}-${index}`}
            file={file}
          />
        ))}

      </div>

    </section>
  );
}