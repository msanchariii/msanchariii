/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                lavender: "#BB91FF",
                blue: "#497BFF",
                cream: "#FFBC7F",
                lime: "#d8fe85",
                charrcoal: "#15161B",
                gray: "#303030",
            },
            fontFamily: {
                fredoka: ["Fredoka", "sans-serif"],
                jost: ["Jost", "sans-serif"],
            },
        },
    },
    plugins: [],
};
