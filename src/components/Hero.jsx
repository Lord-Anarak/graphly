import Image from "next/image";
import React from "react";
import TextAnimation from "./TextAnimation";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="min-h-screen bg-heroBg bg-no-repeat px-10 pt-36 pb-16 flex flex-col justify-between">
      <div className="uppercase relative">
        <h1>
          <TextAnimation text="Creating" once delayIndex={1} />
          <TextAnimation text="Digital" once delayIndex={8} />
          <TextAnimation text="Masterpieces" once delayIndex={6} />
        </h1>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }}
          className="absolute right-36 top-0 motion-safe:animate-spin-slow">
          <Image
            src="/spinner.webp"
            width={200}
            height={200}
            alt="spinning badge"
          />
        </motion.div>
      </div>
      <div className="overflow-hidden">
        <motion.div
          initial={{ y: 100, opacity: 0.5 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.83, 0, 0.17, 1], delay: 0.7 }}
          className="flex justify-between">
          <h5>Your Partner in Creative Transformation</h5>
          <div className="flex items-start gap-10">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="93"
                height="93"
                viewBox="0 0 93 93"
                fill="none">
                <path
                  d="M5 88L83.75 9.25M5 4H89V88"
                  stroke="white"
                  stroke-width="6.5"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <div>
              <h5>Empowering brands with innovative design and</h5>
              <h5>digital strategies that captivate, connect, and drive</h5>
              <h5>success.</h5>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
