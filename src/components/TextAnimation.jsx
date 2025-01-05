import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

export const slideUp = {
  initial: {
    y: "100%",
    rotate: 12,
  },
  open: (i) => ({
    y: "0%",
    rotate: 0,
    transition: { duration: 1, delay: 0.05 * i, ease: [0.83, 0, 0.17, 1] },
  }),
  closed: {
    y: "100%",
    rotate: 12,
    transition: { duration: 0.5 },
  },
};

const TextAnimation = ({ text, once, type, delayIndex }) => {
  const ref = useRef();
  const isInView = useInView(ref, { amount: 1, once });

  if (type === "word") {
    return (
      <>
        <span className="m-0 p-0" ref={ref}>
          {text.split(" ").map((word, index) => {
            return (
              <span
                key={index}
                className="relative overflow-hidden inline-flex mr-1">
                <motion.span
                  className="mr-3"
                  variants={slideUp}
                  initial="initial"
                  custom={index + delayIndex}
                  animate={isInView ? "open" : "closed"}
                  key={index}>
                  {word}
                </motion.span>
              </span>
            );
          })}
        </span>
        <p className="sr-only">{text}</p>
      </>
    );
  }
  return (
    <>
      <p ref={ref} className="m-0 leading-none gap-2">
        {text.split(" ").map((word, index) => (
          <span key={index} className="mr-3">
            {word.split("").map((letter, index) => (
              <span
                key={index}
                className="relative overflow-hidden inline-flex">
                <motion.span
                  variants={slideUp}
                  initial="initial"
                  custom={index + delayIndex}
                  animate={isInView ? "open" : "closed"}
                  key={index}>
                  {letter}
                </motion.span>
              </span>
            ))}
          </span>
        ))}
      </p>
      <p className="sr-only">{text}</p>
    </>
  );
};

export default TextAnimation;
