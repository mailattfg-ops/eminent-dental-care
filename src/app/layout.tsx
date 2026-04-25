import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: "Eminent Dental Care — Dr. Akhila Junoosha | Best Dentist in Tanur, Malappuram",
        template: "%s | Eminent Dental Care"
    },
    description: "Eminent Dental Care by Dr. Akhila Junoosha C.A (BDS) provides premium, patient-centered dental treatments in Tanur, Malappuram. Expert services in Clear Aligners, Teeth Whitening, Pediatric Care, and Dental Surgery in a modern, comfortable clinic.",
    keywords: [
        "best dentist Tanur", "top dental clinic Malappuram", "Eminent Dental Care", "Dr Akhila Junoosha",
        "teeth whitening Tanur", "clear aligners Kerala", "pediatric dentist Malappuram", 
        "painless tooth extraction Tanur", "dental implants Kerala", "gum treatment Tanur",
        "wisdom tooth removal Malappuram", "modern dental clinic Tanur", "cosmetic dentistry Kerala"
    ],
    authors: [{ name: "Eminent Dental Care" }],
    creator: "Eminent Dental Care",
    publisher: "Eminent Dental Care",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL("https://www.eminentdentalcare.com"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Eminent Dental Care — Premium Dental Care in Tanur, Malappuram",
        description: "Experience modern, ethical, and patient-centered dental care by Dr. Akhila Junoosha C.A. Your smile is our passion.",
        url: "https://www.eminentdentalcare.com",
        siteName: "Eminent Dental Care",
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Eminent Dental Care — Leading Dentist in Tanur",
        description: "Providing modern dental treatments with a compassionate approach. Join the family at Eminent Dental Care, Tanur.",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: "/Images/logo.svg",
        shortcut: "/Images/logo.svg",
        apple: "/Images/logo.svg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Dentist",
        "name": "Eminent Dental Care",
        "image": "https://www.eminentdentalcare.com/Images/logo.svg",
        "@id": "https://www.eminentdentalcare.com",
        "url": "https://www.eminentdentalcare.com",
        "telephone": "+919037247022",
        "priceRange": "₹₹",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Parappanagadi Road, Tanur, Opposite to Eminent Electricals",
            "addressLocality": "Tanur",
            "addressRegion": "Kerala",
            "postalCode": "676302",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 10.9884,
            "longitude": 75.8672
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
                ],
                "opens": "10:00",
                "closes": "19:00"
            }
        ],
        "founder": {
            "@type": "Person",
            "name": "Dr. Akhila Junoosha C.A",
            "jobTitle": "Dental Surgeon, BDS"
        },
        "email": "eminentdentalcare77@gmail.com",
        "sameAs": []
    };

    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={`${inter.variable} ${playfair.variable} antialiased`} suppressHydrationWarning>
                {children}
            </body>
        </html>
    );
}
