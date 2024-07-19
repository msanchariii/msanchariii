"use client";
import React from "react";
import { motion } from "framer-motion";

function Mid() {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 250 },
                visible: { opacity: 1, y: 0 },
            }}
            initial={"hidden"}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            // whileInView={{ opacity: 1 }}
            whileInView={"visible"}
            viewport={{ margin: "-600px" }}
            className="min-h-screen bg-[#d9d9d9] p-12 xl:p-24"
        >
            Projects
        </motion.div>
    );
}

export default Mid;
