import Top from "@/components/HomePage/Hero";
import Mid from "@/components/HomePage/Mid";
import React from "react";
import { motion } from "framer-motion";

function HomePage() {
    return (
        <div className="w-full bg-charcoal  space-y-12">
            <Top />

            <Mid />
        </div>
    );
}

export default HomePage;
