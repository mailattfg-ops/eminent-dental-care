import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export const metadata = {
    title: "Terms & Conditions",
    description: "By using the Eminent Dental Care website, you agree to the following terms and conditions.",
};

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-brand-cream text-brand-navy selection:bg-brand-gold/20 selection:text-brand-navy">
            {/* Header / Navigation */}
            <div className="border-b border-brand-navy/5 sticky top-0 bg-white/80 backdrop-blur-xl z-50">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link 
                        href="/" 
                        className="flex items-center text-sm font-bold text-brand-navy/60 hover:text-brand-gold transition-colors group"
                    >
                        <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-navy/30">
                        Eminent Dental Care
                    </div>
                </div>
            </div>

            <article className="container mx-auto px-4 py-6 lg:py-8 xl:py-12 max-w-3xl">
                {/* Hero section for the page */}
                <div className="mb-16">
                    <div className="inline-block px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold text-[10px] font-black uppercase tracking-widest mb-4 border border-brand-gold/20">
                        Legal
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black font-serif text-brand-navy mb-6 tracking-tight">
                        Terms & Conditions
                    </h1>
                    <p className="text-xl text-brand-navy/60 font-medium leading-relaxed italic">
                        By using the Eminent Dental Care website, you agree to the following terms and conditions.
                    </p>
                </div>

                {/* Content */}
                <div className="space-y-12 prose prose-slate max-w-none">
                    <section className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-1 bg-brand-gold rounded-full"></span>
                            <h2 className="text-xl font-black uppercase tracking-wider text-brand-navy/80">Website Content</h2>
                        </div>
                        <p className="text-brand-navy/70 font-medium leading-relaxed">
                            All content on this website, including text, graphics, and clinical information, is provided for general information purposes only and should not replace professional medical or dental advice from a qualified practitioner.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-1 bg-brand-gold rounded-full"></span>
                            <h2 className="text-xl font-black uppercase tracking-wider text-brand-navy/80">Clinical Appointments</h2>
                        </div>
                        <p className="text-brand-navy/70 font-medium leading-relaxed">
                            Submitting a form or enquiry through this website does not confirm a clinical appointment until it is verified and confirmed by our clinic staff via phone or email.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-1 bg-brand-gold rounded-full"></span>
                            <h2 className="text-xl font-black uppercase tracking-wider text-brand-navy/80">Intellectual Property</h2>
                        </div>
                        <p className="text-brand-navy/70 font-medium leading-relaxed">
                            All website content, including logo, text, custom imagery, and branding, belongs to Eminent Dental Care and may not be copied, reproduced, or reused without explicit written permission.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-1 bg-brand-gold rounded-full"></span>
                            <h2 className="text-xl font-black uppercase tracking-wider text-brand-navy/80">Limitation of Liability</h2>
                        </div>
                        <p className="text-brand-navy/70 font-medium leading-relaxed">
                            Eminent Dental Care is not responsible for any damages or health issues arising from the use or misuse of the information provided on this website. Always consult with a dentist for diagnosis and treatment.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-1 bg-brand-gold rounded-full"></span>
                            <h2 className="text-xl font-black uppercase tracking-wider text-brand-navy/80">Updates</h2>
                        </div>
                        <p className="text-brand-navy/70 font-medium leading-relaxed">
                            We reserve the right to update these terms, conditions, or clinical policies at any time without prior notice to reflect changes in our practice or legal requirements.
                        </p>
                    </section>
                </div>

                <div className="mt-20 pt-10 border-t border-brand-navy/5 text-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-navy/30">
                        Last Updated: March 30, 2026
                    </p>
                </div>
            </article>
        </main>
    );
}
