import { Metadata } from "next";
import AboutPageContent from "@/components/sections/AboutPageContent";

export const metadata: Metadata = {
    title: "About Us — Dr. Akhila Junoosha & Eminent Dental Care",
    description: "Learn about Dr. Akhila Junoosha C.A (BDS), the founder of Eminent Dental Care in Tanur, Malappuram. 8+ years of expert, patient-centered dental care with modern treatments and gentle care.",
    alternates: {
        canonical: '/about',
    },
};

export default function AboutPage() {
    return <AboutPageContent />;
}
