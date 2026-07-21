import Section from "../ui/Section";

const stats = [
  {
    number: "20+",
    label: "Image Tools",
  },
  {
    number: "100%",
    label: "Private Processing",
  },
  {
    number: "Free",
    label: "Unlimited Usage",
  },
  {
    number: "Instant",
    label: "Browser Conversion",
  },
];

export default function Stats() {
  return (
    <Section>

      <div className="grid gap-8 md:grid-cols-4">

        {stats.map((item) => (

          <div
            key={item.label}
            className="rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-sm"
          >

            <h3 className="text-5xl font-bold text-blue-600">
              {item.number}
            </h3>

            <p className="mt-3 text-gray-600">
              {item.label}
            </p>

          </div>

        ))}

      </div>

    </Section>
  );
}