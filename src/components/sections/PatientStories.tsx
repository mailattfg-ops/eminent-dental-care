"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/common/SectionHeader";
import { Quote, Music, Users, Briefcase, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const impacts = [
    {
        title: "Rediscovered the Violin",
        content: "I can finally hear the subtle nuances of my music again. It's like a world of color has been restored to my ears.",
        author: "Sarah J.",
        role: "Professional Musician",
        tag: "Music",
        icon: Music,
        delay: 0.1
    },
    {
        title: "Family Dinner Joy",
        content: "No more nodding along without knowing what's being said. I'm back in the conversation with my grandkids.",
        author: "Thomas M.",
        role: "Retired Architect",
        tag: "Family",
        icon: Users,
        delay: 0.2
    },
    {
        title: "Clear Coffee Chats",
        content: "Cafe noise used to be my enemy. Now, I can focus perfectly on my friend's voice across the table.",
        author: "Anjali R.",
        role: "Content Creator",
        tag: "Social",
        icon: Heart,
        delay: 0.3
    },
    {
        title: "Boardroom Confidence",
        content: "The clarity in meetings is life-changing. I don't miss a single detail in high-stakes discussions anymore.",
        author: "David L.",
        role: "Tech Executive",
        tag: "Work",
        icon: Briefcase,
        delay: 0.4
    }
];

export default function PatientStories() {
    return (
        <section className="py-6 lg:py-8 xl:py-12 bg-brand-muted relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full -mr-64 -mt-64 blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full -ml-64 -mb-64 blur-[120px]"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <SectionHeader
                    badge="Sound Impact"
                    title="Wall of Positive"
                    highlightText="Impact"
                    subtitle="Real stories of how professional hearing care transforms daily life into something truly extraordinary."
                    centered
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 xl:gap-6 2xl:gap-8 mt-8 md:mt-10 lg:mt-12">
                    {impacts.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: item.delay }}
                            className="group relative"
                        >
                            {/* Card Container */}
                            <div className="h-full bg-white/60 backdrop-blur-xl border border-white/50 rounded-[2.5rem] p-8 shadow-xl hover:shadow-2xl hover:bg-white transition-all duration-500 flex flex-col justify-between">
                                <div className="space-y-6">
                                    <div className="flex justify-between items-start">
                                        <div className="w-12 h-12 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red">
                                            <item.icon size={24} />
                                        </div>
                                        <div className="px-3 py-1 rounded-full bg-gray-100 text-[10px] font-black uppercase tracking-widest text-gray-500">
                                            {item.tag}
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <h3 className="text-xl font-black text-brand-dark leading-tight group-hover:text-brand-red transition-colors">
                                            {item.title}
                                        </h3>
                                        <div className="relative">
                                            <Quote className="absolute -top-2 -left-1 text-brand-red/10 w-8 h-8 -z-10" />
                                            <p className="text-gray-600 font-medium leading-relaxed italic">
                                                "{item.content}"
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center space-x-4">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-red to-brand-dark flex items-center justify-center text-white font-bold text-xs">
                                        {item.author.split(' ')[0][0]}{item.author.split(' ')[1]?.[0] || ''}
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-brand-dark">{item.author}</p>
                                        <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">{item.role}</p>
                                    </div>
                                </div>

                                {/* Animated Soundwave Accent */}
                                <div className="absolute bottom-8 right-8 flex items-end space-x-0.5 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    {[1, 2, 3, 4].map((i) => (
                                        <motion.div
                                            key={i}
                                            animate={{ height: [4, 12, 6, 16, 4] }}
                                            transition={{ repeat: Infinity, duration: 1, delay: i * 0.1 }}
                                            className="w-0.5 bg-brand-red rounded-full"
                                        ></motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
