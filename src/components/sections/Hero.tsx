"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, MapPin } from "lucide-react";
import { companyDetails } from "@/data/company";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] overflow-hidden">
            {/* BACKGROUND IMAGE */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/Images/dental_hero_bg.webp"
                    alt="Dental Clinic Interior"
                    fill
                    priority
                    className="object-cover object-center"
                />
                {/* Mobile: darker uniform. Desktop: fade right */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 md:from-black/60 md:via-black/30 md:to-transparent" />
            </div>

            {/* CONTENT */}
            <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 lg:px-20 flex items-center min-h-[90vh]">
                <div className="w-full flex flex-col md:flex-row items-center pt-24 pb-20 md:py-20">

                    {/* LEFT COLUMN */}
                    <div className="w-full md:max-w-xl">

                        {/* Pill badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0 }}
                            className="mb-8"
                        >
                            <span className="inline-flex items-center border border-white/30 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 text-white text-[12px] tracking-[0.15em] uppercase">
                                ✦ Best Dental Clinic in Malabar
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.9, delay: 0.15 }}
                            className="text-[42px] md:text-[78px] lg:text-[90px] leading-[1.1] tracking-[-0.02em] mb-8"
                        >
                            <span className="block text-white font-light">Your Smile,</span>
                            <span className="block text-[#c9a84c] font-bold italic font-serif">Perfected.</span>
                        </motion.h1>

                        {/* Subtext */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mb-10"
                        >
                            <p className="text-white/70 text-[17px] leading-[1.8] max-w-[420px]">
                                Modern dental care with genuine compassion.
                                <br />
                                {companyDetails.doctorName} — Tanur, Malappuram.
                            </p>
                        </motion.div>

                        {/* Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Link
                                href="/contact"
                                className="bg-[#c9a84c] hover:bg-[#b8963e] text-white font-semibold text-[13px] uppercase tracking-widest px-8 py-4 rounded-full hover:shadow-[0_8px_30px_rgba(201,168,76,0.5)] hover:scale-105 transition-all duration-300"
                            >
                                Book Appointment
                            </Link>
                            <Link
                                href="/services"
                                className="border border-white/40 hover:border-white text-white font-medium text-[13px] uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300"
                            >
                                Our Services
                            </Link>
                        </motion.div>

                        {/* Stats row */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="flex items-center mt-16"
                        >
                            {[
                                { number: "8+", label: "Years Experience" },
                                { number: "1000+", label: "Happy Patients" },
                                { number: "Est. 2016", label: "Tanur, Kerala" },
                            ].map((stat, i) => (
                                <div key={i} className="flex items-center">
                                    {i > 0 && (
                                        <div className="w-px h-8 bg-white/20 mx-3 md:mx-10 shrink-0" />
                                    )}
                                    <div>
                                        <p className="text-white font-bold text-[28px] leading-none">
                                            {stat.number}
                                        </p>
                                        <p className="text-white/50 text-[11px] uppercase tracking-widest mt-1">
                                            {stat.label}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN — Clean Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.35 }}
                        className="w-full md:w-auto md:ml-auto mt-10 md:mt-0"
                    >
                        <div className="bg-white/5 backdrop-blur-sm border border-white/15 rounded-3xl p-8 w-full md:max-w-[300px] md:mx-0 shadow-none">
                            {/* Gold accent line */}
                            <div className="h-1 w-16 bg-[#c9a84c] rounded-full mx-auto mb-6" />

                            <h2 className="font-serif font-bold text-white text-[20px] text-center leading-snug mb-2">
                                Book a Free Checkup
                            </h2>
                            <p className="text-white/70 text-[13px] text-center mb-8">
                                Limited slots available this week
                            </p>

                            <Link
                                href="/contact"
                                className="block w-full bg-[#c9a84c] hover:bg-[#b8963e] text-white font-bold uppercase tracking-widest py-4 rounded-2xl text-[13px] text-center hover:shadow-[0_8px_24px_rgba(201,168,76,0.4)] transition-all duration-300"
                            >
                                Book Appointment →
                            </Link>

                            <hr className="border-white/20 my-6" />

                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Clock size={16} className="text-[#c9a84c] shrink-0" />
                                    <span className="text-white/80 text-[13px]">
                                        10 AM – 7 PM · Mon to Sat
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin size={16} className="text-[#c9a84c] shrink-0" />
                                    <span className="text-white/80 text-[13px]">
                                        Parappanagadi Road, Tanur
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
