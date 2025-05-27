// src/data/portfolioData.js

const root = "/";

const aboutMe = {
    intro: "Hey! I'm Sanchari Mandal, a passionate web developer who loves crafting clean, efficient, and beautiful digital experiences.",
    description:
        "I enjoy creating tools that make life easier and more enjoyable. I believe in continuous learning and collaboration.",
};

const skills = [
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "Git & GitHub",
    // "Java",
];

const projects = [
    {
        title: "Rustic Charm",
        image: "/assets/images/rustic-charm.png",
        description:
            "A responsive portfolio built with React and Tailwind CSS to showcase my skills and projects.",
        link: "https://msanchariii.github.io/rustic-charm/",
        github: "https://github.com/msanchariii/rustic-charm",
    },
    {
        title: "Evolver",
        image: "",
        description:
            "An Online Exam Portal built with Next.js, Node.js, Prisma and PostgreSQL, featuring user authentication and authorization.",
        link: "https://evolver.vercel.app/",
        github: "https://github.com/sanchari/task-manager",
    },
    {
        title: "Organa",
        image: "",
        description:
            "A real time organ matching platform powered by AI. Won 2nd prize in Hackathon organized by GCECT and Bytemonk in 2025.",
        github: "https://github.com/sanchari/blog-platform",
    },
];

const education = [
    {
        institution: "Government College og Engineering and Ceramic Technology",
        degree: "Bachelor of Technology in Information Technology",
        duration: "2022 - 2026",
        details:
            "Graduated with Honors, focused on software development and data structures.",
    },
];

const experience = [
    {
        role: "Frontend Developer Intern",
        company: "Tech Solutions Ltd.",
        duration: "June 2021 - August 2021",
        responsibilities: [
            "Developed responsive UI components using React and Tailwind CSS.",
            "Collaborated with backend team to integrate APIs.",
            "Optimized web performance and accessibility.",
        ],
    },
    {
        role: "Software Engineering Intern",
        company: "Innovatech Pvt Ltd.",
        duration: "January 2020 - May 2020",
        responsibilities: [
            "Assisted in building RESTful APIs using Node.js and Express.",
            "Wrote unit tests and participated in code reviews.",
            "Contributed to project documentation and deployment.",
        ],
    },
];

const footer = {
    copyright: `© ${new Date().getFullYear()} Sanchari Mandal. All rights reserved.`,
    socialLinks: {
        linkedin: "https://linkedin.com/in/sanchari",
        github: "https://github.com/sanchari",
        twitter: "https://twitter.com/sanchari",
    },
};

export { aboutMe, skills, projects, education, experience, footer };
