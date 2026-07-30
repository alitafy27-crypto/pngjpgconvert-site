import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,

  images: {
    formats: ["image/avif", "image/webp"],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // 1. إصلاح الروابط القديمة
      {
        source: "/privacy-policy",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/privacy-policy/",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/terms-of-service",
        destination: "/terms",
        permanent: true,
      },
      {
        source: "/terms-of-service/",
        destination: "/terms",
        permanent: true,
      },

      // 2. إزالة www → non-www
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.pngjpgconvert.com",
          },
        ],
        destination: "https://pngjpgconvert.com/:path*",
        permanent: true,
      },

      // 3. تصحيح النطاق الخاطئ (pnpjgpjqconvert.com)
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "pnpjgpjqconvert.com",
          },
        ],
        destination: "https://pngjpgconvert.com/:path*",
        permanent: true,
      },

      // 4. تصحيح www للنطاق الخاطئ
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.pnpjgpjqconvert.com",
          },
        ],
        destination: "https://pngjpgconvert.com/:path*",
        permanent: true,
      },

      // 5. تصحيح النطاق الخاطئ (pngjpjgcnovert.com)
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "pngjpjgcnovert.com",
          },
        ],
        destination: "https://pngjpgconvert.com/:path*",
        permanent: true,
      },

      // 6. تصحيح www للنطاق الخاطئ
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.pngjpjgcnovert.com",
          },
        ],
        destination: "https://pngjpgconvert.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;