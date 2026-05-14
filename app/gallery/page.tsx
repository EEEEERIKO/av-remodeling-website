import type { Metadata } from "next";
import Image from "next/image";
import { MdArrowForward, MdUnfoldMore } from "react-icons/md";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = {
  title: "Gallery | Av Remodeling",
  description: "A curated gallery of Av Remodeling portfolio projects.",
};

const galleryItems = [
  {
    title: "Noir Sanctuary",
    subtitle: "Master Suite Bath Renovation",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhfX1sEdVJqlR5qXWHhM3l3-FPLq06P8ZWgzxWw9A9AaVcRu2HJgsRKe9_znusl7AXksutpdN2WUdjbluc05jvPcHDhtOnjahLhXpAAkuTqo-2di0h8DRUuVTzfP9XRNe5pIYdoTmePvT-285T4-qiQ4fT0WFVCWQbtmHgYkC7wwcctRWLDnPkKoiH3RUGnoJBp20jQz3TYLk1b7K1QWMzadfFuV_0a2i8qhgEieXA5ynnsqIn480srRkm6piHrctBVw5cmTXJtKk",
    className: "md:col-span-4 md:row-span-2",
    imageClassName: "grayscale brightness-50",
  },
  {
    title: "Glass Pavillion",
    subtitle: "Open Plan Living Concept",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuARAX08zpAPFIt7dHOT1mzm5gjjJXlT6k2sJ5_Jgr2KCx6OybEZTIaBwskIlPIooPgALZShRHzzvhkCu4nFwM5R1YJJSmsGSWSTEw-_MhVjF5_uyG29G6CYxQnni4g1gCNwEvhrJcBoWS2ukllAk20vNCJ1B2nzn6nfdSJVs_eElCE2iTkoUdifKQux8-7W7-aiDdfTrA_-oTxQRKuBSMczzGHoQrj_-TzRZW5qdXgQT1zrJ4ilm4JfyxNVS4a9jw6vAqd5LkH2BZU",
    className: "md:col-span-8 md:row-span-1",
    imageClassName: "",
  },
  {
    title: "The Atelier Office",
    subtitle: "Bespoke Millwork Portfolio",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjmU-sK1MhuuyWjsYDhLqW51Pvl50ivnQb3pLUQld3j5glmxrseS-I5DGcIHXK4PAgg8Z6Ne0FRBjaPkf8gZS7ZB62vmIYA2aiSvlxRDe0cueLYwfnLwTJFW_Izp0tE2-Ci9mcOPL7lohKSGbUS-VqvV8C5KACoVHCk8gImv5WerMrpj3--_Sq9nccOZ3UEDCQJ3RxsjzRDMYkRBcBHsQFSEk0g90DPJVnLIVtedOtkuo_3lr3bwA-g7JdgpCajmD6_gZbw7p_e10",
    className: "md:col-span-4 md:row-span-1",
    imageClassName: "",
  },
  {
    title: "Mist Suite",
    subtitle: "Interior Styling & Renovation",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMvcAzmhrAsKkVC7HxhhmEP0at4jzNBEs0LPbs5SuCy9QEX2Fg-N2uD0hxfnverdbwUYA1T3JFRmWmZpJfHRwPn4FApvuWf_xsGJdubXCybWM5qgBKHHIxoS7MMwU4_GkMforVFAYrwEHRiGMKKdppcNItho9zc37-wwE6bd1s4sJieB8X5qtJ0Qo1zj8-wwIZ8rOVB9sdh6VnB4Z_F8gCLifnXSKI4fzVhoHf4Dux6QMbgE0uaVo7wqt1qkaJH4hQ-KlzaXbIaKY",
    className: "md:col-span-4 md:row-span-1",
    imageClassName: "",
  },
  {
    title: "Ascension Hall",
    subtitle: "Structural Architecture",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBZSbwUOf7-fL4U9up9JeC4VkXvMQ7hQfSw-vn3rIBm_Y_39_0i2BE6ew-OOXBKUHA59ADGeHdQlH5ycIfz4MeJuwx4nI4vcUQ-nlq-djdpQvwH4kCtqrwx-REUC3cP6TV887ogNIwDprPdZpFzUrlpYsjEjQQAFzdh2GqyaqI6eLeRGFm9RZTcVGchKuEJ343jXx1YfY5E7eRMOMhiTlSLmCQ5hQaNsKFt7pGozOMKMOK-T2QFGfdE4H4tt7K5Y3MAsgsoSJxacw",
    className: "md:col-span-4 md:row-span-2",
    imageClassName: "",
  },
  {
    title: "The Horizon Deck",
    subtitle: "Outdoor Lifestyle Integration",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAQPz0dUXnvdvRvdHxCGXKP2hmVU7tt2F4sHMlTd_k77EgdjiB5SRWLcEt7LXA6U7t0hVCFVTigp27FT5K7xJh-MgMeqmyUim-DP9kxfeys1hKJgS-ACEghYrrn2LYh0mAIdk6Aw1hcywHFn5E2FSebkCcydzJsJ0yG0LD43qAaNSroYyLGhMqu5ypbNh0hq2pQ3QBHIsEqW7TvSfgn0AxTMbSw-8sDjAB2AbKBXo3ie1gChrv1yy3k1D-4-UWUa6ns9C2hGEnEUw",
    className: "md:col-span-8 md:row-span-1",
    imageClassName: "",
  },
];

export default function GalleryPage() {
  return (
    <div className="flex min-h-screen flex-col bg-surface text-on-surface antialiased">
      <SiteHeader active="gallery" />

      <main className="pt-32 pb-24">
        <header className="mx-auto mb-20 max-w-screen-2xl px-8 text-center md:text-left">
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            Portfolio
          </span>
          <h1 className="mb-6 font-headline text-5xl font-extrabold leading-[1.1] tracking-tight text-tertiary md:text-7xl">
            Curated Spaces,<br />Mastered Craft.
          </h1>
          <p className="max-w-2xl font-body text-lg leading-relaxed text-on-surface-variant">
            Explore our digital atelier of architectural transformations where minimalist design meets uncompromising structural precision.
          </p>
        </header>

        <section className="mx-auto mb-32 max-w-screen-2xl px-8">
          <div className="group relative overflow-hidden rounded-xl bg-surface-container">
            <div className="grid grid-cols-1 gap-1 bg-surface-container-high md:grid-cols-2">
              <div className="relative h-[600px] overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBg6wU5W741vyS6JXv1ghBKB6GIAFIout80vfcI9tSVLUSwKrmBrSq1C5OoA9zuHzoe9h-E1X3947H3zghqhKKzwlOo-JOgk6pLLq5nrU-BYgIx3jFw98A-gzCaHb_1_osuZ2HCscWPZZ4yLp0UaZMlbhzGmM-Z5b_x7SYN-C-PiSysmv0MaDVxXtdoIhfAJSK1vK4XJAXZub-yHlsyfg5DckskMNBlozwQCnsjSF8TiQcnhCeAU-frHs0phTiJ3_8tl_BNsO7Rhn0"
                  alt="Before kitchen"
                  fill
                  className="object-cover grayscale brightness-50"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute left-8 top-8 rounded-full bg-black/40 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-md">
                  Before
                </div>
              </div>
              <div className="relative h-[600px] overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRAn2bpyQDB6OiQYRyr7lWFExlPWV2gWlIYkAAi7evdhvIEiemjxWfDFYN-rVbkwor2ergzvu1Ifjn-Jni4cn7V2pzjmq7sNnGc_Wd-0r7ZtgeOc0SR_zBopxwLCOaZV-zjPvMoxON0CWJDSXZICG-04l-m5GyHZKLXNaSERN1r3P_rFwcVRBPUh7qPtlDqePaB3wuB2y6c96FvQGAsmbA-K4moGJj-uScISTwbb4JiSA5bxO8SPq6TLhfl7EdNUDtmAN09vXqEQY"
                  alt="After kitchen"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute right-8 top-8 rounded-full bg-secondary/80 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-md">
                  After
                </div>
              </div>
            </div>

            <div className="absolute inset-y-0 left-1/2 z-10 hidden w-0.5 -translate-x-1/2 bg-white shadow-xl md:block">
              <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-2xl">
                <MdUnfoldMore className="text-xl text-primary" />
              </div>
            </div>

            <div className="absolute bottom-12 left-1/2 mx-4 w-full max-w-md -translate-x-1/2 rounded-xl bg-white/90 px-8 py-6 text-center shadow-2xl backdrop-blur md:mx-0">
              <h3 className="mb-2 font-headline text-xl font-bold text-tertiary">The Penthouse Kitchen</h3>
              <p className="font-body text-sm text-on-surface-variant">
                A complete structural overhaul converting a segmented 1970s layout into a seamless architectural experience.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto mb-32 max-w-screen-2xl px-8">
          <div className="grid auto-rows-[300px] grid-cols-1 gap-8 md:grid-cols-12">
            {galleryItems.map((item) => (
              <div key={item.title} className={`${item.className} group cursor-pointer`}>
                <div className="relative h-full w-full overflow-hidden rounded-xl">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className={`object-cover transition-transform duration-700 group-hover:scale-110 ${item.imageClassName}`}
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-primary/80 to-transparent p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <h4 className={`${item.title === "The Atelier Office" || item.title === "Mist Suite" ? "text-xl" : "text-2xl"} font-headline font-bold text-white`}>
                      {item.title}
                    </h4>
                    <p className="mt-2 font-body text-sm text-white/70">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-screen-2xl rounded-3xl bg-surface-container-low px-8 py-20 text-center">
          <h2 className="mb-6 font-headline text-3xl font-bold text-tertiary md:text-4xl">
            Your Project is Our Next Masterpiece
          </h2>
          <p className="mx-auto mb-10 max-w-xl font-body leading-relaxed text-on-surface-variant">
            We take on a limited number of projects each year to ensure every detail is executed with Atelier-level precision.
          </p>
          <div className="flex flex-col justify-center gap-4 md:flex-row">
            <button className="rounded-lg bg-primary px-10 py-4 font-headline text-sm font-bold tracking-wide text-surface-container-lowest transition-all hover:-translate-y-1 hover:shadow-2xl">
              START THE CONVERSATION
            </button>
            <button className="rounded-lg border border-outline-variant px-10 py-4 font-headline text-sm font-bold tracking-wide text-primary transition-all hover:bg-white">
              DOWNLOAD BROCHURE
            </button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
