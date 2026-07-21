import Container from "../ui/Container";

import type { ToolData } from "@/data/tool.types";

type Props = {
  tool: ToolData;
};

export default function ComparisonSection({
  tool,
}: Props) {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Format Comparison
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            {tool.from} vs {tool.to}
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Compare both image formats before converting.
          </p>
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl border border-gray-200">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-4 text-left">Feature</th>
                <th className="px-6 py-4 text-center">
                  {tool.from}
                </th>
                <th className="px-6 py-4 text-center">
                  {tool.to}
                </th>
              </tr>
            </thead>

            <tbody>
              {tool.comparison.map((item) => (
                <tr
                  key={item.feature}
                  className="border-t"
                >
                  <td className="px-6 py-5 font-medium">
                    {item.feature}
                  </td>

                  <td className="px-6 py-5 text-center">
                    {item.from}
                  </td>

                  <td className="px-6 py-5 text-center">
                    {item.to}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}