const Experience = () => {
    return (
        <section className="py-16  text-white max-w-screen-xl mx-auto px-6 md:px-12">
            <h3 className="text-3xl font-semibold mb-12 text-center">
                Experience
            </h3>
            <div className="max-w-4xl mx-auto space-y-10">
                {[
                    {
                        role: "Frontend Developer",
                        company: "Tech Solutions Ltd.",
                        period: "June 2023 - Present",
                        details:
                            "Building responsive web apps with React and Next.js, optimizing performance, and collaborating with designers to create seamless UI/UX.",
                    },
                    {
                        role: "Junior Web Developer",
                        company: "Creative Minds Agency",
                        period: "Jan 2022 - May 2023",
                        details:
                            "Worked on multiple client projects using JavaScript, React, and Node.js. Maintained code quality and improved accessibility standards.",
                    },
                    {
                        role: "Intern - Software Development",
                        company: "Innovatech Pvt Ltd.",
                        period: "June 2021 - Dec 2021",
                        details:
                            "Assisted in developing internal tools and automated testing scripts. Gained experience with REST APIs and database management.",
                    },
                ].map(({ role, company, period, details }, idx) => (
                    <div
                        key={idx}
                        className="bg-gray-900 bg-opacity-60 p-6 rounded-lg shadow-lg"
                    >
                        <h4 className="text-xl font-semibold">{role}</h4>
                        <p className="text-purple-400 font-medium">
                            {company} &mdash; {period}
                        </p>
                        <p className="mt-2 text-gray-300">{details}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
