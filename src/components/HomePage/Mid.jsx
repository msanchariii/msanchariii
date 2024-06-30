"use client";
import React from "react";
import { motion } from "framer-motion";

function Mid() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="min-h-screen bg-[#d9d9d9]"
        >
            Mid
        </motion.div>
    );
}

export default Mid;
