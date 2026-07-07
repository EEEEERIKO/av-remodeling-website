import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
        {
          protocol: "https",
          hostname: "pub-9b7e1c4af54747248096d0d7c2e05b23.r2.dev",
        },
    ],
  },
  async headers() {
    const isDev = process.env.NODE_ENV !== "production";
    // Allow 'unsafe-eval' in development only for dev tooling (Turbopack/Vite etc.).
    const devUnsafeEval = isDev ? " 'unsafe-eval'" : "";

    // Build an explicit, maintainable CSP covering GA4, GTM and Meta Pixel.
    const cspDirectives: Record<string, string[]> = {
      "default-src": ["'self'"],
      // Images: allow data URIs, blobs, and analytics image endpoints
      "img-src": ["'self'", "data:", "blob:", "https:", "https://www.google-analytics.com", "https://*.google-analytics.com", "https://*.facebook.com", "https://*.fbcdn.net"],
      // Scripts: allow self, inline (for small inline initializers) and known analytics hosts
      "script-src": [
        "'self'",
        "'unsafe-inline'",
        devUnsafeEval,
        "https://www.googletagmanager.com",
        "https://www.google-analytics.com",
        "https://cdn.jsdelivr.net",
        "https://connect.facebook.net",
      ].filter(Boolean),
      // Styles: allow self and inline for Tailwind/runtime-injected styles
      "style-src": ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      // Fonts: allow Google fonts and self
      "font-src": ["'self'", "https://fonts.gstatic.com", "data:"],
      // Connections: required for GA measurement protocol, regional collectors, GTM and Meta APIs
      "connect-src": [
        "'self'",

        // Backend local
        "http://127.0.0.1:3000",
        "http://localhost:3000",

        // Analytics
        "https://www.google-analytics.com",
        "https://*.google-analytics.com",
        "https://*.analytics.google.com",
        "https://region1.google-analytics.com",
        "https://region2.google-analytics.com",
        "https://stats.g.doubleclick.net",
        "https://www.googletagmanager.com",

        // Google
        "https://www.google.com",

        // Facebook Pixel
        "https://connect.facebook.net",
        "https://graph.facebook.com",
        "https://www.facebook.com",
      ].filter(Boolean),
      
      // Frames: YouTube, Google tag manager if using iframe-based preview, and Facebook social plugins
      "frame-src": ["https://www.youtube.com", "https://www.youtube-nocookie.com", "https://www.facebook.com"],
      // Restrict object/src
      "object-src": ["'none'"],
      // Worker sources (used by analytics libraries sometimes)
      "worker-src": ["'self'", "blob:"],
      // Upgrade insecure requests
      "upgrade-insecure-requests": [],
    } as const;

    const csp = Object.entries(cspDirectives)
      .map(([k, v]) => (v.length ? `${k} ${v.join(" ")}` : k))
      .join("; ") + ";";

    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Content-Security-Policy", value: csp },
        ],
      },
    ];
  },
};

export default nextConfig;
