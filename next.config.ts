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
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // 1. إعادة توجيه HTTP إلى HTTPS
      {
        source: "/:path*",
        has: [
          {
            type: "header",
            key: "x-forwarded-proto",
            value: "http",
          },
        ],
        destination: "https://pngjpgconvert.com/:path*",
        permanent: true,
      },

      // 2. إزالة www
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

      // 3. إصلاح النطاق الخاطئ (pnpjgpjqconvert.com)
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

      // 4. إصلاح www للنطاق الخاطئ
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

      // 5. إصلاح الروابط القديمة
      {
        source: "/privacy-policy",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/terms-of-service",
        destination: "/terms",
        permanent: true,
      },
      {
        source: "/privacy-policy/",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/terms-of-service/",
        destination: "/terms",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;