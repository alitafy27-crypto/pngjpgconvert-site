import Section from "../ui/Section";

const faqs = [
  {
    question: "Are my images uploaded?",
    answer:
      "No. Everything happens locally in your browser. Your images are never uploaded to our servers.",
  },
  {
    question: "Is it free?",
    answer:
      "Yes. You can convert images without creating an account or paying any fees.",
  },
  {
    question: "Which formats are supported?",
    answer:
      "Currently, PNG, JPG, JPEG, WebP, and AVIF are supported. More formats will be added in future updates.",
  },
  {
    question: "Does the image quality change?",
    answer:
      "No. We preserve the highest possible quality during conversion whenever the selected format allows it.",
  },
  {
    question: "Can I convert multiple images at once?",
    answer:
      "Batch conversion is planned for a future release. Currently, images are converted one at a time.",
  },
  {
    question: "Do I need to install any software?",
    answer:
      "No. Everything works directly in your web browser without installing any apps or extensions.",
  },
  {
    question: "Does it work on mobile devices?",
    answer:
      "Yes. The converter works on desktop, tablet, and mobile browsers.",
  },
  {
    question: "Is there a file size limit?",
    answer:
      "There is no server-side limit because processing happens locally. However, very large images may require more memory and take longer to process.",
  },
  {
    question: "Can I use it offline?",
    answer:
      "Once the website is loaded, most conversions can be performed locally without sending your images over the internet.",
  },
];

export default function FAQ() {
  return (
    <Section>
      <h2 className="text-center text-4xl font-bold">
        Frequently Asked Questions
      </h2>

      <div className="mx-auto mt-14 max-w-3xl space-y-6">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="rounded-2xl border p-6 transition-shadow hover:shadow-md"
          >
            <h3 className="font-semibold text-lg">
              {faq.question}
            </h3>

            <p className="mt-3 text-gray-600">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}