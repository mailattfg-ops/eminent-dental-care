"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const reviews = [
    {
        name: "Sarah Ahmed",
        initial: "S",
        review: "The best dental experience I've ever had. Dr. Akhila was incredibly gentle and professional. My teeth whitening results were beyond what I expected — I keep smiling now!",
        treatment: "Teeth Whitening",
    },
    {
        name: "Mohammed Rashid",
        initial: "M",
        review: "I was terrified of dentists before visiting Eminent Dental Care. The team made me feel completely at ease. My root canal was painless and the aftercare was exceptional.",
        treatment: "Root Canal Treatment",
    },
    {
        name: "Priya Nair",
        initial: "P",
        review: "I traveled from Calicut specifically for this clinic after a recommendation, and I'm so glad I did. The clear aligner treatment has transformed my confidence completely.",
        treatment: "Clear Aligners",
    },
];

export default function Testimonials() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section ref={ref} className="bg-white py-24 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-14">
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="text-[#c9a84c] text-xs tracking-[0.25em] uppercase font-semibold mb-3"
                    >
                        Patient Stories
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-serif text-[38px] md:text-[46px] font-bold text-[#1a1a1a] leading-tight"
                    >
                        What Our Patients Say
                    </motion.h2>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {reviews.map((r, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            className="bg-white border border-[#e8e4dc] rounded-2xl p-7 flex flex-col gap-5 hover:-translate-y-1.5 hover:shadow-lg hover:border-[#c9a84c]/30 transition-all duration-300"
                        >
                            {/* Stars */}
                            <div className="flex gap-1">
                                {Array.from({ length: 5 }).map((_, s) => (
                                    <Star key={s} size={16} className="fill-[#c9a84c] text-[#c9a84c]" />
                                ))}
                            </div>

                            {/* Review text */}
                            <p className="text-[#555] text-[14px] leading-[1.85] flex-1">
                                &ldquo;{r.review}&rdquo;
                            </p>

                            {/* Footer */}
                            <div className="flex items-center gap-3 pt-2 border-t border-[#f0ece4]">
                                <div className="w-10 h-10 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/30 flex items-center justify-center shrink-0">
                                    <span className="font-bold text-[#c9a84c] text-[16px]">{r.initial}</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-[#1a1a1a] text-[14px]">{r.name}</p>
                                    <p className="text-[#888] text-[12px]">{r.treatment}</p>
                                </div>
                                <span className="ml-auto text-[11px] font-semibold text-[#c9a84c] bg-[#c9a84c]/10 border border-[#c9a84c]/20 px-2.5 py-1 rounded-full shrink-0">
                                    Verified Patient
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
