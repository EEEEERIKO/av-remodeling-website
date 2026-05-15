import type { Metadata } from "next";
import Script from "next/script";
import MetaPixel from "./components/MetaPixel";
import "./globals.css";
import { ScrollAnimations } from "./components/scroll-animations";
import CookieBanner from "./components/CookieBanner";
import Analytics from "./components/Analytics";
import {
  SITE_NAME,
  SITE_URL,
  organizationSchema,
  websiteSchema,
} from "./lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AV Remodeling | Atlanta Home Remodeling Experts",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "AV Remodeling provides kitchen remodeling, bathroom remodeling, flooring, painting, drywall, concrete, drainage, retaining walls, and exterior home maintenance in Atlanta, GA.",
    alternates: {
    canonical: "/",
  },
  
  openGraph: {
    title: "AV Remodeling | Atlanta Home Remodeling Experts",
    description:
      "Kitchen, bathroom, flooring, painting, drywall, concrete, and exterior remodeling services in Atlanta and surrounding areas.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/portfolio/kitchens/01.jpg",
        width: 1200,
        height: 1600,
        alt: "Atlanta kitchen remodeling project by AV Remodeling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AV Remodeling | Atlanta Home Remodeling Experts",
    description:
      "Premium kitchen, bathroom, and full-home remodeling in Atlanta, Georgia.",
    images: ["/images/portfolio/kitchens/01.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-M91JGBERT1";
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  return (
    <html lang="en-US" className="scroll-smooth h-full">
      <body className="min-h-full flex flex-col bg-surface text-on-surface antialiased" suppressHydrationWarning>
        <ScrollAnimations />
        <MetaPixel />
        <Script
          id="ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="ld-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        {/* Initialize dataLayer and default consent BEFORE loading gtag.js. This ensures Consent Mode v2 defaults are applied. */}
        <Script id="gtag-consent-default" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('consent','default', {analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied'});`}
        </Script>

        {/* Analytics component will load gtag.js and Meta Pixel conditionally based on consent */}
        <Analytics />

        {/* Cookie banner / preferences */}
        <CookieBanner />

        {children}
      </body>
    </html>
  );
}
