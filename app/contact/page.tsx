import type { Metadata } from "next";
import Image from "next/image";
import { MdLocationOn, MdSchedule, MdAlternateEmail } from "react-icons/md";
import { featuredImages } from "../data/portfolio-images";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import {
    SITE_URL,
    breadcrumbSchema,
    localBusinessSchema,
} from "../lib/seo";

export const metadata: Metadata = {
    title: "AV Remodeling | Contact Atlanta Remodeling Experts",
    description: "Contact AV Remodeling for kitchen, bathroom, flooring, painting, and exterior remodeling services in Atlanta, GA.",
    alternates: {
        canonical: "/contact",
    },
    openGraph: {
        title: "AV Remodeling | Contact Atlanta Remodeling Experts",
        description: "Get a remodeling quote in Atlanta. Speak directly with AV Remodeling experts.",
        url: `${SITE_URL}/contact`,
        type: "website",
    },
};

export default function ContactPage() {
    return (
        <div className="flex min-h-screen flex-col bg-surface text-on-surface selection:bg-secondary-container selection:text-on-secondary-container">
            <SiteHeader active="contact" />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        breadcrumbSchema([
                            { name: "Home", path: "/" },
                            { name: "Contact", path: "/contact" },
                        ]),
                    ),
                }}
            />

            <main className="pt-32 pb-24">
                <div className="mx-auto max-w-screen-2xl px-8 lg:px-12">
                    <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-2 lg:gap-24">
                        {/* Left Column: Hero Header + Contact Form Section */}
                        <div>
                            {/* Hero Header Section */}
                            <header className="mb-16">
                                <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-secondary font-label">
                                    Inquiry
                                </span>
                                <h1 className="mb-8 font-headline text-5xl font-extrabold leading-[1.1] tracking-tight text-tertiary md:text-7xl">
                                    Let&apos;s discuss your architectural vision.
                                </h1>
                                <p className="max-w-xl text-lg leading-relaxed text-on-surface-variant">
                                    Our team specializes in high-precision residential remodeling. Share your project details and we will reach out to schedule a private consultation.
                                </p>
                            </header>

                            {/* Contact Form */}

                            <section className="lg:col-span-7"><div className="bg-surface-container-lowest p-8 md:p-16 rounded-xl border border-outline-variant/10 shadow-[0_20px_40px_rgba(0,12,30,0.04)] flex flex-col items-center text-center">
                                <div className="w-24 h-24 bg-[#25D366]/10 rounded-full flex items-center justify-center mb-8">
                                    <svg className="w-12 h-12 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                                    </svg>
                                </div>
                                <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-tertiary tracking-tight mb-4">Chat with us</h2>
                                <p className="text-on-surface-variant text-lg leading-relaxed mb-10 max-w-md mx-auto">
                                    Start a direct conversation with our expert architects for a faster response.    </p>
                                <a href="https://wa.me/16788864393?text=Hello%20AV%20Remodeling,%20I’m%20interested%20in%20your%20remodeling%20services.%20I’d%20love%20to%20discuss%20my%20project%20and%20get%20more%20information.">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                                    </svg>
                                    Chat on WhatsApp
                                </a>
                            </div></section>
                        </div>

                        {/* Information & Map Section */}
                        <aside className="space-y-16">
                            {/* Contact Details */}
                            <div className="space-y-12">
                                {/* Address */}
                                <div className="flex items-start gap-6">
                                    <div className="rounded-xl bg-primary-container/5 p-4">
                                        <MdLocationOn className="text-2xl text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="mb-2 font-headline text-xl font-bold text-tertiary">The Design Lab</h3>
                                        <address className="not-italic leading-relaxed text-on-surface-variant">
                                            482 Architectural Way, Suite 100
                                            <br />
                                            Atlanta, GA 30301
                                        </address>
                                    </div>
                                </div>

                                {/* Studio Hours */}
                                <div className="flex items-start gap-6">
                                    <div className="rounded-xl bg-primary-container/5 p-4">
                                        <MdSchedule className="text-2xl text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="mb-2 font-headline text-xl font-bold text-tertiary">Studio Hours</h3>
                                        <p className="leading-relaxed text-on-surface-variant">
                                            Monday — Friday
                                            <br />
                                            09:00 AM — 06:00 PM EST
                                        </p>
                                    </div>
                                </div>

                                {/* Direct Contact */}
                                <div className="flex items-start gap-6">
                                    <div className="rounded-xl bg-primary-container/5 p-4">
                                        <MdAlternateEmail className="text-2xl text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="mb-2 font-headline text-xl font-bold text-tertiary">Direct Contact</h3>
                                        <p className="leading-relaxed text-on-surface-variant">
                                            avremodeling37@gmail.com
                                            <br />
                                            +1 (678) 886-4393
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Map Integration Placeholder */}
                            <div className="group relative w-full overflow-hidden rounded-full shadow-sm">
                                <div className="aspect-square">
                                    <Image
                                        alt="minimalist map"
                                        src={featuredImages.contactMap}
                                        fill
                                        className="object-cover filter saturate-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                    />
                                    <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-xl ring-8 ring-primary/20">
                                            <MdLocationOn className="text-xl" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-surface-container-lowest/90 p-4 text-center font-label text-xs font-bold uppercase tracking-wide text-primary backdrop-blur-md">
                                        Open in Maps
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 text-center md:text-left">
                                <a href="/gallery" className="inline-flex items-center gap-2 rounded-full border border-outline-variant px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-secondary transition-colors hover:bg-surface-container-low">
                                    Continue browsing
                                    <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>

            <SiteFooter />
        </div>
    );
}
