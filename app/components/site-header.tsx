import Link from "next/link";

type SiteHeaderProps = {
  active: "home" | "gallery" | "about" | "contact";
};

const linkBase = "pb-1 text-sm font-medium tracking-tight transition-colors duration-300 font-label";

export function SiteHeader({ active }: SiteHeaderProps) {
  const activeClass = "border-b-2 border-slate-900 text-slate-900";
  const inactiveClass = "text-slate-500 hover:text-slate-900";
  const whatsappHref = "https://wa.me/16788864393?text=Hello%20AV%20Remodeling,%20I’m%20interested%20in%20your%20remodeling%20services.%20I’d%20love%20to%20discuss%20my%20project%20and%20get%20more%20information.";

  return (
    <nav className="fixed top-0 z-50 w-full bg-slate-50/80 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-screen-2xl items-center justify-between px-8">
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
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-surface-container-lowest transition-transform duration-200 ease-in-out hover:scale-95"
        >
          Get a Quote
        </a>
      </div>
    </nav>
  );
}