"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
    badge?: string; // Kept in interface for compatibility but not rendered
    title: string;
    highlightText?: string;
    subtitle?: string;
    centered?: boolean;
    light?: boolean;
    className?: string;
}

export default function SectionHeader({
    title,
    highlightText,
    subtitle,
    centered = false,
    light = false,
    className
}: SectionHeaderProps) {
    return (
        <div className={cn(
            "max-w-4xl space-y-4 md:space-y-5",
            centered ? "mx-auto text-center" : "text-left",
            className
        )}>
            <div className="space-y-3 md:space-y-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className={cn(
                        "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-serif tracking-tight leading-[1.1] text-balance",
                        light ? "text-white" : "text-brand-navy"
                    )}
                >
                    {title}
                    {highlightText && (
                        <span className="text-brand-gold block md:inline-block md:ml-2">
                            {highlightText}
                        </span>
                    )}
                </motion.h2>

                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className={cn(
                            "text-base md:text-lg lg:text-xl font-medium leading-relaxed max-w-2xl text-pretty",
                            centered && "mx-auto",
                            light ? "text-white/60" : "text-brand-slate/60"
                        )}
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>
            
            {/* Minimal, standard divider */}
            <motion.div 
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 1 }}
                className={cn(
                    "h-[2px] w-16",
                    centered ? "mx-auto" : "ml-0",
                    light ? "bg-white/20" : "bg-brand-gold/30"
                )}
            />
        </div>
    );
}
