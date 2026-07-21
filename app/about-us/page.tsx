import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { MdArchitecture, MdArrowForward, MdForum, MdVerifiedUser } from "react-icons/md";
import { featuredImages } from "../data/portfolio-images";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import aboutHeroImage from "../../public/images/alejandro/alejandro-image.svg";
import beforeAfterImage from "../../beforeafter.jpg";
import { SITE_URL, breadcrumbSchema } from "../lib/seo";

export const metadata: Metadata = {
  title: "AV Remodeling | About Our Design-Led Team",
  description:
    "AV Remodeling is a trusted remodeling company proudly serving Atlanta and surrounding areas.",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "AV Remodeling | About Our Design-Led Team",
    description:
      "A closer look at the team, process, and craftsmanship behind AV Remodeling.",
    url: `${SITE_URL}/about-us`,
    type: "article",
  },
};

const youtubeVideos = [
  { id: "RnqaTVko-qA", title: "AV Remodeling Project Showcase" },
  { id: "QHfpcplcY9k", title: "Kitchen Transformation" },
  { id: "Xjdad_1nD0s", title: "Bathroom Remodeling" },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-surface text-on-surface selection:bg-secondary-container selection:text-on-secondary-container">
      <SiteHeader active="about" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "About", path: "/about-us" },
            ]),
          ),
        }}
      />

      <main className="pt-20">
        <section className="relative flex min-h-[720px] md:min-h-[820px] lg:min-h-[716px] items-center overflow-visible bg-surface" data-gsap-reveal>
          <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 items-center gap-8 px-8 lg:grid-cols-2">
            <div className="z-10">
              <span className="mb-6 mt-14 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-secondary font-label">
                Our Story
              </span>
              <h1 className="mb-8 font-headline text-5xl font-extrabold leading-[0.9] tracking-tighter text-primary md:text-7xl">
                Remodeling With <br />Intention.
              </h1>
              <p className="max-w-md text-lg leading-relaxed text-on-surface-variant font-body">
                AV Remodeling is a trusted remodeling company proudly serving Atlanta and surrounding areas. We specialize in transforming residential, commercial, investment, and multifamily properties through high-quality craftsmanship, reliable service, and a seamless remodeling experience from start to finish.
              </p>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-on-surface-variant font-body">
                Our services cover everything from small projects, full renovations, and damage restoration to concrete work, landscaping, decks, and more. No matter the size or scope, our experienced team delivers customized solutions tailored to your vision, lifestyle, and budget.
              </p>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-on-surface-variant font-body">
                At AV Remodeling, we combine expert guidance, attention to detail, and professional execution to bring every project to life and create spaces our clients are proud to call their own.
              </p>
            </div>
            <div className="relative h-full min-h-[720px] md:min-h-[820px] lg:min-h-[400px]" data-gsap-parallax="10">
              <div className="absolute inset-0 translate-x-8 translate-y-8 rounded-xl bg-surface-container-high" />
              <Image
                className="absolute inset-0 z-10 rounded-xl object-cover object-center shadow-2xl"
                src={aboutHeroImage}
                alt="Remodeling project detail showing clean finishes and modern materials"
                fill
                sizes="(min-width: 1024px) 70vw, 100vw"
              />
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-32" data-gsap-reveal>
          <div className="mx-auto max-w-screen-2xl px-8">
            <div className="mb-20 flex flex-col items-end justify-between gap-8 md:flex-row">
              <div className="max-w-2xl">
                <h2 className="mb-6 font-headline text-4xl font-bold tracking-tight text-primary">
                  Built on Trust, Detail, and Communication
                </h2>
                <p className="leading-relaxed text-on-surface-variant font-body">
                  Every project is guided with clarity, measured decisions, and a standard of finish that respects your home.
                </p>
              </div>
              <div className="select-none font-headline text-8xl font-black text-primary/5">TRUST</div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3" data-gsap-stagger>
              <div className="group rounded-xl bg-surface-container-lowest p-10 transition-all duration-500 hover:shadow-xl" data-gsap-item>
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-primary-container/10">
                  <MdVerifiedUser className="text-primary" />
                </div>
                <h3 className="mb-4 font-headline text-2xl font-bold text-primary">Trust</h3>
                <p className="mb-6 text-sm leading-relaxed text-on-surface-variant font-body">
                  We keep every step clear. You know what is happening, when it is happening, and what to expect next.
                </p>
                <div className="h-1 w-0 bg-secondary transition-all duration-500 group-hover:w-full" />
              </div>

              <div className="group rounded-xl bg-primary p-10 text-surface-container-lowest transition-all duration-500 hover:shadow-2xl" data-gsap-item>
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-surface-container-lowest/10">
                    <MdArchitecture className="text-black" />
                  </div>
                  <h3 className="mb-4 font-headline text-2xl font-bold text-black">Craftsmanship</h3>
                <p className="mb-6 text-sm leading-relaxed text-surface-variant font-body">
                  From framing and drywall to tile, paint, and final finishes, we focus on solid work that looks great and lasts.
                </p>
                <div className="h-1 w-0 bg-secondary-fixed-dim transition-all duration-500 group-hover:w-full" />
              </div>

              <div className="group rounded-xl bg-surface-container-lowest p-10 transition-all duration-500 hover:shadow-xl" data-gsap-item>
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-primary-container/10">
                  <MdForum className="text-primary" />
                </div>
                <h3 className="mb-4 font-headline text-2xl font-bold text-primary">Communication</h3>
                <p className="mb-6 text-sm leading-relaxed text-on-surface-variant font-body">
                  Our team responds quickly, gives regular updates, and keeps your project moving with fewer surprises.
                </p>
                <div className="h-1 w-0 bg-secondary transition-all duration-500 group-hover:w-full" />
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-surface py-32" data-gsap-reveal>
          <div className="mx-auto grid max-w-screen-2xl grid-cols-1 items-center gap-16 px-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="relative">
                <Image
                  className="h-[600px] w-full rounded-xl object-cover shadow-2xl"
                  src={beforeAfterImage}
                  alt="AV Remodeling team on a residential remodeling project in Atlanta"
                  width={1200}
                  height={1200}
                  quality={80}
                  priority={false}
                />
                <div className="absolute -bottom-10 -right-10 hidden rounded-xl bg-secondary p-12 text-surface-container-lowest xl:block">
                  <p className="mb-2 font-headline text-5xl font-extrabold">10+</p>
                  <p className="text-xs uppercase tracking-widest font-label">Years Serving Atlanta</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.2em] text-secondary font-label">
                Our Team
              </span>
              <h2 className="mb-8 font-headline text-4xl font-bold tracking-tight text-primary leading-tight">
                Experienced Hands. Refined Results.
              </h2>
              <p className="mb-8 leading-relaxed text-on-surface-variant font-body">
                Our project managers and skilled crews shape kitchens, bathrooms, flooring, paint, drywall, and exterior improvements with professional care and a sharper eye for detail.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="h-2 w-2 rounded-full bg-secondary" />
                  <span className="font-medium text-primary">Residential Spaces, Thoughtfully Shaped</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="h-2 w-2 rounded-full bg-secondary" />
                  <span className="font-medium text-primary">Clear Planning and Measured Progress</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="h-2 w-2 rounded-full bg-secondary" />
                  <span className="font-medium text-primary">Quality Control from Start to Finish</span>
                </div>
              </div>
              <Link href="/gallery" className="group mt-12 inline-flex items-center gap-3 font-headline font-bold text-primary transition-all duration-300 hover:translate-x-1 hover:text-secondary">
                Explore Our Work
                <MdArrowForward className="text-sm" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-high/30 py-32" data-gsap-reveal>
          <div className="mx-auto max-w-screen-2xl px-8">
            <h2 className="mb-24 text-center font-headline text-3xl font-bold text-primary">A Clear, Considered Process</h2>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-4" data-gsap-stagger>
              <div className="relative" data-gsap-item>
                <span className="pointer-events-none absolute -top-16 left-0 select-none font-headline text-9xl font-black text-primary/5">01</span>
                <div className="relative z-10 pt-4">
                  <h4 className="mb-3 font-headline text-lg font-bold text-primary">Vision</h4>
                  <p className="text-sm leading-relaxed text-on-surface-variant font-body">
                    We start with your goals, your home, and the feeling you want the finished space to create.
                  </p>
                </div>
              </div>
              <div className="relative" data-gsap-item>
                <span className="pointer-events-none absolute -top-16 left-0 select-none font-headline text-9xl font-black text-primary/5">02</span>
                <div className="relative z-10 pt-4">
                  <h4 className="mb-3 font-headline text-lg font-bold text-primary">Refinement</h4>
                  <p className="text-sm leading-relaxed text-on-surface-variant font-body">
                    Materials, scope, and timeline come together with a steady, deliberate pace.
                  </p>
                </div>
              </div>
              <div className="relative" data-gsap-item>
                <span className="pointer-events-none absolute -top-16 left-0 select-none font-headline text-9xl font-black text-primary/5">03</span>
                <div className="relative z-10 pt-4">
                  <h4 className="mb-3 font-headline text-lg font-bold text-primary">Build</h4>
                  <p className="text-sm leading-relaxed text-on-surface-variant font-body">
                    Our crew brings the design to life with clean execution and careful coordination.
                  </p>
                </div>
              </div>
              <div className="relative" data-gsap-item>
                <span className="pointer-events-none absolute -top-16 left-0 select-none font-headline text-9xl font-black text-primary/5">04</span>
                <div className="relative z-10 pt-4">
                  <h4 className="mb-3 font-headline text-lg font-bold text-primary">Reveal</h4>
                  <p className="text-sm leading-relaxed text-on-surface-variant font-body">
                    We finish with a final walkthrough to make sure every detail feels complete.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface py-28" data-gsap-reveal>
          <div className="mx-auto max-w-screen-2xl px-8">
            <div className="mb-12 max-w-3xl">
              <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.35em] text-secondary font-label">
                Social Presence
              </span>
              <h2 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl">
                Follow the work as it happens
              </h2>
              <p className="mt-6 max-w-2xl leading-relaxed text-on-surface-variant font-body">
                We share project progress, finished details, and behind-the-scenes updates so you can see how our work comes together.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <Link
                href="https://www.instagram.com/avremodelingatl/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-surface-container-low shadow-[0_24px_70px_rgba(0,0,0,0.28)] transition-transform duration-500 hover:-translate-y-1"
                aria-label="View Instagram"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(2,199,255,0.3),transparent_35%),linear-gradient(135deg,rgba(8,15,25,0.96),rgba(16,23,35,0.86))]" />
                <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
                <div className="relative flex h-full min-h-[360px] flex-col justify-between p-10 md:p-12">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md">
                      <FaInstagram className="text-xl" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary">Instagram</p>
                      <p className="mt-1 text-sm text-white/70">@avremodelingatl</p>
                    </div>
                  </div>
                  <div className="max-w-xl">
                    <h3 className="font-headline text-4xl font-bold tracking-tight text-primary">
                      View Instagram
                    </h3>
                    <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/75 font-body">
                      See recent remodels, material details, and the kind of finish we aim for in every project.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-secondary">
                    <span>Open profile</span>
                    <MdArrowForward className="text-base transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>

              <Link
                href="https://www.youtube.com/@avremodelingatl8105"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-surface-container-low shadow-[0_24px_70px_rgba(0,0,0,0.28)] transition-transform duration-500 hover:-translate-y-1"
                aria-label="View YouTube Channel"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(2,199,255,0.28),transparent_35%),linear-gradient(135deg,rgba(8,15,25,0.96),rgba(16,23,35,0.9))]" />
                <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
                <div className="relative flex h-full min-h-[360px] flex-col justify-between p-10 md:p-12">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md">
                      <FaYoutube className="text-xl" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary">YouTube</p>
                      <p className="mt-1 text-sm text-white/70">@avremodelingatl8105</p>
                    </div>
                  </div>
                  <div className="max-w-xl">
                    <h3 className="font-headline text-4xl font-bold tracking-tight text-primary">
                      View YouTube Channel
                    </h3>
                    <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/75 font-body">
                      Longer walkthroughs and before-and-after stories live here so you can get a better sense of the process.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-secondary">
                    <span>Open channel</span>
                    <MdArrowForward className="text-base transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-surface py-32" data-gsap-reveal>
          <div className="mx-auto max-w-screen-2xl px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              <div className="overflow-hidden rounded-2xl bg-surface-container-lowest shadow-2xl">
                <div className="aspect-video">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/RnqaTVko-qA"
                    title="AV Remodeling Project Showcase"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div className="overflow-hidden rounded-2xl bg-surface-container-lowest shadow-2xl">
                  <div className="aspect-video">
                    <iframe
                      className="h-full w-full"
                      src="https://www.youtube.com/embed/QHfpcplcY9k"
                      title="Kitchen Transformation"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
                <div className="overflow-hidden rounded-2xl bg-surface-container-lowest shadow-2xl">
                  <div className="aspect-video">
                    <iframe
                      className="h-full w-full"
                      src="https://www.youtube.com/embed/Xjdad_1nD0s"
                      title="Bathroom Remodeling"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  );
}
