import Image from "next/image";
import { MdBathtub, MdHomeWork, MdKitchen } from "react-icons/md";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";

const serviceCards = [
  {
    icon: "kitchen",
    title: "Culinary Masterpieces",
    description:
      "Redefining the heart of your home with custom cabinetry and professional-grade appliances.",
    link: "Explore Kitchens",
  },
  {
    icon: "bathtub",
    title: "Private Spas",
    description:
      "Transforming daily routines into restorative experiences with premium stone and intelligent design.",
    link: "Explore Bathrooms",
  },
  {
    icon: "home_work",
    title: "Full Estates",
    description:
      "Cohesive whole-home renovations that flow seamlessly from room to room, reflecting your personal style.",
    link: "Explore Renovations",
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
      "Av Remodeling didn't just remodel our kitchen; they changed how our family interacts every single morning. The precision is unmatched.",
    name: "Sarah & James L.",
    location: "Greenwich Residence",
  },
  {
    quote:
      "Av Remodeling didn't just remodel our kitchen; they changed how our family interacts every single morning. The precision is unmatched.",
    name: "Marcus Thornton",
    location: "Tribeca Loft",
  },
  {
    quote:
      "Av Remodeling didn't just remodel our kitchen; they changed how our family interacts every single morning. The precision is unmatched.",
    name: "Elena Rodriguez",
    location: "Beverly Hills Estate",
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

      <section className="relative flex h-screen w-full items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Luxury Kitchen"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR67KvuvXo3BxMPFiyoc5_H7pMjGuTaIS8CPx8D1Bg8U2MKPa65MWlQ5BVPoVu68CuQjhnkO2VXdBjDocbLGT3YbMKmT2n_qrPHcjCPWgFeFjEe-A3X465g_5cVD1LWM-dlb0r53BaPRmBrYXiKb00gExC3XohC4nJH6XDZVpgweH3zl4eaaJiIgEyIOvs5prjrh6BsgJhaHByuo6X3YPMgKNlLpRj5d_TInz2SYnM3STsdDexx01ZCvt2Xa-0UfDRYVh-RVBXdP8"
            fill
            priority
            className="object-cover"
            sizes="100vw"
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
              <button className="rounded-md bg-surface-container-lowest px-10 py-4 font-headline text-lg font-bold text-primary transition-colors hover:bg-surface-container-high">
                Get a Free Estimate
              </button>
              <button className="rounded-md border border-surface-container-lowest/30 px-10 py-4 font-headline text-lg font-bold text-surface-container-lowest backdrop-blur-md transition-colors hover:bg-white/10">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-32">
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
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {serviceCards.map((card) => (
              <div key={card.title} className="group">
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
                <a className="inline-flex items-center font-semibold text-primary transition-all hover:gap-2" href="#">
                  {card.link}
                  <span className="ml-2 text-sm">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-32">
        <div className="mx-auto max-w-screen-2xl px-8">
          <h2 className="mb-16 font-headline text-4xl font-bold text-tertiary">Selected Works</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            <ProjectImage
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWbB1kd_dNBrHYedBMIL7qRSsHvvvVGvdzgtCme6ROUv13Z4a-jU2p6TEc2iNIFFcs-EsBbvlGEfp6eepoHs-dx5I02zml3skw-g7lkUL-q7BVWl9mvaVhyQ8qJElZqpdMrlhFkplr1SRRUBaONTjs5cF3xvdgEM1Awe-tEOaW7FdOjbHMS5ZcmIFByL9DOGxiZ9E46Ze-2-cZWmNRcrwCYHCxFPo2WQZymZzK3-aPVJqD_MC3am89izE2AXR7GaBSW-ePBC47bKw"
              alt="Modern Living Room"
              className="group luxury-shadow relative h-[600px] overflow-hidden rounded-xl md:col-span-8"
              overlayClassName="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-12 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            >
              <span className="mb-2 text-xs font-bold uppercase tracking-widest text-secondary">Palo Alto Residence</span>
              <h3 className="font-headline text-3xl font-bold text-white">The Glass Pavilion</h3>
            </ProjectImage>
            <div className="flex flex-col gap-8 md:col-span-4">
              <ProjectImage
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY-3x4x9DaHjTZ4AcZPSbdrqBqJynXv-fKw3oWFzAphgohYmQ4gU3hrVmayxn3olJBAku8mbdXFCBPbpxjEM23zDAYFwb9CRhYS3gTGcz0NkE1ylsjq3V2jTplMvzUtDrUXQEnnHpQu8dZGXUygo5D27FMVU82xkxX-xKIRncGR5DNkBpkaRCMa0FCbA1cTv8WRpAQLNmlJI7WOSKS5UF174sn0NyyZ56gvoIsTNp0On94X4TM5pIV2Gt826wMqJEWm1AlHE95Y5A"
                alt="Luxury Bathroom"
                className="group luxury-shadow relative min-h-[280px] overflow-hidden rounded-xl h-full"
                overlayClassName="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              >
                <h3 className="font-headline text-xl font-bold text-white">Zen Master Suite</h3>
              </ProjectImage>
            </div>
            <ProjectImage
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9BmSEY4f9NYKTInSet_RAxzzIKzwOySJ5DAq3ZtNWHFBBf5d19uaWcYNhBj0DUe7j_4WotFdbImtY2dZPBwJKpehMqF8zZg5m0Ea8JaRGUk1UlXxsi7ROr1MA5dRORYDz-aunM6NurPCtLoxTTmYsyPuJM8e7K7VqgTR-YEtWY6o2Rzl68P7xBwXfohDlW9bfbrNj_Y14WQ5h8NhF7BDrNna59m6dg7hNCZEuBK45MwxI22LoNTNfluITKr-sueT81MJD1o6h84k"
              alt="Kitchen Detail"
              className="group luxury-shadow relative h-[400px] overflow-hidden rounded-xl md:col-span-4"
              overlayClassName="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            >
              <h3 className="font-headline text-xl font-bold text-white">The Atelier Kitchen</h3>
            </ProjectImage>
            <ProjectImage
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrsNdA9lg8Y6MuEiCteuWOgw1vabHH5y4_Wg3xQyggXnAoQUc5o50Ih-0Ca20eLc6AQmqv-oTLo_H-k6FmbUIqAyZSYQY02XQupBCfqOUlrOvNuUOHqXLRwvOeKZlS3sQzcAXnfkZ6LnNJROhFEcIVJu2NwMqqotO7OATdtQGQ8ksaRDLW7eZUxG170D6nhryvoqWRQ8J23ZDHSu8vZGq67XAq0jdsiX6uh1EWo9vrAtHO7XNozQ1jGptDqWF6pbnKvq0kF1rGhPg"
              alt="Full Renovation"
              className="group luxury-shadow relative h-[400px] overflow-hidden rounded-xl md:col-span-8"
              overlayClassName="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            >
              <h3 className="font-headline text-xl font-bold text-white">Bel Air Estate</h3>
            </ProjectImage>
          </div>
        </div>
      </section>

      <section className="bg-surface py-32">
        <div className="mx-auto max-w-screen-2xl px-8">
          <div className="mb-24 text-center">
            <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-secondary font-label">
              The Journey
            </span>
            <h2 className="font-headline text-4xl font-bold text-tertiary md:text-5xl">Our Refined Process</h2>
          </div>
          <div className="relative">
            <div className="relative z-10 grid grid-cols-1 gap-12 md:grid-cols-4">
              {steps.map((step) => (
                <div key={step.number} className="flex flex-col">
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

      <section className="bg-surface-container py-32">
        <div className="mx-auto max-w-screen-2xl px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="flex h-full flex-col justify-between rounded-xl bg-surface-container-lowest p-12 luxury-shadow">
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

      <section className="relative overflow-hidden bg-primary py-40">
        <div className="absolute inset-0 opacity-20">
          <Image
            alt="Luxury Home Detail"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeBERcKkRYBQPgbfnu9sZd70mzPAMKpSAWiXXj7O5x2qyRNrUs6OFFOg60dAfSuu4enrhjtfTnXGP-PAq8RHLGI0poWQpVcd8JWK8R6cBpYbYaM8U4KpMMgd1t7gvumFc_63J3fHJiFU9vuC7pXolsO_vqcDa0zawjIDGZdrqHVwR7FBPU_6eBjFI0y1f1-u-2ciaebLbaExPzzhhsFqT3TN-X-odNMnt8BXawycFeIdCOSOfGuRYxtb92HSq186dNlJ8qOAbPg3I"
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
          <button className="rounded-md bg-secondary px-12 py-5 font-headline text-lg font-bold text-white transition-all duration-300 hover:bg-secondary-container hover:text-on-secondary-container">
            Begin Your Transformation
          </button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
