import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MdBathtub, MdHomeWork, MdKitchen } from "react-icons/md";
import { featuredImages } from "./data/portfolio-images";
import { HeroCarousel } from "./components/hero-carousel";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import {
  SITE_URL,
  breadcrumbSchema,
  faqSchema,
  localBusinessSchema,
  reviewsSchema,
  servicesSchema,
} from "./lib/seo";

export const metadata: Metadata = {
  title: "AV Remodeling | Atlanta Kitchen & Bathroom Remodeling",
  description:
    "AV Remodeling delivers kitchen remodeling, bathroom renovations, flooring, painting, drywall, concrete, drainage, and exterior home maintenance across Atlanta, GA.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AV Remodeling | Atlanta Kitchen & Bathroom Remodeling",
    description:
      "Local Atlanta remodeling contractor for kitchens, bathrooms, flooring, painting, and exterior upgrades.",
    url: SITE_URL,
    type: "website",
    images: [
      {
        url: "/images/portfolio/kitchens/01.jpg",
        width: 1200,
        height: 1600,
        alt: "Kitchen remodeling project in Atlanta by AV Remodeling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AV Remodeling | Atlanta Kitchen & Bathroom Remodeling",
    description:
      "Kitchen remodeling, bathroom remodeling, and full-home renovation services in Atlanta, Georgia.",
    images: ["/images/portfolio/kitchens/01.jpg"],
  },
};

const serviceCards = [
  {
    icon: "kitchen",
    title: "Kitchen Remodeling Atlanta",
    description:
      "Custom kitchens designed for daily life with better layout, cabinetry, countertops, lighting, and storage.",
    link: "View Kitchen Projects",
    href: "/gallery#kitchens",
  },
  {
    icon: "bathtub",
    title: "Bathroom Renovation Atlanta",
    description:
      "Bathroom upgrades built for comfort and durability, including tile, showers, vanities, and waterproof finishes.",
    link: "View Bathroom Projects",
    href: "/gallery#bathrooms",
  },
  {
    icon: "home_work",
    title: "Full-Service Home Upgrades",
    description:
      "Complete home remodeling services including flooring installation, painting, drywall, concrete work, drainage systems, and exterior home maintenance.",
    link: "View All Services",
    href: "/gallery#all",
  },
];

const steps = [
  {
    number: "01",
    title: "On-Site Consultation",
    description:
      "We visit your home, understand your priorities, and recommend practical solutions based on your goals and budget.",
  },
  {
    number: "02",
    title: "Scope & Estimate",
    description:
      "You receive a clear project scope, realistic timeline, and transparent estimate before work begins.",
  },
  {
    number: "03",
    title: "Build & Project Management",
    description:
      "Our crew completes the work with consistent quality standards and frequent updates so you always know progress.",
  },
  {
    number: "04",
    title: "Final Walkthrough",
    description:
      "We review every detail with you and make sure the finished result is clean, complete, and ready to enjoy.",
  },
];

const testimonials = [
  {
    quote:
      "The team transformed our kitchen into a brighter, more functional space and kept us updated every step of the way.",
    name: "Sarah & James L.",
    location: "Atlanta, GA",
  },
  {
    quote:
      "Professional, punctual, and detail-oriented. Our bathroom remodel finished exactly how we imagined it.",
    name: "Marcus Thornton",
    location: "Sandy Springs, GA",
  },
  {
    quote:
      "From the first estimate to the final walkthrough, the communication and workmanship were outstanding.",
    name: "Elena Rodriguez",
    location: "Marietta, GA",
  },
];

function ProjectImage({
  src,
  alt,
  className,
  overlayClassName,
  children,
}: {
  src: string;
  alt: string;
  className: string;
  overlayClassName: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(min-width: 768px) 50vw, 100vw"
      />
      <div className={overlayClassName}>{children}</div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-surface text-on-surface">
      <SiteHeader active="home" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
            ]),
          ),
        }}
      />

      <main>

        <section className="relative flex h-[921px] min-h-[600px] w-full items-center overflow-hidden" data-gsap-reveal>
          <HeroCarousel />
          <div className="relative z-10 mx-auto w-full max-w-screen-2xl px-8">
            <div className="max-w-3xl">
              <h1 className="mb-6 font-headline text-5xl font-extrabold leading-[1.1] tracking-tight text-white md:text-7xl">
                Trusted Atlanta Remodeling <br />Built for Real Homes.
              </h1>
              <p className="mb-10 max-w-xl font-body text-xl font-light text-on-surface-variant md:text-2xl">
                Kitchen remodeling, bathroom renovation, flooring installation, and home upgrades with reliable communication from start to finish.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/16788864393?text=Hello%20AV%20Remodeling,%20I’m%20interested%20in%20your%20remodeling%20services.%20I’d%20love%20to%20discuss%20my%20project%20and%20get%20more%20information."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-loop inline-block rounded-full bg-primary-container px-10 py-4 font-label text-lg font-bold text-on-primary-fixed transition-all duration-300"
                >
                  Get a Free Estimate
                </a>
                <a
                  href="/gallery"
                  className="cta-loop inline-block rounded-full border border-outline-variant/30 bg-surface/30 px-10 py-4 font-label text-lg font-bold text-white backdrop-blur-md transition-all duration-300"
                >
                  View Portfolio
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface py-32" data-gsap-reveal>
          <div className="mx-auto max-w-screen-2xl px-8">
            <div className="mb-20 flex flex-col items-end justify-between gap-8 md:flex-row">
              <div className="max-w-2xl">
                <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-secondary font-label">
                  Home Remodeling Services
                </span>
                <h2 className="font-headline text-4xl font-bold tracking-tight text-white md:text-5xl">
                  Remodeling Contractors Atlanta Homeowners Trust
                </h2>
              </div>
              <p className="max-w-sm leading-relaxed text-on-surface-variant font-body">
                AV Remodeling delivers professional residential remodeling across Atlanta with dependable scheduling, quality workmanship, and clear updates.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3" data-gsap-stagger>
              {serviceCards.map((card) => (
                <div key={card.title} className="group" data-gsap-item>
                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-xl bg-surface-container-low shadow-[inset_0_1px_0_rgba(245,247,250,0.05)] transition-colors duration-500 group-hover:bg-primary-container">
                    {card.icon === "kitchen" ? (
                      <MdKitchen className="text-3xl text-on-surface transition-colors duration-500 group-hover:text-on-primary-fixed" />
                    ) : card.icon === "bathtub" ? (
                      <MdBathtub className="text-3xl text-on-surface transition-colors duration-500 group-hover:text-on-primary-fixed" />
                    ) : (
                      <MdHomeWork className="text-3xl text-on-surface transition-colors duration-500 group-hover:text-on-primary-fixed" />
                    )}
                  </div>
                  <h3 className="mb-4 font-headline text-2xl font-bold text-white">{card.title}</h3>
                  <p className="mb-6 leading-relaxed text-on-surface-variant font-body">{card.description}</p>
                  <Link className="link-loop inline-flex items-center font-semibold text-primary transition-all" href={card.href}>
                    {card.link}
                    <span className="arrow-loop ml-2 text-sm">→</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-32" data-gsap-reveal>
          <div className="mx-auto max-w-screen-2xl px-8">
            <h2 className="mb-16 font-headline text-4xl font-bold text-white">Recent Atlanta Remodeling Projects</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-12" data-gsap-stagger>
              <div className="md:col-span-8" data-gsap-item>
                <ProjectImage
                  src="/images/portfolio/exteriors/03.jpg"
                  alt="Exterior remodeling project in Atlanta with updated finishes and clean curb appeal"
                  className="group luxury-shadow relative h-[600px] overflow-hidden rounded-xl"
                  overlayClassName="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-12 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                >
                  <span className="mb-2 text-xs font-bold uppercase tracking-widest text-secondary">Exterior Home Maintenance</span>
                  <h3 className="font-headline text-3xl font-bold text-white">Curb Appeal Upgrade</h3>
                </ProjectImage>
              </div>
              <div className="flex flex-col gap-8 md:col-span-4" data-gsap-item>
                <ProjectImage
                  src="/images/portfolio/bedrooms/01.jpg"
                  alt="Bedroom remodeling project with updated finishes and improved lighting"
                  className="group luxury-shadow relative min-h-[280px] overflow-hidden rounded-xl h-full"
                  overlayClassName="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                >
                  <span className="mb-2 text-xs font-bold uppercase tracking-widest text-secondary">Bedroom Remodel</span>
                  <h3 className="font-headline text-xl font-bold text-white">Comfort-Focused Upgrade</h3>
                </ProjectImage>
              </div>
              <div className="md:col-span-4" data-gsap-item>
                <ProjectImage
                  src="/images/portfolio/kitchens/08.jpg"
                  alt="Kitchen remodeling Atlanta project with custom cabinetry and bright finishes"
                  className="group luxury-shadow relative h-[400px] overflow-hidden rounded-xl"
                  overlayClassName="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                >
                  <span className="mb-2 text-xs font-bold uppercase tracking-widest text-secondary">Kitchen Remodeling Atlanta</span>
                  <h3 className="font-headline text-xl font-bold text-white">Custom Kitchen Upgrade</h3>
                </ProjectImage>
              </div>
              <div className="md:col-span-8" data-gsap-item>
                <ProjectImage
                  src="/images/portfolio/living-rooms/03.jpg"
                  alt="Living room remodeling project with improved layout and modern finishes"
                  className="group luxury-shadow relative h-[400px] overflow-hidden rounded-xl"
                  overlayClassName="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                >
                  <span className="mb-2 text-xs font-bold uppercase tracking-widest text-secondary">Living Room Remodel</span>
                  <h3 className="font-headline text-xl font-bold text-white">Architectural Transformation</h3>
                </ProjectImage>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface py-32" data-gsap-reveal>
          <div className="mx-auto max-w-screen-2xl px-8">
            <div className="mb-24 text-center">
              <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-secondary font-label">
                Our Process
              </span>
              <h2 className="font-headline text-4xl font-bold text-white md:text-5xl">A Remodeling Process You Can Trust</h2>
            </div>
            <div className="relative">
              <div className="relative z-10 grid grid-cols-1 gap-12 md:grid-cols-4" data-gsap-stagger>
                {steps.map((step) => (
                  <div key={step.number} className="flex flex-col" data-gsap-item>
                    <span className="mb-[-2rem] font-headline text-8xl font-extrabold leading-none text-white">{step.number}</span>
                    <div className="pt-8">
                      <h4 className="mb-4 font-headline text-2xl font-bold text-white">{step.title}</h4>
                      <p className="leading-relaxed text-on-surface-variant font-body">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container py-32" data-gsap-reveal>
          <div className="mx-auto max-w-screen-2xl px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3" data-gsap-stagger>
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="glass-card inner-glow flex h-full flex-col justify-between rounded-xl p-12" data-gsap-item>
                  <p className="mb-8 text-xl italic leading-relaxed text-on-surface-variant font-body">&quot;{testimonial.quote}&quot;</p>
                  <div>
                    <p className="font-headline font-bold text-primary">{testimonial.name}</p>
                    <p className="mt-1 text-xs uppercase tracking-widest text-secondary">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-surface py-40" data-gsap-reveal>
          <div className="absolute inset-0 opacity-20" data-gsap-parallax="10">
            <Image
              alt="Atlanta home remodeling detail with premium exterior finishes"
              src={featuredImages.homeFooter}
              fill
              className="object-cover grayscale"
              sizes="100vw"
            />
          </div>
          <div className="relative z-10 mx-auto max-w-screen-xl px-8 text-center">
            <h2 className="mb-8 font-headline text-4xl font-extrabold tracking-tight text-white md:text-6xl">
              Ready to Start Your Home Remodel?
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-xl font-light text-white font-body">
            Talk with AV Remodeling about kitchen remodeling Atlanta, bathroom renovation Atlanta, and complete home remodeling services tailored to your home.
            </p>
            <a
              href="https://wa.me/16788864393?text=Hello%20AV%20Remodeling,%20I’m%20interested%20in%20your%20remodeling%20services.%20I’d%20love%20to%20discuss%20my%20project%20and%20get%20more%20information."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-primary-container px-12 py-5 font-label text-lg font-bold text-on-primary-fixed transition-all duration-300 hover:scale-[0.98] hover:brightness-110 electric-glow"
            >
              Request Your Free Estimate
            </a>
          </div>
        </section>

        <section className="bg-surface py-12">
          <div className="mx-auto max-w-screen-2xl px-8 text-center">
            <a
              href="/gallery"
              className="inline-flex items-center gap-2 rounded-full border border-outline-variant px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary transition-colors hover:bg-surface-container-low"
            >
              Continue browsing
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
