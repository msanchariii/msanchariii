const Education = () => {
    return (
        <section className="py-16  text-white max-w-screen-xl mx-auto px-6 md:px-12">
            <h3 className="text-3xl font-semibold mb-12 text-center">
                Education
            </h3>
            <div className="max-w-4xl mx-auto space-y-8">
                {[
                    {
                        degree: "Bachelor of Technology in Computer Science",
                        institution: "XYZ University",
                        period: "2018 - 2022",
                        details:
                            "Focused on software engineering, algorithms, and web development. Graduated with honors.",
                    },
                    {
                        degree: "High School Diploma",
                        institution: "ABC Senior Secondary School",
                        period: "2016 - 2018",
                        details:
                            "Completed with a focus on science and mathematics.",
                    },
                ].map(({ degree, institution, period, details }, idx) => (
                    <div
                        key={idx}
                        className="bg-gray-900 bg-opacity-60 p-6 rounded-lg shadow-lg"
                    >
                        <h4 className="text-xl font-semibold">{degree}</h4>
                        <p className="text-purple-400 font-medium">
                            {institution} &mdash; {period}
                        </p>
                        <p className="mt-2 text-gray-300">{details}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
