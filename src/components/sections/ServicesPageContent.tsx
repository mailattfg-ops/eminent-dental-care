"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import PageHero from "@/components/sections/PageHero";
import ServiceCard from "@/components/common/ServiceCard";
import { services } from "@/data/company";

const serviceImages: Record<number, string> = {
    0: "/Images/dental_consultation.webp",
    1: "/Images/teeth_cleaning.webp",
    2: "/Images/composite_fillings.webp",
    3: "/Images/surgical_extraction.webp",
    4: "/Images/wisdom_tooth.webp",
    5: "/Images/after_smile.webp",
    6: "/Images/clear_aligners.webp",
    7: "/Images/dental_replacement.webp",
    8: "/Images/gum_treatment.webp",
    9: "/Images/frenectomy.webp",
    10: "/Images/pediatric_care.webp",
    11: "/Images/sensitivity_relief.webp",
};

const serviceCategories: Record<number, string> = {
    0: "Preventive",
    1: "Preventive",
    2: "Restorative",
    3: "Surgical",
    4: "Surgical",
    5: "Cosmetic",
    6: "Cosmetic",
    7: "Restorative",
    8: "Surgical",
    9: "Surgical",
    10: "Pediatric",
    11: "Preventive",
};

const tabs = ["All", "Preventive", "Cosmetic", "Restorative", "Surgical", "Pediatric"];

export default function ServicesPageContent() {
    const [activeTab, setActiveTab] = useState("All");

    const filtered = services
        .map((s, i) => ({ ...s, index: i, category: serviceCategories[i] }))
        .filter((s) => activeTab === "All" || s.category === activeTab);

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <PageHero
                title="Our Dental Services"
                subtitle="Comprehensive dental care for the whole family — from routine check-ups to advanced cosmetic procedures."
                backgroundImage="/Images/dental_consultation.webp"
            />

            {/* Filter Tabs + Cards */}
            <section className="bg-white py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-[#c9a84c] text-xs tracking-[0.25em] uppercase font-semibold mb-3">
                            Our Expertise
                        </p>
                        <h2 className="font-serif text-[40px] font-bold text-[#1a1a1a] leading-tight">
                            Specialized Dental Care
                        </h2>
                        <p className="text-[#666] mt-4 text-[15px] leading-relaxed max-w-xl mx-auto">
                            Every treatment delivered with precision, clinical excellence, and a commitment to your lasting oral health.
                        </p>
                    </div>

                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                type="button"
                                onClick={() => setActiveTab(tab)}
                                className={`px-5 py-2 rounded-full text-[13px] font-semibold transition-all duration-300 ${
                                    activeTab === tab
                                        ? "bg-[#c9a84c] text-white"
                                        : "border border-[#e8e4dc] text-[#555] hover:border-[#c9a84c] hover:text-[#c9a84c]"
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Cards Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filtered.map((service) => (
                            <div
                                key={service.index}
                                id={service.title
                                    .toLowerCase()
                                    .replace(/[^a-z0-9]+/g, "-")
                                    .replace(/(^-|-$)/g, "")}
                                className="scroll-mt-28"
                            >
                                <ServiceCard
                                    index={service.index}
                                    title={service.title}
                                    description={service.description}
                                    iconName={service.icon}
                                    imageUrl={serviceImages[service.index]}
                                    category={service.category}
                                    slug={service.slug}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-[#1a1a1a] py-16 px-6 text-center">
                <h2 className="font-serif text-[34px] font-bold text-white">
                    Not sure which treatment you need?
                </h2>
                <p className="text-white/60 text-[15px] mt-3 max-w-md mx-auto">
                    Book a free consultation and Dr. Akhila will guide you to the right solution.
                </p>
                <a
                    href="/contact"
                    className="inline-block mt-8 bg-[#c9a84c] text-[#1a1a1a] font-black uppercase tracking-widest px-10 py-4 rounded-full hover:bg-[#b8963e] transition-all duration-300"
                >
                    Book Free Consultation
                </a>
            </section>

            <Footer />
            <WhatsAppButton />
        </div>
    );
}
