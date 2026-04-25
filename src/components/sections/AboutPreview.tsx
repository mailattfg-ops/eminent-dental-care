"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";

const bullets = [
    "8+ years of clinical experience in Tanur, Kerala",
    "Advanced cosmetic & restorative treatments",
    "Sterilized, child-friendly, anxiety-free environment",
    "Personalised care with transparent pricing",
];

export default function AboutPreview() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section ref={ref} className="bg-white py-24 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                {/* LEFT — Text */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-[#c9a84c] text-xs tracking-[0.25em] uppercase font-semibold mb-4">
                        Who We Are
                    </p>
                    <h2 className="font-serif text-[38px] md:text-[46px] font-bold text-[#1a1a1a] leading-[1.15] mb-6">
                        A Clinic Built on<br />
                        <span className="italic text-[#c9a84c]">Trust & Compassion</span>
                    </h2>
                    <p className="text-[#555] text-[16px] leading-[1.9] mb-8 max-w-[480px]">
                        At Eminent Dental Care, we believe every patient deserves a calm, comfortable, and dignified dental experience. Founded in 2016, our clinic combines modern technology with a genuine personal touch.
                    </p>

                    <ul className="space-y-4 mb-10">
                        {bullets.map((item, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                                className="flex items-start gap-3"
                            >
                                <CheckCircle size={18} className="text-[#c9a84c] shrink-0 mt-0.5" />
                                <span className="text-[#444] text-[15px]">{item}</span>
                            </motion.li>
                        ))}
                    </ul>

                    <Link
                        href="/about"
                        className="inline-flex items-center border-2 border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-white font-semibold text-[13px] uppercase tracking-widest px-8 py-3.5 rounded-full transition-all duration-300"
                    >
                        Learn More About Us
                    </Link>
                </motion.div>

                {/* RIGHT — Image with corner accents */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="relative"
                >
                    <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                        <Image
                            src="/Images/comfort_dental_lobby.webp"
                            alt="Eminent Dental Care Clinic Interior"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    {/* Gold corner accents */}
                    <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-[#c9a84c] rounded-tl-xl pointer-events-none" />
                    <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-[#c9a84c] rounded-tr-xl pointer-events-none" />
                    <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-2 border-l-2 border-[#c9a84c] rounded-bl-xl pointer-events-none" />
                    <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-[#c9a84c] rounded-br-xl pointer-events-none" />

                    {/* Floating badge */}
                    <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-[#e8e4dc] px-6 py-4">
                        <p className="font-bold text-[#1a1a1a] text-[22px] leading-none">Est. 2016</p>
                        <p className="text-[#888] text-[12px] mt-1">Tanur, Kerala</p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
