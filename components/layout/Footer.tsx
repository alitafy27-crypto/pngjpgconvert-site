import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="flex flex-col items-center gap-6">

          <h2 className="text-2xl font-bold">
            PNG JPG Convert
          </h2>

          <p className="max-w-xl text-center text-gray-600">
            Free online image conversion tools that run directly in your
            browser. Convert PNG, JPG, WEBP, AVIF and more quickly,
            securely and without uploading your files.
          </p>

          <div className="flex flex-wrap justify-center gap-6">

            <Link
              href="/"
              className="hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              href="/tools"
              className="hover:text-blue-600"
            >
              Tools
            </Link>

            <Link
              href="/blog"
              className="hover:text-blue-600"
            >
              Blog
            </Link>

            <Link
              href="/about"
              className="hover:text-blue-600"
            >
              About
            </Link>

            <Link
              href="/privacy-policy"
              className="hover:text-blue-600"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-blue-600"
            >
              Terms
            </Link>

            <Link
              href="/contact"
              className="hover:text-blue-600"
            >
              Contact
            </Link>

          </div>

          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} PNG JPG Convert. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}