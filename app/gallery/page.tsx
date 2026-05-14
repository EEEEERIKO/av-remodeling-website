import type { Metadata } from "next";
import GalleryClientPage from "./gallery-client";
import { SITE_URL, breadcrumbSchema } from "../lib/seo";

export const metadata: Metadata = {
  title: "AV Remodeling | Gallery of Atlanta Remodeling Projects",
  description:
    "Browse Atlanta remodeling projects from AV Remodeling including kitchens, bathrooms, exteriors, and full-home transformations.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "AV Remodeling | Gallery of Atlanta Remodeling Projects",
    description:
      "Before-and-after remodeling gallery with kitchen, bathroom, and exterior renovation projects in Atlanta, GA.",
    url: `${SITE_URL}/gallery`,
    type: "website",
  },
};

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Gallery", path: "/gallery" },
            ]),
          ),
        }}
      />
      <GalleryClientPage />
    </>
  );
}
