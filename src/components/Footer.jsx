import React from "react";

const Footer = () => {
    return (
        <footer className=" text-gray-400 py-8 px-6 md:px-12 text-center">
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-sm md:text-base">
                    &copy; {new Date().getFullYear()} Sanchari Mandal. All
                    rights reserved.
                </p>

                <div className="flex space-x-6">
                    {/* Replace '#' with your actual social links */}
                    <a
                        href="https://www.linkedin.com/in/msanchari/"
                        aria-label="LinkedIn"
                        className="text-gray-400 hover:text-purple-500 transition"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8h4.55v12H.22zM8.58 8h4.37v1.73h.06c.61-1.16 2.11-2.37 4.34-2.37 4.64 0 5.49 3.06 5.49 7.04V20H17v-6.47c0-1.54-.03-3.52-2.14-3.52-2.14 0-2.47 1.67-2.47 3.4V20H8.58z" />
                        </svg>
                    </a>

                    <a
                        href="https://github.com/msanchariii/"
                        aria-label="GitHub"
                        className="text-gray-400 hover:text-purple-500 transition"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.49 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.61.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.9.83.09-.65.35-1.09.63-1.34-2.22-.26-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.03a9.56 9.56 0 012.5-.34c.85 0 1.7.11 2.5.34 1.91-1.3 2.75-1.03 2.75-1.03.55 1.4.2 2.44.1 2.7.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.69-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.16.59.67.49A10.002 10.002 0 0022 12c0-5.52-4.48-10-10-10z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>

                    <a
                        href="#"
                        aria-label="Twitter"
                        className="text-gray-400 hover:text-purple-500 transition"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.98-2.48 9.04 9.04 0 01-2.85 1.08 4.52 4.52 0 00-7.7 4.12A12.84 12.84 0 013 4.74a4.52 4.52 0 001.4 6.03 4.48 4.48 0 01-2.05-.57v.06a4.52 4.52 0 003.64 4.43 4.48 4.48 0 01-2.03.08 4.52 4.52 0 004.21 3.14A9.04 9.04 0 013 19.54 12.7 12.7 0 009.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.35-.01-.53A8.35 8.35 0 0023 3z" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
