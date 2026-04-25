"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
    Activity, 
    Search, 
    Headset, 
    Settings, 
    Heart, 
    ChevronLeft, 
    ChevronRight 
} from "lucide-react";

import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

const steps = [
    {
        title: "Hearing Test",
        description: "A comprehensive diagnostic evaluation using state-of-the-art equipment to define your hearing profile.",
        icon: Activity,
    },
    {
        title: "Expert Analysis",
        description: "Your results are analyzed by specialists, providing a clear explanation of your hearing health.",
        icon: Search,
    },
    {
        title: "Tech Trial",
        description: "Experience the difference with a hands-on trial of our premium, high-tech hearing aids.",
        icon: Headset,
    },
    {
        title: "Precision Fitting",
        description: "Advanced programming and fitting to ensure maximum comfort and optimized performance.",
        icon: Settings,
    },
    {
        title: "Lifetime Care",
        description: "Continuous follow-ups and dedicated support to ensure your journey is always exceptional.",
        icon: Heart,
    },
];

const AUTO_PLAY_INTERVAL = 5000; // 5 seconds

export default function Roadmap() {
    const [activeStep, setActiveStep] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    // Track timer locally to reset it on click
    const [lastInteraction, setLastInteraction] = useState<number | null>(null);

    useEffect(() => {
        setLastInteraction(Date.now());
    }, []);

    const nextStep = useCallback(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
    }, [steps.length]);

    const handleStepClick = (index: number) => {
        setActiveStep(index);
        setLastInteraction(Date.now()); // Restart timer on click
    };

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isAutoPlaying && lastInteraction !== null) {
            interval = setInterval(nextStep, AUTO_PLAY_INTERVAL);
        }
        return () => clearInterval(interval);
    }, [isAutoPlaying, nextStep, lastInteraction]);

    return (
        <div className="max-w-4xl mx-auto">
            {/* Horizontal Stepper UI */}
            <div className="relative mb-12">
                {/* Background Connector Bar */}
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0 hidden md:block"></div>

                {/* Progress Bar (Animated) */}
                <motion.div
                    className="absolute top-1/2 left-0 h-0.5 bg-brand-red -translate-y-1/2 z-0 hidden md:block"
                    initial={{ width: "0%" }}
                    animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
                    transition={{ duration: 0.5 }}
                />

                <div className="relative flex justify-between items-center z-10 px-2 md:px-0 mt-8 md:mt-10 lg:mt-12">
                    {steps.map((step, index) => {
                        const isActive = activeStep === index;
                        const isCompleted = index < activeStep;

                        return (
                            <div key={index} className="flex flex-col items-center">
                                <button
                                    onClick={() => handleStepClick(index)}
                                    aria-label={`View step ${index + 1}: ${step.title}`}
                                    aria-current={isActive ? "step" : undefined}
                                    className={cn(
                                        "w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center transition-all duration-500 relative overflow-hidden",
                                        isActive
                                            ? "bg-brand-red text-white shadow-xl shadow-brand-red/20 scale-110"
                                            : isCompleted
                                                ? "bg-white text-brand-red border-2 border-brand-red shadow-sm"
                                                : "bg-white text-gray-300 border-2 border-gray-100 hover:border-gray-200"
                                    )}
                                >
                                    <step.icon size={isActive ? 28 : 22} />
                                    {/* Auto-play progress indicator inside the active icon circle */}
                                    {isActive && isAutoPlaying && (
                                        <svg key={lastInteraction} className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
                                            <motion.circle
                                                cx="50%"
                                                cy="50%"
                                                r="45%"
                                                fill="none"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeDasharray="100 100"
                                                initial={{ pathLength: 0 }}
                                                animate={{ pathLength: 1 }}
                                                transition={{ duration: AUTO_PLAY_INTERVAL / 1000, ease: "linear" }}
                                            />
                                        </svg>
                                    )}
                                </button>
                                <span className={cn(
                                    "mt-3 text-[8px] md:text-xs font-black uppercase tracking-wider whitespace-nowrap",
                                    isActive ? "text-brand-red" : "text-gray-400"
                                )}>
                                    Step {index + 1}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Interactive Content Card */}
            <div className="min-h-[180px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeStep}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-[3rem] p-6 md:p-10 border border-gray-100 relative overflow-hidden group"
                    >
                        {/* Decorative Background Icon */}
                        <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                            {(() => {
                                const Icon = steps[activeStep].icon;
                                return <Icon size={240} />;
                            })()}
                        </div>

                        <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-[2rem] bg-brand-red/5 flex items-center justify-center text-brand-red shrink-0">
                                {(() => {
                                    const Icon = steps[activeStep].icon;
                                    return <Icon size={32} className="md:w-10 md:h-10" />;
                                })()}
                            </div>
                            <div className="space-y-2 md:space-y-3">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                    <span className="px-3 py-1 rounded-full bg-brand-red/10 text-brand-red text-[10px] font-black uppercase tracking-[0.1em] whitespace-nowrap">
                                        Step 0{activeStep + 1}
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-black text-brand-dark leading-none mb-0">
                                        {steps[activeStep].title}
                                    </h3>
                                </div>
                                <p className="text-gray-600 text-sm md:text-lg font-medium leading-relaxed max-w-2xl">
                                    {steps[activeStep].description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Helper (Mobile) */}
            <div className="mt-4 flex justify-center space-x-4 sm:hidden">
                <button
                    disabled={activeStep === 0}
                    onClick={() => setActiveStep(prev => prev - 1)}
                    aria-label="Previous step"
                    className="p-3 rounded-full bg-white border border-gray-100 text-brand-red disabled:opacity-30"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    disabled={activeStep === steps.length - 1}
                    onClick={() => setActiveStep(prev => prev + 1)}
                    aria-label="Next step"
                    className="p-3 rounded-full bg-white border border-gray-100 text-brand-red disabled:opacity-30"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    );
}
