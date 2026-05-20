"use client";

import Link from "next/link";
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import TrackableLink from './TrackableLink';

type SiteHeaderProps = {
  active: "home" | "gallery" | "about" | "contact";
};

const linkBase = "pb-1 text-sm font-medium tracking-tight transition-colors duration-300 font-label";

export function SiteHeader({ active }: SiteHeaderProps) {
  const activeClass = "border-b-2 border-primary text-primary";
  const inactiveClass = "text-on-surface-variant hover:text-primary";
  const whatsappHref = "https://wa.me/16788864393?text=Hello%20AV%20Remodeling,%20I’m%20interested%20in%20your%20remodeling%20services.%20I’d%20love%20to%20discuss%20my%20project%20and%20get%20more%20information.";
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-outline-variant/10 bg-surface/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-screen-2xl items-center justify-between px-4 sm:px-8">
        <div className="text-xl font-headline font-bold tracking-tighter uppercase text-on-surface">
          Av Remodeling
        </div>
        <div className="hidden items-center gap-10 text-sm font-medium tracking-tight md:flex">
          <Link className={`${linkBase} ${active === "home" ? activeClass : inactiveClass}`} href="/">
            Home
          </Link>
          <Link className={`${linkBase} ${active === "gallery" ? activeClass : inactiveClass}`} href="/gallery">
            Gallery
          </Link>
          <Link className={`${linkBase} ${active === "about" ? activeClass : inactiveClass}`} href="/about-us">
            About
          </Link>
          <Link className={`${linkBase} ${active === "contact" ? activeClass : inactiveClass}`} href="/contact">
            Contact Us
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <TrackableLink
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden glow-loop cta-loop btn-primary px-6 py-2.5 text-sm font-medium md:inline-flex"
            action="schedule"
          >
            Get a Quote
          </TrackableLink>
          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-outline-variant/20 bg-surface-container-lowest text-on-surface md:hidden"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <MdClose className="text-2xl" /> : <MdMenu className="text-2xl" />}
          </button>
        </div>
      </div>
      <div className={`border-t border-outline-variant/10 bg-surface px-4 pb-5 pt-3 shadow-sm md:hidden ${menuOpen ? "block" : "hidden"}`}>
        <div className="mx-auto flex max-w-screen-2xl flex-col gap-3">
          <Link className="rounded-lg px-3 py-3 font-label text-sm font-medium text-on-surface-variant hover:bg-surface-container-low hover:text-primary" href="/" onClick={closeMenu}>Home</Link>
          <Link className="rounded-lg px-3 py-3 font-label text-sm font-medium text-on-surface-variant hover:bg-surface-container-low hover:text-primary" href="/gallery" onClick={closeMenu}>Gallery</Link>
          <Link className="rounded-lg px-3 py-3 font-label text-sm font-medium text-on-surface-variant hover:bg-surface-container-low hover:text-primary" href="/about-us" onClick={closeMenu}>About</Link>
          <Link className="rounded-lg px-3 py-3 font-label text-sm font-medium text-on-surface-variant hover:bg-surface-container-low hover:text-primary" href="/contact" onClick={closeMenu}>Contact Us</Link>
          <TrackableLink
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-loop cta-loop mt-2 inline-flex items-center justify-center rounded-full bg-primary-container px-4 py-3 font-label text-sm font-medium text-on-primary-fixed"
            action="schedule"
            onClick={() => closeMenu()}
          >
            Get a Quote
          </TrackableLink>
        </div>
      </div>
    </nav>
  );
}