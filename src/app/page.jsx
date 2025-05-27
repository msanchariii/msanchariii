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

const Section = ({ children }) => {
    return (
        <motion.div
            className="w-full max-w-5xl bg-charcoal  flex flex-col :flex-row gap-4 p-4 rounded-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
};

const SectionHeading = ({ children }) => {
    return (
        <motion.h2
            className="text-lg font-bold md:basis-5/12 text-white/80"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.h2>
    );
};

const SectionContainer = ({ children }) => {
    return (
        <motion.div
            className="md:basis-7/12 flex flex-col space-y-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
};

function HomePage() {
    return (
        <>
            <HeroBackground />
            <div className="2xl:px-24">
                <section className="py-10 md:py-16">
                    <div className="container max-w-screen-xl mx-auto px-4">
                        <nav className="flex items-center justify-between mb-40">
                            {/* <img src="assets/image/navbar-logo.png" alt="Logo"> */}
                            <div className="bg-white h-12 aspect-square rounded-full"></div>

                            <button className="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500">
                                Get my CV
                            </button>
                        </nav>

                        <div className="text-center">
                            <div className="flex justify-center mb-16">
                                {/* <img src="assets/image/home-img.png" alt="Image"> */}
                                <div className="bg-white h-48 aspect-square rounded-full"></div>
                            </div>

                            <h1
                                className="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8"
                                style={{
                                    textShadow:
                                        "0 0 6px rgba(255, 255, 255, 0.3)",
                                }}
                            >
                                Sanchari Mandal
                            </h1>
                            <h6 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">
                                Web Developer
                            </h6>
                            <p className="font-normal text-gray-600 text-md md:text-xl mb-16">
                                I have a passion for software. I enjoy creating
                                tools that make life easier for people.
                            </p>

                            <button className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-white/20 text-white text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500">
                                Hire me
                            </button>
                        </div>
                    </div>
                </section>
                <AboutSkillsProjects />
                <Education />
                <Experience />
                <Contact />
            </div>
            <Footer />
        </>
    );
}

export default HomePage;
const AboutSkillsProjects = () => {
    return (
        <section className="py-16 text-white max-w-screen-xl mx-auto px-6 md:px-12">
            {/* ABOUT ME */}
            <div className="mb-24 text-center max-w-3xl mx-auto">
                <h2 className="text-4xl font-semibold mb-4">About Me</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                    Hey, I’m{" "}
                    <span className="text-purple-500 font-bold">
                        Sanchari Mandal
                    </span>
                    , a passionate web developer who loves crafting beautiful,
                    functional, and fluid websites. With a knack for solving
                    problems and building tools that make life easier, I focus
                    on clean code and elegant design.
                </p>
            </div>

            {/* SKILLS */}
            <div className="mb-24">
                <h3 className="text-3xl font-semibold mb-8 text-center">
                    Skills
                </h3>
                <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
                    {[
                        "JavaScript",
                        "React",
                        "Next.js",
                        "Node.js",
                        "Tailwind CSS",
                        "TypeScript",
                        "Git",
                        "REST APIs",
                        "Spring Boot",
                    ].map((skill) => (
                        <span
                            key={skill}
                            className="bg-purple-700 bg-opacity-70 rounded-full px-5 py-2 text-white text-sm font-semibold hover:bg-purple-500 transition duration-300 cursor-default"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* PROJECTS */}
            <div>
                <h3 className="text-3xl font-semibold mb-8 text-center">
                    Projects
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {/* Project Card */}
                    {[
                        {
                            title: "Portfolio Website",
                            description:
                                "A sleek, responsive portfolio showcasing my projects and skills built with React and Tailwind CSS.",
                            url: "https://github.com/sanchari/portfolio",
                        },
                        {
                            title: "Task Manager App",
                            description:
                                "A full-stack task management app using Next.js, Node.js, and MongoDB with JWT authentication.",
                            url: "https://github.com/sanchari/task-manager",
                        },
                        {
                            title: "Blog Platform",
                            description:
                                "A blog platform built with Spring Boot backend and React frontend, featuring markdown support and comments.",
                            url: "https://github.com/sanchari/blog-platform",
                        },
                    ].map(({ title, description, url }) => (
                        <a
                            key={title}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-gray-900 bg-opacity-60 p-6 rounded-lg hover:bg-purple-700 hover:bg-opacity-80 transition duration-500 shadow-lg"
                        >
                            <h4 className="text-xl font-semibold mb-2">
                                {title}
                            </h4>
                            <p className="text-gray-300 mb-4">{description}</p>
                            <span className="text-purple-400 font-semibold underline">
                                View on GitHub →
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

// export default AboutSkillsProjects;
