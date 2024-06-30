import Top from "@/components/HomePage/Hero";
import Mid from "@/components/HomePage/Mid";
import React from "react";
import { motion } from "framer-motion";

function HomePage() {
    return (
        <div className="w-full bg-charcoal p-12 xl:p-24 space-y-12">
            <Top />
            <Mid />
        </div>
    );
}

export default HomePage;
