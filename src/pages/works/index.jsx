import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import TextAnimation from "@/components/TextAnimation";
import { FocusCards } from "@/components/ui/FocusCards";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

const AllWorks = [
  {
    title: "Pages",
    desc: "Brand Strategy & Voice, Branding & Design",
    src: "/works/brand/015.webp",
    link: "/works/pages",
  },
  {
    title: "Spicy",
    desc: "Brand Strategy & Voice, Branding & Design",
    src: "/works/002.webp",
  },
  {
    title: "Sauvage Perfume",
    desc: "Product design | 3D Model | Creative Animation",
    src: "/works/003.webp",
  },
  {
    title: "Sauvage Perfume",
    desc: "Product design | 3D Model | Creative Animation",
    src: "/works/005.webp",
  },
  {
    title: "Sauvage Perfume",
    desc: "Product design | 3D Model | Creative Animation",
    src: "/works/006.webp",
  },
  {
    title: "Sauvage Perfume",
    desc: "Product design | 3D Model | Creative Animation",
    src: "/works/007.webp",
  },
  {
    title: "Sauvage Perfume",
    desc: "Product design | 3D Model | Creative Animation",
    src: "/works/008.webp",
  },
  {
    title: "Sauvage Perfume",
    desc: "Product design | 3D Model | Creative Animation",
    src: "/works/009.webp",
  },
  {
    title: "Sauvage Perfume",
    desc: "Product design | 3D Model | Creative Animation",
    src: "/works/010.webp",
  },
  {
    title: "Sauvage Perfume",
    desc: "Product design | 3D Model | Creative Animation",
    src: "/works/011.webp",
  },
  {
    title: "Sauvage Perfume",
    desc: "Product design | 3D Model | Creative Animation",
    src: "/works/012.webp",
  },
  {
    title: "Sauvage Perfume",
    desc: "Product design | 3D Model | Creative Animation",
    src: "/works/013.webp",
  },
  {
    title: "Sauvage Perfume",
    desc: "Product design | 3D Model | Creative Animation",
    src: "/works/014.webp",
  },
  {
    title: "Sauvage Perfume",
    desc: "Product design | 3D Model | Creative Animation",
    src: "/works/015.webp",
  },
  {
    title: "Sauvage Perfume",
    desc: "Product design | 3D Model | Creative Animation",
    src: "/works/016.webp",
  },
  {
    title: "Sauvage Perfume",
    desc: "Product design | 3D Model | Creative Animation",
    src: "/works/017.webp",
  },
];

const Works = () => {
  return (
    <PageTransition>
      <Header />
      <section className="min-h-screen bg-heroBg bg-no-repeat px-mediumSection pt-36 flex flex-col justify-between">
        <div className="uppercase relative sm:mt-20 mt-36">
          <h1 className="sm:ml-36">
            <TextAnimation text="Showcase" once delayIndex={1} />
          </h1>
          <h1 className="sm:ml-72">
            <TextAnimation text="Creative" once delayIndex={3} />
          </h1>
          <h1 className="sm:ml-96">
            <TextAnimation text="Excellence" once delayIndex={2} />
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
      <section className="py-section px-mediumSection mt-10">
        <FocusCards cards={AllWorks} className="md:grid-cols-3" />
      </section>
      <Footer />
    </PageTransition>
  );
};

export default Works;
