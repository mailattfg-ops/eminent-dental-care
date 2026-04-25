import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import PageHero from "@/components/sections/PageHero";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
    title: "Contact Us — Eminent Dental Care, Tanur",
    description: "Book an appointment with Dr. Akhila Junoosha at Eminent Dental Care, Tanur. Call +91 9037247022 or send a WhatsApp enquiry. Located on Parappanagadi Road, Tanur, Malappuram 676302.",
    alternates: {
        canonical: "/contact",
    },
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <PageHero
                title="Get In Touch"
                subtitle="Book your appointment or send us an enquiry — we're here to help you smile better."
                backgroundImage="/Images/luxury_dentals.webp"
            />

            <ContactSection />

            <Footer />
            <WhatsAppButton />
        </div>
    );
}
