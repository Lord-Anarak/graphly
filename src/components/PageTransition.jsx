import { motion } from "motion/react";

const PageTransition = ({ children }) => {
  const anim = (variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  const opacity = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    exit: {
      opacity: 1,
    },
  };

  const slide = {
    initial: {
      top: "0",
    },
    enter: {
      top: "-100vh",
      transition: {
        duration: 1,
        ease: [0.83, 0, 0.17, 1],
      },
      transitionEnd: {
        top: "100vh",
      },
    },
    exit: {
      top: "0",
      transition: {
        duration: 1,
        ease: [0.83, 0, 0.17, 1],
      },
    },
  };

  const perspective = {
    initial: {
      y: 0,
      scale: 1,
      opacity: 1,
    },
    enter: {
      y: 0,
      scale: 1,
      opacity: 1,
    },
    exit: {
      y: -100,
      scale: 0.9,
      opacity: 0.5,
      transition: {
        duration: 1.2,
        ease: [0.83, 0, 0.17, 1],
      },
    },
  };

  return (
    <div className="bg-black">
      <motion.div
        {...anim(slide)}
        className="fixed top-0 left-0 bg-orange-600 h-[100vh] w-[100vw] z-10"></motion.div>
      <motion.div {...anim(perspective)} className="h-full">
        <motion.div {...anim(opacity)}>{children}</motion.div>
      </motion.div>
    </div>
  );
};

export default PageTransition;
