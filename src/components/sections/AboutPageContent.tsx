"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import PageHero from "@/components/sections/PageHero";
import { companyDetails, facilities } from "@/data/company";
import { motion } from "framer-motion";
import { Heart, Award, Users, Target, Eye, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { doctors } from "@/data/company";

export default function AboutPageContent() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <PageHero
                title="About Us"
                subtitle="Dedicated to creating healthy smiles and confident patients across Tanur and Malappuram."
                backgroundImage="/Images/comfort_dental_lobby.webp"
            />

            {/* Doctor Section */}
            <section className="bg-white py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14">
                        <p className="text-[#c9a84c] text-xs tracking-[0.25em] uppercase font-semibold mb-3">
                            Meet The Founder
                        </p>
                        <h2 className="font-serif text-[28px] md:text-[40px] font-bold text-[#1a1a1a] leading-tight">
                            Dr. Akhila Junoosha C.A
                        </h2>
                        <p className="text-[#666] mt-3 text-[15px]">
                            BDS-qualified dental surgeon with 8+ years of experience in patient-centered dental care.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="space-y-6"
                        >
                            <p className="text-[#555] text-[16px] leading-relaxed">
                                &ldquo;{companyDetails.doctorBio}&rdquo;
                            </p>
                            <p className="text-[#555] text-[15px] leading-relaxed">
                                With a strong commitment to education and preventive dentistry, she aims to help patients achieve healthy and confident smiles through modern, evidence-based treatments and a compassionate approach.
                            </p>

                            <div className="grid grid-cols-2 gap-4 pt-4">
                                {[
                                    { label: "Qualification", value: "BDS Dental Surgeon" },
                                    { label: "Experience", value: "8+ Years" },
                                    { label: "Happy Patients", value: "1000+" },
                                    { label: "Services", value: "12+ Treatments" },
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="bg-[#faf9f7] border border-[#e8e4dc] rounded-2xl p-5"
                                    >
                                        <p className="text-[11px] uppercase tracking-widest text-[#888] mb-1">
                                            {item.label}
                                        </p>
                                        <p className="font-bold text-[#1a1a1a] text-[15px]">{item.value}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Story */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="bg-[#faf9f7] border border-[#e8e4dc] rounded-2xl p-8 space-y-5"
                        >
                            <p className="text-[11px] uppercase tracking-[0.2em] text-[#c9a84c] font-semibold">
                                Our Story
                            </p>
                            <p className="text-[#555] text-[15px] leading-relaxed">
                                {companyDetails.about}
                            </p>
                            <p className="text-[#555] text-[15px] leading-relaxed">
                                With individual attention and a calm atmosphere, we strive to make every dental visit safe, comfortable, and stress-free.
                            </p>
                            <p className="text-[#555] text-[15px] leading-relaxed">
                                At Eminent Dental Care, you are not just a patient — you are part of our family.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="bg-[#faf9f7] py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14">
                        <p className="text-[#c9a84c] text-xs tracking-[0.25em] uppercase font-semibold mb-3">
                            What Drives Us
                        </p>
                        <h2 className="font-serif text-[28px] md:text-[40px] font-bold text-[#1a1a1a] leading-tight">
                            Mission &amp; Vision
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white border-l-4 border-[#c9a84c] border-t border-r border-b border-[#e8e4dc] rounded-2xl p-8"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <Target size={20} className="text-[#c9a84c]" />
                                <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#c9a84c]">
                                    Our Mission
                                </span>
                            </div>
                            <h3 className="font-serif text-[26px] font-bold text-[#1a1a1a] mb-4 leading-tight">
                                Clinical Excellence &amp; Compassionate Care
                            </h3>
                            <p className="text-[#555] text-[15px] leading-relaxed">
                                {companyDetails.mission}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="bg-white border-l-4 border-[#c9a84c] border-t border-r border-b border-[#e8e4dc] rounded-2xl p-8"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <Eye size={20} className="text-[#c9a84c]" />
                                <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#c9a84c]">
                                    Our Vision
                                </span>
                            </div>
                            <h3 className="font-serif text-[26px] font-bold text-[#1a1a1a] mb-4 leading-tight">
                                The Most Trusted Dental Care Provider
                            </h3>
                            <p className="text-[#555] text-[15px] leading-relaxed">
                                {companyDetails.vision}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="bg-white py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14">
                        <p className="text-[#c9a84c] text-xs tracking-[0.25em] uppercase font-semibold mb-3">
                            What We Stand For
                        </p>
                        <h2 className="font-serif text-[28px] md:text-[40px] font-bold text-[#1a1a1a] leading-tight">
                            Our Core Values
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: Heart, title: "Patient-Centered", desc: "We put your comfort, concerns, and goals at the heart of every treatment decision." },
                            { icon: Award, title: "Clinical Excellence", desc: "We uphold the highest standards of dental practice through continuous learning." },
                            { icon: Users, title: "Trust & Integrity", desc: "We build lasting relationships based on honest advice, transparency, and reliable care." },
                        ].map((v, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group bg-white border border-[#e8e4dc] rounded-2xl p-8 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(201,168,76,0.15)] hover:border-[#c9a84c]/40 transition-all duration-300 text-center"
                            >
                                <div className="w-14 h-14 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center mx-auto mb-5">
                                    <v.icon size={24} className="text-[#c9a84c]" />
                                </div>
                                <h3 className="font-serif text-[20px] font-bold text-[#1a1a1a] mb-3">{v.title}</h3>
                                <p className="text-[#666] text-[14px] leading-relaxed">{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Facilities */}
            <section className="bg-[#faf9f7] py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14">
                        <p className="text-[#c9a84c] text-xs tracking-[0.25em] uppercase font-semibold mb-3">
                            Our Clinic
                        </p>
                        <h2 className="font-serif text-[28px] md:text-[40px] font-bold text-[#1a1a1a] leading-tight">
                            Facilities &amp; Standards
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                        {facilities.map((f, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -15 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-start gap-3 bg-white border border-[#e8e4dc] rounded-xl p-4"
                            >
                                <CheckCircle size={18} className="text-[#c9a84c] shrink-0 mt-0.5" />
                                <span className="text-[#555] text-[14px] leading-snug">{f}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Overview */}
            <section className="bg-white py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14">
                        <p className="text-[#c9a84c] text-xs tracking-[0.25em] uppercase font-semibold mb-3">
                            Our Team
                        </p>
                        <h2 className="font-serif text-[28px] md:text-[40px] font-bold text-[#1a1a1a] leading-tight">
                            The People Behind Your Smile
                        </h2>
                        <p className="text-[#666] mt-3 text-[15px] max-w-md mx-auto">
                            Experienced dental professionals committed to your comfort and care.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                        {doctors.map((doctor, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="bg-[#faf9f7] border border-[#e8e4dc] rounded-2xl overflow-hidden text-center hover:-translate-y-1.5 hover:shadow-lg hover:border-[#c9a84c]/30 transition-all duration-300 group"
                            >
                                <div className="relative h-36 overflow-hidden bg-gray-100">
                                    <Image
                                        src={doctor.image}
                                        alt={doctor.name}
                                        fill
                                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-3">
                                    <p className="font-serif font-bold text-[#1a1a1a] text-[13px] leading-tight">
                                        {doctor.name}
                                    </p>
                                    <p className="text-[#c9a84c] text-[10px] font-semibold uppercase tracking-wider mt-0.5">
                                        {doctor.qualification}
                                    </p>
                                    <p className="text-[#888] text-[10px] mt-0.5 leading-tight">
                                        {doctor.role.split(" & ")[0]}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-10">
                        <Link
                            href="/doctors"
                            className="inline-flex items-center border-2 border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-white font-semibold text-[13px] uppercase tracking-widest px-8 py-3.5 rounded-full transition-all duration-300"
                        >
                            Meet Our Full Team
                        </Link>
                    </div>
                </div>
            </section>

            {/* Achievements */}
            <section className="bg-white py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14">
                        <p className="text-[#c9a84c] text-xs tracking-[0.25em] uppercase font-semibold mb-3">
                            By The Numbers
                        </p>
                        <h2 className="font-serif text-[28px] md:text-[40px] font-bold text-[#1a1a1a] leading-tight">
                            Our Achievements
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { number: "Est. 2016", label: "Serving Tanur & Malappuram", desc: "Over a decade of trusted dental care in the heart of Tanur." },
                            { number: "1000+", label: "Happy Patients", desc: "Patients who've walked out with healthier, more confident smiles." },
                            { number: "Reg. #23647", label: "Licensed & Certified", desc: "Fully registered dental practice meeting all Kerala Health Department standards." },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.12 }}
                                className="bg-[#faf9f7] border border-[#e8e4dc] rounded-2xl p-8 text-center hover:-translate-y-1.5 hover:shadow-lg hover:border-[#c9a84c]/30 transition-all duration-300"
                            >
                                <p className="font-serif font-bold text-[#c9a84c] text-[36px] leading-none mb-2">
                                    {item.number}
                                </p>
                                <p className="font-bold text-[#1a1a1a] text-[15px] mb-3">{item.label}</p>
                                <p className="text-[#666] text-[13px] leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </div>
    );
}
