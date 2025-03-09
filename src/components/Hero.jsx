import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const DarkGridHero = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50 dark:bg-zinc-950">
      <Content />
      <Beams />
      <GradientGrid />
    </section>
  );
};

const Content = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  const scrollToNextSection = () => {
    skillsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative z-20 mx-auto flex max-w-6xl flex-col items-center justify-center px-4 py-24 md:px-8 md:py-24">
      <motion.img
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.25, ease: "easeInOut" }}
        src="/ProfilePic.jpg"
        alt="Profile Picture"
        className="w-64 h-64 rounded-full object-cover mb-6 border-2 border-gray-300 dark:border-zinc-700"
      />
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.25, ease: "easeInOut" }}
        className="relative"
      >
        <GlowingChip>
          <p className="text-sm font-semibold text-gray-700 dark:text-white">
            Featured Work
          </p>
        </GlowingChip>
      </motion.div>
      <motion.h1
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.25, delay: 0.25, ease: "easeInOut" }}
        className="mb-3 text-center text-3xl font-bold leading-tight text-gray-900 dark:text-zinc-50 sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-7xl lg:leading-tight"
      >
        Welcome to My Portfolio
      </motion.h1>
      <motion.p
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.25, delay: 0.5, ease: "easeInOut" }}
        className="mb-9 max-w-2xl text-center text-base leading-relaxed text-gray-600 dark:text-zinc-400 sm:text-lg md:text-lg md:leading-relaxed"
      >
        Here you'll find a collection of my projects, showcasing my skills in web development and design. Each piece reflects my passion for solving unique challenges and creating impactful solutions.
      </motion.p>
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.25, delay: 0.75, ease: "easeInOut" }}
        className="flex flex-col items-center gap-6 sm:flex-row"
      >
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        onClick={scrollToNextSection}
        className="cursor-pointer"
      >
        <svg
          className="w-6 h-6 text-gray-700 dark:text-white mt-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </div>
  );
};

const GlowingChip = ({ children }) => {
  return (
    <span className="relative z-10 mb-4 inline-block rounded-full border border-gray-300 dark:border-zinc-700 bg-gray-100 dark:bg-zinc-900/20 px-3 py-1.5 text-xs text-gray-900 dark:text-zinc-50 md:mb-0">
      {children}
      <span className="absolute bottom-0 left-3 right-3 h-[1px] bg-gradient-to-r from-gray-400/0 via-gray-400 dark:via-zinc-300 to-gray-400/0 dark:to-zinc-500/0" />
    </span>
  );
};

const SplashButton = ({ children, className, ...rest }) => {
  return (
    <button
      className={twMerge(
        "rounded-md bg-gradient-to-br from-blue-400 to-blue-700 px-4 py-2 text-white dark:text-zinc-50 ring-2 ring-blue-500/50 ring-offset-2 ring-offset-gray-50 dark:ring-offset-zinc-950 transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-blue-500/70",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

const Beams = () => {
  const { width } = useWindowSize();
  const numColumns = width ? Math.floor(width / GRID_BOX_SIZE) : 0;

  const placements = [
    {
      top: GRID_BOX_SIZE * 0,
      left: Math.floor(numColumns * 0.05) * GRID_BOX_SIZE,
      transition: { duration: 3.5, repeatDelay: 5, delay: 2 },
    },
    {
      top: GRID_BOX_SIZE * 12,
      left: Math.floor(numColumns * 0.15) * GRID_BOX_SIZE,
      transition: { duration: 3.5, repeatDelay: 10, delay: 4 },
    },
    {
      top: GRID_BOX_SIZE * 3,
      left: Math.floor(numColumns * 0.25) * GRID_BOX_SIZE,
    },
    {
      top: GRID_BOX_SIZE * 9,
      left: Math.floor(numColumns * 0.75) * GRID_BOX_SIZE,
      transition: { duration: 2, repeatDelay: 7.5, delay: 3.5 },
    },
    {
      top: 0,
      left: Math.floor(numColumns * 0.7) * GRID_BOX_SIZE,
      transition: { duration: 3, repeatDelay: 2, delay: 1 },
    },
    {
      top: GRID_BOX_SIZE * 2,
      left: Math.floor(numColumns * 1) * GRID_BOX_SIZE - GRID_BOX_SIZE,
      transition: { duration: 5, repeatDelay: 5, delay: 5 },
    },
  ];

  return (
    <>
      {placements.map((p, i) => (
        <Beam
          key={i}
          top={p.top}
          left={p.left - BEAM_WIDTH_OFFSET}
          transition={p.transition || {}}
        />
      ))}
    </>
  );
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

const Beam = ({ top, left, transition = {} }) => {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ opacity: [0, 1, 0], y: 32 * 8 }}
      transition={{ ease: "easeInOut", duration: 3, repeat: Infinity, repeatDelay: 1.5, ...transition }}
      style={{ top, left }}
      className="absolute z-10 h-[64px] w-[1px] bg-gradient-to-b from-blue-400/0 dark:from-blue-500/0 to-blue-400 dark:to-blue-500"
    />
  );
};

const GradientGrid = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.5, ease: "easeInOut" }}
      className="absolute inset-0 z-0"
    >
      <div
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='rgb(209 213 219 / 0.5)' dark:stroke='rgb(30 58 138 / 0.5)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        }}
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-gray-50/0 dark:from-zinc-950/0 to-gray-50 dark:to-zinc-950" />
    </motion.div>
  );
};

const GRID_BOX_SIZE = 32;
const BEAM_WIDTH_OFFSET = 1;