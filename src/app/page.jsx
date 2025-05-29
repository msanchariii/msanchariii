import React from "react";
import {
    HeroBackground,
    About,
    Contact,
    Education,
    Experience,
    Footer,
    Hero,
    Projects,
    Skills,
} from "@/components";
import Universe from "@/components/Universe";

function HomePage() {
    return (
        <>
            <Universe />
            <HeroBackground />
            <div className="2xl:px-24 space-y-16  text-white max-w-screen-xl mx-auto px-6 md:px-12 xl:space-y-40 relative z-50">
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
