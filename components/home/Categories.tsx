import Section from "../ui/Section";

const categories = [
  "PNG",
  "JPG",
  "WEBP",
  "AVIF",
  "BMP",
  "GIF",
  "TIFF",
  "ICO",
];

export default function Categories() {
  return (
    <Section>

      <div className="text-center">

        <h2 className="text-4xl font-bold">
          Supported Formats
        </h2>

        <p className="mt-4 text-gray-600">
          Convert between the most popular image formats.
        </p>

      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-4">

        {categories.map((item) => (

          <div
            key={item}
            className="rounded-full border border-gray-300 bg-white px-6 py-3 font-semibold shadow-sm"
          >
            {item}
          </div>

        ))}

      </div>

    </Section>
  );
}