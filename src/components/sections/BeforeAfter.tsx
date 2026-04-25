"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cases = [
    {
        treatment: "Teeth Whitening",
        description: "Professional whitening treatment",
        before: "/Images/teeth_cleaning.webp",
        after: "/Images/cosmetic_dentistry.webp",
    },
    {
        treatment: "Clear Aligners",
        description: "Invisible teeth straightening",
        before: "/Images/macro_aesthetic.webp",
        after: "/Images/luxury_dentals.webp",
    },
    {
        treatment: "Smile Makeover",
        description: "Complete aesthetic restoration",
        before: "/Images/gentle_dental_care.webp",
        after: "/Images/professional_dental_surgical.webp",
    },
];

export default function BeforeAfter() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section ref={ref} className="bg-[#faf9f7] py-24 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-14">
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="text-[#c9a84c] text-xs tracking-[0.25em] uppercase font-semibold mb-3"
                    >
                        Real Results
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-serif text-[38px] md:text-[46px] font-bold text-[#1a1a1a] leading-tight"
                    >
                        Before &amp; After
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-[#888] text-[15px] mt-3 max-w-md mx-auto"
                    >
                        See the transformations our patients have experienced with our treatments.
                    </motion.p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {cases.map((c, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            className="bg-white border border-[#e8e4dc] rounded-2xl overflow-hidden group hover:-translate-y-1.5 hover:shadow-lg hover:border-[#c9a84c]/30 transition-all duration-300"
                        >
                            {/* Before half */}
                            <div className="relative h-40 overflow-hidden">
                                <Image
                                    src={c.before}
                                    alt={`Before ${c.treatment}`}
                                    fill
                                    className="grayscale w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/50" />
                                <span className="absolute top-3 left-3 bg-black/60 text-white text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                                    Before
                                </span>
                            </div>

                            {/* Divider */}
                            <div className="h-px bg-[#e8e4dc] relative">
                                <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#c9a84c] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-0.5 rounded-full">
                                    vs
                                </span>
                            </div>

                            {/* After half */}
                            <div className="relative h-40 overflow-hidden">
                                <Image
                                    src={c.after}
                                    alt={`After ${c.treatment}`}
                                    fill
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/10" />
                                <span className="absolute top-3 left-3 bg-[#c9a84c] text-white text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                                    After
                                </span>
                            </div>

                            {/* Label */}
                            <div className="p-5">
                                <p className="font-serif font-bold text-[#1a1a1a] text-[18px]">{c.treatment}</p>
                                <p className="text-[#888] text-[13px] mt-1">{c.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
