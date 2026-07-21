import Section from "../ui/Section";

const steps = [
  "Upload your image",
  "Choose the output format",
  "Download your converted image",
];

export default function HowItWorks() {
  return (
    <Section className="bg-slate-50">

      <div className="text-center">

        <h2 className="text-4xl font-bold">
          How It Works
        </h2>

      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">

        {steps.map((step, index) => (

          <div
            key={step}
            className="rounded-3xl bg-white p-10 shadow-sm border"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
              {index + 1}
            </div>

            <h3 className="text-xl font-semibold">
              {step}
            </h3>

          </div>

        ))}

      </div>

    </Section>
  );
}