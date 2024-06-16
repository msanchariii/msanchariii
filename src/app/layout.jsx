import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Navbar from "@/components/ui/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Sanchari M.",
    description: "Portfolio by Sanchari",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Fredoka:wdth,wght@75..125,300..700&family=Jost:ital,wght@0,100..900;1,100..900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body className={inter.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
