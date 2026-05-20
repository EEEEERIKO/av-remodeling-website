"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const heroSlides = [
  {
    src: "/hero-images/kitchen.png",
    alt: "Kitchen remodeling project in Atlanta with custom cabinets and modern finishes",
  },
  {
    src: "/hero-images/bathroom.png",
    alt: "Bathroom renovation in Atlanta with premium tile and contemporary fixtures",
  },
  {
    src: "/hero-images/exterior.png",
    alt: "Exterior home remodeling in Atlanta with upgraded finishes and curb appeal",
  },
];

const AUTO_INTERVAL_MS = 8000;
const TRANSITION_MS = 1400;

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [useTransition, setUseTransition] = useState(true);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setUseTransition(true);
      setIndex((current) => {
        if (current >= heroSlides.length) {
          return 1;
        }

        return current + 1;
      });
    }, AUTO_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (index !== heroSlides.length) {
      return;
    }

    const resetTimer = window.setTimeout(() => {
      setUseTransition(false);
      setIndex(0);
      window.setTimeout(() => setUseTransition(true), 40);
    }, TRANSITION_MS);

    return () => window.clearTimeout(resetTimer);
  }, [index]);

  const renderSlides = [...heroSlides, heroSlides[0]];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden" data-gsap-parallax="12">
      <div
        className={`flex h-full w-full ${useTransition ? "transition-transform duration-[1400ms] ease-in-out" : ""}`}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {renderSlides.map((slide, slideIndex) => (
          <div key={`${slide.alt}-${slideIndex}`} className="relative h-full w-full shrink-0">
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              preload={slideIndex === 0}
              loading={slideIndex === 0 ? "eager" : "lazy"}
              quality={75}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/60 to-transparent" />
    </div>
  );
}
