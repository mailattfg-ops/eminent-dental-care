"use client";

import { motion } from "framer-motion";
import { Cpu, Activity, Share2, Battery, Wind, Zap } from "lucide-react";

const techFeatures = [
    {
        title: "AI Noise Reduction",
        description: "Deep neural networks that distinguish speech from background noise in real-time for crystal clear conversations.",
        icon: Cpu,
        color: "bg-blue-500/10 text-blue-600"
    },
    {
        title: "Health Monitoring",
        description: "Integrated sensors track physical activity and heart rate, with advanced fall detection alerts for loved ones.",
        icon: Activity,
        color: "bg-red-500/10 text-red-600"
    },
    {
        title: "Universal Sync",
        description: "Hands-free calls and seamless audio streaming from smartphones, tablets, and smart TVs via Bluetooth Low Energy.",
        icon: Share2,
        color: "bg-purple-500/10 text-purple-600"
    },
    {
        title: "Edge Computing",
        description: "On-board processing that instantly adapts to complex environments, providing a natural listening experience.",
        icon: Zap,
        color: "bg-yellow-500/10 text-yellow-600"
    },
    {
        title: "Eco-Recharge",
        description: "High-capacity lithium-ion technology providing 24+ hours of life with a convenient 30-minute fast charge.",
        icon: Battery,
        color: "bg-green-500/10 text-green-600"
    },
    {
        title: "Tinnitus Relief",
        description: "Built-in sound therapy generators that provide customizable relief and management for ringing in the ears.",
        icon: Wind,
        color: "bg-teal-500/10 text-teal-600"
    },
    {
        title: "Speech Enhancement",
        description: "Precision amplification of soft speech sounds while suppressing background noise for effortless listening.",
        icon: Activity,
        color: "bg-indigo-500/10 text-indigo-600"
    },
    {
        title: "Wind Suppression",
        description: "High-speed digital processing that detects and eliminates wind noise for outdoor clarity.",
        icon: Zap,
        color: "bg-cyan-500/10 text-cyan-600"
    },
    {
        title: "Binaural Sync",
        description: "High-speed data exchange between aids for synchronized volume, program changes, and spatial sound direction.",
        icon: Share2,
        color: "bg-orange-500/10 text-orange-600"
    }
];

export default function TechShowcase() {
    return (
        <section id="technology" className="py-6 lg:py-8 xl:py-12 bg-brand-muted">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 xl:gap-6 2xl:gap-8 mt-8 md:mt-10 lg:mt-12">
                    {techFeatures.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-8 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-red/20 transition-all duration-500"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${tech.color} flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300`}>
                                <tech.icon size={28} />
                            </div>
                            <h3 className="text-xl font-black text-brand-dark mb-4 group-hover:text-brand-red transition-colors">
                                {tech.title}
                            </h3>
                            <p className="text-gray-600 font-medium leading-relaxed text-sm">
                                {tech.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
