"use client";

import Link from "next/link";
import Image from "next/image";
import { companyDetails, navLinks } from "@/data/company";

export default function Footer() {
    return (
        <footer>
            {/* PART 1 — Dark CTA Banner */}
            <div className="bg-[#1a1a1a] py-16 px-6 text-center">
                <h2 className="font-serif text-[26px] md:text-[38px] font-bold text-white leading-tight">
                    Ready for Your Best Smile?
                </h2>
                <p className="text-white/60 text-[15px] mt-3 max-w-md mx-auto">
                    Book a consultation with Dr. Akhila and take the first step towards a healthier, more confident smile.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
                    <Link
                        href="/contact"
                        className="bg-[#c9a84c] text-[#1a1a1a] font-black uppercase tracking-widest px-8 py-4 rounded-full hover:bg-[#b8963e] hover:scale-105 transition-all duration-300"
                    >
                        Book Appointment
                    </Link>
                    <a
                        href={`tel:${companyDetails.phone}`}
                        className="border-2 border-white/30 text-white rounded-full px-8 py-4 font-semibold hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-300"
                    >
                        Call Now
                    </a>
                </div>
            </div>

            {/* PART 2 — Footer Links */}
            <div className="bg-[#111111] py-12 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">

                        {/* Brand */}
                        <div className="col-span-2 lg:col-span-1">
                            <Link href="/" className="inline-block">
                                <Image
                                    src="/Images/logo.svg"
                                    alt="Eminent Dental Care Logo"
                                    width={52}
                                    height={52}
                                    className="object-contain"
                                />
                            </Link>
                            <p className="text-white/50 text-[13px] mt-4 leading-relaxed max-w-[220px]">
                                Providing modern, patient-centered dental care in Tanur, Malappuram.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-white font-bold text-[12px] tracking-[0.15em] uppercase mb-4">
                                Quick Links
                            </h4>
                            <ul className="space-y-3">
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-white/50 hover:text-[#c9a84c] text-[13px] transition-colors duration-200"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Treatments */}
                        <div>
                            <h4 className="text-white font-bold text-[12px] tracking-[0.15em] uppercase mb-4">
                                Treatments
                            </h4>
                            <ul className="space-y-3">
                                {[
                                    { name: "Consultation", href: "/services#dental-consultation-check-ups" },
                                    { name: "Teeth Cleaning", href: "/services#teeth-cleaning-polishing" },
                                    { name: "Teeth Whitening", href: "/services#teeth-whitening-stain-removal" },
                                    { name: "Clear Aligners", href: "/services#clear-aligner-treatment" },
                                    { name: "Pediatric Care", href: "/services#pediatric-dental-care" },
                                ].map((s) => (
                                    <li key={s.name}>
                                        <Link
                                            href={s.href}
                                            className="text-white/50 hover:text-[#c9a84c] text-[13px] transition-colors duration-200"
                                        >
                                            {s.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className="text-white font-bold text-[12px] tracking-[0.15em] uppercase mb-4">
                                Contact
                            </h4>
                            <ul className="space-y-3 text-[13px] text-white/50">
                                <li>{companyDetails.address}</li>
                                <li>
                                    <a
                                        href={`tel:${companyDetails.phone}`}
                                        className="hover:text-[#c9a84c] transition-colors duration-200"
                                    >
                                        {companyDetails.phone}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={`mailto:${companyDetails.email}`}
                                        className="hover:text-[#c9a84c] transition-colors duration-200 break-all"
                                    >
                                        {companyDetails.email}
                                    </a>
                                </li>
                                <li>Mon–Sat: 10:00 AM – 7:00 PM</li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-white/10 pt-6 mt-8 flex flex-col md:flex-row items-center justify-between gap-3">
                        <p className="text-white/30 text-[12px] text-center">
                            © {new Date().getFullYear()} {companyDetails.name} · Reg. No. 23647
                        </p>
                        <div className="flex items-center gap-6">
                            <Link href="/privacy" className="text-white/30 hover:text-[#c9a84c] text-[12px] transition-colors duration-200">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-white/30 hover:text-[#c9a84c] text-[12px] transition-colors duration-200">
                                Terms &amp; Conditions
                            </Link>
                        </div>
                        <a
                            href="https://thinkforgeglobal.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/20 hover:text-[#c9a84c] text-[11px] transition-colors duration-200"
                        >
                            Designed by THINK FORGE GLOBAL
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
