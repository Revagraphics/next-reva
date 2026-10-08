import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/seo";

export const metadata = {
    metadataBase: new URL(SITE_URL),
    applicationName: "Reva Graphics",
    title: "Reva Graphics | Creative & Digital Agency",
    description:
        "Creative design, branding, digital marketing, web development, and print solutions for growing businesses.",
    icons: {
        icon: "/favicon.png",
    },
    openGraph: {
        type: "website",
        siteName: "Reva Graphics",
        locale: "en_IN",
        title: "Reva Graphics | Creative & Digital Agency",
        description:
            "Creative design, branding, digital marketing, web development, and print solutions for growing businesses.",
        url: SITE_URL,
    },
    twitter: {
        card: "summary_large_image",
        title: "Reva Graphics | Creative & Digital Agency",
        description:
            "Creative design, branding, digital marketing, web development, and print solutions for growing businesses.",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />

                <main>
                    {children}
                </main>

                <Footer />
            </body>
        </html>
    );
}