"use client";
import { sectionVariants } from "@/data/animation";
import { motion } from "framer-motion";
import {
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaNodeJs,
    FaJava,
    FaDocker,
    FaAws,
} from "react-icons/fa";
import {
    SiExpress,
    SiJavascript,
    SiKubernetes,
    SiMongodb,
    SiNextdotjs,
    SiPostgresql,
    SiPrisma,
    SiPython,
    SiTailwindcss,
} from "react-icons/si";

const skills = {
    frontend: [
        {
            name: "HTML5",
            icon: (
                <FaHtml5
                    className="inline-block mr-2 text-orange-500"
                    size={28}
                    strokeWidth={2}
                />
            ),
        },
        {
            name: "CSS3",
            icon: (
                <FaCss3Alt
                    className="inline-block mr-2 text-blue-500"
                    size={28}
                    strokeWidth={2}
                />
            ),
        },
        {
            name: "Javascript",
            icon: (
                <SiJavascript
                    className="inline-block mr-2 text-yellow-500"
                    size={28}
                    strokeWidth={0.5}
                />
            ),
        },
        {
            name: "React",
            icon: (
                <FaReact
                    className="inline-block mr-2 text-purple-400"
                    size={28}
                    strokeWidth={2}
                />
            ),
        },
        {
            name: "Next.js",
            icon: (
                <SiNextdotjs
                    className="inline-block mr-2 text-black"
                    size={28}
                    strokeWidth={0.5}
                />
            ),
        },
        {
            name: "TailwindCSS",
            icon: (
                <SiTailwindcss
                    className="inline-block mr-2 text-sky-400"
                    size={28}
                    strokeWidth={0.5}
                />
            ),
        },
    ],
    backend: [
        {
            name: "Node.js",
            icon: (
                <FaNodeJs
                    className="inline-block mr-2 text-green-500"
                    size={28}
                    strokeWidth={2}
                />
            ),
        },
        {
            name: "Java",
            icon: (
                <FaJava
                    className="inline-block mr-2 text-red-600"
                    size={28}
                    strokeWidth={2}
                />
            ),
        },
        {
            name: "Express",
            icon: (
                <SiExpress
                    className="inline-block mr-2 text-gray-700"
                    size={28}
                    strokeWidth={0.5}
                />
            ),
        },
        {
            name: "Prisma",
            icon: (
                <SiPrisma
                    className="inline-block mr-2 text-purple-600"
                    size={28}
                    strokeWidth={0.5}
                />
            ),
        },
        {
            name: "MongoDB",
            icon: (
                <SiMongodb
                    className="inline-block mr-2 text-green-700"
                    size={28}
                    strokeWidth={0.5}
                />
            ),
        },
        {
            name: "PostgreSQL",
            icon: (
                <SiPostgresql
                    className="inline-block mr-2 text-blue-600"
                    size={28}
                    strokeWidth={0.5}
                />
            ),
        },
    ],
    devops: [
        {
            name: "Docker",
            icon: (
                <FaDocker
                    className="inline-block mr-2 text-sky-400"
                    size={28}
                    strokeWidth={2}
                />
            ),
        },
        // {
        //     name: "AWS",
        //     icon: (
        //         <FaAws
        //             className="inline-block mr-2 text-orange-400"
        //             size={28}
        //             strokeWidth={2}
        //         />
        //     ),
        // },
        {
            name: "Kubernetes",
            icon: (
                <SiKubernetes
                    className="inline-block mr-2 text-blue-400"
                    size={28}
                    strokeWidth={0.5}
                />
            ),
        },
    ],
};
function Skills() {
    return (
        <div className="mb-24 max-w-5xl mx-auto px-4">
            <h3 className="text-3xl font-semibold mb-16 text-center text-white">
                Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                {["frontend", "backend", "devops"].map((section) => (
                    <motion.div
                        key={section}
                        className="bg-white/5 backdrop-blur-lg border border-white/20 ring-1 ring-white/10 rounded-lg shadow-lg p-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        variants={sectionVariants}
                    >
                        <h4 className="text-xl font-semibold mb-6 text-purple-400 capitalize">
                            {section}
                        </h4>
                        <div className="flex flex-wrap justify-center gap-4">
                            {skills[section].map(({ name, icon }) => (
                                <span
                                    key={name}
                                    className="rounded-full px-2 py-2 text-white font-semibold cursor-default flex items-center gap-1 hover:scale-110 transition duration-300"
                                >
                                    {icon}
                                    {name}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
