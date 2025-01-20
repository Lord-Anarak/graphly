import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from "motion/react";
import Image from "next/image";
import PageTransition from "@/components/PageTransition";
import TextAnimation from "@/components/TextAnimation";
import React, { useState } from "react";
import TextMaskAnimation from "@/components/TextMaskAnimation";

const requirements = [
  "A clean, modern, and unique design.",
  "A color palette conveying trust, creativity, and professionalism.",
  "Incorporation of a graphical symbol that aligns with the brand name, “Pages.”",
];

const DesignProcess = [
  {
    title: "Research & Ideation",
    description:
      "Using consumer and competitive intelligence to help your brand discover unmet opportunities to drive new growth and close the gap between what you’re selling and what your customers really want.",
  },
  {
    title: "Concept Development:",
    description:
      "Using consumer and competitive intelligence to help your brand discover unmet opportunities to drive new growth and close the gap between what you’re selling and what your customers really want.",
  },
  {
    title: "Typography",
    description:
      "Using consumer and competitive intelligence to help your brand discover unmet opportunities to drive new growth and close the gap between what you’re selling and what your customers really want.",
  },
  {
    title: "Color Palette",
    description:
      "Using consumer and competitive intelligence to help your brand discover unmet opportunities to drive new growth and close the gap between what you’re selling and what your customers really want.",
  },
];

const Pages = () => {
  const [activeDesignProcess, setActiveDesignProcess] = useState(0);
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
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1, ease: [0.83, 0, 0.17, 1] }}
            className="flex justify-between items-center mt-10 capitalize">
            <p>Dubai</p>
            <p>2024</p>
          </motion.div>
        </div>
      </section>
      <section className="px-10 pb-20 ">
        <div className="rounded-3xl w-full h-[calc(100vh-50px)] overflow-hidden relative">
          <Image src="/works/brand/018.webp" fill objectFit="cover" />
        </div>
      </section>
      <section className="py-mediumSection px-10 ">
        <div className="grid grid-cols-2">
          <div className="flex flex-col justify-between border-2 border-gray-300 rounded-xl w-2/3 py-12 items-center">
            <h3 className="uppercase text-desc">
              <TextMaskAnimation phrases={["Service"]} />
            </h3>
            <p className="opacity-70 text-[1.5em]">Brand Identity</p>
            <h3 className="uppercase text-desc mt-10">
              <TextMaskAnimation phrases={["Industry"]} />
            </h3>
            <p className="opacity-70 text-[1.5em]">Industry</p>
          </div>
          <div>
            <h3 className="uppercase text-desc">
              <TextMaskAnimation phrases={["Overview"]} />
            </h3>
            <p className="opacity-70 mt-3 text-[1.5em]">
              <TextMaskAnimation
                phrases={[
                  "This branding project was centered on creating a distinct",
                  'and memorable identity for "Pages,"a company focused',
                  "on providing innovative solutions in industry. The goal",
                  "was to design a logo that embodies the essence of the",
                  "brand while maintaining versatility and appeal.",
                ]}
              />
            </p>
          </div>
        </div>
      </section>
      <section className="px-10 py-section grid grid-cols-2 gap-base">
        <div className="relative rounded-lg overflow-hidden aspect-square">
          <Image src="/works/brand/015.webp" fill objectFit="cover" />
        </div>
        <div className="py-section">
          <h3 className="uppercase text-desc">Client Brief</h3>
          <p className="opacity-70 text-[1.5em]">
            Develop a visual identity that reflects the brand’s innovative and
            creative nature.
          </p>
          <p className="opacity-70 text-[1.2em] mt-5">Requirements:</p>
          <div className="mt-10">
            {requirements.map((requirement, i) => (
              <p key={i} className="flex items-start text-[1.2em] mt-3">
                <span className="mr-2 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM11.7682 15.6402L16.7682 9.64018L15.2318 8.35982L10.9328 13.5186L8.70711 11.2929L7.29289 12.7071L10.2929 15.7071L11.0672 16.4814L11.7682 15.6402Z"
                      fill="#F26622"
                    />
                  </svg>
                </span>
                {requirement}
              </p>
            ))}
          </div>
        </div>
      </section>
      <section className="py-mediumSection px-10">
        <div>
          <h2 className="uppercase text-desc leading-none font-normal">
            <TextMaskAnimation phrases={["Design Process"]} />
          </h2>
        </div>
        <div className="pt-16 px-2">
          <div>
            <motion.ul
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }}>
              {DesignProcess.map(({ title, description }, i) => (
                <motion.li
                  key={i}
                  className={`pb-5 ${
                    DesignProcess.length - 1 !== i ? "border-b" : ""
                  } border-zinc-400 mb-10 cursor-pointer h-full overflow-hidden`}
                  initial={false}
                  animate={{ maxHeight: activeDesignProcess === i ? 192 : 48 }}
                  transition={{ duration: 0.5, ease: "linear" }}
                  onClick={() =>
                    setActiveDesignProcess(activeDesignProcess === i ? null : i)
                  }>
                  <h5 className="flex justify-between items-center pr-5 text-[1.5em]">
                    {title}
                    <motion.div
                      className="w-2 h-2 rounded-full"
                      animate={{
                        backgroundColor:
                          activeDesignProcess === i ? "#FF5722" : "#A1A1A1",
                      }}
                      transition={{ duration: 0.3 }}></motion.div>
                  </h5>
                  <motion.p
                    className="mt-5"
                    initial={{ opacity: 0, y: 10 }}
                    animate={
                      activeDesignProcess === i
                        ? { opacity: 0.7, y: 0 }
                        : { opacity: 0, y: 10 }
                    }
                    transition={{ duration: 0.3 }}>
                    {description}
                  </motion.p>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-base">
          <div className="h-[15vh] bg-orange-600 rounded-lg flex justify-center items-center">
            #334455
          </div>
          <div className="h-[15vh] bg-white rounded-lg flex justify-center items-center">
            #ffffff
          </div>
        </div>
      </section>
      <section className="py-mediumSection px-10 grid grid-cols-2 gap-[calc(theme(gap.base)*2)]">
        <div>
          <h2 className="text-desc font-normal uppercase">
            "We really appreciate their dedication to quality."
          </h2>
        </div>
        <div className="flex flex-col justify-between">
          <p className="text-[1.2em]">
            “Must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth. The master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter.”
          </p>
          <div>
            <h3 className="uppercase">Name</h3>
            <p>Director</p>
          </div>
        </div>
      </section>
      <section className="px-10 ">
        <div className="border-t border-gray-500 py-mediumSection grid grid-cols-2 gap-[calc(theme(gap.base)*2)]">
          <h2 className="text-desc font-normal uppercase">Results</h2>
          <p className="text-[1.2em]">
            The final logo successfully embodies the brand's vision of
            innovation and creativity. The spiral symbol provides a strong
            standalone identity, while the serif typography adds
            professionalism. Feedback from stakeholders and target audiences was
            overwhelmingly positive, with the design praised for its unique
            visual appeal and clarity.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-base pb-section">
          <div className="aspect-square relative rounded-xl overflow-hidden">
            <Image src="/works/brand/016.webp" fill objectFit="cover" />
          </div>
          <div className="aspect-square relative rounded-xl overflow-hidden">
            <Image src="/works/brand/017.webp" fill objectFit="cover" />
          </div>
        </div>
      </section>
      <Footer />
    </PageTransition>
  );
};

export default Pages;
