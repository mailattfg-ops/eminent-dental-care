"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/company";
import { useState } from "react";
import BookingModal from "../ui/BookingModal";

const previewImages = [
    "/Images/dental_consultation.webp",
    "/Images/teeth_cleaning.webp",
    "/Images/cosmetic_dentistry.webp",
];

export default function ServicesPreview() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const preview = services.slice(0, 3);

    return (
        <section className="bg-white py-24 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-[#c9a84c] text-xs tracking-[0.25em] uppercase font-semibold mb-3">
                        Our Treatments
                    </p>
                    <h2 className="font-serif text-[28px] md:text-[42px] font-bold text-[#1a1a1a] leading-tight">
                        Expert Dental Care
                    </h2>
                    <p className="text-[#666] max-w-xl mx-auto mt-4 text-[15px] leading-relaxed">
                        From routine check-ups to advanced cosmetic procedures — comprehensive dental solutions for the whole family.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {preview.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.7 }}
                            className="group bg-[#faf9f7] border border-[#e8e4dc] rounded-2xl overflow-hidden hover:-translate-y-1.5 hover:shadow-lg hover:border-[#c9a84c]/30 transition-all duration-300 ease-in-out"
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={previewImages[i]}
                                    alt={service.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="font-serif text-[18px] font-bold text-[#1a1a1a] leading-snug">
                                    {service.title}
                                </h3>
                                <p className="text-[#666] text-[13px] leading-relaxed mt-2">
                                    {service.description}
                                </p>
                                <button
                                    onClick={() => setIsBookingOpen(true)}
                                    className="mt-4 text-[#c9a84c] font-semibold text-[13px] hover:underline flex items-center gap-1"
                                >
                                    Request Consultation →
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-14 text-center">
                    <Link
                        href="/services"
                        className="inline-block border-2 border-[#c9a84c] text-[#c9a84c] font-bold uppercase tracking-widest px-10 py-4 rounded-full hover:bg-[#c9a84c] hover:text-white transition-all duration-300"
                    >
                        View All Treatments
                    </Link>
                </div>
            </div>

            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </section>
    );
}
