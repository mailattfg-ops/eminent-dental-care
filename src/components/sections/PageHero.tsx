"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PageHeroProps {
    title: string;
    subtitle?: string;
    backgroundImage?: string;
}

export default function PageHero({
    title,
    subtitle,
    backgroundImage = "/Images/dental_hero_bg.webp",
}: PageHeroProps) {
    return (
        <section className="relative h-[60vh] min-h-[380px] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={backgroundImage}
                    alt={title}
                    fill
                    priority
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-white/30" />
            </div>

            {/* Bottom-Left Content */}
            <div className="absolute bottom-0 left-0 right-0 pb-14 pl-10 md:pl-16 z-10">
                <motion.h1
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-serif font-black text-[#c9a84c] uppercase text-[40px] md:text-[62px] leading-[0.95]"
                    style={{ textShadow: "0 2px 20px rgba(0,0,0,0.1)" }}
                >
                    {title}
                </motion.h1>

                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="text-[#1a1a1a] text-[16px] max-w-[480px] mt-3 leading-relaxed"
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>
        </section>
    );
}
