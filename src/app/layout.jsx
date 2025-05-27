import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Sanchari M.",
    description: "Portfolio by Sanchari",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data_theme="night">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
