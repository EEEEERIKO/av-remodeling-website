'use client';

import Image from "next/image";
import { useState } from "react";

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel: string;
  afterLabel: string;
  title: string;
  description: string;
};

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel,
  afterLabel,
  title,
  description,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);

  return (
    <div className="grid gap-8 overflow-hidden rounded-3xl bg-surface-container-low p-4 shadow-[0_24px_80px_rgba(0,12,30,0.12)] lg:grid-cols-[1.3fr_0.7fr] lg:p-6">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-surface-container-high">
        <Image
          src={afterSrc}
          alt={afterLabel}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 70vw, 100vw"
        />

        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
          <Image
            src={beforeSrc}
            alt={beforeLabel}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 70vw, 100vw"
          />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10" />

        <div className="absolute top-0 h-full w-px bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.25)]" style={{ left: `${position}%` }}>
          <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-white/95 text-[10px] font-bold uppercase tracking-[0.2em] text-primary shadow-2xl">
            Drag
          </div>
        </div>

        <div className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
          {beforeLabel}
        </div>
        <div className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
          {afterLabel}
        </div>

        <input
          aria-label="Compare before and after images"
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>

      <div className="flex flex-col justify-center rounded-2xl bg-surface-container px-8 py-10 lg:px-10">
        <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
          Before / After
        </span>
        <h2 className="mb-5 font-headline text-3xl font-bold leading-tight text-tertiary lg:text-4xl">
          {title}
        </h2>
        <p className="max-w-md font-body text-base leading-relaxed text-on-surface-variant">
          {description}
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4 text-sm font-medium text-on-surface-variant">
          <div className="rounded-2xl bg-surface-container-lowest px-4 py-4">
            <div className="mb-1 text-xs uppercase tracking-[0.2em] text-secondary">Before</div>
            <div>Original space</div>
          </div>
          <div className="rounded-2xl bg-surface-container-lowest px-4 py-4">
            <div className="mb-1 text-xs uppercase tracking-[0.2em] text-secondary">After</div>
            <div>Finished result</div>
          </div>
        </div>
      </div>
    </div>
  );
}