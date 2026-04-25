import { Metadata } from "next";
import ServicesPageContent from "@/components/sections/ServicesPageContent";

export const metadata: Metadata = {
    title: "Dental Treatments — Eminent Dental Care, Tanur",
    description: "Explore all dental treatments at Eminent Dental Care by Dr. Akhila Junoosha C.A — teeth whitening, clear aligners, pediatric care, scaling, fillings, extractions, and more in Tanur, Malappuram.",
    alternates: {
        canonical: '/services',
    },
};

export default function ServicesPage() {
    return <ServicesPageContent />;
}
