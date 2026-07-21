import Section from "../ui/Section";

export default function FAQ() {
  return (
    <Section>

      <h2 className="text-center text-4xl font-bold">
        Frequently Asked Questions
      </h2>

      <div className="mx-auto mt-14 max-w-3xl space-y-6">

        <div className="rounded-2xl border p-6">
          <h3 className="font-semibold">
            Are my images uploaded?
          </h3>

          <p className="mt-3 text-gray-600">
            No. Everything happens locally in your browser.
          </p>
        </div>

        <div className="rounded-2xl border p-6">
          <h3 className="font-semibold">
            Is it free?
          </h3>

          <p className="mt-3 text-gray-600">
            Yes. You can convert images without creating an account.
          </p>
        </div>

        <div className="rounded-2xl border p-6">
          <h3 className="font-semibold">
            Which formats are supported?
          </h3>

          <p className="mt-3 text-gray-600">
            PNG, JPG and WebP in the first release.
          </p>
        </div>

      </div>

    </Section>
  );
}