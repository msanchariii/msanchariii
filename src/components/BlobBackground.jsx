"use client";
import React, { useEffect } from "react";

const HeroBackground = ({ children }) => {
    useEffect(() => {
        const style = document.createElement("style");
        style.innerHTML = `
            @keyframes moveBlobs {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
        `;
        document.head.appendChild(style);
    }, []);

    const containerStyle = {
        position: "fixed", // make it fixed on the screen
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: `
        radial-gradient(circle at 20% 30%, rgba(30, 60, 114, 0.3), transparent 40%),  /* blue */
        radial-gradient(circle at 80% 20%, rgba(131, 58, 180, 0.25), transparent 40%), /* purple */
        radial-gradient(circle at 50% 70%, rgba(42, 82, 152, 0.2), transparent 40%),  /* blue */
        radial-gradient(circle at 30% 80%, rgba(88, 24, 69, 0.2), transparent 40%)    /* deep purple */
    `,
        backgroundColor: "#000000", // solid black base
        backgroundSize: "200% 200%",
        animation: "moveBlobs 15s ease-in-out infinite",
        overflow: "hidden",
        zIndex: -1, // push behind all other content
        scrollY: "auto", // allow scrolling
    };

    const textStyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "#ffffff",
        fontSize: "3rem",
        fontWeight: "bold",
        textAlign: "center",
        zIndex: 1,
    };

    return (
        <div style={containerStyle}>
            {/* <h1 style={textStyle}>Welcome to My Website</h1> */}
            {children}
        </div>
    );
};

export default HeroBackground;
