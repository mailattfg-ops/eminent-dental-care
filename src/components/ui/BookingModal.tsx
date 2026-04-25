"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, User, Hash, Phone } from "lucide-react";
import { companyDetails } from "@/data/company";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
    // Lock background scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    // Close on ESC key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    // Form state
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        date: "",
        time: "",
        phone: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Format the message for WhatsApp
        const message = `✨ *Hearing Test Appointment* ✨
----------------------------
👤 *Name:* ${formData.name}
🔢 *Age:* ${formData.age}
📞 *Phone:* ${formData.phone}
📅 *Date:* ${formData.date}
⏰ *Time:* ${formData.time}
----------------------------`;

        // Encode the message for URL
        const encodedMessage = encodeURIComponent(message);

        // WhatsApp URL (using the number from ConsultationCTA)
        const whatsappUrl = `https://wa.me/91${companyDetails.whatsapp}?text=${encodedMessage}`;

        // Redirect to WhatsApp
        window.open(whatsappUrl, "_blank");

        onClose();
    };

    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-[95%] sm:w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-xl xl:max-w-2xl bg-white rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[2rem] shadow-2xl overflow-hidden border border-brand-gold/10 my-4 max-h-[90vh] overflow-y-auto"
                    >
                        {/* Header */}
                        <div className="bg-brand-navy p-6 text-white relative">
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 lg:top-6 lg:right-6 p-1.5 sm:p-2 hover:bg-white/20 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-6 lg:h-6" />
                            </button>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-3xl font-black font-serif mb-1 pr-8 sm:pr-0">Book Appointment</h2>
                            <p className="text-sm sm:text-base md:text-lg lg:text-base xl:text-base text-white/70 font-medium italic">Your journey to a healthier smile starts here.</p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="p-6 sm:p-8 md:p-10 lg:p-8 xl:p-8 flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-5">
                            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-4">
                                {/* Name */}
                                <div className="space-y-1.5 sm:space-y-2 lg:space-y-1.5">
                                    <label className="text-[10px] sm:text-xs md:text-sm lg:text-[11px] xl:text-xs font-black uppercase tracking-widest text-brand-dark/40 ml-1">Patient Name</label>
                                    <div className="relative group">
                                        <div className="absolute left-3 sm:left-4 lg:left-4 top-1/2 -translate-y-1/2 text-brand-red/50 group-focus-within:text-brand-red transition-colors flex items-center justify-center">
                                            <User className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-5 lg:h-5 xl:w-5 xl:h-5" />
                                        </div>
                                        <input
                                            required
                                            type="text"
                                            placeholder="Enter patient's full name"
                                            className="w-full bg-brand-muted border-2 border-transparent focus:border-brand-red/20 focus:bg-white rounded-xl sm:rounded-2xl lg:rounded-2xl py-3 sm:py-4 lg:py-3.5 xl:py-3.5 pl-10 sm:pl-12 md:pl-14 lg:pl-12 xl:pl-12 pr-4 outline-none transition-all font-bold text-brand-dark text-sm sm:text-base md:text-lg lg:text-base xl:text-base"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-4">
                                    {/* Age */}
                                    <div className="space-y-1.5 sm:space-y-2 lg:space-y-1.5">
                                        <label className="text-[10px] sm:text-xs md:text-sm lg:text-[11px] xl:text-xs font-black uppercase tracking-widest text-brand-dark/40 ml-1">Age</label>
                                        <div className="relative group">
                                            <div className="absolute left-3 sm:left-4 lg:left-4 top-1/2 -translate-y-1/2 text-brand-red/50 group-focus-within:text-brand-red transition-colors flex items-center justify-center">
                                                <Hash className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-5 lg:h-5 xl:w-5 xl:h-5" />
                                            </div>
                                            <input
                                                required
                                                type="number"
                                                placeholder="Age"
                                                className="w-full bg-brand-muted border-2 border-transparent focus:border-brand-red/20 focus:bg-white rounded-xl sm:rounded-2xl lg:rounded-2xl py-3 sm:py-4 lg:py-3.5 xl:py-3.5 pl-10 sm:pl-12 md:pl-14 lg:pl-12 xl:pl-12 pr-4 outline-none transition-all font-bold text-brand-dark text-sm sm:text-base md:text-lg lg:text-base xl:text-base"
                                                value={formData.age}
                                                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="space-y-1.5 sm:space-y-2 lg:space-y-1.5">
                                        <label className="text-[10px] sm:text-xs md:text-sm lg:text-[11px] xl:text-xs font-black uppercase tracking-widest text-brand-dark/40 ml-1">Phone Number</label>
                                        <div className="relative group">
                                            <div className="absolute left-3 sm:left-4 lg:left-4 top-1/2 -translate-y-1/2 text-brand-red/50 group-focus-within:text-brand-red transition-colors flex items-center justify-center">
                                                <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-5 lg:h-5 xl:w-5 xl:h-5" />
                                            </div>
                                            <input
                                                required
                                                type="tel"
                                                placeholder="Phone Number"
                                                className="w-full bg-brand-muted border-2 border-transparent focus:border-brand-red/20 focus:bg-white rounded-xl sm:rounded-2xl lg:rounded-2xl py-3 sm:py-4 lg:py-3.5 xl:py-3.5 pl-10 sm:pl-12 md:pl-14 lg:pl-12 xl:pl-12 pr-4 outline-none transition-all font-bold text-brand-dark text-sm sm:text-base md:text-lg lg:text-base xl:text-base"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-4">
                                    {/* Date */}
                                    <div className="space-y-1.5 sm:space-y-2 lg:space-y-1.5">
                                        <label className="text-[10px] sm:text-xs md:text-sm lg:text-[11px] xl:text-xs font-black uppercase tracking-widest text-brand-dark/40 ml-1">Preferred Date</label>
                                        <div className="relative group">
                                            <div className="absolute left-3 sm:left-4 lg:left-4 top-1/2 -translate-y-1/2 text-brand-red/50 group-focus-within:text-brand-red transition-colors pointer-events-none flex items-center justify-center">
                                                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-5 lg:h-5 xl:w-5 xl:h-5" />
                                            </div>
                                            <input
                                                required
                                                type="date"
                                                className="w-full bg-brand-muted border-2 border-transparent focus:border-brand-red/20 focus:bg-white rounded-xl sm:rounded-2xl lg:rounded-2xl py-3 sm:py-4 lg:py-3.5 xl:py-3.5 pl-10 sm:pl-12 md:pl-14 lg:pl-12 xl:pl-12 pr-4 outline-none transition-all font-bold text-brand-dark appearance-none text-sm sm:text-base md:text-lg lg:text-base xl:text-base min-h-[48px] sm:min-h-[56px] md:min-h-[64px] lg:min-h-[52px] xl:min-h-[52px]"
                                                value={formData.date}
                                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    {/* Time */}
                                    <div className="space-y-1.5 sm:space-y-2 lg:space-y-1.5">
                                        <label className="text-[10px] sm:text-xs md:text-sm lg:text-[11px] xl:text-xs font-black uppercase tracking-widest text-brand-dark/40 ml-1">Preferred Time</label>
                                        <div className="relative group">
                                            <div className="absolute left-3 sm:left-4 lg:left-4 top-1/2 -translate-y-1/2 text-brand-red/50 group-focus-within:text-brand-red transition-colors pointer-events-none flex items-center justify-center">
                                                <Clock className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-5 lg:h-5 xl:w-5 xl:h-5" />
                                            </div>
                                            <input
                                                required
                                                type="time"
                                                className="w-full bg-brand-muted border-2 border-transparent focus:border-brand-red/20 focus:bg-white rounded-xl sm:rounded-2xl lg:rounded-2xl py-3 sm:py-4 lg:py-3.5 xl:py-3.5 pl-10 sm:pl-12 md:pl-14 lg:pl-12 xl:pl-12 pr-4 outline-none transition-all font-bold text-brand-dark text-sm sm:text-base md:text-lg lg:text-base xl:text-base min-h-[48px] sm:min-h-[56px] md:min-h-[64px] lg:min-h-[52px] xl:min-h-[52px]"
                                                value={formData.time}
                                                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-brand-navy hover:bg-brand-gold text-white py-4 sm:py-5 lg:py-4 xl:py-4 rounded-xl sm:rounded-2xl lg:rounded-2xl font-black text-base sm:text-lg md:text-xl lg:text-lg xl:text-lg transition-all transform hover:-translate-y-1 shadow-xl hover:shadow-brand-gold/20 mt-2 md:mt-4 lg:mt-3"
                            >
                                Confirm Appointment
                            </button>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
}
