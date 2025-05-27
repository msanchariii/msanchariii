import { education } from "@/data/portfolio";

const Education = () => {
    return (
        <section className="py-16  text-white max-w-screen-xl mx-auto px-6 md:px-12">
            <h3 className="text-3xl font-semibold mb-12 text-center">
                Education
            </h3>
            <div className="max-w-4xl mx-auto space-y-8">
                {education.map(
                    ({ degree, institution, duration, details }, idx) => (
                        <div
                            key={idx}
                            className="bg-white/5 backdrop-blur-lg border border-white/20 ring-1 ring-white/10 rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:shadow-2xl hover:scale-105 hover:bg-white/10 p-6"
                        >
                            <h4 className="text-xl font-semibold">{degree}</h4>
                            <p className="text-purple-400 font-medium">
                                {institution} &mdash; {duration}
                            </p>
                            <p className="mt-2 text-gray-300">{details}</p>
                        </div>
                    )
                )}
            </div>
        </section>
    );
};

export default Education;
