"use client";
import { projects } from "@/data/portfolio.js"; // update your data to include 'tech' field
import { sectionVariants } from "@/data/animation";
import { motion } from "framer-motion";
import Image from "next/image";

function Projects() {
    return (
        <section className="py-16">
            <h3 className="text-4xl font-semibold mb-16 text-center text-white">
                Projects
            </h3>
            <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-y-16 gap-x-8 mx-auto px-4">
                {projects.map(
                    ({ title, description, link, github, image, tech }) => (
                        <motion.div
                            key={title}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                            variants={sectionVariants}
                            className="bg-white/5 backdrop-blur-lg border border-white/20 ring-1 ring-white/10 rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:shadow-2xl hover:scale-110 hover:bg-white/10 pt-0"
                        >
                            {image && (
                                <Image
                                    src={image}
                                    // fill
                                    width={500}
                                    height={300}
                                    alt={title}
                                    className="w-full object-contain block mt-0"
                                />
                            )}
                            <div className="p-6">
                                <h4 className="text-2xl font-semibold mb-2 text-white">
                                    {title}
                                </h4>
                                <p className="text-gray-300 mb-4">
                                    {description}
                                </p>
                                {tech && (
                                    <div className="mb-4">
                                        <span className="text-purple-400 font-semibold">
                                            Tech Used:
                                        </span>{" "}
                                        <span className="text-gray-300">
                                            {tech}
                                        </span>
                                    </div>
                                )}
                                <div className="flex space-x-4">
                                    {link && (
                                        <a
                                            href={link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-purple-400 hover:underline"
                                        >
                                            Live Site →
                                        </a>
                                    )}
                                    {github && (
                                        <a
                                            href={github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-purple-400 hover:underline"
                                        >
                                            GitHub →
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    )
                )}
            </div>
        </section>
    );
}

export default Projects;
