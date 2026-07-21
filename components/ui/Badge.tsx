import { ReactNode } from "react";

export default function Badge({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
      {children}
    </span>
  );
}