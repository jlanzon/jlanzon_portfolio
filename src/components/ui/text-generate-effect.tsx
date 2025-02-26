"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.1),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, wordIndex) => {
          const letters = word.split("").map((letter, letterIndex) => (
            <motion.span
              key={`${wordIndex}-${letterIndex}`}
              className={cn("dark:text-white text-black opacity-0", className)}
            >
              {letter}
            </motion.span>
          ));

          // Wrap each word in a span and use marginRight for spacing between words
          return (
            <span key={wordIndex} style={{ marginRight: "0.5em" }}>
              {letters}
            </span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold")}>
      <div className="mt-4">
        <div className=" dark:text-white text-black text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
