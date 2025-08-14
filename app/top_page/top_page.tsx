"use client"
import styles from "./top_page.module.css";

import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeOut", duration: 0.6 },
  },
};

export function BlobBackground() {
  return (
    <motion.div
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-50 to-white"
      initial="hidden"
      animate="show"
      variants={container}
    >
      {["Hello,", "I’m Takaki.", "Welcome to my Portforio site."].map((text, i) => (
        <motion.h1
          key={i}
          className="text-4xl sm:text-6xl font-bold text-gray-800 w-screen flex justify-center text-center"
          variants={item}
        >
          {text}
        </motion.h1>
      ))}
    </motion.div>
  );
}

