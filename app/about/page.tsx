import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MdArchitecture, MdArrowForward, MdForum, MdVerifiedUser } from "react-icons/md";
import { featuredImages } from "../data/portfolio-images";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = {
  title: "About | AV REMODELING",
  description: "Learn about the team, values, and process behind Av Remodeling.",
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

      <main className="pt-20">
        <section className="relative flex h-[716px] items-center overflow-hidden bg-surface">
          <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 items-center gap-8 px-8 lg:grid-cols-2">
            <div className="z-10">
              <span className="mb-6 block text-xs font-semibold uppercase inline-block mt-14  tracking-[0.2em] text-secondary font-label ">
                Legacy of Excellence
              </span>
              <h1 className="mb-8 font-headline text-5xl font-extrabold leading-[0.9] tracking-tighter text-tertiary md:text-7xl">
                10+ Years of<br />Craftsmanship.
              </h1>
              <p className="max-w-md text-lg leading-relaxed text-on-surface-variant font-body">
                Redefining architectural potential through meticulous detail and an uncompromising commitment to the art of home transformation.
              </p>
            </div>
            <div className="relative min-h-[400px] h-full">
              <div className="absolute inset-0 translate-x-8 translate-y-8 rounded-xl bg-surface-container-high" />
              <Image
                className="absolute inset-0 z-10 rounded-xl object-cover shadow-2xl"
                src={featuredImages.aboutHero}
                alt="Modern architectural detail of a renovated luxury home interior with minimalist white walls, natural wood accents, and expansive windows"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-32">
          <div className="mx-auto max-w-screen-2xl px-8">
            <div className="mb-20 flex flex-col items-end justify-between gap-8 md:flex-row">
              <div className="max-w-2xl">
                <h2 className="mb-6 font-headline text-4xl font-bold tracking-tight text-tertiary">
                  Built on Foundation of Values
                </h2>
                <p className="leading-relaxed text-on-surface-variant font-body">
                  We believe that a premium renovation is more than just material upgrades. It is a journey of trust, technical precision, and clear vision.
                </p>
              </div>
              <div className="select-none font-headline text-8xl font-black text-primary/5">VALUES</div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="group rounded-xl bg-surface-container-lowest p-10 transition-all duration-500 hover:shadow-xl">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-primary-container/10">
                  <MdVerifiedUser className="text-primary" />
                </div>
                <h3 className="mb-4 font-headline text-2xl font-bold text-tertiary">Trust</h3>
                <p className="mb-6 text-sm leading-relaxed text-on-surface-variant font-body">
                  Transparency at every stage. We provide full project visibility and honest consultation, ensuring your peace of mind from demolition to final reveal.
                </p>
                <div className="h-1 w-0 bg-secondary transition-all duration-500 group-hover:w-full" />
              </div>

              <div className="group rounded-xl bg-primary p-10 text-surface-container-lowest transition-all duration-500 hover:shadow-2xl">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-surface-container-lowest/10">
                  <MdArchitecture className="text-secondary-fixed-dim" />
                </div>
                <h3 className="mb-4 font-headline text-2xl font-bold">Quality</h3>
                <p className="mb-6 text-sm leading-relaxed text-surface-variant font-body">
                  Our standards exceed building codes. We source artisan-grade materials and employ master craftsmen who treat every home as a masterpiece.
                </p>
                <div className="h-1 w-0 bg-secondary-fixed-dim transition-all duration-500 group-hover:w-full" />
              </div>

              <div className="group rounded-xl bg-surface-container-lowest p-10 transition-all duration-500 hover:shadow-xl">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-primary-container/10">
                  <MdForum className="text-primary" />
                </div>
                <h3 className="mb-4 font-headline text-2xl font-bold text-tertiary">Communication</h3>
                <p className="mb-6 text-sm leading-relaxed text-on-surface-variant font-body">
                  Architecture is complex, but our updates are not. We provide dedicated project managers and real-time digital tracking for your renovation.
                </p>
                <div className="h-1 w-0 bg-secondary transition-all duration-500 group-hover:w-full" />
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-surface py-32">
          <div className="mx-auto grid max-w-screen-2xl grid-cols-1 items-center gap-16 px-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="relative">
                <Image
                  className="h-[600px] w-full rounded-xl object-cover shadow-2xl"
                  src={featuredImages.aboutTeam}
                  alt="Professional diverse team of architects and project managers in a sunlit modern studio, looking confident and collaborative"
                  width={1200}
                  height={1200}
                />
                <div className="absolute -bottom-10 -right-10 hidden rounded-xl bg-secondary p-12 text-surface-container-lowest xl:block">
                  <p className="mb-2 font-headline text-5xl font-extrabold">12</p>
                  <p className="text-xs uppercase tracking-widest font-label">Master Craftsmen</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.2em] text-secondary font-label">
                Meet the Atelier
              </span>
              <h2 className="mb-8 font-headline text-4xl font-bold tracking-tight text-tertiary leading-tight">
                The Minds Behind Your Future Home.
              </h2>
              <p className="mb-8 leading-relaxed text-on-surface-variant font-body">
                Our team is a collective of specialized architects, interior designers, and veteran builders. Together, we blend innovative engineering with timeless aesthetics to deliver results that are as functional as they are beautiful.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="h-2 w-2 rounded-full bg-secondary" />
                  <span className="font-medium text-tertiary">RIBA Certified Architects</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="h-2 w-2 rounded-full bg-secondary" />
                  <span className="font-medium text-tertiary">In-House Structural Engineering</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="h-2 w-2 rounded-full bg-secondary" />
                  <span className="font-medium text-tertiary">Sustainable Material Sourcing</span>
                </div>
              </div>
              <Link href="/gallery" className="mt-12 inline-flex items-center gap-3 font-headline font-bold text-primary transition-colors duration-300 hover:text-secondary">
                View our Portfolio
                <MdArrowForward className="text-sm" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-high/30 py-32">
          <div className="mx-auto max-w-screen-2xl px-8">
            <h2 className="mb-24 text-center font-headline text-3xl font-bold text-tertiary">The Atelier Method</h2>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
              <div className="relative">
                <span className="pointer-events-none absolute -top-16 left-0 select-none font-headline text-9xl font-black text-primary/5">01</span>
                <div className="relative z-10 pt-4">
                  <h4 className="mb-3 font-headline text-lg font-bold text-tertiary">Discovery</h4>
                  <p className="text-sm leading-relaxed text-on-surface-variant font-body">
                    Understanding your lifestyle and defining the spatial constraints and possibilities of your home.
                  </p>
                </div>
              </div>
              <div className="relative">
                <span className="pointer-events-none absolute -top-16 left-0 select-none font-headline text-9xl font-black text-primary/5">02</span>
                <div className="relative z-10 pt-4">
                  <h4 className="mb-3 font-headline text-lg font-bold text-tertiary">Curation</h4>
                  <p className="text-sm leading-relaxed text-on-surface-variant font-body">
                    Selecting premium materials and finalizing architectural drawings that marry form and function.
                  </p>
                </div>
              </div>
              <div className="relative">
                <span className="pointer-events-none absolute -top-16 left-0 select-none font-headline text-9xl font-black text-primary/5">03</span>
                <div className="relative z-10 pt-4">
                  <h4 className="mb-3 font-headline text-lg font-bold text-tertiary">Execution</h4>
                  <p className="text-sm leading-relaxed text-on-surface-variant font-body">
                    Mastercraft construction led by dedicated project managers with daily oversight.
                  </p>
                </div>
              </div>
              <div className="relative">
                <span className="pointer-events-none absolute -top-16 left-0 select-none font-headline text-9xl font-black text-primary/5">04</span>
                <div className="relative z-10 pt-4">
                  <h4 className="mb-3 font-headline text-lg font-bold text-tertiary">Handover</h4>
                  <p className="text-sm leading-relaxed text-on-surface-variant font-body">
                    A meticulous walkthrough ensuring every detail aligns with our 20-year excellence standard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface py-32">
          <div className="mx-auto max-w-screen-2xl px-8">
            <div className="mb-14">
              <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-secondary font-label">
                Follow Our Work
              </span>
              <h2 className="mb-4 font-headline text-4xl font-bold tracking-tight text-tertiary md:text-5xl">
                Social Media Highlights
              </h2>
              <p className="max-w-3xl leading-relaxed text-on-surface-variant font-body">
                Explore our latest projects, behind-the-scenes progress, and transformation stories on Instagram and YouTube.
              </p>
            </div>

            <div className="mb-16 overflow-hidden rounded-2xl border border-outline-variant bg-surface-container-low">
              <div className="bg-gradient-to-r from-rose-500/10 via-orange-500/10 to-pink-500/10 px-8 py-12 text-center">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Instagram</p>
                <h3 className="mb-4 font-headline text-3xl font-bold text-tertiary">@avremodelingatl</h3>
                <p className="mx-auto mb-8 max-w-2xl font-body leading-relaxed text-on-surface-variant">
                  Follow our latest before-and-after transformations, on-site updates, and remodeling inspiration.
                </p>
                <a
                  href="https://www.instagram.com/avremodelingatl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 px-8 py-3 font-headline text-sm font-bold tracking-wide text-white transition-all hover:-translate-y-1 hover:shadow-2xl"
                >
                  View Instagram
                </a>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="mb-3 font-headline text-2xl font-bold text-tertiary">YouTube Videos</h3>
              <p className="font-body text-on-surface-variant">
                Watch project transformations directly from our channel.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
              {youtubeVideos.map((video) => (
                <div key={video.id} className="overflow-hidden rounded-2xl border border-outline-variant bg-surface-container-low">
                  <div className="aspect-video w-full overflow-hidden rounded-t-xl bg-black">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                      title={video.title}
                      className="h-full w-full"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="mb-3 font-headline text-lg font-bold text-tertiary">{video.title}</h4>
                    <a
                      href={`https://youtu.be/${video.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center font-body font-semibold text-red-600 transition-colors hover:text-red-700"
                    >
                      Watch on YouTube →
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-14 rounded-2xl border border-outline-variant bg-surface-container-low p-8 text-center">
              <a
                href="https://www.youtube.com/@avremodelingatl8105/featured"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-red-600 px-8 py-4 font-headline text-sm font-bold tracking-wide text-white transition-all hover:-translate-y-1 hover:shadow-2xl"
              >
                Visit YouTube Channel
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}