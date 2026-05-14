import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    const devUnsafeEval = process.env.NODE_ENV !== "production" ? " 'unsafe-eval'" : "";
    const csp =
      `default-src 'self'; ` +
      `img-src 'self' data: https:; ` +
      `script-src 'self' 'unsafe-inline'${devUnsafeEval} https://www.googletagmanager.com https://connect.facebook.net; ` +
      `style-src 'self' 'unsafe-inline'; ` +
      `frame-src https://www.youtube.com https://www.youtube-nocookie.com; ` +
      `connect-src 'self' https://www.google-analytics.com https://www.facebook.com;`;

    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Content-Security-Policy",
            value: csp,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
