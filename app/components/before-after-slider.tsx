'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
};

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const [isPaused, setIsPaused] = useState(false);
  const startRef = useRef<number | null>(null);
  const pauseRef = useRef(0);
  const pausedAtRef = useRef<number | null>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      return;
    }

    let frame = 0;

    if (startRef.current === null) {
      startRef.current = performance.now();
    }

    const tick = (now: number) => {
      if (!isPaused) {
        const elapsed = now - (startRef.current ?? now) - pauseRef.current;
        const progress = (elapsed % 7000) / 7000;
        const next = Math.round(((Math.cos(progress * Math.PI * 2) + 1) / 2) * 100);
        setPosition(next);
      }

      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frame);
  }, [isPaused]);

  const pauseAuto = () => {
    if (pausedAtRef.current === null) {
      pausedAtRef.current = performance.now();
    }

    setIsPaused(true);
  };

  const resumeAuto = () => {
    if (pausedAtRef.current !== null) {
      pauseRef.current += performance.now() - pausedAtRef.current;
      pausedAtRef.current = null;
    }

    setIsPaused(false);
  };

  return (
    <div className="overflow-hidden rounded-3xl bg-surface-container-low p-4 shadow-[0_24px_80px_rgba(0,12,30,0.12)] lg:p-6">
      <div className="relative">
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-surface-container-high">
          <Image
            src={afterSrc}
            alt="After"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 70vw, 100vw"
          />

          <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
            <Image
              src={beforeSrc}
              alt="Before"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 70vw, 100vw"
            />
          </div>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10" />

          <div className="absolute top-0 h-full" style={{ left: `${position}%`, transform: "translateX(-50%)" }}>
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.25)]" />
            <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-white/95 text-[10px] font-bold uppercase tracking-[0.2em] text-primary shadow-2xl">
              Drag
            </div>
          </div>

          <input
            aria-label="Compare before and after images"
            type="range"
            min="0"
            max="100"
            value={position}
            onChange={(event) => setPosition(Number(event.target.value))}
            onPointerDown={pauseAuto}
            onPointerUp={resumeAuto}
            onPointerCancel={resumeAuto}
            onBlur={resumeAuto}
            className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
          />
        </div>

        <div className="absolute left-0 top-0 z-20 p-4 lg:p-6 pointer-events-none">
          <div className="rounded-lg bg-black/60 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white shadow-lg">
            Before
          </div>
        </div>

        <div className="absolute right-0 top-0 z-20 p-4 lg:p-6 pointer-events-none">
          <div className="rounded-lg bg-black/60 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white shadow-lg">
            After
          </div>
        </div>
      </div>

    </div>
  );
}