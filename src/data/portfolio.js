// src/data/portfolioData.js

const aboutMe = {
    intro: "Hey! I'm Sanchari Mandal, a passionate web developer who loves crafting clean, efficient, and beautiful digital experiences.",
    description:
        "I enjoy creating tools that make life easier and more enjoyable. I believe in continuous learning and collaboration.",
};

const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "Spring Boot",
    "Java",
    "Git",
];

const projects = [
    {
        title: "Personal Portfolio Website",
        description:
            "A responsive portfolio built with React and Tailwind CSS to showcase my skills and projects.",
        link: "https://github.com/sanchari/portfolio",
    },
    {
        title: "Task Manager App",
        description:
            "A full-stack app with user authentication, task CRUD operations, and real-time updates.",
        link: "https://github.com/sanchari/task-manager",
    },
    {
        title: "Blog Platform",
        description:
            "A modern blogging platform built with Next.js, featuring markdown support and SEO optimization.",
        link: "https://github.com/sanchari/blog-platform",
    },
];

const education = [
    {
        institution: "ABC University",
        degree: "Bachelor of Technology in Computer Science",
        duration: "2018 - 2022",
        details:
            "Graduated with Honors, focused on software development and data structures.",
    },
    {
        institution: "XYZ High School",
        degree: "Higher Secondary Education",
        duration: "2016 - 2018",
        details: "Specialized in Science with Computer Applications.",
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
