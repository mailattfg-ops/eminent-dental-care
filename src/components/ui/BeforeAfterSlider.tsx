"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeftRight } from "lucide-react";

interface BeforeAfterSliderProps {
    beforeImage: string;
    afterImage: string;
    beforeLabel?: string;
    afterLabel?: string;
}

export default function BeforeAfterSlider({
    beforeImage,
    afterImage,
    beforeLabel = "Before",
    afterLabel = "After"
}: BeforeAfterSliderProps) {
    const [sliderPos, setSliderPos] = useState(50);

    return (
        <div className="relative w-full h-full min-h-[350px] overflow-hidden group select-none">
            {/* After Image (Background) */}
            <div className="absolute inset-0">
                <Image src={afterImage || "/Images/fallback.webp"} alt="After Treatment" fill className="object-cover pointer-events-none" priority />
            </div>

            {/* Before Image (Foreground overlay clipped) */}
            <div 
                className="absolute inset-0 z-10"
                style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
            >
                <Image src={beforeImage || "/Images/fallback.webp"} alt="Before Treatment" fill className="object-cover pointer-events-none" priority />
            </div>

            {/* Slider Line & Handle */}
            <div className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none" style={{ left: `calc(${sliderPos}% - 2px)` }}>
                <div className="absolute top-1/2 -mt-6 -ml-4 w-9 h-12 bg-white rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.3)] flex items-center justify-center border border-brand-navy/10 transition-transform duration-200">
                    <ArrowLeftRight size={18} className="text-brand-navy" strokeWidth={2.5} />
                </div>
            </div>

            {/* Hidden native input for perfect scrubbing mechanics */}
            <input 
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 z-30 cursor-ew-resize m-0 touch-none py-10"
            />
            
            {/* Labels overlay */}
            <div className="absolute top-4 left-4 z-40 bg-black/40 backdrop-blur-md text-white text-[10px] md:text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {beforeLabel}
            </div>
            <div className="absolute top-4 right-4 z-40 bg-black/40 backdrop-blur-md text-white text-[10px] md:text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {afterLabel}
            </div>
        </div>
    );
}
