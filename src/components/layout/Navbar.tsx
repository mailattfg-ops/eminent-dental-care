"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, companyDetails } from "@/data/company";
import { Phone } from "lucide-react";
import AnimatedHamburger from "./AnimatedHamburger";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY >= 80);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const isHeroPage = pathname === "/";
    const transparent = isHeroPage && !scrolled;

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 w-full h-[72px] flex items-center px-8 md:px-16 transition-all duration-300 ${
                transparent
                    ? "bg-transparent"
                    : "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100/50"
            }`}
        >
            <div className="w-full flex items-center justify-between">

                {/* LEFT — Logo only */}
                <Link href="/" className="shrink-0">
                    <Image
                        src="/Images/logo.svg"
                        alt="Eminent Dental Care Logo"
                        width={64}
                        height={64}
                        className="object-contain w-16 h-16"
                        priority
                    />
                </Link>

                {/* CENTER — Nav Links */}
                <ul className="hidden lg:flex items-center gap-10">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className={`text-[14px] transition-colors duration-200 ${
                                        transparent
                                            ? isActive
                                                ? "text-[#c9a84c] font-bold"
                                                : "text-white/90 font-medium hover:text-[#c9a84c]"
                                            : isActive
                                            ? "text-[#c9a84c] font-bold"
                                            : "text-[#444] font-medium hover:text-[#c9a84c]"
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* RIGHT — Phone */}
                <div className="flex items-center gap-6 ml-auto lg:ml-0 shrink-0">
                    <div className="hidden lg:flex items-center gap-5">
                        <div className={`h-5 w-px ${transparent ? "bg-white/30" : "bg-gray-200"}`} />
                        <a
                            href={`tel:${companyDetails.phone}`}
                            className="flex items-center gap-2 group"
                        >
                            <Phone size={15} className="text-[#c9a84c]" />
                            <span className={`font-bold text-[14px] group-hover:text-[#c9a84c] transition-colors duration-200 ${transparent ? "text-white" : "text-[#1a1a1a]"}`}>
                                {companyDetails.phone}
                            </span>
                        </a>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        type="button"
                        className={`lg:hidden p-2 rounded-xl ${transparent ? "text-white" : "text-[#1a1a1a]"}`}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        <AnimatedHamburger isOpen={isOpen} />
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-[72px] left-0 w-full z-40 lg:hidden"
                    >
                        <nav className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 mx-4 mt-2 flex flex-col space-y-2">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`text-lg px-4 py-3 rounded-xl transition-colors ${
                                            isActive
                                                ? "text-[#c9a84c] font-bold"
                                                : "text-[#1a1a1a] font-medium hover:bg-gray-50"
                                        }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                            <div className="pt-4 mt-2 border-t border-gray-100">
                                <a
                                    href={`tel:${companyDetails.phone}`}
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-[#1a1a1a] hover:bg-gray-50 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Phone size={18} className="text-[#c9a84c]" />
                                    <span>Call {companyDetails.phone}</span>
                                </a>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
