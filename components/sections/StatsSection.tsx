import Container from "../ui/Container";

const stats = [
  {
    value: "100%",
    label: "Browser Based",
  },
  {
    value: "0 MB",
    label: "Server Upload",
  },
  {
    value: "∞",
    label: "Unlimited Conversions",
  },
  {
    value: "24/7",
    label: "Always Available",
  },
];

export default function StatsSection() {
  return (
    <section className="border-y border-gray-200 bg-white py-16">
      <Container>
        <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label}>
              <h2 className="text-5xl font-extrabold text-blue-600">
                {item.value}
              </h2>

              <p className="mt-3 text-gray-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}