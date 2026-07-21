import {
  ShieldCheck,
  Zap,
  Laptop,
  Smartphone,
} from "lucide-react";

import Section from "../ui/Section";

const features = [
  {
    icon: Zap,
    title: "Fast Conversion",
    description:
      "Convert PNG, JPG, WebP and AVIF images in seconds directly in your browser.",
  },
  {
    icon: ShieldCheck,
    title: "100% Private",
    description:
      "Your images are processed locally whenever possible and are never stored on our servers.",
  },
  {
    icon: Laptop,
    title: "No Installation",
    description:
      "Use all tools instantly without downloading or installing any software.",
  },
  {
    icon: Smartphone,
    title: "Works Everywhere",
    description:
      "Compatible with desktop computers, tablets and mobile devices.",
  },
];

export default function Features() {
  return (
    <Section>

      <div className="text-center">

        <h2 className="text-4xl font-bold">
          Why Choose PNG JPG Convert
        </h2>

        <p className="mt-4 text-gray-600">
          Fast, secure and free image conversion tools designed for everyone.
        </p>

      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        {features.map((feature) => {

          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <Icon
                className="text-blue-600"
                size={34}
              />

              <h3 className="mt-6 text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {feature.description}
              </p>

            </div>
          );
        })}

      </div>

    </Section>
  );
}