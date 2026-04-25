"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { doctors } from "@/data/company";

export default function DoctorPreview() {
    const doctor = doctors[0];

    return (
        <section className="bg-[#faf9f7] py-24 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-14">
                    <p className="text-[#c9a84c] text-xs tracking-[0.25em] uppercase font-semibold mb-3">
                        Meet the Expert
                    </p>
                    <h2 className="font-serif text-[28px] md:text-[42px] font-bold text-[#1a1a1a] leading-tight">
                        Led by an Experienced Dental Surgeon
                    </h2>
                </div>

                {/* Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="bg-white border border-[#e8e4dc] rounded-2xl overflow-hidden shadow-sm max-w-4xl mx-auto flex flex-col md:flex-row"
                >
                    {/* Left — Photo with gold corner frames */}
                    <div className="relative w-full md:w-64 h-72 md:h-auto flex-shrink-0">
                        <Image
                            src={doctor.image}
                            alt={doctor.name}
                            fill
                            className="object-cover object-top"
                        />
                        <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#c9a84c] pointer-events-none z-10" />
                        <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#c9a84c] pointer-events-none z-10" />
                    </div>

                    {/* Right — Content */}
                    <div className="flex-1 p-8 md:p-10">
                        <p className="text-[#c9a84c] text-xs tracking-widest uppercase font-semibold mb-2">
                            {doctor.role}
                        </p>
                        <h3 className="font-serif text-[32px] font-bold text-[#1a1a1a] leading-tight">
                            {doctor.name}
                        </h3>
                        <p className="text-[#888] text-sm mb-6 mt-1">
                            {doctor.qualification} · {doctor.experience}
                        </p>

                        <p className="text-[#555] text-[15px] leading-relaxed mb-8 max-w-lg">
                            {doctor.bio}
                        </p>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-8 mb-8">
                            {[
                                { number: "8+", label: "Years Experience" },
                                { number: "1000+", label: "Happy Patients" },
                                { number: "12+", label: "Treatments" },
                            ].map((s) => (
                                <div key={s.label}>
                                    <p className="text-[#c9a84c] text-2xl font-bold">{s.number}</p>
                                    <p className="text-[#888] text-xs tracking-wider uppercase mt-0.5">{s.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-3">
                            <Link
                                href="/doctors"
                                className="border-2 border-[#c9a84c] text-[#c9a84c] rounded-full px-6 py-3 font-bold text-sm hover:bg-[#c9a84c] hover:text-white transition-all duration-300"
                            >
                                View Full Profile
                            </Link>
                            <Link
                                href="/contact"
                                className="bg-[#c9a84c] text-white rounded-full px-6 py-3 font-bold text-sm hover:bg-[#b8963e] transition-all duration-300"
                            >
                                Book Appointment
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
