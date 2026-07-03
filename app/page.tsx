import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { MdBathtub, MdHomeWork, MdKitchen } from "react-icons/md";
import { featuredImages } from "./data/portfolio-images";
import { HeroCarousel } from "./components/hero-carousel";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import servicePaintingImage from "../services/Interior and Exterior Painting Miniature.png";
import servicePressureWashingImage from "../services/Pressure Washing Miniature.png";
import serviceFlooringImage from "../services/Flooring Miniature.png";
import serviceRemodelingImage from "../bathroom.png";
import serviceExteriorHeroImage from "../hero-images/exterior.png";
import serviceSidingImage from "../sidings.png";
import serviceGuttersImage from "../glutters.png";
import serviceFencingImage from "../fencing.png";
import recentLivingRoomImage from "../hero-images/recent-projects/livingroom.png";
import recentKitchenImage from "../hero-images/recent-projects/kitchen.png";
import recentOpenRoomImage from "../hero-images/recent-projects/openroom.png";
import recentExteriorImage from "../hero-images/recent-projects/exterior.jpg";
import {
  SITE_URL,
  breadcrumbSchema,
  faqSchema,
  localBusinessSchema,
  reviewsSchema,
  servicesSchema,
} from "./lib/seo";

export const metadata: Metadata = {
  title: "AV Remodeling | Luxury Home Remodeling in Atlanta",
  description: "AV Remodeling brings thoughtful craftsmanship to home and commercial renovations across Atlanta and surrounding areas.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "AV Remodeling | Luxury Home Remodeling in Atlanta",
    description: "AV Remodeling brings thoughtful craftsmanship to home and commercial renovations across Atlanta and surrounding areas.",
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
    title: "AV Remodeling | Luxury Home Remodeling in Atlanta",
    description: "AV Remodeling brings thoughtful craftsmanship to home and commercial renovations across Atlanta and surrounding areas.",
    images: ["/images/portfolio/kitchens/01.jpg"],
  },
};

const featuredServices = [
  {
    title: "Interior, Exterior, Walls, Frames, Trim, Doors, Windows, Kitchens, Bathrooms, Bedrooms — you name it.",
    description:
      "Transform your interior spaces with professional painting services focused on clean finishes, careful preparation, custom colors, and attention to detail.",
    badge: "Residential & Commercial",
    cta: "Explore Painting",
    href: "/contact",
    image: servicePaintingImage,
    alt: "Professional painting services",
  },
  {
    title: "Pressure Washing",
    description:
      "We remove dirt, grime, mold, and buildup from driveways, siding, patios, decks, and exterior surfaces.",
    badge: "Always Included",
    cta: "Explore Pressure Washing",
    href: "/contact",
    image: servicePressureWashingImage,
    alt: "Pressure washing",
  },
  {
    title: "Flooring",
    description:
      "Professional installation and replacement services for a wide range of flooring options, delivering clean finishes, precise workmanship, and lasting durability.",
    badge: "Residential & Commercial",
    cta: "Explore Flooring",
    href: "/gallery#all",
    image: serviceFlooringImage,
    alt: "Epoxy and wood flooring",
  },
  {
    title: "Bathroom & Kitchen Remodeling",
    description:
      "Full remodels or targeted upgrades with tile, fixtures, cabinets, and finishes that make daily spaces feel brand new.",
    badge: "Residential",
    cta: "Explore Remodeling",
    href: "/gallery#kitchens",
    image: serviceRemodelingImage,
    alt: "Bathroom and kitchen remodeling",
  },
  {
    title: "Siding",
    description:
      "Quality siding installation services that improve protection, insulation, durability, and curb appeal while complementing your property's style.",
    badge: "Residential & Commercial",
    cta: "Explore Siding",
    href: "/gallery#all",
    image: serviceSidingImage,
    alt: "Siding",
  },
  {
    title: "Gutters",
    description:
      "Professional gutter installation, cleaning, and maintenance services designed to help protect your property from water damage.",
    badge: "Residential",
    cta: "Explore Gutters",
    href: "/contact",
    image: serviceGuttersImage,
    alt: "Gutters",
  },
  {
    title: "Fencing",
    description:
      "Professional deck and fence installation services designed to create functional outdoor spaces with quality materials, lasting durability, and craftsmanship that enhances your property.",
    badge: "Residential & Commercial",
    cta: "Explore Fencing",
    href: "/contact",
    image: serviceFencingImage,
    alt: "Fencing",
  },
];

const blueTitles = [
  "Interior, Exterior, Walls, Frames, Trim, Doors, Windows, Kitchens, Bathrooms, Bedrooms — you name it.",
  "Pressure Washing",
  "Flooring",
  "Bathroom & Kitchen Remodeling",
  "Siding",
  "Gutters",
  "Fencing",
];

const serviceCards = [
  {
    icon: "kitchen",
    title: "Kitchens Designed for Everyday Living",
    description:
      "Beautifully crafted kitchens with functional layouts, quality materials, and finishes that elevate the way you cook, gather, and live.",
    link: "Explore Kitchen Projects",
    href: "/gallery#kitchens",
  },
  {
    icon: "bathtub",
    title: "Bathroom Renovation",
    description:
      "Transform your bathroom into a relaxing, elegant space with custom designs, quality finishes, and thoughtful details that blend comfort, functionality, and timeless style.",
    link: "Explore Bathroom Projects",
    href: "/gallery#bathrooms",
  },
  {
    icon: "home_work",
    title: "Complete Remodeling, Managed from Start to Finish",
    description:
      "From flooring and painting to drywall, concrete, exterior upgrades, and full property renovations, we handle every detail with expert craftsmanship, clear communication, and precision throughout the entire project.",
    link: "Explore All Services",
    href: "/gallery#all",
  },
];

const steps = [
  {
    number: "1",
    title: "Consultation",
    description: "Tell us about your vision, goals, and project ideas with our team.",
  },
  {
    number: "2",
    title: "Planning",
    description: "We define the design, materials, budget, and timeline.",
  },
  {
    number: "3",
    title: "Build & Transform",
    description: "Our team brings your project to life with expert craftsmanship.",
  },
  {
    number: "4",
    title: "Final Walkthrough",
    description: "We review every detail to ensure your complete satisfaction.",
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
  src: string | StaticImageData;
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
                Craft Exceptional Spaces with AV Remodeling
              </h1>
              <p className="mb-10 max-w-xl font-body text-xl font-light text-on-surface-variant md:text-2xl">
                From complete home and commercial renovations to single-area transformations, AV Remodeling brings your vision to life through exceptional craftsmanship, innovative design, and a commitment to quality in every detail.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/16788864393?text=Hello%20AV%20Remodeling,%20I’m%20interested%20in%20your%20remodeling%20services.%20I’d%20love%20to%20discuss%20my%20project%20and%20get%20more%20information."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-loop inline-block rounded-full bg-primary-container px-10 py-4 font-label text-lg font-bold text-on-primary-fixed transition-all duration-300"
                >
                  Request Your Estimate
                </a>
                <a
                  href="/gallery"
                  className="inline-block rounded-full border border-outline-variant/30 bg-surface/30 px-10 py-4 font-label text-lg font-bold text-white backdrop-blur-md transition-all duration-300"
                >
                  Explore Our Work
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface py-32" data-gsap-reveal>
          <div className="mx-auto max-w-screen-2xl px-8">
            <div className="mb-20 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                <div className="max-w-2xl">
                <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.35em] text-secondary font-label">
                  What We Do
                </span>
                <h2 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl md:-mt-4">
                  Services for Your Home
                </h2>
              </div>
              <p className="max-w-xl leading-relaxed text-on-surface-variant font-body">
                We believe every project has the potential to be extraordinary — whether it’s a modern kitchen, bathroom renovation, office update, retail space, or a full-scale remodel. Our team creates beautiful, functional spaces designed around your lifestyle, goals, and long-term needs.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3" data-gsap-stagger>
              {featuredServices.map((service) => (
                <div
                  key={service.title}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-surface-container-low shadow-[0_18px_60px_rgba(0,0,0,0.22)] transition-transform duration-500"
                  data-gsap-item
                >
                  <div className="relative h-[240px] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                    <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/35 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white backdrop-blur-md">
                      {service.badge}
                    </div>
                  </div>
                  <div className="flex h-full flex-col p-7">
                    <h3 className={`font-headline text-2xl font-bold ${blueTitles.includes(service.title) ? 'text-primary' : 'text-white'}`}>{service.title}</h3>
                    <p className="mt-4 flex-1 leading-relaxed text-on-surface-variant font-body">{service.description}</p>
                    <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/10 pt-6">
                        <span className="link-loop inline-flex items-center font-semibold text-primary transition-all">
                          {service.cta}
                          <span className="arrow-loop ml-2 text-sm">→</span>
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">Estimate</span>
                      </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* <section className="bg-surface py-32" data-gsap-reveal>
          <div className="mx-auto max-w-screen-2xl px-8">
            <div className="mb-20 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              <div className="max-w-2xl">
                <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-secondary font-label">
                  Home Remodeling Services
                </span>
                <h2 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl">
                  Remodeling Services with a Clear Process
                </h2>
              </div>
              <p className="max-w-sm leading-relaxed text-on-surface-variant font-body">
                We guide each project with clarity, reliable communication, and a steady process from the first conversation to the final walkthrough.
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
        </section> */}

        <section className="bg-surface-container-low py-32" data-gsap-reveal>
          <div className="mx-auto max-w-screen-2xl px-8">
            <h2 className="mb-16 font-headline text-4xl font-bold text-primary">Our Work Speaks for Itself</h2>
            <p className="mb-10 max-w-4xl font-body text-lg leading-relaxed text-on-surface-variant">
              Explore our portfolio of beautifully crafted renovations and custom projects designed with quality, functionality, and attention to detail in mind. From kitchens and bathrooms to stunning exteriors and full home transformations, every project reflects our commitment to exceptional craftsmanship and lasting results.
            </p>
            <p className="mb-16 max-w-4xl font-body text-sm leading-relaxed text-on-surface-variant/80">
              Browse Our Services: Kitchens • Bathrooms • Exteriors • Basements • Additions • Full Home Remodels • Custom Projects
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-12" data-gsap-stagger>
              <div className="md:col-span-8" data-gsap-item>
                <ProjectImage
                  src={recentExteriorImage}
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
                  src={recentLivingRoomImage}
                  alt="Living room remodeling project with warm finishes and an open, bright layout"
                  className="group luxury-shadow relative min-h-[280px] overflow-hidden rounded-xl h-full"
                  overlayClassName="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                >
                  <span className="mb-2 text-xs font-bold uppercase tracking-widest text-secondary">Living Space Refresh</span>
                  <h3 className="font-headline text-xl font-bold text-white">Open, Comfortable Living</h3>
                </ProjectImage>
              </div>
              <div className="md:col-span-4" data-gsap-item>
                <ProjectImage
                  src={recentKitchenImage}
                  alt="Kitchen remodeling project with custom cabinetry and elevated natural finishes"
                  className="group luxury-shadow relative h-[400px] overflow-hidden rounded-xl"
                  overlayClassName="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                >
                  <span className="mb-2 text-xs font-bold uppercase tracking-widest text-secondary">Kitchen Transformation</span>
                  <h3 className="font-headline text-xl font-bold text-white">Refined Cooking Space</h3>
                </ProjectImage>
              </div>
              <div className="md:col-span-8" data-gsap-item>
                <ProjectImage
                  src={recentOpenRoomImage}
                  alt="Open room remodeling project with clean lines and a spacious modern layout"
                  className="group luxury-shadow relative h-[400px] overflow-hidden rounded-xl"
                  overlayClassName="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                >
                  <span className="mb-2 text-xs font-bold uppercase tracking-widest text-secondary">Open Concept Design</span>
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
              <h2 className="font-headline text-4xl font-bold text-primary md:text-5xl">Simple Steps to Start Your Remodeling Project</h2>
            </div>
            <div className="relative">
              <div className="relative z-10 grid grid-cols-1 gap-12 md:grid-cols-4" data-gsap-stagger>
                {steps.map((step) => (
                  <div key={step.number} className="flex gap-6" data-gsap-item>
                    <div className="flex flex-col items-center">
                      <span className="mb-2 text-xs uppercase tracking-widest text-secondary font-label">Step</span>
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80 text-on-primary-fixed text-2xl font-extrabold shadow-lg">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className={`mb-3 text-2xl font-headline font-bold ${(step.title === 'Consultation' || step.number !== '1') ? 'text-primary' : 'text-white'}`}>{step.title}</h4>
                      <p className="leading-relaxed text-on-surface-variant font-body">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#07111c] py-32" data-gsap-reveal>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(21,78,128,0.35),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.18),transparent_38%),linear-gradient(180deg,rgba(7,17,28,0.96),rgba(4,9,15,1))]" />
          <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
          <div className="relative mx-auto max-w-screen-2xl px-8">
            <div className="mb-16 max-w-3xl">
              <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.35em] text-secondary font-label">
                Client Testimonials
              </span>
                <h2 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl">
                What our customers think
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-on-surface-variant font-body">
                Real feedback from homeowners who wanted a smoother process, sharper details, and a finished space that feels worth coming home to.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3" data-gsap-stagger>
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="glass-card inner-glow flex h-full flex-col justify-between rounded-xl border border-white/10 bg-white/[0.04] p-12 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl"
                  data-gsap-item
                >
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
            <h2 className="mb-8 font-headline text-4xl font-extrabold tracking-tight text-primary md:text-6xl">
              Your dream home starts with the right team.
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-xl font-light text-white font-body">
              From stunning kitchens to full-home renovations, AV Remodeling creates refined spaces designed around your lifestyle.
            </p>
            <a
              href="https://wa.me/16788864393?text=Hello%20AV%20Remodeling,%20I’m%20interested%20in%20your%20remodeling%20services.%20I’d%20love%20to%20discuss%20my%20project%20and%20get%20more%20information."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-primary-container px-12 py-5 font-label text-lg font-bold text-on-primary-fixed transition-all duration-300 hover:scale-[0.98] hover:brightness-110 electric-glow"
            >
              Start Your Consultation
            </a>
          </div>
        </section>

        <section className="bg-surface py-12">
          <div className="mx-auto max-w-screen-2xl px-8 text-center">
            <a
              href="/gallery"
              className="inline-flex items-center gap-2 rounded-full border border-outline-variant px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary transition-colors hover:bg-surface-container-low"
            >
                Explore the Gallery
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
