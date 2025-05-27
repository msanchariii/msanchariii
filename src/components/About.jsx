import React from "react";

function About() {
    return (
        <div className="mb-24 text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-semibold mb-16 ">About Me</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
                Hey, I’m{" "}
                <span className="text-purple-500 font-bold">
                    Sanchari Mandal
                </span>
                , a passionate web developer who loves crafting beautiful,
                functional, and fluid websites. With a knack for solving
                problems and building tools that make life easier, I focus on
                clean code and elegant design.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
                I am currently expanding my skill set by learning Cloud
                technologies and DevOps practices to build scalable and
                efficient applications.
            </p>
        </div>
    );
}

export default About;
