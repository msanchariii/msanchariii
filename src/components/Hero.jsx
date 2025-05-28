// import React from "react";

function Hero() {
    return (
        <section className="py-10 md:py-16">
            <div className="container max-w-screen-xl mx-auto px-4">
                <nav className="flex items-center justify-between mb-20">
                    {/* <img src="assets/image/navbar-logo.png" alt="Logo"> */}
                    <div className="bg-white h-12 aspect-square rounded-full"></div>

                    <a
                        href="/resume/web.pdf"
                        // download={true}
                        className="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-black text-md rounded-md  transition ease-linear duration-500"
                    >
                        Get my Resume
                    </a>
                </nav>

                <div className="text-center">
                    <div className="flex justify-center mb-16">
                        {/* <img src="assets/image/home-img.png" alt="Image"> */}
                        <div className="bg-white h-36 aspect-square rounded-full"></div>
                    </div>

                    <h1
                        className="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8"
                        style={{
                            textShadow: "0 0 6px rgba(255, 255, 255, 0.3)",
                        }}
                    >
                        Sanchari Mandal
                    </h1>
                    <h6 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">
                        Web Developer
                    </h6>
                    <p className="font-normal text-gray-600 text-md md:text-xl mb-16">
                        I have a passion for software. I enjoy creating tools
                        that make life easier for people.
                    </p>

                    {/* <button className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-white/20 text-white text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500">
                        Hire me
                    </button> */}
                </div>
            </div>
        </section>
    );
}

export default Hero;
