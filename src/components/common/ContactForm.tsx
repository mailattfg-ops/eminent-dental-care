"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { companyDetails, services } from "@/data/company";
import { CheckCircle2 } from "lucide-react";

function ContactFormInner() {
    const searchParams = useSearchParams();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        service: "",
        requirement: "",
    });

    useEffect(() => {
        const serviceParam = searchParams.get("service");
        if (serviceParam) {
            setFormData((prev) => ({ ...prev, service: decodeURIComponent(serviceParam) }));
        }
    }, [searchParams]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const message = `Hello ${companyDetails.name},\nI would like to book a dental consultation.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nService needed: ${formData.service || "General Inquiry"}\nMessage: ${formData.requirement}`;
        const waUrl = `https://wa.me/91${companyDetails.whatsapp}?text=${encodeURIComponent(message)}`;
        window.open(waUrl, "_blank");
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    const inputClass =
        "w-full border border-[#e8e4dc] rounded-xl px-4 py-3 text-[#1a1a1a] text-[15px] focus:border-[#c9a84c] focus:outline-none focus:ring-1 focus:ring-[#c9a84c]/20 transition-all bg-white placeholder:text-[#bbb]";

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                    <label className="text-[12px] font-bold uppercase tracking-widest text-[#888]">
                        Full Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClass}
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-[12px] font-bold uppercase tracking-widest text-[#888]">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 90372 47022"
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClass}
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-[12px] font-bold uppercase tracking-widest text-[#888]">
                    Treatment Required
                </label>
                <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className={`${inputClass} cursor-pointer appearance-none`}
                >
                    <option value="">Select Treatment</option>
                    {services.map((s) => (
                        <option key={s.title} value={s.title}>
                            {s.title}
                        </option>
                    ))}
                    <option value="General Inquiry">General Inquiry</option>
                </select>
            </div>

            <div className="space-y-2">
                <label className="text-[12px] font-bold uppercase tracking-widest text-[#888]">
                    Message
                </label>
                <textarea
                    name="requirement"
                    rows={4}
                    required
                    placeholder="Tell us about your dental concerns..."
                    value={formData.requirement}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                />
            </div>

            <button
                type="submit"
                disabled={isSubmitted}
                className={`w-full font-bold uppercase tracking-widest py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-[14px] ${
                    isSubmitted
                        ? "bg-green-600 text-white"
                        : "bg-[#c9a84c] hover:bg-[#b8963e] text-white"
                }`}
            >
                {isSubmitted ? (
                    <>
                        <CheckCircle2 size={20} />
                        <span>Message Sent!</span>
                    </>
                ) : (
                    "Send WhatsApp Enquiry"
                )}
            </button>
            <p className="text-center text-[11px] text-[#888] uppercase tracking-widest">
                We usually respond within a few hours
            </p>
        </form>
    );
}

export default function ContactForm() {
    return (
        <Suspense
            fallback={
                <div className="h-[400px] flex items-center justify-center text-[#888]">
                    Loading Form...
                </div>
            }
        >
            <ContactFormInner />
        </Suspense>
    );
}
