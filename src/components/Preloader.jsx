import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "motion/react";
import Image from "next/image";
import TextMaskAnimation from "./TextMaskAnimation";

const Preloader = ({ onLoadingComplete }) => {
  const [loading, setLoading] = useState(true);
  const [isComplete, setIsComplete] = useState(false); // Track if loading is done
  const [progressValue, setProgressValue] = useState(0); // Track the current progress value
  const progress = useMotionValue(0);
  const rounded = useTransform(progress, Math.round);

  useEffect(() => {
    // Listen for changes in the rounded progress value
    const unsubscribe = rounded.onChange((v) => {
      setProgressValue(v); // Update state with the rounded value
    });

    return () => unsubscribe(); // Clean up listener on unmount
  }, [rounded]);

  useEffect(() => {
    const simulateLoading = async () => {
      const loadingSteps = [
        { target: 30, duration: 1 },
        { target: 50, duration: 0.8 },
        { target: 70, duration: 1.2 },
        { target: 90, duration: 0.9 },
        { target: 100, duration: 0.5 },
      ];

      for (const step of loadingSteps) {
        await animate(progress, step.target, {
          duration: step.duration,
          ease: "easeInOut",
          delay: 0.3,
        }).finished;

        if (step.target !== 100) {
          await new Promise((resolve) =>
            setTimeout(resolve, Math.random() * 500 + 200)
          );
        }
      }

      setTimeout(() => {
        setLoading(false);
        setIsComplete(true); // Mark as complete
        onLoadingComplete?.();
      }, 800);
    };

    simulateLoading();
  }, [progress, onLoadingComplete]);

  const slideVariants = {
    initial: {
      y: 0,
    },
    exit: {
      y: "-100%",
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <motion.div
      variants={slideVariants}
      initial="initial"
      animate={loading ? "initial" : "exit"}
      className="fixed inset-0 bg-zinc-900 z-50 flex items-center justify-center">
      <div className="overflow-hidden absolute">
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }}>
          <Image
            src="/logo.webp"
            alt="Logo"
            width={400}
            height={400}
            priority
          />
        </motion.div>
      </div>

      <motion.h1
        className="absolute bottom-8 right-8 font-bold text-white flex items-baseline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, staggerChildren: 0.3 }}>
        <TextMaskAnimation
          phrases={isComplete ? ["100%"] : [`${progressValue}%`]}
        />
      </motion.h1>
    </motion.div>
  );
};

export default Preloader;
