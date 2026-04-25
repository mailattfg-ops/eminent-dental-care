"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const bentoConfig = [
    {
        title: "Expert Surgery",
        desc: "Clinical precision in every procedure.",
        span: "col-span-1 md:col-span-2 lg:col-span-1 row-span-1 lg:row-span-2",
        image: "/Images/professional_dental_surgical.webp",
        layout: "tall",
    },
    {
        title: "Sterilization",
        desc: "Advanced hygiene protocols.",
        span: "col-span-1 md:col-span-2 lg:col-span-1 row-span-1",
        image: "/Images/teeth_cleaning.webp",
        layout: "standard",
    },
    {
        title: "Comfort First",
        desc: "Patient-friendly environment.",
        span: "col-span-1 md:col-span-2 lg:col-span-1 row-span-1",
        image: "/Images/comfort_dental_lobby.webp",
        layout: "standard",
    },
    {
        title: "Digital Planning",
        desc: "Personalized treatment.",
        span: "col-span-1 md:col-span-2 lg:col-span-1 row-span-1 lg:row-span-2",
        image: "/Images/luxury_dentals.webp",
        layout: "tall",
    },
    {
        title: "Comprehensive Treatments",
        desc: "Preventive, restorative, and aesthetic procedures tailored for you.",
        span: "col-span-1 md:col-span-4 lg:col-span-2 row-span-1",
        image: "/Images/macro_aesthetic.webp",
        layout: "wide",
    },
    {
        title: "Pain-Conscious Care",
        desc: "Gentle dental care.",
        span: "col-span-1 md:col-span-2 lg:col-span-1 row-span-1",
        image: "/Images/gentle_dental_care.webp",
        layout: "standard",
    },
    {
        title: "Ethical Practice",
        desc: "Highest standards of clinical evidence and personalized care.",
        span: "col-span-1 md:col-span-2 lg:col-span-3 row-span-1",
        image: "/Images/dental_hero_bg.webp",
        layout: "wide",
    },
];

export default function Facilities() {
    return (
        <section className="bg-[#faf9f7] py-24 px-6" id="facilities">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-[#c9a84c] text-xs tracking-[0.25em] uppercase font-semibold mb-3">
                        Our Clinic
                    </p>
                    <h2 className="font-serif text-[28px] md:text-[42px] font-bold text-[#1a1a1a] leading-tight">
                        State-of-the-Art Facilities
                    </h2>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[220px] md:auto-rows-[260px] gap-4 md:gap-5">
                    {bentoConfig.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.97, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.5, delay: idx * 0.08 }}
                            className={cn(
                                "relative bg-white border border-[#e8e4dc] rounded-2xl overflow-hidden group hover:scale-[1.02] transition-transform duration-300",
                                item.span
                            )}
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-5">
                                <h4 className="text-white font-serif font-bold text-lg leading-tight">
                                    {item.title}
                                </h4>
                                <p className="text-white/75 text-xs mt-1">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
