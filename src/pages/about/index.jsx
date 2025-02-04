import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import ReadingText from "@/components/ReadingText";
import TextAnimation from "@/components/TextAnimation";
import { motion } from "motion/react";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const AboutUs = () => {
  const scrollContainer = useRef(null);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const scroll = new LocomotiveScroll({
        el: scrollContainer.current,
        smooth: true,
      });
    })();
  }, []);
  return (
    <>
      <Head>
        <title>About Graphly - Innovative Design & Digital Solutions</title>
        <meta
          name="description"
          content="Learn about Graphly, a creative agency specializing in branding, digital transformation, and impactful design solutions."
        />
        <meta
          name="keywords"
          content="Graphly, Digital Design, Branding, Creative Agency"
        />
        <meta
          property="og:title"
          content="About Graphly - Creative Digital Solutions"
        />
        <meta
          property="og:description"
          content="Discover how Graphly transforms ideas into stunning digital experiences with innovative design."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://graphlyco.com/about" />
        <link rel="canonical" href="https://graphlyco.com/about" />
      </Head>
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
          <div
            className="grid sm:grid-cols-2 gap-base"
            ref={scrollContainer}
            data-scroll-section>
            <div
              className="w-full h-[70vh] overflow-hidden flex items-center justify-end rounded-3xl"
              data-scroll
              data-scroll-speed="-0.1">
              <Image
                src="/about2.webp"
                width={700}
                height={500}
                alt="Creative table with objects"
              />
            </div>
            <div className="sm:mt-0 mt-10 pb-mediumSection flex justify-center items-center">
              <p className=" text-[calc(theme(fontSize.desc)*0.5)]">
                Graphly was founded with a passion for design and a vision to
                empower businesses through visually stunning and functional
                solutions. Our team combines years of expertise with a bold
                entrepreneurial spirit, driven by one mission: to transform
                ideas into powerful digital experiences.
              </p>
            </div>
          </div>
        </section>
        <section className="px-mediumSection pb-section">
          <h5 className="uppercase font-light">Our Vision</h5>
          <br />
          <div className="text-[calc(theme(fontSize.desc)*0.7)] leading-tight">
            <ReadingText
              paragraph="Our vision at Graphly is to become a global leader in innovative
          design and digital transformation, empowering businesses of all sizes
          to unlock their full potential. We strive to create impactful
          solutions that blend creativity and functionality, leaving a lasting
          impression and driving meaningful results in an ever-evolving digital
          world..."
            />
          </div>
        </section>
        <Footer />
      </PageTransition>
    </>
  );
};

export default AboutUs;
