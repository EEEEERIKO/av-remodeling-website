import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MdBathtub, MdHomeWork, MdKitchen } from "react-icons/md";
import { featuredImages } from "./data/portfolio-images";
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
    title: "Culinary Masterpieces",
    description:
      "Redefining the heart of your home with custom cabinetry and professional-grade appliances.",
    link: "Explore Kitchens",
    href: "/gallery#kitchens",
  },
  {
    icon: "bathtub",
    title: "Private Spas",
    description:
      "Transforming daily routines into restorative experiences with premium stone and intelligent design.",
    link: "Explore Bathrooms",
    href: "/gallery#bathrooms",
  },
  {
    icon: "home_work",
    title: "Full Estates",
    description:
      "Cohesive whole-home renovations that flow seamlessly from room to room, reflecting your personal style.",
    link: "Explore Renovations",
    href: "/gallery#all",
  },
];

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "A deep dive into your lifestyle, goals, and architectural possibilities for your home.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Translating visions into photorealistic renderings and precise technical blueprints.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Where craftsmanship meets management. We handle every detail with white-glove service.",
  },
  {
    number: "04",
    title: "Delivery",
    description:
      "The final reveal. A space tailored perfectly to your family's future chapters.",
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

      <section className="relative flex h-screen w-full items-center overflow-hidden" data-gsap-reveal>
        <div className="absolute inset-0 z-0" data-gsap-parallax="12">
          <Image
            alt="Luxury kitchen remodeling in Atlanta with custom cabinets and modern finishes"
            src="/images/home/hero.jpg"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-screen-2xl px-8">
          <div className="max-w-3xl">
            <h1 className="mb-6 font-headline text-5xl font-extrabold leading-[1.1] tracking-tight text-surface-container-lowest md:text-7xl">
              Transforming Spaces <br />into Sanctuaries.
            </h1>
            <p className="mb-10 max-w-xl font-body text-xl font-light text-surface-container-low md:text-2xl">
              Excellence in Every Detail, Trusted for Over 20 Years.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/16788864393?text=Hello%20AV%20Remodeling,%20I’m%20interested%20in%20your%20remodeling%20services.%20I’d%20love%20to%20discuss%20my%20project%20and%20get%20more%20information."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-surface-container-lowest px-10 py-4 font-headline text-lg font-bold text-primary transition-colors hover:bg-surface-container-high inline-block"
              >
                Get a Free Estimate
              </a>
              <a
                href="/gallery"
                className="rounded-md border border-surface-container-lowest/30 px-10 py-4 font-headline text-lg font-bold text-surface-container-lowest backdrop-blur-md transition-colors hover:bg-white/10 inline-block"
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
                Our Specializations
              </span>
              <h2 className="font-headline text-4xl font-bold tracking-tight text-tertiary md:text-5xl">
                Crafting the foundation of modern living.
              </h2>
            </div>
            <p className="max-w-sm leading-relaxed text-on-surface-variant font-body">
              We specialize in high-end residential remodeling that balances architectural integrity with contemporary functionality.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3" data-gsap-stagger>
            {serviceCards.map((card) => (
              <div key={card.title} className="group" data-gsap-item>
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-xl bg-surface-container transition-colors duration-500 group-hover:bg-primary">
                  {card.icon === "kitchen" ? (
                    <MdKitchen className="text-3xl text-tertiary transition-colors duration-500 group-hover:text-white" />
                  ) : card.icon === "bathtub" ? (
                    <MdBathtub className="text-3xl text-tertiary transition-colors duration-500 group-hover:text-white" />
                  ) : (
                    <MdHomeWork className="text-3xl text-tertiary transition-colors duration-500 group-hover:text-white" />
                  )}
                </div>
                <h3 className="mb-4 font-headline text-2xl font-bold">{card.title}</h3>
                <p className="mb-6 leading-relaxed text-on-surface-variant font-body">{card.description}</p>
                <Link className="inline-flex items-center font-semibold text-primary transition-all hover:gap-2" href={card.href}>
                  {card.link}
                  <span className="ml-2 text-sm">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-32" data-gsap-reveal>
        <div className="mx-auto max-w-screen-2xl px-8">
          <h2 className="mb-16 font-headline text-4xl font-bold text-tertiary">Selected Works</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12" data-gsap-stagger>
            <div className="md:col-span-8" data-gsap-item>
              <ProjectImage
                src="/images/portfolio/exteriors/03.jpg"
                alt="Exterior remodeling project with refined siding and clean architectural lines"
                className="group luxury-shadow relative h-[600px] overflow-hidden rounded-xl"
                overlayClassName="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-12 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              >
                <span className="mb-2 text-xs font-bold uppercase tracking-widest text-secondary">Exterior Refresh</span>
                <h3 className="font-headline text-3xl font-bold text-white">Facade Renewal</h3>
              </ProjectImage>
            </div>
            <div className="flex flex-col gap-8 md:col-span-4" data-gsap-item>
              <ProjectImage
                src="/images/portfolio/bedrooms/01.jpg"
                alt="Primary bedroom renovation with calm materials and natural light"
                className="group luxury-shadow relative min-h-[280px] overflow-hidden rounded-xl h-full"
                overlayClassName="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              >
                <span className="mb-2 text-xs font-bold uppercase tracking-widest text-secondary">Primary Suite</span>
                <h3 className="font-headline text-xl font-bold text-white">Quiet Retreat</h3>
              </ProjectImage>
            </div>
            <div className="md:col-span-4" data-gsap-item>
              <ProjectImage
                src="/images/portfolio/kitchens/08.jpg"
                alt="Kitchen remodeling detail with custom cabinetry and bright finishes"
                className="group luxury-shadow relative h-[400px] overflow-hidden rounded-xl"
                overlayClassName="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              >
                <span className="mb-2 text-xs font-bold uppercase tracking-widest text-secondary">Kitchen Upgrade</span>
                <h3 className="font-headline text-xl font-bold text-white">Chef&apos;s Kitchen</h3>
              </ProjectImage>
            </div>
            <div className="md:col-span-8" data-gsap-item>
              <ProjectImage
                src="/images/portfolio/living-rooms/03.jpg"
                alt="Living room remodel with open flow and warm finishes"
                className="group luxury-shadow relative h-[400px] overflow-hidden rounded-xl"
                overlayClassName="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              >
                <span className="mb-2 text-xs font-bold uppercase tracking-widest text-secondary">Living Space</span>
                <h3 className="font-headline text-xl font-bold text-white">Open Living Flow</h3>
              </ProjectImage>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-32" data-gsap-reveal>
        <div className="mx-auto max-w-screen-2xl px-8">
          <div className="mb-24 text-center">
            <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-secondary font-label">
              The Journey
            </span>
            <h2 className="font-headline text-4xl font-bold text-tertiary md:text-5xl">Our Refined Process</h2>
          </div>
          <div className="relative">
            <div className="relative z-10 grid grid-cols-1 gap-12 md:grid-cols-4" data-gsap-stagger>
              {steps.map((step) => (
                <div key={step.number} className="flex flex-col" data-gsap-item>
                  <span className="mb-[-2rem] font-headline text-8xl font-extrabold leading-none text-primary/5">{step.number}</span>
                  <div className="pt-8">
                    <h4 className="mb-4 font-headline text-2xl font-bold">{step.title}</h4>
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
              <div key={testimonial.name} className="flex h-full flex-col justify-between rounded-xl bg-surface-container-lowest p-12 luxury-shadow" data-gsap-item>
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

      <section className="relative overflow-hidden bg-primary py-40" data-gsap-reveal>
        <div className="absolute inset-0 opacity-20" data-gsap-parallax="10">
          <Image
            alt="Architectural remodeling detail showing premium exterior finishes"
            src={featuredImages.homeFooter}
            fill
            className="object-cover grayscale"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-screen-xl px-8 text-center">
          <h2 className="mb-8 font-headline text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            Your Dream Deserves a Masterpiece.
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-xl font-light text-surface-container-low font-body">
            Let&apos;s collaborate to create a space that doesn&apos;t just house your life, but elevates it. Experience the Av Remodeling difference.
          </p>
          <a
            href="https://wa.me/16788864393?text=Hello%20AV%20Remodeling,%20I’m%20interested%20in%20your%20remodeling%20services.%20I’d%20love%20to%20discuss%20my%20project%20and%20get%20more%20information."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md bg-secondary px-12 py-5 font-headline text-lg font-bold text-white transition-all duration-300 hover:bg-secondary-container hover:text-on-secondary-container"
          >
            Begin Your Transformation
          </a>
        </div>
      </section>

        <section className="bg-surface py-12">
          <div className="mx-auto max-w-screen-2xl px-8 text-center">
            <a
              href="/gallery"
              className="inline-flex items-center gap-2 rounded-full border border-outline-variant px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-secondary transition-colors hover:bg-surface-container-low"
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
