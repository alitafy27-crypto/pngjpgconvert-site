"use client";

import Link from "next/link";
import { tools } from "@/data/tools";

export default function AllTools() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">

        <div className="text-center">
          <h2 className="text-5xl font-bold">
            All Image Tools
          </h2>

          <p className="mt-5 text-xl text-gray-600">
            Choose any image converter below.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {Object.values(tools).map((tool) => (
            <Link
              key={tool.slug}
              href={`/${tool.slug}`}
              className="group rounded-3xl border border-gray-200 bg-white p-8 transition hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl"
            >
              <div className="text-5xl">
                {tool.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold group-hover:text-blue-600">
                {tool.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {tool.description}
              </p>

              <div className="mt-8 font-semibold text-blue-600">
                Open →
              </div>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}