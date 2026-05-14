import type { Metadata } from "next";
import Image from "next/image";
import { MdLocationOn, MdSchedule, MdAlternateEmail, MdArrowForward, MdSend } from "react-icons/md";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = {
    title: "Contact | AV REMODELING",
    description: "Get in touch with the AV Remodeling team to discuss your architectural vision.",
};

export default function ContactPage() {
    return (
        <div className="flex min-h-screen flex-col bg-surface text-on-surface selection:bg-secondary-container selection:text-on-secondary-container">
            <SiteHeader active="contact" />

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
                            <section>
                                <div className="rounded-2xl border border-outline-variant/10 bg-surface-container-lowest p-8 shadow-[0_20px_40px_rgba(0,12,30,0.04)] md:p-12">
                                    <form className="space-y-10">
                                        <div className="space-y-6">
                                            {/* Full Name */}
                                            <div className="group">
                                                <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant font-label" htmlFor="name">
                                                    Full Name
                                                </label>
                                                <input
                                                    className="apple-input w-full rounded-xl border-none bg-surface-container-low px-6 py-4 text-on-surface placeholder:text-outline/50 focus:ring-1 focus:ring-primary"
                                                    id="name"
                                                    name="name"
                                                    placeholder="Johnathan Doe"
                                                    type="text"
                                                />
                                            </div>

                                            {/* Email Address */}
                                            <div className="group">
                                                <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant font-label" htmlFor="email">
                                                    Email Address
                                                </label>
                                                <input
                                                    className="apple-input w-full rounded-xl border-none bg-surface-container-low px-6 py-4 text-on-surface placeholder:text-outline/50 focus:ring-1 focus:ring-primary"
                                                    id="email"
                                                    name="email"
                                                    placeholder="email@domain.com"
                                                    type="email"
                                                />
                                            </div>

                                            {/* Project Vision */}
                                            <div className="group">
                                                <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant font-label" htmlFor="message">
                                                    Project Vision
                                                </label>
                                                <textarea
                                                    className="apple-input w-full resize-none rounded-xl border-none bg-surface-container-low px-6 py-4 text-on-surface placeholder:text-outline/50 focus:ring-1 focus:ring-primary"
                                                    id="message"
                                                    name="message"
                                                    placeholder="Tell us about your space..."
                                                    rows={5}
                                                />
                                            </div>
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            className="group flex w-full items-center justify-center gap-3 rounded-xl bg-primary py-5 font-headline font-bold text-surface-container-lowest transition-all duration-300 hover:bg-primary-container"
                                            type="submit"
                                        >
                                            Send Inquiry
                                            <MdArrowForward className="text-lg transition-transform group-hover:translate-x-1" />
                                        </button>
                                    </form>
                                </div>
                            </section>
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
                                            Metro Heights, NY 10012
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
                                            hello@avremodeling.com
                                            <br />
                                            +1 (555) 012-3456
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Map Integration Placeholder */}
                            <div className="group relative w-full overflow-hidden rounded-full shadow-sm">
                                <div className="aspect-square">
                                    <Image
                                        alt="minimalist map"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1sMNBGgRWZ8He0JZYYuKV4pG_OHNUMZT-AOtqlcqJPsNUPaqVeMi0x-_8XAhzq3vmyxFJerR3sSkcYuL-ZFB7Rh3osYvhRzkQOnhP9pamwpDf1e0k0-W-0JwNWzA992gwETLH8271kE6nQtzQhRTQU9QHn8rS163igBJ7ZLKWb2yZhZ9iuPvQqf-KGMfGeuFaiA2jOistVLGXJCpfRvPjbvoldOw_Cn2nancZnKmHijkXhCWVRYF9fCCxLQyl8wep2r10OPQAy9w"
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
                        </aside>
                    </div>
                </div>
            </main>

            <SiteFooter />
        </div>
    );
}
