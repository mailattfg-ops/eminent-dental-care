"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/components/common/ServiceCard";
import SectionHeader from "@/components/common/SectionHeader";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const features = [
    {
        title: "Invisible Tech",
        description: "Completely-in-Canal (CIC) models that are virtually undetectable.",
        icon: "Zap",
        image: "/Images/invesiable_tech.webp",

    },
    {
        title: "Smart Sync",
        description: "Direct streaming from your smartphone for calls, music, and more.",
        icon: "Smartphone",
        image: "/Images/sync.webp",

    },
    {
        title: "All-Day Power",
        description: "Advanced rechargeable batteries that last from morning to night.",
        icon: "BatteryCharging",
        image: "/Images/All-Day Power.webp",

    }
];

export default function FeaturedSolutions() {
    return (
        <section className="py-6 lg:py-8 xl:py-12 bg-brand-muted relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <SectionHeader
                    badge="Top Recommendations"
                    title="Featured Hearing"
                    highlightText="Solutions"
                    subtitle="Explore our most advanced technology, carefully chosen for exceptional daily performance and comfort."
                    centered
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 xl:gap-6 2xl:gap-8 mt-8 md:mt-10 lg:mt-12">
                    {features.map((feature, index) => (
                        <ServiceCard
                            key={index}
                            index={index}
                            title={feature.title}
                            description={feature.description}
                            iconName={feature.icon}
                            imageUrl={feature.image}
                        />
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-8 text-center"
                >
                    <Link
                        href="/services#technology"
                        className="inline-flex items-center lg:px-10 lg:py-5 px-5 py-2.5 md:px-6 md:py-3 bg-brand-dark text-white text-xs md:text-base lg:text-lg xl:text-xl font-bold rounded-full hover:bg-brand-red transition-all shadow-xl hover:shadow-brand-red/20 transform hover:-translate-y-1 group space-x-2 md:space-x-3"
                    >
                        <span>Explore All Technology</span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>

        </section>
    );
}
