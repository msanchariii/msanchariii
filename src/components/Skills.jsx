import { skills } from "@/data/portfolio";
import React from "react";

function Skills() {
    return (
        <div className="mb-24">
            <h3 className="text-3xl font-semibold mb-8 text-center">Skills</h3>
            <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="bg-purple-700 bg-opacity-70 rounded-full px-5 py-2 text-white text-sm font-semibold hover:bg-purple-500 transition duration-300 cursor-default"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Skills;
