import { ReactNode } from "react";

type Props = {
  title?: string;
  children: ReactNode;
  className?: string;
};

export default function Card({
  title,
  children,
  className = "",
}: Props) {
  return (
    <section
      className={`rounded-3xl border border-gray-200 bg-white p-8 shadow-sm ${className}`}
    >
      {title && (
        <h2 className="mb-8 text-2xl font-bold text-gray-900">
          {title}
        </h2>
      )}

      {children}
    </section>
  );
}