"use client";

import { motion } from "framer-motion";
import { Award, Smile, ShieldCheck, Clock, Users, Stethoscope } from "lucide-react";

const trustStats = [
    {
        icon: Award,
        value: "8+",
        label: "Years of Excellence",
    },
    {
        icon: Smile,
        value: "1000+",
        label: "Happy Smiles",
    },
    {
        icon: ShieldCheck,
        value: "100%",
        label: "Sterilization Standards",
    },
    {
        icon: Stethoscope,
        value: "12+",
        label: "Dental Treatments",
    },
    {
        icon: Users,
        value: "Family",
        label: "Friendly Clinic",
    },
    {
        icon: Clock,
        value: "Mon–Sat",
        label: "10 AM – 7 PM",
    },
];

export default function TrustBadges() {
    return (
        <section className="bg-brand-navy py-8 lg:py-10 xl:py-12 relative overflow-hidden">
            {/* Gold shimmer accents */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

            <div className="container mx-auto px-4 md:px-6">
                {/* "Trusted by" label */}
                <div className="flex items-center justify-center w-full gap-4 md:gap-8 mb-8 opacity-60 px-4">
                    <div className="hidden sm:flex items-center gap-1.5 flex-1 justify-end">
                        <div className="w-1 h-1 bg-brand-gold rounded-full"></div>
                        <div className="h-[1px] w-full max-w-[100px] bg-gradient-to-r from-transparent to-brand-gold/50"></div>
                    </div>
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-white/60 whitespace-nowrap">
                        Why Choose Eminent Dental
                    </span>
                    <div className="hidden sm:flex items-center gap-1.5 flex-1 justify-start">
                        <div className="h-[1px] w-full max-w-[100px] bg-gradient-to-l from-transparent to-brand-gold/50"></div>
                        <div className="w-1 h-1 bg-brand-gold rounded-full"></div>
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
                    {trustStats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.5 }}
                            className="flex flex-col items-center text-center space-y-2 group"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all duration-300 shadow-lg shadow-brand-gold/10">
                                <stat.icon size={22} strokeWidth={1.8} />
                            </div>
                            <p className="text-xl md:text-2xl font-black text-white leading-none">
                                {stat.value}
                            </p>
                            <p className="text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-widest leading-tight">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
