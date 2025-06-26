// import React from "react";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

function Hero() {
    return (
        <section className="py-10 md:py-16">
            <div className="container max-w-screen-xl mx-auto px-4">
                <nav className="flex items-center justify-between mb-20">
                    {/* <img src="assets/image/navbar-logo.png" alt="Logo"> */}
                    <div className="bg-white h-12 aspect-square rounded-full"></div>
                    <div className="flex items-center gap-4 md:gap-6">
                        <Link
                            href="/resume/web.pdf"
                            className="relative inline-block px-7 py-3 md:px-9 md:py-4 bg-white/90 backdrop-blur-lg border border-white/20 ring-1 ring-white/10 text-black font-semibold rounded-md overflow-hidden shadow-md transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-purple-500/50 hover:ring-purple-400"
                        >
                            Get my Resume
                        </Link>
                        <ThemeToggle />
                    </div>
                </nav>

                <div className="text-center">
                    <div className="flex justify-center mb-16">
                        {/* <img src="assets/image/home-img.png" alt="Image"> */}
                        <div className="bg-white h-36 aspect-square rounded-full"></div>
                    </div>

                    <h1
                        className="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8"
                        style={{
                            textShadow: "0 0 6px rgba(255, 255, 255, 0.3)",
                        }}
                    >
                        Sanchari Mandal
                    </h1>
                    <h6 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">
                        Web Developer
                    </h6>
                    <p className="font-normal text-gray-600 text-md md:text-xl mb-16">
                        I have a passion for software. I enjoy creating tools
                        that make life easier for people.
                    </p>

                    {/* <button className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-white/20 text-white text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500">
                        Hire me
                    </button> */}
                </div>
            </div>
        </section>
    );
}

export default Hero;
