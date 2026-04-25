"use client";

import { MapPin, Phone, Mail, Clock, ExternalLink, MessageCircle } from "lucide-react";
import ContactForm from "@/components/common/ContactForm";
import { companyDetails } from "@/data/company";
import { motion } from "framer-motion";

export default function ContactSection() {
    const waUrl = `https://wa.me/91${companyDetails.whatsapp}?text=${encodeURIComponent(`Hi ${companyDetails.name}, I'd like to book a dental consultation.`)}`;

    return (
        <section className="bg-white py-24 px-6" id="contact">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-[#c9a84c] text-xs tracking-[0.25em] uppercase font-semibold mb-3">
                        Get In Touch
                    </p>
                    <h2 className="font-serif text-[42px] font-bold text-[#1a1a1a] leading-tight">
                        Book Your Appointment
                    </h2>
                    <p className="text-[#666] mt-4 text-[15px] leading-relaxed max-w-lg mx-auto">
                        Dr. Akhila and our team are ready to help you achieve a healthy, confident smile.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* LEFT — Contact Info */}
                    <div className="space-y-6">
                        {/* Info Cards */}
                        {[
                            {
                                icon: MapPin,
                                title: "Clinic Address",
                                detail: "Parappanagadi Road, Tanur, Opp. Eminent Electricals, 676302",
                            },
                            {
                                icon: Phone,
                                title: "Call / WhatsApp",
                                detail: `+91 ${companyDetails.phone}`,
                                href: `tel:${companyDetails.phone}`,
                            },
                            {
                                icon: Mail,
                                title: "Email Us",
                                detail: companyDetails.email,
                                href: `mailto:${companyDetails.email}`,
                            },
                            {
                                icon: Clock,
                                title: "Working Hours",
                                detail: "Mon–Sat: 10:00 AM – 7:00 PM | Sundays by Appointment",
                            },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                className="bg-[#faf9f7] border border-[#e8e4dc] rounded-2xl p-6 flex items-start gap-4"
                            >
                                <div className="w-10 h-10 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center shrink-0">
                                    <item.icon size={18} className="text-[#c9a84c]" />
                                </div>
                                <div>
                                    <p className="text-[11px] font-bold uppercase tracking-widest text-[#888] mb-1">
                                        {item.title}
                                    </p>
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            className="font-semibold text-[#1a1a1a] text-[15px] hover:text-[#c9a84c] transition-colors"
                                        >
                                            {item.detail}
                                        </a>
                                    ) : (
                                        <p className="font-semibold text-[#1a1a1a] text-[15px] leading-snug">
                                            {item.detail}
                                        </p>
                                    )}
                                </div>
                            </motion.div>
                        ))}

                        {/* Quick Action Buttons */}
                        <div className="flex flex-wrap gap-3 pt-2">
                            <a
                                href={`tel:${companyDetails.phone}`}
                                className="flex items-center gap-2 bg-[#1a1a1a] text-white rounded-full px-5 py-3 text-[13px] font-bold hover:bg-[#333] transition-colors duration-300"
                            >
                                <Phone size={15} />
                                Call Now
                            </a>
                            <a
                                href={waUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-[#25D366] text-white rounded-full px-5 py-3 text-[13px] font-bold hover:bg-[#1eb85a] transition-colors duration-300"
                            >
                                <MessageCircle size={15} />
                                WhatsApp
                            </a>
                            <a
                                href={`mailto:${companyDetails.email}`}
                                className="flex items-center gap-2 border border-[#e8e4dc] text-[#1a1a1a] rounded-full px-5 py-3 text-[13px] font-bold hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-300"
                            >
                                <Mail size={15} />
                                Email
                            </a>
                        </div>

                        {/* Google Map */}
                        <div className="relative h-52 rounded-2xl overflow-hidden border border-[#e8e4dc]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.123456789!2d75.86720!3d10.98840!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDU5JzE4LjIiTiA3NcKwNTInMDIuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                                width="100%"
                                height="100%"
                                title="Eminent Dental Care location"
                                allowFullScreen
                                className="absolute inset-0 border-0"
                            />
                            <a
                                href="https://maps.google.com/?q=Tanur,+Malappuram,+Kerala+676302"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute bottom-3 right-3 bg-white rounded-xl p-2 shadow-md hover:bg-[#c9a84c] hover:text-white transition-all duration-300 text-[#1a1a1a]"
                            >
                                <ExternalLink size={16} />
                            </a>
                        </div>
                    </div>

                    {/* RIGHT — Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="bg-white border border-[#e8e4dc] rounded-2xl shadow-sm p-8"
                    >
                        <h3 className="font-serif text-[28px] font-bold text-[#1a1a1a] mb-2">
                            Send an Enquiry
                        </h3>
                        <p className="text-[#888] text-[14px] mb-8 leading-relaxed">
                            We&apos;ll connect with you on WhatsApp within a few hours to schedule your visit.
                        </p>
                        <ContactForm />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
