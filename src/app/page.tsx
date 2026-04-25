"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Hero from "@/components/sections/Hero";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ServicesPreview from "@/components/sections/ServicesPreview";
import AboutPreview from "@/components/sections/AboutPreview";
import DoctorPreview from "@/components/sections/DoctorPreview";
import Facilities from "@/components/sections/Facilities";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";
import LocationPreview from "@/components/sections/LocationPreview";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <Hero />
            <WhyChooseUs />
            <ServicesPreview />
            <AboutPreview />
            <DoctorPreview />
            <Facilities />
            <BeforeAfter />
            <Testimonials />
            <CTABanner />
            <LocationPreview />
            <FAQ />
            <Footer />
            <WhatsAppButton />
        </div>
    );
}
