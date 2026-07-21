import Container from "../ui/Container";

const formats = [
  {
    name: "PNG",
    description: "Lossless image format with transparency support.",
  },
  {
    name: "JPG",
    description: "Ideal for photos with smaller file sizes.",
  },
  {
    name: "WEBP",
    description: "Modern format offering excellent compression.",
  },
  {
    name: "AVIF",
    description: "Next-generation image format with high efficiency.",
  },
];

export default function SupportedFormatsSection() {
  return (
    <section className="py-20 bg-white">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <h2 className="text-4xl font-bold">
            Supported Image Formats
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Convert between the most popular image formats directly
            in your browser.
          </p>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {formats.map((format) => (
            <div
              key={format.name}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-4xl">
                🖼️
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {format.name}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {format.description}
              </p>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}