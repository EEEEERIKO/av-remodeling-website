'use client';

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      return;
    }

    let cleanup: (() => void) | undefined;

    const setupAnimations = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      const context = gsap.context(() => {
        const revealElements = gsap.utils.toArray<HTMLElement>("[data-gsap-reveal]");
        revealElements.forEach((element) => {
          gsap.fromTo(
            element,
            { autoAlpha: 0, y: 56 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 84%",
                toggleActions: "play none none reverse",
              },
            },
          );
        });

        const staggerContainers = gsap.utils.toArray<HTMLElement>("[data-gsap-stagger]");
        staggerContainers.forEach((container) => {
          const items = container.querySelectorAll<HTMLElement>("[data-gsap-item]");
          if (items.length === 0) {
            return;
          }

          gsap.fromTo(
            items,
            { autoAlpha: 0, y: 48 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.85,
              stagger: 0.12,
              ease: "power3.out",
              scrollTrigger: {
                trigger: container,
                start: "top 82%",
                toggleActions: "play none none reverse",
              },
            },
          );
        });

        const parallaxElements = gsap.utils.toArray<HTMLElement>("[data-gsap-parallax]");
        parallaxElements.forEach((element) => {
          const amount = Number(element.dataset.gsapParallax) || 16;

          gsap.fromTo(
            element,
            { yPercent: -amount },
            {
              yPercent: amount,
              ease: "none",
              scrollTrigger: {
                trigger: element,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2,
              },
            },
          );
        });
      });

      ScrollTrigger.refresh();

      cleanup = () => {
        context.revert();
      };
    };

    setupAnimations();

    return () => {
      if (cleanup) {
        cleanup();
      }
    };
  }, [pathname]);

  return null;
}
