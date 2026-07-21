import Container from "../ui/Container";

const features = [
  {
    icon: "⚡",
    title: "Lightning Fast",
    description:
      "Convert images in seconds using modern browser technologies.",
  },
  {
    icon: "🔒",
    title: "100% Private",
    description:
      "Your files never leave your device. Everything happens locally.",
  },
  {
    icon: "💯",
    title: "Free Forever",
    description:
      "No subscriptions, no hidden costs, and no usage limits.",
  },
  {
    icon: "🖥️",
    title: "Works Everywhere",
    description:
      "Compatible with Chrome, Edge, Firefox and other modern browsers.",
  },
  {
    icon: "🎯",
    title: "High Quality",
    description:
      "Maintain excellent image quality with adjustable compression.",
  },
  {
    icon: "🌍",
    title: "No Installation",
    description:
      "Use the converter instantly without downloading any software.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-gray-50 py-20">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <h2 className="text-4xl font-bold">
            Why Choose Our Image Converter?
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Designed for speed, privacy and simplicity.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-5xl">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}