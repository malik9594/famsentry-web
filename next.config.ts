import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cache RSC payloads and static assets so Safari and other browsers
  // don't re-fetch them on every navigation.
  async headers() {
    return [
      {
        // Cache Next.js static chunks (JS/CSS) for 1 year — they're content-hashed
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Cache RSC payloads (?_rsc=...) for 5 minutes in browser,
        // 1 year on CDN (stale-while-revalidate keeps it fresh in background).
        // This is what eliminates the repeated slow hits in Safari.
        source: "/:path*",
        has: [{ type: "query", key: "_rsc" }],
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=300, stale-while-revalidate=31536000",
          },
          {
            key: "Vary",
            value: "RSC, Next-Router-State-Tree, Next-Router-Prefetch",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
