"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        q: "How often should I visit the dentist?",
        a: "We recommend a routine dental check-up and cleaning every 6 months. Regular visits help detect problems early, prevent cavities, and maintain healthy gums. If you have specific concerns, we can tailor a schedule that works for you.",
    },
    {
        q: "Is teeth whitening safe?",
        a: "Yes — professional teeth whitening performed by a qualified dentist is completely safe. At Eminent Dental Care, we use clinically approved whitening agents with proper protocols to ensure effective and safe results with minimal sensitivity.",
    },
    {
        q: "Are clear aligners better than traditional braces?",
        a: "Clear aligners offer comfort, aesthetics, and convenience — you can remove them while eating and brushing. They work well for mild to moderate alignment issues. In some complex cases, traditional braces may be recommended. Dr. Akhila will assess and advise the best option for you.",
    },
    {
        q: "How do I care for my teeth after a dental procedure?",
        a: "After any dental procedure, our team will provide specific aftercare instructions tailored to your treatment. Generally, avoid very hot or cold foods immediately after, maintain gentle oral hygiene, and attend any follow-up appointments as scheduled.",
    },
    {
        q: "Is dental treatment painful?",
        a: "Modern dentistry has made procedures significantly more comfortable. We use local anaesthesia to ensure pain-free treatment. Our clinic is designed to be calm and patient-friendly, and Dr. Akhila practices gentle, pain-conscious dental care throughout every procedure.",
    },
];

function AccordionItem({
    question,
    answer,
    isOpen,
    onClick,
}: {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}) {
    return (
        <div className="border-b border-[#e8e4dc]">
            <button
                type="button"
                onClick={onClick}
                className="w-full py-5 flex items-center justify-between text-left"
            >
                <span
                    className={`font-bold text-[16px] transition-colors duration-200 ${
                        isOpen ? "text-[#c9a84c]" : "text-[#1a1a1a]"
                    }`}
                >
                    {question}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-[#c9a84c] shrink-0 ml-4"
                >
                    <ChevronDown size={22} />
                </motion.div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="text-[#666] text-[15px] leading-relaxed pb-5 pr-8">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="bg-white py-24 px-6">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="text-center mb-14">
                    <p className="text-[#c9a84c] text-xs tracking-[0.25em] uppercase font-semibold mb-3">
                        FAQs
                    </p>
                    <h2 className="font-serif text-[28px] md:text-[42px] font-bold text-[#1a1a1a] leading-tight">
                        Your Questions, Answered
                    </h2>
                    <p className="text-[#666] mt-4 text-[15px] leading-relaxed">
                        Quick, honest answers to your most common dental questions.
                    </p>
                </div>

                {/* Accordion */}
                <div>
                    {faqs.map((faq, idx) => (
                        <AccordionItem
                            key={idx}
                            question={faq.q}
                            answer={faq.a}
                            isOpen={openIndex === idx}
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                        />
                    ))}
                </div>

                <p className="text-center text-[#888] text-sm mt-10">
                    Still have questions?{" "}
                    <Link href="/contact#contact" className="text-[#c9a84c] font-semibold hover:underline">
                        Speak to Dr. Akhila directly
                    </Link>
                </p>
            </div>
        </section>
    );
}
