import React from "react";
import ThemeToggle from "./ThemeToggle";
import {
    SiDocker,
    SiExpress,
    SiGithub,
    SiGmail,
    SiJavascript,
    SiLeetcode,
    SiLinkedin,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiReact,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function About() {
    useGSAP(() => {
        // GSAP animations can be added here if needed
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#about",
                start: "top 75%",
                // end: "bottom center",
                markers: true,
                toggleActions: "play reverse play reverse",
            },
        });
        tl.from("#about h2", {
            duration: 1,
            y: 200,
            autoAlpha: 0,
            stagger: 0.2,
        });
        tl.from(
            ".bento-animation",
            {
                duration: 1,
                y: 200,
                autoAlpha: 0,
                stagger: 0.25,
            },
            //"<" // "<" means start this animation at the same time as the previous one
        );
    }, []);
    return (
        <section id="about" className="">
            <h2>About Me</h2>
            {/* bento style about me */}
            <div id="bento">
                <div className="bento-item bento-animation flex flex-col items-center justify-center lg:col-span-2">
                    <h3 className="mb-4 w-full text-left text-lg font-semibold">
                        Hi, I am Sanchari
                    </h3>
                    <p className="w-full text-base font-normal text-gray-600 opacity-80 dark:text-gray-400">
                        I am a software developer with a passion for creating
                        beautiful and functional user experiences.
                    </p>
                </div>
                <div className="bento-item bento-animation"></div>
                <div className="grid grid-cols-2 place-items-center gap-4">
                    <div className="socials bento-animation">
                        <SiGmail className="size-6 text-red-500 md:size-8" />
                    </div>
                    <div className="socials bento-animation">
                        <SiLinkedin className="size-6 text-blue-500 md:size-8" />
                    </div>
                    <div className="socials bento-animation">
                        <SiGithub className="size-6 text-gray-800 md:size-8" />
                    </div>
                    <div className="socials bento-animation">
                        <SiLeetcode className="size-6 text-green-500 md:size-8" />
                    </div>
                </div>
                <div className="bento-item bento-animation"></div>
                <div className="bento-item bento-animation flex-center flex-col lg:col-span-2">
                    <h3 className="mb-4 w-full text-left text-sm font-bold text-gray-600 uppercase opacity-80 dark:text-gray-400">
                        Education
                    </h3>
                    <p className="w-full text-sm font-medium">
                        Final year student at the Government College of
                        Engineering and Ceramic Technology, pursuing a B.Tech in
                        Information Technology.
                    </p>
                </div>
                <div className="bento-item bento-animation"></div>
                <div className="bento-item bento-animation lg:col-span-2">
                    <h3 className="mb-4 w-full text-left text-sm font-bold text-gray-600 uppercase opacity-80 dark:text-gray-400">
                        My Tech Stack Is
                    </h3>
                    <div className="flex w-full justify-between gap-2">
                        <SiTailwindcss className="size-6 md:size-8" />
                        <SiJavascript className="size-6 md:size-8" />
                        <SiTypescript className="size-6 md:size-8" />
                        <SiReact className="size-6 md:size-8" />
                        <SiNextdotjs className="size-6 md:size-8" />
                        <SiExpress className="size-6 md:size-8" />
                        <SiNodedotjs className="size-6 md:size-8" />
                        <SiMongodb className="size-6 md:size-8" />
                        <SiPostgresql className="size-6 md:size-8" />
                        <SiDocker className="size-6 md:size-8" />
                    </div>
                </div>
                <div className="bento-animation grid grid-cols-3 gap-4 lg:col-span-2">
                    <div className="bento-item bento-animation col-span-2 rounded-2xl"></div>
                    <div className="bento-item bento-animation flex-center col-span-1 rounded-2xl">
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
