import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from "motion/react";
import Image from "next/image";
import PageTransition from "@/components/PageTransition";
import TextAnimation from "@/components/TextAnimation";
import React from "react";

const Pages = () => {
  return (
    <PageTransition>
      <Header />
      <section className="min-h-screen bg-heroBg bg-no-repeat px-10 pt-36  flex flex-col justify-between">
        <div className="uppercase relative mt-20">
          <p className="px-6 p-4 border border-zinc-100 inline-flex rounded-full">
            Case Study
          </p>
          <div className="flex justify-between items-center mt-10 pb-20 border-b border-zinc-100">
            <h1>
              <TextAnimation text="Pages" once delayIndex={1} />
            </h1>
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
          </div>
          <div className="flex justify-between items-center mt-10 capitalize">
            <p>Dubai</p>
            <p>2024</p>
          </div>
        </div>
      </section>
      <section className="px-10 pb-20">
        <div className="rounded-3xl w-full h-[calc(100vh-50px)] overflow-hidden relative">
          <Image src="/works/brand/018.webp" fill objectFit="cover" />
        </div>
      </section>
      <section className="py-section px-10 grid grid-cols-2 gap-base">
        <div>
          <h3>Services</h3>
          <p className="opacity-70 mt-3">Brand Identity</p>
          <h3 className="mt-10">Industry</h3>
          <p className="opacity-70 mt-3">Industry</p>
        </div>
        <div>
          <h3>Overview</h3>
          <p className="opacity-70 mt-3">
            This branding project was centered on creating a distinct and
            memorable identity for <strong>"Pages,"</strong> a company focused
            on providing innovative solutions in industry. The goal was to
            design a logo that embodies the essence of the brand while
            maintaining versatility and appeal.
          </p>
        </div>
      </section>
      <Footer />
    </PageTransition>
  );
};

export default Pages;
