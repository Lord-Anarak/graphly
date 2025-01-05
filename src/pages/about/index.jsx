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
      <section className="min-h-screen bg-heroBg bg-no-repeat px-10 pt-36  flex flex-col justify-between">
        <div className="uppercase relative mt-20">
          <h1 className="ml-36">
            <TextAnimation text="Creative." once delayIndex={1} />
          </h1>
          <h1 className="ml-72">
            <TextAnimation text="Impactful." once delayIndex={3} />
          </h1>
          <h1 className="ml-96">
            <TextAnimation text="Innovative." once delayIndex={2} />
          </h1>

          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }}
            className="absolute left-0 -bottom-5 motion-safe:animate-spin-slow">
            <Image
              src="/spinner.webp"
              width={150}
              height={150}
              alt="spinning badge"
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }}
          className="absolute top-36 right-28 rounded-2xl overflow-hidden">
          <Image src="/about.webp" width={350} height={300} alt="about" />
        </motion.div>
      </section>
      <section className="px-10 py-32">
        <div className="grid grid-cols-2 gap-20 border-t border-zinc-600 py-20">
          <div className="">
            <h5 className="text-zinc-400">
              Graphly was founded with a passion for design and a vision to
              empower businesses through visually stunning and functional
              solutions. Our team combines years of expertise with a bold
              entrepreneurial spirit, driven by one mission: to transform ideas
              into powerful digital experiences.
            </h5>
            <div className="w-full h-[70vh] mt-20 overflow-hidden flex items-center justify-end rounded-3xl">
              <Image
                src="/about2.webp"
                width={700}
                height={500}
                alt="Creative table with objects"
              />
            </div>
          </div>
          <div>
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
