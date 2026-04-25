"use client";

import { motion } from "framer-motion";
import {
    Stethoscope, Sparkles, Shield, Activity, Zap, Sun,
    AlignCenter, LayoutGrid, Heart, Scissors, Star, Wind,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import BookingModal from "@/components/ui/BookingModal";

const IconMap: Record<string, React.ElementType> = {
    Stethoscope, Sparkles, Shield, Activity, Zap, Sun,
    AlignCenter, LayoutGrid, Heart, Scissors, Star, Wind,
};

interface ServiceCardProps {
    title: string;
    description: string;
    iconName: string;
    imageUrl?: string;
    index: number;
    category?: string;
    slug?: string;
}

export default function ServiceCard({ title, description, iconName, imageUrl, index, category, slug }: ServiceCardProps) {
    const Icon = IconMap[iconName] || Stethoscope;
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (index % 3) * 0.1, duration: 0.7 }}
            className="group bg-[#faf9f7] border border-[#e8e4dc] rounded-2xl overflow-hidden flex flex-col h-full hover:-translate-y-1.5 hover:shadow-lg hover:border-[#c9a84c]/30 transition-all duration-300 ease-in-out"
        >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={imageUrl || "/Images/fallback.webp"}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {category && (
                    <div className="absolute top-3 left-3 bg-[#c9a84c] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                        {category}
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon size={16} className="text-[#c9a84c]" />
                    </div>
                    <h3 className="font-serif text-[18px] font-bold text-[#1a1a1a] leading-snug">
                        {title}
                    </h3>
                </div>
                <p className="text-[#666] text-[13px] leading-relaxed flex-1">
                    {description}
                </p>
                <div className="mt-4 flex items-center gap-4">
                    <button
                        type="button"
                        onClick={() => setIsBookingOpen(true)}
                        className="text-[#c9a84c] font-semibold text-[13px] hover:underline text-left"
                    >
                        Book Now →
                    </button>
                    {slug && (
                        <Link
                            href={`/services/${slug}`}
                            className="text-[#888] font-semibold text-[13px] hover:text-[#c9a84c] transition-colors"
                        >
                            Learn More
                        </Link>
                    )}
                </div>
            </div>

            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </motion.div>
    );
}
