import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export const metadata = {
    title: "Privacy Policy",
    description: "At Eminent Dental Care, we respect your privacy and are committed to protecting your personal information.",
};

export default function PrivacyPage() {
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
                        Policy
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black font-serif text-brand-navy mb-6 tracking-tight">
                        Privacy Policy
                    </h1>
                    <p className="text-xl text-brand-navy/60 font-medium leading-relaxed italic">
                        At Eminent Dental Care, we respect your privacy and are committed to protecting your personal information.
                    </p>
                </div>

                {/* Content */}
                <div className="space-y-12 prose prose-slate max-w-none">
                    <section className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-1 bg-brand-gold rounded-full"></span>
                            <h2 className="text-xl font-black uppercase tracking-wider text-brand-navy/80">Information We Collect</h2>
                        </div>
                        <p className="text-brand-navy/70 font-medium leading-relaxed">
                            We may collect basic details such as your name, phone number, email address, and any information you submit through our contact or appointment forms. This information is primarily used to provide you with high-quality dental care services.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-1 bg-brand-gold rounded-full"></span>
                            <h2 className="text-xl font-black uppercase tracking-wider text-brand-navy/80">How We Use Your Information</h2>
                        </div>
                        <div className="text-brand-navy/70 font-medium leading-relaxed">
                            <p className="mb-4">Your information is used only to:</p>
                            <ul className="space-y-3 list-none pl-0">
                                {[
                                    "Respond to dental care enquiries",
                                    "Schedule clinical appointments",
                                    "Provide information about our specialized treatments",
                                    "Maintain internal clinical records"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 mr-3 shrink-0"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-1 bg-brand-gold rounded-full"></span>
                            <h2 className="text-xl font-black uppercase tracking-wider text-brand-navy/80">Data Protection</h2>
                        </div>
                        <p className="text-brand-navy/70 font-medium leading-relaxed">
                            We take reasonable clinical and technical measures to protect your personal information and prevent unauthorized access.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-1 bg-brand-gold rounded-full"></span>
                            <h2 className="text-xl font-black uppercase tracking-wider text-brand-navy/80">Third-Party Sharing</h2>
                        </div>
                        <p className="text-brand-navy/70 font-medium leading-relaxed">
                            We do not sell or share your personal information with third parties unless required by law or for necessary medical referrals with your consent.
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
