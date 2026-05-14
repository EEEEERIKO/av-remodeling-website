"use client";

import Link from "next/link";
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";

type SiteHeaderProps = {
  active: "home" | "gallery" | "about" | "contact";
};

const linkBase = "pb-1 text-sm font-medium tracking-tight transition-colors duration-300 font-label";

export function SiteHeader({ active }: SiteHeaderProps) {
  const activeClass = "border-b-2 border-slate-900 text-slate-900";
  const inactiveClass = "text-slate-500 hover:text-slate-900";
  const whatsappHref = "https://wa.me/16788864393?text=Hello%20AV%20Remodeling,%20I’m%20interested%20in%20your%20remodeling%20services.%20I’d%20love%20to%20discuss%20my%20project%20and%20get%20more%20information.";
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-slate-50/80 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-screen-2xl items-center justify-between px-4 sm:px-8">
        <div className="text-xl font-headline font-bold tracking-tighter uppercase text-slate-900">
          Av Remodeling
        </div>
        <div className="hidden items-center gap-10 text-sm font-medium tracking-tight md:flex">
          <Link className={`${linkBase} ${active === "home" ? activeClass : inactiveClass}`} href="/">
            Home
          </Link>
          <Link className={`${linkBase} ${active === "gallery" ? activeClass : inactiveClass}`} href="/gallery">
            Gallery
          </Link>
          <Link className={`${linkBase} ${active === "about" ? activeClass : inactiveClass}`} href="/about">
            About
          </Link>
          <Link className={`${linkBase} ${active === "contact" ? activeClass : inactiveClass}`} href="/contact">
            Contact Us
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-surface-container-lowest transition-transform duration-200 ease-in-out hover:scale-95 md:inline-flex"
          >
            Get a Quote
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-900 md:hidden"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <MdClose className="text-2xl" /> : <MdMenu className="text-2xl" />}
          </button>
        </div>
      </div>
      <div className={`border-t border-slate-200 bg-slate-50 px-4 pb-5 pt-3 shadow-sm md:hidden ${menuOpen ? "block" : "hidden"}`}>
        <div className="mx-auto flex max-w-screen-2xl flex-col gap-3">
          <Link className="rounded-lg px-3 py-3 font-label text-sm font-medium text-slate-700 hover:bg-slate-100" href="/" onClick={closeMenu}>Home</Link>
          <Link className="rounded-lg px-3 py-3 font-label text-sm font-medium text-slate-700 hover:bg-slate-100" href="/gallery" onClick={closeMenu}>Gallery</Link>
          <Link className="rounded-lg px-3 py-3 font-label text-sm font-medium text-slate-700 hover:bg-slate-100" href="/about" onClick={closeMenu}>About</Link>
          <Link className="rounded-lg px-3 py-3 font-label text-sm font-medium text-slate-700 hover:bg-slate-100" href="/contact" onClick={closeMenu}>Contact Us</Link>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-4 py-3 font-label text-sm font-medium text-surface-container-lowest"
            onClick={closeMenu}
          >
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  );
}