import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl py-24 text-center">
      <h1 className="text-6xl font-bold">404</h1>

      <h2 className="mt-6 text-3xl font-bold">
        Page Not Found
      </h2>

      <p className="mt-4 text-gray-600">
        The page you are looking for doesn't exist.
      </p>

      <Link
        href="/"
        className="mt-8 inline-block rounded-xl bg-blue-600 px-6 py-3 text-white"
      >
        Back to Home
      </Link>
    </div>
  );
}