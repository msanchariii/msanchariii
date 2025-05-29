"use client";
import React, { useEffect } from "react";

export default function StarsBackground() {
    useEffect(() => {
        const style = document.createElement("style");
        style.innerHTML = `
            .stars {
                width: 100%;
                height: 100%;
                background: black;
                background-image: radial-gradient(white 1px, transparent 1px);
                background-size: 50px 50px;
                position: fixed;
                top: 0;
                left: 0;
                z-index: -1;
                animation: moveStars 100s linear infinite;
            }

            @keyframes moveStars {
                from { background-position: 0 0; }
                to { background-position: 10000px 10000px; }
            }

            .stars::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: radial-gradient(white 1px, transparent 1px);
                background-size: 100px 100px;
                opacity: 0.5;
                animation: twinkle 2s infinite alternate;
            }

            @keyframes twinkle {
                from { opacity: 0.3; }
                to { opacity: 0.8; }
            }
        `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return <div className="stars"></div>;
}
