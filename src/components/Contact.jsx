"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target);
        formData.append("access_key", "ee67cb6c-b3c6-4714-9f03-d14e20264a64");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult("✅ Thank you! I’ll get back to you soon.");
            event.target.reset();
        } else {
            console.error("Error", data);
            setResult(`❌ ${data.message}`);
        }
    };

    return (
        <section className="py-20 max-w-screen-md mx-auto px-6 md:px-12 text-center">
            <motion.h3
                className="text-3xl font-bold mb-4 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Get In Touch
            </motion.h3>

            <motion.p
                className="mb-10 text-gray-400"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                I’m always open to chatting about new projects, collaborations,
                or just sharing ideas!
            </motion.p>

            <motion.form
                onSubmit={onSubmit}
                className="space-y-6 bg-white/5 p-8 rounded-2xl shadow-xl backdrop-blur-lg border border-white/10 hover:border-purple-500 transition duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                />
                <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    rows="4"
                    autoComplete="off"
                    className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                ></textarea>

                <motion.button
                    type="submit"
                    whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 20px rgba(168, 85, 247, 0.6)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-3 bg-purple-600 rounded-lg text-white font-semibold hover:bg-purple-500 transition duration-300"
                >
                    Send Message →
                </motion.button>
            </motion.form>

            <motion.p
                className="mt-4 text-sm text-purple-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                {result}
            </motion.p>
        </section>
    );
}

const Input = ({ type, name, placeholder, required }) => (
    <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        autoComplete="off"
        className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
    />
);
