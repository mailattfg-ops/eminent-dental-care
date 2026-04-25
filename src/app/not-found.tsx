import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col bg-brand-muted">
            <Navbar />
            <main className="flex-grow flex items-center justify-center p-6 text-center">
                <div className="space-y-8">
                    <div className="space-y-2">
                        <h1 className="text-9xl font-black text-brand-dark/10">404</h1>
                        <h2 className="text-4xl font-black text-brand-dark">Page Not Found</h2>
                        <p className="text-gray-500 max-w-md mx-auto font-medium">
                            The page you are looking for doesn't exist or has been moved.
                            Let's get you back on track.
                        </p>
                    </div>
                    <Link
                        href="/"
                        className="inline-block bg-brand-red text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-brand-dark transition-all transform hover:-translate-y-1"
                    >
                        Return Home
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
}
