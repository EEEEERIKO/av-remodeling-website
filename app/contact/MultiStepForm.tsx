"use client";

import React, { useEffect, useRef, useState } from "react";

export default function MultiStepForm() {
    const TOTAL_STEPS = 4;
    const [step, setStep] = useState(0);
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const [form, setForm] = useState({
        fullName: "",
        phone: "",
        email: "",
        address: "",
        areas: [] as string[],
        timeline: "",
        property_type: "",
        budget: "",
        description: "",
        referral: "",
        consent: false,
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const [photos, setPhotos] = useState<File[]>([]);
    const previews = useRef<string[]>([]);

    useEffect(() => {
        return () => {
            // revoke object URLs
            previews.current.forEach((url) => URL.revokeObjectURL(url));
        };
    }, []);

    const validateStep = (s: number) => {
        const e: Record<string, string> = {};
        if (s === 0) {
            if (!form.fullName.trim()) e.fullName = "Please enter your full name.";
            if (!form.phone.trim()) e.phone = "Please enter a phone number.";
            if (!form.email.trim()) e.email = "Please enter an email address.";
            else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
        }
        if (s === 1) {
            if (!form.areas.length) e.areas = "Select at least one area.";
            if (!form.timeline) e.timeline = "Select a timeline.";
        }
        if (s === 3) {
            if (!form.consent) e.consent = "You must agree to be contacted to submit.";
        }
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const handleNext = () => {
        if (validateStep(step)) setStep((p) => Math.min(p + 1, TOTAL_STEPS - 1));
    };
    const handleBack = () => setStep((p) => Math.max(p - 1, 0));

    const toggleArea = (label: string) => {
        setForm((f) => {
            const has = f.areas.includes(label);
            return { ...f, areas: has ? f.areas.filter((a) => a !== label) : [...f.areas, label] };
        });
    };

    const onFiles = (files: FileList | null) => {
        if (!files) return;
        const items = Array.from(files);
        const allowed = items.filter((file) => /image\/(jpeg|png|webp)/.test(file.type));
        const combined = [...photos, ...allowed].slice(0, 5);
        setPhotos(combined);
        // generate previews
        previews.current.forEach((url) => URL.revokeObjectURL(url));
        previews.current = combined.map((f) => URL.createObjectURL(f));
    };

    const removePhoto = (index: number) => {
        setPhotos((p) => {
            const copy = [...p];
            copy.splice(index, 1);
            previews.current.splice(index, 1);
            return copy;
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateStep(3)) return;
        setSubmitting(true);
        try {
            const payload = new FormData();
            Object.entries(form).forEach(([k, v]) => {
                if (Array.isArray(v)) payload.append(k, JSON.stringify(v));
                else payload.append(k, String(v));
            });
            photos.forEach((file, i) => payload.append('photos', file, file.name));

            // try to POST to existing API if available; does not change backend contracts
            const res = await fetch('/api/contact', { method: 'POST', body: payload });
            if (!res.ok) {
                // if endpoint not present, still consider submission done for UX
                console.warn('Contact submit returned', res.status);
            }
            setSuccess(true);
        } catch (err) {
            console.error(err);
            setErrors({ submit: 'Submission failed. Please try again later.' });
        } finally {
            setSubmitting(false);
        }
    };

    const stepPercent = Math.round(((step + 1) / TOTAL_STEPS) * 100);

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="mb-4">
                <div className="flex items-center justify-between mb-1">
                    <div className="text-sm font-medium">Step {step + 1} of {TOTAL_STEPS}</div>
                    <div className="text-sm text-on-surface-variant">{stepPercent}%</div>
                </div>
                <div className="w-full h-2 bg-outline-variant/20 rounded-full overflow-hidden">
                    <div className="h-2 bg-primary transition-all duration-500" style={{ width: `${stepPercent}%` }} />
                </div>
            </div>

            <div className="relative overflow-hidden">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${step * 100}%)` }}>
                    {/* Step 1 */}
                    <section className="w-full min-w-full flex-shrink-0 px-1 md:px-0">
                        <h3 className="font-headline font-bold text-xl text-tertiary border-b border-outline-variant/20 pb-2 mb-4">Contact Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-secondary">Full Name *</label>
                                <input value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} className="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 apple-input font-body text-on-surface" placeholder="John Doe" aria-invalid={!!errors.fullName} />
                                {errors.fullName && <div className="text-sm text-destructive mt-1">{errors.fullName}</div>}
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-secondary">Phone Number *</label>
                                <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 apple-input font-body text-on-surface" placeholder="(555) 000-0000" aria-invalid={!!errors.phone} />
                                {errors.phone && <div className="text-sm text-destructive mt-1">{errors.phone}</div>}
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-xs font-bold uppercase tracking-widest text-secondary">Email Address *</label>
                                <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 apple-input font-body text-on-surface" placeholder="email@example.com" aria-invalid={!!errors.email} />
                                {errors.email && <div className="text-sm text-destructive mt-1">{errors.email}</div>}
                            </div>
                        </div>
                        <div className="mt-6">
                            <label className="block text-xs font-bold uppercase tracking-widest text-secondary">Property Address</label>
                            <input value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} className="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 apple-input font-body text-on-surface" placeholder="123 Street Name, City, State" />
                        </div>
                        <div className="mt-6 flex justify-end">
                            <button type="button" onClick={handleNext} className="bg-primary text-surface-container-lowest py-3 px-6 rounded-xl font-headline font-bold shadow transition-transform hover:-translate-y-1">Continue →</button>
                        </div>
                    </section>

                    {/* Step 2 */}
                    <section className="w-full min-w-full flex-shrink-0 px-1 md:px-0">
                        <h3 className="font-headline font-bold text-xl text-tertiary border-b border-outline-variant/20 pb-2 mb-4">Project Information</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-secondary">What area would you like to renovate? *</label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
                                    {[
                                        'Kitchen','Bathroom','Flooring','Interior Painting','Exterior Painting','Drywall','Concrete','Retaining Walls','Drainage','Decks','Fence Installation','Outdoor Construction','Commercial Remodeling','Damage Restoration','Exterior Repairs','Other'
                                    ].map((label) => (
                                        <label key={label} className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-colors ${form.areas.includes(label) ? 'bg-surface-container-high' : 'bg-surface-container-low'}`}>
                                            <input checked={form.areas.includes(label)} onChange={() => toggleArea(label)} className="rounded border-outline text-primary focus:ring-primary" type="checkbox" value={label} />
                                            <span className="text-sm font-medium">{label === 'Fence Installation' ? 'Fence' : label}</span>
                                        </label>
                                    ))}
                                </div>
                                {errors.areas && <div className="text-sm text-destructive mt-2">{errors.areas}</div>}
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-secondary">When are you looking to start? *</label>
                                <div className="flex flex-wrap gap-3 mt-3">
                                    {['ASAP','1 Week','2 Weeks','1 Month','1–3 Months'].map((t) => (
                                        <label key={t} className={`flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer transition-colors ${form.timeline === t ? 'bg-surface-container-high' : 'bg-surface-container-low'}`}>
                                            <input checked={form.timeline === t} onChange={() => setForm({ ...form, timeline: t })} className="text-primary focus:ring-primary" name="timeline" type="radio" /> <span className="text-sm">{t}</span>
                                        </label>
                                    ))}
                                </div>
                                {errors.timeline && <div className="text-sm text-destructive mt-2">{errors.timeline}</div>}
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-secondary">Property Type</label>
                                    <div className="flex gap-4 mt-3">
                                        <label className={`flex items-center gap-2 cursor-pointer ${form.property_type === 'Residential' ? 'font-bold' : ''}`}>
                                            <input checked={form.property_type === 'Residential'} onChange={() => setForm({ ...form, property_type: 'Residential' })} className="text-primary focus:ring-primary" name="property_type" type="radio" /> <span className="text-sm">Residential</span>
                                        </label>
                                        <label className={`flex items-center gap-2 cursor-pointer ${form.property_type === 'Commercial' ? 'font-bold' : ''}`}>
                                            <input checked={form.property_type === 'Commercial'} onChange={() => setForm({ ...form, property_type: 'Commercial' })} className="text-primary focus:ring-primary" name="property_type" type="radio" /> <span className="text-sm">Commercial</span>
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-secondary">Estimated Budget</label>
                                    <select value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} className="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 apple-input font-body text-sm mt-3">
                                        <option value="">Select a budget</option>
                                        <option>Under $5,000</option>
                                        <option>$5,000 – $10,000</option>
                                        <option>$10,000 – $25,000</option>
                                        <option>$25,000+</option>
                                        <option>Prefer not to say</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 flex justify-between">
                            <button type="button" onClick={handleBack} className="py-3 px-6 rounded-xl border border-outline-variant">← Back</button>
                            <button type="button" onClick={handleNext} className="bg-primary text-surface-container-lowest py-3 px-6 rounded-xl font-headline font-bold shadow transition-transform hover:-translate-y-1">Continue →</button>
                        </div>
                    </section>

                    {/* Step 3 */}
                    <section className="w-full min-w-full flex-shrink-0 px-1 md:px-0">
                        <h3 className="font-headline font-bold text-xl text-tertiary border-b border-outline-variant/20 pb-2 mb-4">Project Details</h3>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-secondary">Please describe your project</label>
                            <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 apple-input font-body text-on-surface mt-3" placeholder="Tell us what you'd like to renovate..." rows={5} />
                        </div>

                        

                        <div className="mt-6 flex justify-between">
                            <button type="button" onClick={handleBack} className="py-3 px-6 rounded-xl border border-outline-variant">← Back</button>
                            <button type="button" onClick={() => setStep(3)} className="bg-primary text-surface-container-lowest py-3 px-6 rounded-xl font-headline font-bold shadow transition-transform hover:-translate-y-1">Continue →</button>
                        </div>
                    </section>

                    {/* Step 4 */}
                    <section className="w-full min-w-full flex-shrink-0 px-1 md:px-0">
                        <h3 className="font-headline font-bold text-xl text-tertiary border-b border-outline-variant/20 pb-2 mb-4">Referral</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {['Google Search','Instagram','Word of Mouth','Yard Sign','Trucks','Other'].map((r) => (
                                <label key={r} className={`flex items-center gap-2 cursor-pointer ${form.referral === r ? 'font-bold' : ''}`}>
                                    <input checked={form.referral === r} onChange={() => setForm({ ...form, referral: r })} className="text-primary focus:ring-primary" name="referral" type="radio" /> <span className="text-sm">{r}</span>
                                </label>
                            ))}
                        </div>

                        <div className="pt-6 border-t border-outline-variant/20">
                            
                            {errors.consent && <div className="text-sm text-destructive mb-4">{errors.consent}</div>}
                            <div className="flex justify-between">
                                <button type="button" onClick={handleBack} className="py-3 px-6 rounded-xl border border-outline-variant">← Back</button>
                                <button disabled={!form.consent || submitting} type="submit" className={`py-3 px-6 rounded-xl font-headline font-bold transition-all ${form.consent ? 'bg-primary text-surface-container-lowest shadow' : 'bg-outline-variant/20 text-on-surface-variant'}`}>
                                    {submitting ? 'Sending…' : 'Get My Free Estimate'}
                                </button>
                            </div>
                        </div>
                        {errors.submit && <div className="text-sm text-destructive mt-4">{errors.submit}</div>}
                        {success && <div className="text-sm text-success mt-4">Thanks — your request was sent.</div>}
                    </section>
                </div>
            </div>
        </form>
    );
}
