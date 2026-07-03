import type { Metadata } from "next";
import MultiStepForm from './MultiStepForm';
import { FaInstagram } from "react-icons/fa";
import { MdContactPhone, MdEmail, MdPhone, MdSchedule, MdSms } from "react-icons/md";
import TrackableLink from '../components/TrackableLink';
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import {
    SITE_URL,
    breadcrumbSchema,
    localBusinessSchema,
} from "../lib/seo";

export const metadata: Metadata = {
    title: "AV Remodeling | Contact Our Remodeling Team",
    description: "Reach out to AV Remodeling to discuss your next project in Atlanta, from remodels and renovations to restoration and exterior work.",
    alternates: {
        canonical: "/contact",
    },
    openGraph: {
        title: "AV Remodeling | Contact Our Remodeling Team",
        description: "Start a conversation about your next project with AV Remodeling in Atlanta and surrounding areas.",
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
                    <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-2 md:items-center lg:gap-24">
                        {/* Left Column: Hero Header + Contact Form Section */}
                        <div>
                            {/* Hero Header Section */}
                            <header className="mb-16">
                                <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-secondary font-label">
                                    Contact AV Remodeling
                                </span>
                                  <h1 className="mb-8 font-headline text-5xl font-extrabold leading-[1.1] tracking-tight text-primary md:text-7xl">
                                     Start a Conversation About Your Home
                                </h1>
                                <p className="max-w-xl text-lg leading-relaxed text-on-surface-variant">
                                     Share a few details about your project and we’ll help shape the next step with clarity, care, and a more refined process.
                                </p>
                            </header>

                            {/* Contact Form: Request a Free Estimate (reemplazado) */}
                            <section className="lg:col-span-7">
                                <div className="bg-surface-container-lowest p-8 md:p-12 rounded-xl border border-outline-variant/10 shadow-[0_20px_40px_rgba(0,12,30,0.04)]">
                                    <header className="mb-12">
                                        <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-tertiary tracking-tight mb-4">Request a Free Estimate</h2>
                                        <p className="text-on-surface-variant text-lg leading-relaxed">Tell us about your project and we'll get back to you as soon as possible.</p>
                                    </header>

                                    <MultiStepForm />
                                </div>
                            </section>
                        </div>

                        {/* Information & Map Section */}
                        <aside className="space-y-16 self-center">
                            {/* Contact Details */}
                            <div className="space-y-12">
                                

                                {/* CTA: Tap the icon to get started */}
                                    <div className="bg-surface-container-lowest p-8 md:p-12 rounded-xl border border-outline-variant/10 shadow-[0_20px_40px_rgba(0,12,30,0.04)] mb-8">
                                        <div className="flex flex-col items-center text-center">
                                            <div className="w-20 h-20 bg-[#25D366]/10 rounded-full flex items-center justify-center mb-6">
                                                <MdContactPhone className="w-10 h-10 text-[#25D366]" />
                                            </div>
                                            <h3 className="font-headline text-2xl font-extrabold text-primary mb-2">Tap the icon below to get started</h3>
                                            <p className="text-on-surface-variant mb-6">Send us a text or use WhatsApp, and our team will help you take the next step for your project. You can also call us directly if that is easier.</p>
                                            <div className="flex items-center justify-center">
                                                <TrackableLink
                                                    href="sms:16788864393?&body=Hello%20AV%20Remodeling,%20I%20would%20like%20to%20talk%20about%20my%20project."
                                                    aria-label="Send a text message"
                                                    className="inline-flex items-center justify-center gap-3 rounded-lg border border-outline-variant bg-surface px-6 py-3 font-headline text-sm font-bold tracking-wide text-primary transition-all hover:-translate-y-1 hover:shadow-2xl"
                                                    action="phone"
                                                >
                                                    <MdSms className="h-5 w-5 shrink-0" />
                                                    Text Us
                                                </TrackableLink>
                                            </div>
                                        </div>
                                    </div>

                                {/* Studio Hours */}
                                    <div className="flex items-start gap-6">
                                    <div className="rounded-xl bg-primary-container/5 p-4">
                                        <MdSchedule className="text-2xl text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="mb-2 font-headline text-xl font-bold text-primary">Hours</h3>
                                        <p className="leading-relaxed text-on-surface-variant">
                                            Monday — Friday
                                            <br />
                                            8:30 AM — 6:00 PM EST
                                        </p>
                                    </div>
                                </div>

                                {/* Direct Contact */}
                                <div className="flex items-start gap-6">
                                    <div className="rounded-xl bg-primary-container/5 p-4">
                                        <MdContactPhone className="text-2xl text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="mb-2 font-headline text-xl font-bold text-primary">CONTACT INFO</h3>
                                        <div className="space-y-4 leading-relaxed text-on-surface-variant">
                                            <div className="flex items-start gap-3">
                                                <MdEmail className="mt-1 text-xl text-primary" />
                                                <a href="mailto:avremodeling37@gmail.com" className="transition-colors hover:text-primary">avremodeling37@gmail.com</a>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <FaInstagram className="mt-1 text-xl text-primary" />
                                                <a href="https://www.instagram.com/avremodelingatl/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">@avremodelingatl</a>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <MdPhone className="mt-1 text-xl text-primary" />
                                                <a href="tel:16788864393" className="transition-colors hover:text-primary">Alejandro Vargas: 678-886-4393</a>
                                            </div>
                                        </div>
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
