"use client";

import React, { useEffect, useRef, useState } from "react";

export default function MultiStepForm() {
    const TOTAL_STEPS = 6;
    const contactApiUrl = "/api/contact";
    const createEmptyForm = () => ({
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

    const [step, setStep] = useState(0);
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const [form, setForm] = useState(createEmptyForm);

    const [errors, setErrors] = useState<Record<string, string>>({});

    const [photos, setPhotos] = useState<File[]>([]);
    const previews = useRef<string[]>([]);

    useEffect(() => {
        validateStep(step);
    }, [form]);

    useEffect(() => {
        return () => {
            previews.current.forEach((url) => URL.revokeObjectURL(url));
        };
    }, []);

    const validateStep = (s: number) => {
        const e: Record<string, string> = {};
        if (s === 0) {
            const fullName = form.fullName.trim();
            const phone = form.phone.trim();
            const email = form.email.trim().toLowerCase();

            if (!fullName) {
                e.fullName = "Please enter your full name.";
            }
            else if (fullName.length < 3) {
                e.fullName = "Your name is too short.";
            }
            else if (fullName.length > 60) {
                e.fullName = "Name is too long.";
            }
            else if (!/^[A-Za-zÀ-ÿ' -]+$/.test(fullName)) {
                e.fullName = "Only letters are allowed.";
            }
            else if (fullName.split(/\s+/).length < 2) {
                e.fullName = "Please enter your first and last name.";
            }

            if (!phone) {
                e.phone = "Please enter a phone number.";
            } else if (!/^[0-9+\-()\s]+$/.test(phone)) {
                e.phone = "Phone number can only contain numbers.";
            } else if (phone.replace(/\D/g, "").length < 7) {
                e.phone = "Phone number is too short.";
            } else if (phone.replace(/\D/g, "").length > 15) {
                e.phone = "Phone number is too long.";
            }     
            if (!email) {
                e.email = "Please enter an email address.";
            }
            else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                e.email = "Enter a valid email address.";
            }
            if (form.address.trim() && form.address.trim().length < 5) {
                e.address = "Address is too short.";
            }
        }
        if (s === 1) {
    if (!form.areas.length) {
        e.areas = "Select at least one area.";
    }
}

    if (s === 2) {
        if (!form.timeline) {
            e.timeline = "Select a timeline.";
        }

        if (!form.property_type) {
            e.property_type = "Select a property type.";
        }

        if (!form.budget) {
            e.budget = "Select a budget.";
        }
    }
    if (s === 3) {
        const description = form.description.trim();
        if (!description) {
            e.description = "Please describe your project.";
        }
        else if (description.length < 30) {
            e.description = "Please provide more details about your project.";
        }
        else if (description.length > 1000) {
            e.description = "Description is too long.";
        }
    }
    if (s === 4) {
        if (!form.referral) {
            e.referral = "Please select how you heard about us.";
        }

        if (!form.consent) {
            e.consent = "You must agree to be contacted.";
        }
    }
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const handleNext = () => {
        if (validateStep(step)) setStep((p) => Math.min(p + 1, TOTAL_STEPS - 1));
    };
    const handleBack = () => setStep((p) => Math.max(p - 1, 0));

    const isFormComplete = () => {
        const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
        return Boolean(
            form.fullName.trim() &&
            form.phone.trim() &&
            form.email.trim() &&
            emailValid &&
            form.areas.length &&
            form.timeline &&
            form.property_type &&
            form.budget &&
            form.description.trim() &&
            form.referral &&
            form.consent
        );
    };

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
        const combined = [...photos, ...allowed].slice(0, 6);
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
        if (!validateStep(3) || !isFormComplete()) return;
        setSubmitting(true);
        setSuccess(false);
        setErrors((prev) => ({ ...prev, submit: "" }));

        try {
            const payload = new FormData();
            Object.entries(form).forEach(([k, v]) => {
                if (Array.isArray(v)) payload.append(k, v.join(", "));
                else payload.append(k, String(v));
            });
            photos.forEach((file) => payload.append('photos', file, file.name));

            const res = await fetch(contactApiUrl, {
                method: 'POST',
                body: payload,
                headers: { Accept: 'application/json' },
                mode: 'cors',
            });

            if (!res.ok) {
                const errorText = await res.text();
                throw new Error(errorText || `Submission failed with status ${res.status}`);
            }

            previews.current.forEach((url) => URL.revokeObjectURL(url));
            previews.current = [];
            setPhotos([]);
            setErrors({});
            setSuccess(true);
            setStep(5);
        } catch (err) {
            console.error(err);
            setErrors({ submit: 'Submission failed. Please try again later.' });
        } finally {
            setSubmitting(false);
        }
    };

const stepPercent =
    step === TOTAL_STEPS - 1
        ? 100
        : Math.round((step / (TOTAL_STEPS - 1)) * 100);

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
                        <h3 className="font-headline font-bold text-xl text-primary border-b border-outline-variant/20 pb-2 mb-4">Contact Information</h3>
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
                            <input
                                value={form.address}
                                onChange={(e) => setForm({ ...form, address: e.target.value })}
                                className="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 apple-input font-body text-on-surface"
                                placeholder="123 Street Name, City, State"
                                aria-invalid={!!errors.address}
                            />    
                            {errors.address && (
                                <div className="text-sm text-destructive mt-1">
                                    {errors.address}
                                </div>
                            )}                    
                        </div>
                        <div className="mt-6 flex justify-end">
                            <button type="button" onClick={handleNext} className="bg-primary text-surface-container-lowest py-3 px-6 rounded-xl font-headline font-bold shadow transition-transform hover:-translate-y-1">Continue →</button>
                        </div>
                    </section>

                    

                    {/* Step 2 */}
                    <section className="w-full min-w-full flex-shrink-0 px-1 md:px-0">
                        <h3 className="font-headline font-bold text-xl text-primary border-b border-outline-variant/20 pb-2 mb-4">Project Information</h3>
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
                            
                        </div>
                        <div className="mt-6 flex justify-between">
                            <button type="button" onClick={handleBack} className="py-3 px-6 rounded-xl border border-outline-variant">← Back</button>
                            <button type="button" onClick={handleNext} className="bg-primary text-surface-container-lowest py-3 px-6 rounded-xl font-headline font-bold shadow transition-transform hover:-translate-y-1">Continue →</button>
                        </div>
                    </section>

                    {/* Step 3 */}
                    <section className="w-full min-w-full flex-shrink-0 px-1 md:px-0">

                        <h3 className="font-headline font-bold text-xl text-primary border-b border-outline-variant/20 pb-2 mb-4">
                        Project Information
                        </h3>

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

                        <div className="mt-6 flex justify-between">

                        <button
                            type="button"
                            onClick={handleBack}
                            className="py-3 px-6 rounded-xl border border-outline-variant"
                        >
                            ← Back
                        </button>

                        <button
                            type="button"
                            onClick={handleNext}
                            className="bg-primary text-surface-container-lowest py-3 px-6 rounded-xl font-headline font-bold"
                        >
                            Continue →
                        </button>

                        </div>

                    </section>

                    {/* Step 4 */}
                    <section className="w-full min-w-full flex-shrink-0 px-1 md:px-0">
                        <h3 className="font-headline font-bold text-xl text-primary border-b border-outline-variant/20 pb-2 mb-4">Project Details</h3>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-secondary">Please describe your project</label>
                            <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 apple-input font-body text-on-surface mt-3" placeholder="Tell us what you'd like to renovate..." rows={5} />
                            {errors.description && (
                                <div className="text-sm text-destructive mt-2">
                                    {errors.description}
                                </div>
                            )}
                        </div>

                        

                        <div className="mt-6 flex justify-between">
                            <button type="button" onClick={handleBack} className="py-3 px-6 rounded-xl border border-outline-variant">← Back</button>
                            <button
                                type="button"
                                onClick={handleNext}
                                className="bg-primary text-surface-container-lowest py-3 px-6 rounded-xl font-headline font-bold shadow transition-transform hover:-translate-y-1"
                            >
                                Continue →
                            </button>                        </div>
                    </section>

                    {/* Step 5 */}
                    <section className="w-full min-w-full flex-shrink-0 px-1 md:px-0">
                        <h3 className="font-headline font-bold text-xl text-primary border-b border-outline-variant/20 pb-2 mb-4">Referral</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {['Google Search','Instagram','Word of Mouth','Yard Sign','Trucks','Other'].map((r) => (
                                <label key={r} className={`flex items-center gap-2 cursor-pointer ${form.referral === r ? 'font-bold' : ''}`}>
                                    <input checked={form.referral === r} onChange={() => setForm({ ...form, referral: r })} className="text-primary focus:ring-primary" name="referral" type="radio" /> <span className="text-sm">{r}</span>
                                </label>
                            ))}
                        </div>

                        <div className="pt-6 border-t border-outline-variant/20">
                            <label className="flex items-start gap-3 rounded-xl border border-outline-variant/20 bg-surface-container-low p-4 text-sm">
                                <input checked={form.consent} onChange={(e) => setForm({ ...form, consent: e.target.checked })} className="mt-1 rounded border-outline text-primary focus:ring-primary" type="checkbox" />
                                <span>I agree to be contacted by AV Remodeling about my project.</span>
                            </label>
                            {errors.consent && <div className="text-sm text-destructive mt-3">{errors.consent}</div>}
                            <div className="flex justify-between mt-6">
                                <button type="button" onClick={handleBack} className="py-3 px-6 rounded-xl border border-outline-variant">← Back</button>
                                <button disabled={!isFormComplete() || submitting} type="submit" className={`py-3 px-6 rounded-xl font-headline font-bold transition-all ${!isFormComplete() || submitting ? 'bg-outline-variant/20 text-on-surface-variant' : 'bg-primary text-surface-container-lowest shadow'}`}>
                                    {submitting ? 'Sending…' : 'Get My Free Estimate'}
                                </button>
                            </div>
                        </div>
                        {errors.submit && <div className="text-sm text-destructive mt-4">{errors.submit}</div>}
                    </section>

                    {/* Step 6 */}
                    <section className="w-full min-w-full flex-shrink-0 px-1 md:px-0">

                        <div className="flex min-h-[420px] flex-col items-center justify-center text-center">

                            <div className="mb-6 text-7xl">
                                ✅
                            </div>

                            <h2 className="font-headline text-4xl font-bold text-primary">
                                Request Submitted!
                            </h2>

                            <p className="mt-6 max-w-xl text-on-surface-variant">
                                Thank you for contacting AV Remodeling.
                                Your request has been received successfully.
                                One of our specialists will contact you as soon as possible.
                            </p>

                            <button
                                type="button"
                                className="mt-10 rounded-xl bg-primary px-8 py-4 font-headline font-bold text-surface-container-lowest"
                                onClick={() => {

                                    setForm(createEmptyForm());

                                    setPhotos([]);

                                    setErrors({});

                                    setSuccess(false);

                                    setStep(0);

                                }}
                            >
                                Submit another request
                            </button>

                        </div>

                    </section>
                </div>
            </div>
        </form>
    );
}
