"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, Clock, ArrowLeft, Phone, MessageCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { services, companyDetails } from "@/data/company";

const serviceImages: Record<string, string> = {
    "consultation":         "/Images/dental_consultation.webp",
    "teeth-cleaning":       "/Images/teeth_cleaning.webp",
    "tooth-fillings":       "/Images/composite_fillings.webp",
    "tooth-extraction":     "/Images/surgical_extraction.webp",
    "wisdom-tooth":         "/Images/wisdom_tooth.webp",
    "teeth-whitening":      "/Images/after_smile.webp",
    "clear-aligners":       "/Images/clear_aligners.webp",
    "tooth-replacement":    "/Images/dental_replacement.webp",
    "gum-treatment":        "/Images/gum_treatment.webp",
    "frenectomy":           "/Images/frenectomy.webp",
    "pediatric-care":       "/Images/pediatric_care.webp",
    "sensitivity-treatment":"/Images/sensitivity_relief.webp",
};

export default function ServiceDetailPage() {
    const params = useParams();
    const slug = typeof params.slug === "string" ? params.slug : "";
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        return (
            <div className="min-h-screen bg-white flex flex-col">
                <Navbar />
                <div className="flex-1 flex flex-col items-center justify-center py-32 px-6 text-center">
                    <p className="text-[#c9a84c] text-xs tracking-widest uppercase font-semibold mb-3">404</p>
                    <h1 className="font-serif text-[40px] font-bold text-[#1a1a1a] mb-4">Service Not Found</h1>
                    <p className="text-[#666] mb-8">The treatment page you&apos;re looking for doesn&apos;t exist.</p>
                    <Link
                        href="/services"
                        className="bg-[#c9a84c] text-white font-bold uppercase tracking-widest px-8 py-4 rounded-full hover:bg-[#b8963e] transition-all duration-300 text-[13px]"
                    >
                        View All Services
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    const image = serviceImages[slug] || "/Images/dental_consultation.webp";
    const waUrl = `https://wa.me/91${companyDetails.whatsapp}?text=${encodeURIComponent(`Hi, I'd like to book a consultation for ${service.title}.`)}`;

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* ─── Hero ─── */}
            <section className="relative min-h-[380px] overflow-hidden">
                <Image
                    src={image}
                    alt={service.title}
                    fill
                    priority
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/55" />
                <div className="absolute inset-0 flex flex-col justify-end pb-12 pl-10 md:pl-20">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-[13px] font-medium mb-4 transition-colors"
                        >
                            <ArrowLeft size={14} />
                            All Services
                        </Link>
                        <p className="text-[#c9a84c] text-xs tracking-[0.2em] uppercase font-semibold mb-2">
                            Treatment Overview
                        </p>
                        <h1 className="font-serif font-bold text-white text-[36px] md:text-[52px] leading-tight max-w-2xl">
                            {service.title}
                        </h1>
                        <div className="flex items-center gap-2 mt-3">
                            <Clock size={14} className="text-[#c9a84c]" />
                            <span className="text-white/70 text-[14px]">{service.duration}</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ─── Detail Section ─── */}
            <section className="bg-white py-20 px-6">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-start">

                    {/* LEFT — Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative rounded-2xl overflow-hidden aspect-[4/3]"
                    >
                        <Image
                            src={image}
                            alt={service.title}
                            fill
                            className="object-cover"
                        />
                        {/* Duration badge */}
                        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
                            <Clock size={14} className="text-[#c9a84c]" />
                            <span className="text-[#1a1a1a] text-[12px] font-semibold">{service.duration}</span>
                        </div>
                    </motion.div>

                    {/* RIGHT — Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        <p className="text-[#c9a84c] text-xs tracking-[0.25em] uppercase font-semibold mb-3">
                            About This Treatment
                        </p>
                        <h2 className="font-serif font-bold text-[#1a1a1a] text-[32px] leading-tight mb-5">
                            {service.title}
                        </h2>
                        <p className="text-[#555] text-[16px] leading-[1.9] mb-8">
                            {service.longDesc}
                        </p>

                        {/* Benefits */}
                        <h3 className="font-bold text-[#1a1a1a] text-[16px] mb-4">Key Benefits</h3>
                        <ul className="space-y-3 mb-8">
                            {service.benefits.map((b, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle size={16} className="text-[#c9a84c] shrink-0 mt-0.5" />
                                    <span className="text-[#444] text-[15px]">{b}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Book buttons */}
                        <div className="flex flex-wrap gap-3">
                            <a
                                href={waUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#b8963e] text-white font-bold uppercase tracking-widest px-7 py-3.5 rounded-full transition-all duration-300 text-[13px]"
                            >
                                <MessageCircle size={16} />
                                Book This Treatment
                            </a>
                            <a
                                href={`tel:${companyDetails.phone}`}
                                className="inline-flex items-center gap-2 border-2 border-[#e8e4dc] hover:border-[#c9a84c] text-[#1a1a1a] hover:text-[#c9a84c] font-bold uppercase tracking-widest px-7 py-3.5 rounded-full transition-all duration-300 text-[13px]"
                            >
                                <Phone size={16} />
                                Call Us
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ─── Procedure Steps ─── */}
            <section className="bg-[#faf9f7] py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-[#c9a84c] text-xs tracking-[0.25em] uppercase font-semibold mb-3">
                            What to Expect
                        </p>
                        <h2 className="font-serif font-bold text-[#1a1a1a] text-[36px] leading-tight">
                            The Procedure
                        </h2>
                    </div>

                    <div className="space-y-5">
                        {service.procedure.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-5 bg-white border border-[#e8e4dc] rounded-2xl p-6"
                            >
                                <div className="w-10 h-10 rounded-full bg-[#c9a84c] flex items-center justify-center shrink-0">
                                    <span className="text-white font-bold text-[15px]">{i + 1}</span>
                                </div>
                                <div className="pt-1.5">
                                    <p className="text-[#1a1a1a] text-[15px] font-medium leading-relaxed">{step}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── CTA ─── */}
            <section className="bg-[#1a1a1a] py-16 px-6 relative overflow-hidden">
                <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full border border-white/5 pointer-events-none" />
                <div className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full border border-white/5 pointer-events-none" />

                <div className="max-w-3xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-[#c9a84c] text-xs tracking-[0.25em] uppercase font-semibold mb-3">
                            Ready to Begin?
                        </p>
                        <h2 className="font-serif font-bold text-white text-[32px] md:text-[42px] leading-tight mb-3">
                            Book Your {service.title} Appointment
                        </h2>
                        <p className="text-white/60 text-[15px] mb-8">
                            Mon – Sat · 10:00 AM – 7:00 PM · Parappanagadi Road, Tanur
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href={waUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5c] text-white font-bold uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 text-[13px]"
                            >
                                <MessageCircle size={16} />
                                WhatsApp Us
                            </a>
                            <a
                                href={`tel:${companyDetails.phone}`}
                                className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white font-bold uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/10 text-[13px]"
                            >
                                <Phone size={16} />
                                Call: {companyDetails.phone}
                            </a>
                            <Link
                                href="/services"
                                className="inline-flex items-center border-2 border-white/30 hover:border-white text-white font-bold uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/10 text-[13px]"
                            >
                                View All Services
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </div>
    );
}
