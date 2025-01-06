import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import TextAnimation from "@/components/TextAnimation";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

const Works = () => {
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
      <Footer />
    </PageTransition>
  );
};

export default Works;
