"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { CheckCircle, Phone, MessageCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { doctors } from "@/data/company";

export default function DoctorsPage() {
    const gridRef = useRef(null);
    const gridInView = useInView(gridRef, { once: true, margin: "-80px" });
    const profileRef = useRef(null);
    const profileInView = useInView(profileRef, { once: true, margin: "-80px" });
    const ctaRef = useRef(null);
    const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });

    const featured = doctors[0];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* ─── SECTION 1 — Hero ─── */}
            <section className="relative min-h-[420px] overflow-hidden">
                <Image
                    src="/Images/dental_consultation.webp"
                    alt="Our Doctors"
                    fill
                    priority
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/55" />
                <div className="absolute inset-0 flex items-end pb-16 pl-10 md:pl-20">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <p className="text-[#c9a84c] text-xs tracking-[0.2em] uppercase font-semibold mb-3">
                            Our Medical Team
                        </p>
                        <h1 className="font-serif font-bold text-white text-[40px] md:text-[58px] leading-tight">
                            Meet Our Doctors
                        </h1>
                        <p className="text-white/65 text-[16px] max-w-lg mt-3 leading-relaxed">
                            Experienced, caring dental professionals dedicated to your smile and long-term oral health.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ─── SECTION 2 — Doctors Grid ─── */}
            <section ref={gridRef} className="bg-[#faf9f7] py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <p className="text-[#c9a84c] text-xs tracking-[0.2em] uppercase font-semibold mb-3">
                        Our Team of Specialists
                    </p>
                    <h2 className="font-serif font-bold text-[#1a1a1a] text-[32px] mb-3">
                        Dedicated to Your Dental Health
                    </h2>
                    <p className="text-[#555] text-[15px] mb-14 opacity-60">
                        Book directly with any of our specialists
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {doctors.map((doctor, i) => {
                            const visibleSpecs = doctor.specializations.slice(0, 3);
                            const extraCount = doctor.specializations.length - 3;

                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={gridInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: i * 0.15 }}
                                    className="bg-white rounded-2xl overflow-hidden border border-[#e8e4dc] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
                                >
                                    {/* Photo */}
                                    <div className="relative h-72 overflow-hidden bg-gray-100">
                                        <Image
                                            src={doctor.image}
                                            alt={doctor.name}
                                            fill
                                            className="object-cover object-top"
                                        />
                                        <div className="absolute inset-0 bg-[#c9a84c]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                        {/* Qualification badge */}
                                        <span className="absolute top-4 right-4 bg-[#c9a84c] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full">
                                            {doctor.qualification} · {doctor.experience}
                                        </span>

                                        {/* Availability badge */}
                                        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
                                            <span className="text-[11px] font-semibold text-[#1a1a1a]">
                                                Accepting Patients
                                            </span>
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="p-6">
                                        <p className="text-[#c9a84c] text-[10px] tracking-[0.15em] uppercase font-semibold mb-1">
                                            {doctor.role}
                                        </p>
                                        <h3 className="font-serif font-bold text-[#1a1a1a] text-[22px] leading-tight mb-1">
                                            {doctor.name}
                                        </h3>
                                        <p className="text-[#888] text-[13px] mb-4">
                                            {doctor.qualification} · {doctor.experience} · Reg. #{doctor.regNo}
                                        </p>

                                        {/* Specialization pills */}
                                        <div className="flex flex-wrap gap-2 mb-5">
                                            {visibleSpecs.map((spec, s) => (
                                                <span
                                                    key={s}
                                                    className="bg-[#c9a84c]/10 border border-[#c9a84c]/20 text-[#c9a84c] text-[11px] font-semibold px-3 py-1 rounded-full"
                                                >
                                                    {spec}
                                                </span>
                                            ))}
                                            {extraCount > 0 && (
                                                <span className="bg-[#c9a84c]/10 border border-[#c9a84c]/20 text-[#c9a84c] text-[11px] font-semibold px-3 py-1 rounded-full">
                                                    +{extraCount} more
                                                </span>
                                            )}
                                        </div>

                                        <div className="border-t border-[#e8e4dc] mb-5" />

                                        <div className="flex gap-3">
                                            <a
                                                href="#doctor-profile"
                                                className="flex-1 border border-[#c9a84c] text-[#c9a84c] font-semibold text-[13px] py-3 rounded-xl text-center hover:bg-[#c9a84c] hover:text-white transition-all duration-200"
                                            >
                                                View Profile
                                            </a>
                                            <a
                                                href={doctor.whatsapp}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 bg-[#c9a84c] text-white font-bold text-[13px] py-3 rounded-xl text-center hover:bg-[#b8963e] transition-all duration-200"
                                            >
                                                Book Now
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ─── SECTION 3 — Full Doctor Profile ─── */}
            <section
                id="doctor-profile"
                ref={profileRef}
                className="bg-white py-20 px-6 border-t border-[#e8e4dc]"
            >
                <div className="max-w-6xl mx-auto">
                    <div className="mb-12">
                        <p className="text-[#c9a84c] text-xs tracking-[0.2em] uppercase font-semibold mb-3">
                            Doctor Profile
                        </p>
                        <h2 className="font-serif font-bold text-[#1a1a1a] text-[38px] md:text-[46px] leading-tight">
                            About {featured.name}
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-14 items-start">

                        {/* LEFT — Photo + Stats */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={profileInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.1 }}
                        >
                            <div className="relative max-w-sm mx-auto lg:mx-0">
                                <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-[#c9a84c] pointer-events-none z-10" />
                                <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-[#c9a84c] pointer-events-none z-10" />
                                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                                    <Image
                                        src={featured.image}
                                        alt={featured.name}
                                        fill
                                        className="object-cover object-top"
                                    />
                                </div>
                            </div>

                            {/* Stats card */}
                            <div className="bg-[#c9a84c] rounded-2xl p-4 mt-4 max-w-sm mx-auto lg:mx-0">
                                <div className="flex justify-around">
                                    {[
                                        { num: "8+", label: "Years" },
                                        { num: "1000+", label: "Patients" },
                                        { num: `#${featured.regNo}`, label: "Reg No" },
                                    ].map((s, idx) => (
                                        <div key={idx} className="text-center">
                                            <p className="font-bold text-white text-[20px] leading-none">{s.num}</p>
                                            <p className="text-white/70 text-[10px] uppercase tracking-wider mt-1">{s.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* RIGHT — Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={profileInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.25 }}
                        >
                            <p className="text-[#c9a84c] text-xs uppercase tracking-widest mb-2 font-semibold">
                                {featured.role}
                            </p>
                            <h3 className="font-serif font-bold text-[#1a1a1a] text-[26px] md:text-[36px] leading-tight mb-1">
                                {featured.name}
                            </h3>
                            <p className="text-[#888] text-[14px] mb-6">
                                {featured.qualification} · {featured.experience}
                            </p>

                            <p className="text-[#555] text-[15px] leading-relaxed mb-8">
                                {featured.bio}
                            </p>

                            <h4 className="font-bold text-[#1a1a1a] text-[16px] mb-4">Areas of Expertise</h4>
                            <div className="grid grid-cols-2 gap-3">
                                {featured.specializations.map((spec, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle size={16} className="text-[#c9a84c] shrink-0" />
                                        <span className="text-[#444] text-[14px] font-medium">{spec}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-[#e8e4dc] mt-8 mb-8" />

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href={featured.whatsapp}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#c9a84c] text-white font-bold uppercase tracking-widest px-8 py-4 rounded-full hover:bg-[#b8963e] transition-all duration-300 text-[13px]"
                                >
                                    Book Appointment via WhatsApp
                                </a>
                                <a
                                    href={featured.phone}
                                    className="border-2 border-current text-[#1a1a1a] opacity-60 hover:opacity-100 font-bold uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 text-[13px]"
                                >
                                    Call Now
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── SECTION 4 — CTA Banner ─── */}
            <section ref={ctaRef} className="bg-[#1a1a1a] py-20 px-6 relative overflow-hidden">
                <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full border border-white/5 pointer-events-none" />
                <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full border border-white/5 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/[0.03] pointer-events-none" />

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="text-[#c9a84c] text-xs tracking-[0.25em] uppercase font-semibold mb-4">
                            Ready to Get Started?
                        </p>
                        <h2 className="font-serif font-bold text-white text-[38px] md:text-[48px] leading-tight">
                            Book a Consultation Today
                        </h2>
                        <p className="text-white/65 text-[16px] mt-3 mb-10 leading-relaxed">
                            Mon – Sat · 10:00 AM – 7:00 PM<br />
                            Parappanagadi Road, Tanur, Malappuram
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="https://wa.me/919037247022"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5c] text-white font-bold uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg text-[13px]"
                            >
                                <MessageCircle size={18} />
                                Book via WhatsApp
                            </a>
                            <a
                                href="tel:9037247022"
                                className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white font-bold uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/10 text-[13px]"
                            >
                                <Phone size={18} />
                                Call: 9037247022
                            </a>
                            <Link
                                href="/contact"
                                className="inline-flex items-center border-2 border-white/30 hover:border-white text-white font-bold uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/10 text-[13px]"
                            >
                                Contact Us
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
