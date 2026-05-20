import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MdArchitecture, MdArrowForward, MdForum, MdVerifiedUser } from "react-icons/md";
import { featuredImages } from "../data/portfolio-images";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { SITE_URL, breadcrumbSchema } from "../lib/seo";

export const metadata: Metadata = {
  title: "AV Remodeling | About Our Design-Led Team",
  description:
    "Meet the team behind AV Remodeling and learn how we approach kitchens, bathrooms, and whole-home transformations in Atlanta.",
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
        <section className="relative flex h-[716px] items-center overflow-hidden bg-surface" data-gsap-reveal>
          <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 items-center gap-8 px-8 lg:grid-cols-2">
            <div className="z-10">
              <span className="mb-6 mt-14 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-secondary font-label">
                Our Story
              </span>
              <h1 className="mb-8 font-headline text-5xl font-extrabold leading-[0.9] tracking-tighter text-tertiary md:text-7xl">
                Remodeling With <br />Intention.
              </h1>
              <p className="max-w-md text-lg leading-relaxed text-on-surface-variant font-body">
                We create residential spaces with quiet precision, thoughtful coordination, and a finish that feels considered from every angle.
              </p>
            </div>
            <div className="relative h-full min-h-[400px]" data-gsap-parallax="10">
              <div className="absolute inset-0 translate-x-8 translate-y-8 rounded-xl bg-surface-container-high" />
              <Image
                className="absolute inset-0 z-10 rounded-xl object-cover shadow-2xl"
                src={featuredImages.aboutHero}
                alt="Remodeling project detail showing clean finishes and modern materials"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-32" data-gsap-reveal>
          <div className="mx-auto max-w-screen-2xl px-8">
            <div className="mb-20 flex flex-col items-end justify-between gap-8 md:flex-row">
              <div className="max-w-2xl">
                <h2 className="mb-6 font-headline text-4xl font-bold tracking-tight text-tertiary">
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
                <h3 className="mb-4 font-headline text-2xl font-bold text-tertiary">Trust</h3>
                <p className="mb-6 text-sm leading-relaxed text-on-surface-variant font-body">
                  We keep every step clear. You know what is happening, when it is happening, and what to expect next.
                </p>
                <div className="h-1 w-0 bg-secondary transition-all duration-500 group-hover:w-full" />
              </div>

              <div className="group rounded-xl bg-primary p-10 text-surface-container-lowest transition-all duration-500 hover:shadow-2xl" data-gsap-item>
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-surface-container-lowest/10">
                  <MdArchitecture className="text-secondary-fixed-dim" />
                </div>
                <h3 className="mb-4 font-headline text-2xl font-bold">Craftsmanship</h3>
                <p className="mb-6 text-sm leading-relaxed text-surface-variant font-body">
                  From framing and drywall to tile, paint, and final finishes, we focus on solid work that looks great and lasts.
                </p>
                <div className="h-1 w-0 bg-secondary-fixed-dim transition-all duration-500 group-hover:w-full" />
              </div>

              <div className="group rounded-xl bg-surface-container-lowest p-10 transition-all duration-500 hover:shadow-xl" data-gsap-item>
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-primary-container/10">
                  <MdForum className="text-primary" />
                </div>
                <h3 className="mb-4 font-headline text-2xl font-bold text-tertiary">Communication</h3>
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
                  src={featuredImages.aboutTeam}
                  alt="AV Remodeling team on a residential remodeling project in Atlanta"
                  width={1200}
                  height={1200}
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
              <h2 className="mb-8 font-headline text-4xl font-bold tracking-tight text-tertiary leading-tight">
                Experienced Hands. Refined Results.
              </h2>
              <p className="mb-8 leading-relaxed text-on-surface-variant font-body">
                Our project managers and skilled crews shape kitchens, bathrooms, flooring, paint, drywall, and exterior improvements with professional care and a sharper eye for detail.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="h-2 w-2 rounded-full bg-secondary" />
                  <span className="font-medium text-tertiary">Residential Spaces, Thoughtfully Shaped</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="h-2 w-2 rounded-full bg-secondary" />
                  <span className="font-medium text-tertiary">Clear Planning and Measured Progress</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="h-2 w-2 rounded-full bg-secondary" />
                  <span className="font-medium text-tertiary">Quality Control from Start to Finish</span>
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
            <h2 className="mb-24 text-center font-headline text-3xl font-bold text-tertiary">A Clear, Considered Process</h2>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-4" data-gsap-stagger>
              <div className="relative" data-gsap-item>
                <span className="pointer-events-none absolute -top-16 left-0 select-none font-headline text-9xl font-black text-primary/5">01</span>
                <div className="relative z-10 pt-4">
                  <h4 className="mb-3 font-headline text-lg font-bold text-tertiary">Vision</h4>
                  <p className="text-sm leading-relaxed text-on-surface-variant font-body">
                    We start with your goals, your home, and the feeling you want the finished space to create.
                  </p>
                </div>
              </div>
              <div className="relative" data-gsap-item>
                <span className="pointer-events-none absolute -top-16 left-0 select-none font-headline text-9xl font-black text-primary/5">02</span>
                <div className="relative z-10 pt-4">
                  <h4 className="mb-3 font-headline text-lg font-bold text-tertiary">Refinement</h4>
                  <p className="text-sm leading-relaxed text-on-surface-variant font-body">
                    Materials, scope, and timeline come together with a steady, deliberate pace.
                  </p>
                </div>
              </div>
              <div className="relative" data-gsap-item>
                <span className="pointer-events-none absolute -top-16 left-0 select-none font-headline text-9xl font-black text-primary/5">03</span>
                <div className="relative z-10 pt-4">
                  <h4 className="mb-3 font-headline text-lg font-bold text-tertiary">Build</h4>
                  <p className="text-sm leading-relaxed text-on-surface-variant font-body">
                    Our crew brings the design to life with clean execution and careful coordination.
                  </p>
                </div>
              </div>
              <div className="relative" data-gsap-item>
                <span className="pointer-events-none absolute -top-16 left-0 select-none font-headline text-9xl font-black text-primary/5">04</span>
                <div className="relative z-10 pt-4">
                  <h4 className="mb-3 font-headline text-lg font-bold text-tertiary">Reveal</h4>
                  <p className="text-sm leading-relaxed text-on-surface-variant font-body">
                    We finish with a final walkthrough to make sure every detail feels complete.
                  </p>
                </div>
              </div>
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

        <section className="bg-surface py-20" data-gsap-reveal>
          <div className="mx-auto max-w-screen-2xl px-8 text-center">
            <Link href="/gallery" className="inline-flex items-center gap-2 rounded-full border border-outline-variant px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-secondary transition-colors hover:bg-surface-container-low">
              Explore the Gallery
              <MdArrowForward className="text-sm" />
            </Link>
          </div>
        </section>

        <section className="bg-surface py-20" data-gsap-reveal>
          <div className="mx-auto max-w-screen-2xl px-8 text-center">
            <Link href="https://www.instagram.com/avremodelingatl/" target="_blank" rel="noopener noreferrer" className="inline-block rounded-lg bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 px-8 py-3 font-headline text-sm font-bold tracking-wide text-white transition-all hover:-translate-y-1 hover:shadow-2xl">
              View Instagram
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
