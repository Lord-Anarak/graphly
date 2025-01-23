import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import TextAnimation from "@/components/TextAnimation";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <PageTransition>
      <Header />
      <section className="min-h-screen bg-heroBg bg-no-repeat px-mediumSection pt-36 flex flex-col justify-between">
        <div className="uppercase relative sm:mt-20 mt-36">
          <h1 className="sm:ml-36">
            <TextAnimation text="Creative." once delayIndex={1} />
          </h1>
          <h1 className="sm:ml-72">
            <TextAnimation text="Impactful." once delayIndex={3} />
          </h1>
          <h1 className="sm:ml-96">
            <TextAnimation text="Innovative." once delayIndex={2} />
          </h1>

          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }}
            className="absolute left-0 sm:-bottom-5 bottom-40">
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
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }}
          className="absolute sm:top-36 sm:right-28 bottom-10 ">
          <div className="relative w-[90vw] sm:w-[25vw] h-36 sm:h-[30vh] rounded-2xl overflow-hidden">
            <Image src="/about.webp" fill objectFit="cover" alt="about" />
          </div>
        </motion.div>
      </section>
      <section className="py-section px-mediumSection">
        <div className="grid sm:grid-cols-2 gap-base ">
          <div className="">
            <p className="text-zinc-400 text-para">
              Graphly was founded with a passion for design and a vision to
              empower businesses through visually stunning and functional
              solutions. Our team combines years of expertise with a bold
              entrepreneurial spirit, driven by one mission: to transform ideas
              into powerful digital experiences.
            </p>
            <div className="w-full h-[70vh] mt-20 overflow-hidden flex items-center justify-end rounded-3xl">
              <Image
                src="/about2.webp"
                width={700}
                height={500}
                alt="Creative table with objects"
              />
            </div>
          </div>
          <div className="sm:mt-0 mt-10 pb-mediumSection">
            <p className="text-[calc(theme(fontSize.desc)*0.5)]">
              Our vision at Graphly is to become a global leader in innovative
              design and digital transformation, empowering businesses of all
              sizes to unlock their full potential. We strive to create
              impactful solutions that blend creativity and functionality,
              leaving a lasting impression and driving meaningful results in an
              ever-evolving digital world.
            </p>
          </div>
        </div>
      </section>
      <About />
      <Footer />
    </PageTransition>
  );
};

export default AboutUs;
