"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-2xl font-extrabold text-blue-600"
        >
          PNG JPG Convert
        </Link>

        <nav className="hidden gap-8 md:flex">
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            href="/tools"
            className="text-gray-700 hover:text-blue-600"
          >
            Tools
          </Link>

          <Link
            href="/blog"
            className="text-gray-700 hover:text-blue-600"
          >
            Blog
          </Link>

          <Link
            href="/about"
            className="text-gray-700 hover:text-blue-600"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-gray-700 hover:text-blue-600"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}