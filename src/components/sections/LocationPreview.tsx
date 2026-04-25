"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { companyDetails } from "@/data/company";

const infoRows = [
    {
        icon: MapPin,
        label: "Address",
        value: "Parappanagadi Road, Tanur, Malappuram, Kerala",
    },
    {
        icon: Phone,
        label: "Phone",
        value: companyDetails.phone,
        href: `tel:${companyDetails.phone}`,
    },
    {
        icon: Mail,
        label: "Email",
        value: companyDetails.email,
        href: `mailto:${companyDetails.email}`,
    },
    {
        icon: Clock,
        label: "Hours",
        value: "Mon – Sat: 10:00 AM – 7:00 PM",
    },
];

export default function LocationPreview() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section ref={ref} className="bg-white py-24 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-14">
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="text-[#c9a84c] text-xs tracking-[0.25em] uppercase font-semibold mb-3"
                    >
                        Find Us
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-serif text-[38px] md:text-[46px] font-bold text-[#1a1a1a] leading-tight"
                    >
                        Visit Our Clinic
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 items-stretch">

                    {/* LEFT — Info rows */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7 }}
                        className="flex flex-col justify-between gap-6"
                    >
                        <div className="space-y-5">
                            {infoRows.map((row, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="w-11 h-11 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center shrink-0">
                                        <row.icon size={18} className="text-[#c9a84c]" />
                                    </div>
                                    <div>
                                        <p className="text-[11px] uppercase tracking-widest text-[#888] mb-0.5">
                                            {row.label}
                                        </p>
                                        {row.href ? (
                                            <a
                                                href={row.href}
                                                className="text-[#1a1a1a] text-[15px] font-medium hover:text-[#c9a84c] transition-colors"
                                            >
                                                {row.value}
                                            </a>
                                        ) : (
                                            <p className="text-[#1a1a1a] text-[15px] font-medium">{row.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <a
                            href="https://maps.google.com/?q=Eminent+Dental+Care+Tanur+Malappuram"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 border-2 border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-white font-semibold text-[13px] uppercase tracking-widest px-8 py-3.5 rounded-full transition-all duration-300 self-start"
                        >
                            <MapPin size={15} />
                            Get Directions
                        </a>
                    </motion.div>

                    {/* RIGHT — Map iframe */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="rounded-2xl overflow-hidden border border-[#e8e4dc] min-h-[350px] bg-[#faf9f7]"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.4!2d75.988!3d11.012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAwJzQzLjIiTiA3NcKwNTknMTYuOCJF!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: "350px" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Eminent Dental Care Location"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
