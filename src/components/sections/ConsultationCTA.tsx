"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight, MessageSquare, Heart, Sparkles } from "lucide-react";
import Link from "next/link";
import { companyDetails } from "@/data/company";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";

export default function ConsultationCTA() {
    return (
        <section className="py-6 md:py-8 lg:py-10 xl:py-12 relative overflow-hidden bg-brand-cream">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row items-stretch bg-brand-navy group">
                    
                    {/* Visual Half - Interactive Before/After Slider */}
                    <div className="lg:w-[45%] relative min-h-[350px] lg:min-h-full overflow-hidden">
                        <BeforeAfterSlider 
                            beforeImage="/Images/before_smile.webp" 
                            afterImage="/Images/after_smile.webp" 
                            beforeLabel="Before Treatment"
                            afterLabel="After Treatment"
                        />
                        {/* Majestic gradients to blend the interactive slider seamlessly into the navy background */}
                        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-brand-navy via-transparent to-transparent pointer-events-none opacity-50" />
                        <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-brand-navy to-transparent pointer-events-none lg:block hidden" />
                    </div>

                    {/* Content Half */}
                    <div className="lg:w-[55%] relative z-10 p-10 md:p-16 lg:p-24 xl:py-32 flex flex-col justify-center">
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            
                            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black font-serif text-white leading-[1.1] mb-8">
                                Ready for a <br />
                                <span className="text-brand-gold italic">Healthier Smile?</span>
                            </h2>
                            
                            <p className="text-white/70 text-base md:text-lg font-medium leading-relaxed italic mb-12 max-w-xl border-l-[3px] border-brand-gold/40 pl-6 lg:pl-8">
                                "Experience dental care that feels like a conversation, not a procedure. Join our family at Eminent Dental Care."
                            </p>

                            <div className="flex flex-col sm:flex-row gap-5">
                                <Link
                                    href="/contact#contact"
                                    className="group/btn relative overflow-hidden bg-brand-gold text-brand-navyDark px-8 py-5 rounded-full font-black text-xs md:text-sm uppercase tracking-[0.2em] transition-all hover:bg-white flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] w-full sm:w-auto"
                                >
                                    <span>Book Appointment</span>
                                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                </Link>

                                <Link
                                    href={`https://wa.me/91${companyDetails.whatsapp}`}
                                    target="_blank"
                                    className="group/wa inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white/10 hover:border-brand-gold text-white px-8 py-5 rounded-full font-black text-xs md:text-sm uppercase tracking-[0.2em] transition-all w-full sm:w-auto hover:bg-brand-gold/5 backdrop-blur-sm"
                                >
                                    <MessageSquare size={18} className="text-brand-gold group-hover/wa:scale-110 transition-transform" />
                                    <span>WhatsApp Us</span>
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Minimal decorative element identifying standard of excellence */}
                    <div className="absolute top-0 right-0 bottom-0 w-[30%] hidden lg:flex items-center justify-end opacity-[0.03] pointer-events-none overflow-hidden">
                        <Heart size={400} className="text-white transform translate-x-1/3" />
                    </div>
                </div>
            </div>
        </section>
    );
}
