"use client";

import { motion } from "framer-motion";
import { Redressed } from "next/font/google";

const redressed = Redressed({
  subsets: ["latin"],
  weight: "400",
});

const title = "Welcome to Historia Haven";
const description =
  "Dive into explorations of historical mysteries, cultural origins, and intriguing myths.";
const description2 =
  "Uncover the past's hidden threads in short and captivating reads.";

const wordAnimation = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      staggerChildren: 0.04,
    },
  },
};

const wordAnimation2 = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      staggerChildren: 0.015,
    },
  },
};

const characterAnimation = {
  hidden: {
    opacity: 0,
    // y: 50, // TODO: Fix this (it's not working)
  },
  visible: {
    opacity: 1,
    // y: 0, // TODO: Fix this (it's not working)
  },
};

export default function Home() {
  return (
    <main className="dark:bg-stone-900 flex min-h-screen flex-col items-center justify-between py-12 xs:py-16 sm:py-20 px-6 xs:px-10 sm:p-14">
      <motion.header
        variants={wordAnimation}
        initial="hidden"
        animate="visible"
        className="text-center"
      >
        {/* Title */}
        <h1
          className={redressed.className + " text-5xl xs:text-6xl sm:text-7xl"}
        >
          {title.split("").map((letter, index) => (
            <motion.span key={index} variants={characterAnimation}>
              {letter}
            </motion.span>
          ))}
        </h1>

        {/* Description */}
        <motion.div
          variants={wordAnimation2}
          className="mt-16 text-xl sm:text-2xl font-normal text-stone-200"
        >
          {/* Description (1/2) */}
          <p>
            {description.split("").map((letter, index) => (
              <motion.span key={index} variants={characterAnimation}>
                {letter}
              </motion.span>
            ))}
          </p>

          {/* Description (2/2) */}
          <p className="mt-6">
            {description2.split("").map((letter, index) => (
              <motion.span key={index} variants={characterAnimation}>
                {letter}
              </motion.span>
            ))}
          </p>
        </motion.div>
      </motion.header>
    </main>
  );
}
