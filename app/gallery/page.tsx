'use client';

import Image from "next/image";
import { useState } from "react";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { portfolioImages } from "../data/portfolio-images";

type FilterType = "all" | "bathrooms" | "bedrooms" | "exteriors" | "kitchens" | "living-rooms";

interface ImageItem {
  src: string;
  category: FilterType;
  isPortrait: boolean;
}

// Image dimensions metadata for aspect ratio detection
const imageDimensions: Record<string, { width: number; height: number }> = {
  "/images/portfolio/bathrooms/01.jpg": { width: 1200, height: 1600 },
  "/images/portfolio/bathrooms/02.jpg": { width: 1200, height: 1600 },
  "/images/portfolio/bathrooms/03.jpg": { width: 960, height: 684 },
  "/images/portfolio/bathrooms/04.jpg": { width: 1200, height: 1600 },
  "/images/portfolio/bathrooms/05.jpg": { width: 1200, height: 1600 },
  "/images/portfolio/bathrooms/06.jpg": { width: 1080, height: 1350 },
  "/images/portfolio/bathrooms/07.jpg": { width: 1080, height: 1350 },
  "/images/portfolio/bathrooms/08.jpg": { width: 720, height: 1600 },
  "/images/portfolio/bathrooms/09.jpg": { width: 1080, height: 1440 },
  "/images/portfolio/bathrooms/10.jpg": { width: 1200, height: 1600 },
  "/images/portfolio/bathrooms/11.jpg": { width: 1203, height: 1600 },
  "/images/portfolio/bathrooms/12.jpg": { width: 1200, height: 1600 },
  "/images/portfolio/bathrooms/13.jpg": { width: 1080, height: 1350 },
  "/images/portfolio/bathrooms/14.jpg": { width: 1080, height: 1350 },
  "/images/portfolio/bathrooms/15.jpg": { width: 1200, height: 1600 },
  "/images/portfolio/bathrooms/16.jpg": { width: 900, height: 1599 },
  "/images/portfolio/bedrooms/01.jpg": { width: 1080, height: 1350 },
  "/images/portfolio/bedrooms/02.jpg": { width: 1080, height: 1350 },
  "/images/portfolio/exteriors/01.jpg": { width: 1200, height: 1600 },
  "/images/portfolio/exteriors/02.jpg": { width: 1320, height: 1590 },
  "/images/portfolio/exteriors/03.jpg": { width: 1080, height: 1350 },
  "/images/portfolio/exteriors/04.jpg": { width: 1200, height: 1600 },
  "/images/portfolio/exteriors/05.jpg": { width: 1200, height: 1600 },
  "/images/portfolio/exteriors/06.jpg": { width: 720, height: 960 },
  "/images/portfolio/exteriors/07.jpg": { width: 344, height: 256 },
  "/images/portfolio/exteriors/08.jpg": { width: 1200, height: 1600 },
  "/images/portfolio/exteriors/09.jpg": { width: 1200, height: 1600 },
  "/images/portfolio/exteriors/10.jpg": { width: 1200, height: 1600 },
  "/images/portfolio/exteriors/11.jpg": { width: 1080, height: 1440 },
  "/images/portfolio/exteriors/12.jpg": { width: 1080, height: 1440 },
  "/images/portfolio/exteriors/13.jpg": { width: 1080, height: 1440 },
  "/images/portfolio/exteriors/14.jpg": { width: 1080, height: 1350 },
  "/images/portfolio/kitchens/01.jpg": { width: 1280, height: 1600 },
  "/images/portfolio/kitchens/02.jpg": { width: 1280, height: 1600 },
  "/images/portfolio/kitchens/03.jpg": { width: 1280, height: 1600 },
  "/images/portfolio/kitchens/04.jpg": { width: 1600, height: 837 },
  "/images/portfolio/kitchens/05.jpg": { width: 1600, height: 840 },
  "/images/portfolio/kitchens/06.jpg": { width: 1280, height: 1600 },
  "/images/portfolio/kitchens/07.jpg": { width: 1280, height: 1600 },
  "/images/portfolio/kitchens/08.jpg": { width: 1280, height: 1600 },
  "/images/portfolio/living-rooms/01.jpg": { width: 1080, height: 1350 },
  "/images/portfolio/living-rooms/02.jpg": { width: 1080, height: 1350 },
  "/images/portfolio/living-rooms/03.jpg": { width: 1080, height: 1350 },
};

const isPortraitImage = (src: string): boolean => {
  const dims = imageDimensions[src];
  return dims ? dims.height > dims.width : true; // Default to portrait if unknown
};

// Deterministic shuffle function for reproducible randomization
const seededRandom = (seed: number): number => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom(i + 42) * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const allImagesUnshuffled: ImageItem[] = [
  ...portfolioImages.bathrooms.map((src) => ({ src, category: "bathrooms" as FilterType, isPortrait: isPortraitImage(src) })),
  ...portfolioImages.bedrooms.map((src) => ({ src, category: "bedrooms" as FilterType, isPortrait: isPortraitImage(src) })),
  ...portfolioImages.exteriors.map((src) => ({ src, category: "exteriors" as FilterType, isPortrait: isPortraitImage(src) })),
  ...portfolioImages.kitchens.map((src) => ({ src, category: "kitchens" as FilterType, isPortrait: isPortraitImage(src) })),
  ...portfolioImages.livingRooms.map((src) => ({ src, category: "living-rooms" as FilterType, isPortrait: isPortraitImage(src) })),
];

const allImages = shuffleArray(allImagesUnshuffled);

const filters = [
  { id: "all", label: "All Projects" },
  { id: "bathrooms", label: "Bathrooms" },
  { id: "bedrooms", label: "Bedrooms" },
  { id: "exteriors", label: "Exteriors" },
  { id: "kitchens", label: "Kitchens" },
  { id: "living-rooms", label: "Living Rooms" },
];

const buildBentoGrid = (images: ImageItem[]) => {
  const gridLayout: Array<{ src: string; category: FilterType; colSpan: string; rowSpan: string; isPortrait: boolean }> = [];

  images.forEach((item) => {
    // Portrait images: 4col-2row, Landscape images: 8col-1row or 6col-1row
    if (item.isPortrait) {
      gridLayout.push({
        src: item.src,
        category: item.category,
        colSpan: "md:col-span-4",
        rowSpan: "md:row-span-2",
        isPortrait: true,
      });
    } else {
      gridLayout.push({
        src: item.src,
        category: item.category,
        colSpan: "md:col-span-6",
        rowSpan: "md:row-span-1",
        isPortrait: false,
      });
    }
  });

  return gridLayout;
};

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredImages = activeFilter === "all" 
    ? allImages 
    : allImages.filter((img) => img.category === activeFilter);

  const gridItems = buildBentoGrid(filteredImages);

  return (
    <div className="flex min-h-screen flex-col bg-surface text-on-surface antialiased">
      <SiteHeader active="gallery" />

      <main className="pt-32 pb-24">
        <header className="mx-auto mb-20 max-w-screen-2xl px-8 text-center md:text-left">
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            Portfolio
          </span>
          <h1 className="mb-6 font-headline text-5xl font-extrabold leading-[1.1] tracking-tight text-tertiary md:text-7xl">
            Curated Spaces,<br />Mastered Craft.
          </h1>
          <p className="max-w-2xl font-body text-lg leading-relaxed text-on-surface-variant">
            Explore our original portfolio of architectural transformations where minimalist design meets uncompromising structural precision.
          </p>
        </header>

        {/* Filter Buttons */}
        <section className="mx-auto mb-16 max-w-screen-2xl px-8">
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id as FilterType)}
                className={`rounded-full px-6 py-2 font-headline text-sm font-semibold uppercase tracking-wide transition-all ${
                  activeFilter === filter.id
                    ? "bg-primary text-surface-container-lowest shadow-lg"
                    : "border border-outline-variant bg-transparent text-primary hover:bg-surface-container-low"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
          <p className="mt-6 font-body text-sm text-on-surface-variant">
            Showing {filteredImages.length} project{filteredImages.length !== 1 ? "s" : ""}
          </p>
        </section>

        {/* Gallery Grid */}
        <section className="mx-auto mb-32 max-w-screen-2xl px-8">
          <div className="grid auto-rows-[400px] grid-cols-1 gap-8 md:grid-cols-12">
            {gridItems.map((item, index) => (
              <div
                key={index}
                className={`${item.colSpan} ${item.rowSpan} group cursor-pointer`}
              >
                <div className="relative h-full w-full overflow-hidden rounded-xl bg-surface-container-low">
                  <Image
                    src={item.src}
                    alt={`Portfolio project ${index + 1}`}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-primary/80 to-transparent p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <p className="font-body text-sm text-white/70 capitalize">
                      {item.category.replace("-", " ")} Project
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-screen-2xl rounded-3xl bg-surface-container-low px-8 py-20 text-center">
          <h2 className="mb-6 font-headline text-3xl font-bold text-tertiary md:text-4xl">
            Your Project is Our Next Masterpiece
          </h2>
          <p className="mx-auto mb-10 max-w-xl font-body leading-relaxed text-on-surface-variant">
            We take on a limited number of projects each year to ensure every detail is executed with Atelier-level precision.
          </p>
          <div className="flex flex-col justify-center gap-4 md:flex-row">
            <button className="rounded-lg bg-primary px-10 py-4 font-headline text-sm font-bold tracking-wide text-surface-container-lowest transition-all hover:-translate-y-1 hover:shadow-2xl">
              START THE CONVERSATION
            </button>
            <button className="rounded-lg border border-outline-variant px-10 py-4 font-headline text-sm font-bold tracking-wide text-primary transition-all hover:bg-white">
              DOWNLOAD BROCHURE
            </button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
