"use client";

import { motion } from "framer-motion";
import { Shield, Sparkles, Heart, Activity, Star, MonitorSmartphone } from "lucide-react";

const features = [
    {
        icon: Shield,
        title: "8+ Years of Clinical Expertise",
        desc: "Dr. Akhila brings deep proven experience to every patient visit",
        delay: 0,
    },
    {
        icon: Sparkles,
        title: "Advanced Sterilization",
        desc: "Autoclave sterilization and strict hygiene for total patient safety",
        delay: 0.1,
    },
    {
        icon: Heart,
        title: "Truly Patient-First",
        desc: "Every treatment decision starts with your comfort and wellbeing",
        delay: 0.2,
    },
    {
        icon: Activity,
        title: "Evidence-Based Treatments",
        desc: "Modern scientifically-backed dental methods and techniques only",
        delay: 0.3,
    },
    {
        icon: Star,
        title: "Family and Child-Friendly",
        desc: "A calm welcoming space designed for patients of all ages",
        delay: 0.4,
    },
    {
        icon: MonitorSmartphone,
        title: "Digital Treatment Planning",
        desc: "Personalized care using modern diagnostic technology",
        delay: 0.5,
    },
];

export default function WhyChooseUs() {
    return (
        <section className="bg-[#faf9f7] py-24 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-[#c9a84c] text-xs tracking-[0.25em] uppercase font-semibold mb-3">
                        Why Choose Us
                    </p>
                    <h2 className="font-serif text-[28px] md:text-[42px] font-bold text-[#1a1a1a] leading-tight">
                        Why Choose Eminent Dental Care
                    </h2>
                    <p className="text-[#666] max-w-xl mx-auto mt-4 text-[15px] leading-relaxed">
                        Six pillars that set us apart — delivering safe, modern, and compassionate dentistry every single visit.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.6, delay: feature.delay }}
                            className="group bg-white border border-[#e8e4dc] rounded-2xl p-8 hover:border-[#c9a84c]/40 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(201,168,76,0.15)] transition-all duration-300 ease-in-out cursor-default"
                        >
                            {/* Icon Circle */}
                            <div className="w-14 h-14 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center">
                                <feature.icon size={24} className="text-[#c9a84c]" />
                            </div>

                            {/* Animated Gold Line */}
                            <div className="mt-4 mb-4 h-0.5 bg-gradient-to-r from-[#c9a84c] to-[#e8c76a] w-0 group-hover:w-full transition-all duration-500" />

                            <h3 className="font-serif text-[20px] font-bold text-[#1a1a1a]">
                                {feature.title}
                            </h3>
                            <p className="text-[#666] text-[14px] leading-relaxed mt-2">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
