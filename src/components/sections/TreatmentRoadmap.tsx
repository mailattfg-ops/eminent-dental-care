"use client";

import { motion } from "framer-motion";
import { facilities } from "@/data/company";
import SectionHeader from "@/components/common/SectionHeader";
import { CheckCircle2 } from "lucide-react";

export default function Facilities() {
    return (
        <section className="py-6 lg:py-8 xl:py-12 relative overflow-hidden bg-brand-navy">
            {/* Decorative gold glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <SectionHeader
                    badge="Our Clinic"
                    title="State-of-the-Art"
                    highlightText="Facilities"
                    subtitle="Designed to provide the highest standard of dental care in a comfortable, modern, and hygienic environment."
                    centered
                    light
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 md:gap-5 lg:gap-6 mt-8 md:mt-10 lg:mt-12 max-w-4xl mx-auto">
                    {facilities.map((facility, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.06 }}
                            className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-gold/30 hover:bg-white/8 transition-all duration-300 group"
                        >
                            <div className="w-8 h-8 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center shrink-0 group-hover:bg-brand-gold group-hover:border-brand-gold transition-all duration-300">
                                <CheckCircle2 size={16} className="text-brand-gold group-hover:text-white transition-colors" />
                            </div>
                            <p className="text-white/70 font-medium text-sm md:text-base leading-relaxed group-hover:text-white transition-colors">
                                {facility}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
