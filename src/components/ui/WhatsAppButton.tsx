"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { companyDetails } from "@/data/company";

export default function WhatsAppButton() {
    const [hovered, setHovered] = useState(false);
    const message = encodeURIComponent(
        `Hi ${companyDetails.name}, I'd like to book a dental consultation.`
    );
    const waUrl = `https://wa.me/91${companyDetails.whatsapp}?text=${message}`;

    return (
        <div
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Text Pill */}
            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white rounded-full shadow-lg px-4 py-2 whitespace-nowrap"
                    >
                        <span className="text-[#1a1a1a] text-[13px] font-medium">
                            Have questions? WhatsApp Us →
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Green Circle Button */}
            <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:shadow-green-500/30 hover:-translate-y-1 transition-all duration-300"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle size={28} fill="white" strokeWidth={0} />
            </a>
        </div>
    );
}
