"use client";
import React from "react";
import { motion } from "framer-motion";
// import BlobBackground from "@/v1/components/BlobBackground";
// import HeroBackground from "@/components/BlobBackground";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import HeroBackground from "@/components/BlobBackground";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Hero from "@/components/Hero";

function HomePage() {
    return (
        <>
            <HeroBackground />
            <div className="2xl:px-24 space-y-16  text-white max-w-screen-xl mx-auto px-6 md:px-12 xl:space-y-20">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Education />
                {/* <Experience /> */}
                <Contact />
            </div>
            <Footer />
        </>
    );
}

export default HomePage;
