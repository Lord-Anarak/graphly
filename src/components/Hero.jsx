import Image from "next/image";
import React from "react";
import TextAnimation from "./TextAnimation";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="min-h-screen bg-heroBg bg-no-repeat sm:px-10 px-5 pt-36 pb-16 flex flex-col justify-between">
      <div className="uppercase relative">
        <h1 className="flex flex-col gap-2 sm:gap-0">
          <TextAnimation text="Creating" once delayIndex={1} />
          <TextAnimation text="Digital" once delayIndex={8} />
          <TextAnimation text="Masterpieces" once delayIndex={6} />
        </h1>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }}
          className="absolute sm:left-[75%] left-0 sm:top-0 top-36">
          <div className="w-[calc(max(120px,15vw))] h-[calc(max(120px,15vw))] relative motion-safe:animate-spin-slow">
            <Image
              src="/spinner.webp"
              fill
              objectFit="cover"
              alt="spinning badge"
            />
          </div>
        </motion.div>
      </div>
      <div>
        <motion.div
          initial={{ y: 100, opacity: 0.5 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.83, 0, 0.17, 1], delay: 0.7 }}
          className="flex flex-wrap justify-between gap-base">
          <h5>Your Partner in Creative Transformation</h5>
          <div className="flex items-start gap-base">
            <div className="w-[calc(max(70px,6vw))] h-[calc(max(70px,6vw))] mt-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
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
            </div>
            <div>
              <h5 className="sm:w-[30vw]">
                Empowering brands with innovative design and digital strategies
                that captivate, connect, and drive success.
              </h5>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
