import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import TextAnimation from "@/components/TextAnimation";
import { FocusCards } from "@/components/ui/FocusCards";
import { motion } from "motion/react";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const AllWorks = [
  {
    category: "branding",
    title: "Pages",
    src: "/works/brand/015.webp",
    link: "/works/pages",
  },
  {
    category: "branding",
    title: "Spicy",
    src: "/works/002.webp",
  },
  {
    category: "branding",
    title: "Sauvage Perfume",
    src: "/works/003.webp",
  },
  {
    category: "social",
    title: "Sauvage Perfume",
    src: "/works/005.webp",
  },
  {
    category: "branding",
    title: "Sauvage Perfume",
    src: "/works/006.webp",
  },
  {
    category: "social",
    title: "Sauvage Perfume",
    src: "/works/007.webp",
  },
  {
    category: "commercial",
    title: "Sauvage Perfume",
    src: "/works/008.webp",
  },
  {
    category: "branding",
    title: "branding",
    src: "/works/009.webp",
  },
  {
    category: "branding",
    title: "Sauvage Perfume",
    src: "/works/010.webp",
  },
  {
    category: "branding",
    title: "Sauvage Perfume",
    src: "/works/011.webp",
  },
  {
    category: "branding",
    title: "Sauvage Perfume",
    src: "/works/012.webp",
  },
  {
    category: "branding",
    title: "Sauvage Perfume",
    src: "/works/013.webp",
  },
  {
    category: "branding",
    title: "Sauvage Perfume",
    src: "/works/014.webp",
  },
  {
    category: "branding",
    title: "Sauvage Perfume",
    src: "/works/015.webp",
  },
  {
    category: "branding",
    title: "Sauvage Perfume",
    src: "/works/016.webp",
  },
  {
    category: "social",
    title: "Sauvage Perfume",
    src: "/works/017.webp",
  },
  {
    category: "branding",
    title: "Sauvage Perfume",
    src: "/works/018.webp",
  },
  {
    category: "branding",
    title: "Sauvage Perfume",
    src: "/works/019.webp",
  },
  {
    category: "social",
    title: "Sauvage Perfume",
    src: "/works/020.webp",
  },
  {
    category: "social",
    title: "Sauvage Perfume",
    src: "/works/021.webp",
  },
  {
    category: "social",
    title: "Sauvage Perfume",
    src: "/works/022.webp",
  },
  {
    category: "social",
    title: "Sauvage Perfume",
    src: "/works/023.webp",
  },
  {
    category: "branding",
    title: "Sauvage Perfume",
    src: "/works/024.webp",
  },
  {
    category: "branding",
    title: "Sauvage Perfume",
    src: "/works/025.webp",
  },
  {
    category: "branding",
    title: "Sauvage Perfume",
    src: "/works/026.webp",
  },
  {
    category: "social",
    title: "Sauvage Perfume",
    src: "/works/027.webp",
  },
  {
    category: "social",
    title: "Sauvage Perfume",
    src: "/works/028.webp",
  },
];

const Works = () => {
  const scrollContainer = useRef(null);

  const [filter, setFilter] = useState("all");

  const [filteredWorks, setFilteredWorks] = useState([]);

  useEffect(() => {
    let filtered = AllWorks;
    if (filter && filter !== "all") {
      filtered = filtered.filter((item) => item.category === filter);
    }
    setFilteredWorks(filtered);
  }, [filter]);

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
        <title>Our Work - Graphly&apos;s Digital Projects & Case Studies</title>
        <meta
          name="description"
          content="Explore Graphly's portfolio of digital design, branding, and marketing projects. See how we help businesses grow with impactful designs."
        />
        <meta
          name="keywords"
          content="Graphly Projects, Digital Portfolio, Branding, Case Studies"
        />
        <meta
          property="og:title"
          content="Our Work - Graphly's Digital Projects & Case Studies"
        />
        <meta
          property="og:description"
          content="Browse Graphly's portfolio of successful branding, design, and digital marketing projects."
        />
        <meta property="og:image" content="/og-works.jpg" />
        <meta property="og:url" content="https://graphlyco.com/works" />
        <link rel="canonical" href="https://graphlyco.com/works" />
      </Head>

      <PageTransition>
        <Header />
        <section
          className="min-h-screen bg-heroBg bg-no-repeat px-mediumSection pt-36 flex flex-col justify-between"
          ref={scrollContainer}
          data-scroll-section>
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
            className="absolute sm:top-52 sm:right-28 bottom-10 "
            data-scroll
            data-scroll-speed="0.2">
            <div className="relative w-[90vw] sm:w-[25vw] h-36 sm:h-[30vh] rounded-2xl overflow-hidden">
              <Image src="/creative.webp" fill objectFit="cover" alt="about" />
            </div>
          </motion.div>
        </section>
        <section className="py-section px-mediumSection mt-10">
          <div className="flex items-start justify-between">
            <h3 className="text-white/50 font-normal">Filter</h3>
            <div className="flex items-center gap-5 pb-section">
              <Button isButton>
                <button
                  onClick={() => setFilter("all")}
                  className="rounded-full px-6 flex items-center text-[calc(theme(fontSize.desc)*0.5)]">
                  All
                </button>
              </Button>
              <Button isButton>
                <button
                  onClick={() => setFilter("branding")}
                  className="rounded-full px-6 flex items-center text-[calc(theme(fontSize.desc)*0.5)]">
                  Branding
                </button>
              </Button>
              <Button isButton>
                <button
                  onClick={() => setFilter("social")}
                  className="rounded-full px-6 flex items-center text-[calc(theme(fontSize.desc)*0.5)]">
                  Social Media
                </button>
              </Button>
              <Button isButton>
                <button
                  onClick={() => setFilter("commercial")}
                  className="rounded-full px-6 flex items-center text-[calc(theme(fontSize.desc)*0.5)]">
                  3D Commercials
                </button>
              </Button>
            </div>
          </div>
          <FocusCards cards={filteredWorks} className="md:grid-cols-3" />
        </section>
        <Footer />
      </PageTransition>
    </>
  );
};

export default Works;
