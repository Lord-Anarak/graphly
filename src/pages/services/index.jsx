import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import TextAnimation from "@/components/TextAnimation";
import TextMaskAnimation from "@/components/TextMaskAnimation";
import { motion } from "motion/react";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const branding = [
  {
    title: "Research and Insight",
    description:
      "Using consumer and competitive intelligence to help your brand discover unmet opportunities to drive new growth and close the gap between what you’re selling and what your customers really want.",
  },
  {
    title: "Brand Strategy",
    description:
      "Defining the unique ‘why’ and promise that drives your brand, and how that defines the transformational change needed to build the connections that your customers are craving.",
  },
  {
    title: "Brand Purpose & Positioning",
    description:
      "Anchoring your brand to your mission-fuelled purpose and values to position your company in the market as a disrupter – standing for something much bigger than just what you sell.",
  },
  {
    title: "Competitive Study",
    description:
      "Uncovering the competitive landscape through research to identify areas of differentiation in which your brand can outperform competitors and attain market leadership.",
  },
  {
    title: "Naming & Copywriting",
    description:
      "Transforming the creative intent of your brand’s purpose and strategy into your brand’s voice through naming, slogans and writing that spark desire – never boring, always on the linguistic edge.",
  },
  {
    title: "Brand Architecture",
    description:
      "Streamlining the relationship between your company’s different brand offerings to simplify customer navigation and express your brand narrative across your entire portfolio.",
  },
];

const web = [
  {
    title: "UI & UX Design",
    description:
      "Applying user-first design principles to ensure that every interaction with your brand’s products is both functionally efficient and aesthetically pleasing.",
  },
  {
    title: "Mobile App",
    description:
      "Developing a comprehensive approach for designing, building, and marketing mobile apps that align with your brand's purpose and goals, and meet the needs of your target audience.",
  },
  {
    title: "Web Design",
    description:
      "Designing next-level websites that immerse users in your brand experience, telling your brand story through intuitive digital interactions to transform engagement into sales.",
  },
  {
    title: "eCommerce",
    description:
      "Working with a range of tech stacks to prototype and develop web and apps – bridging the gap between the technicalities of coding and the desired user experience.",
  },
  {
    title: "Development & Management",
    description:
      "Working with a range of tech stacks to prototype and develop web and apps – bridging the gap between the technicalities of coding and the desired user experience.",
  },
];

const content = [
  {
    title: "Campaign Ideation",
    description:
      "Crafting original, fresh, and persuasive campaign ideas that align with your brand's identity and market positioning to improve brand recognition and customer acquisition.",
  },
  {
    title: "Content Strategy",
    description:
      "Finding the key insight, trend and spark that forms the foundation for the campaign, then developing the activation toolkit to bring it alive across the key channels.",
  },
  {
    title: "Video & Photography",
    description:
      "Developing video and photography-based content that is tailored to align with your brand's purpose, by creating signature visual styles to elevate its differentiation and reach.",
  },
  {
    title: "Social & Content Production",
    description:
      "Creating and executing social-media-centric campaign content that is aligned with follower-base preferences and trends, to increase brand engagement and acquisition.",
  },
  {
    title: "Ongoing Brand Management",
    description:
      "Taking care of your brand over time by undertaking a variety of branding and marketing campaigns - making sure all the details are taken care of, to keep your brand growing and successful.",
  },
  {
    title: "Go-to-market Planning",
    description:
      "Designing and executing a go-to-market plan – outlining the strategies, tactics, and resources required to successfully launch, scale, and achieve market penetration and revenue goals.",
  },
];

const Services = () => {
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
  const [activeBranding, setActiveBranding] = useState(0);
  const [activeWeb, setActiveWeb] = useState(0);
  const [activeContent, setActiveContent] = useState(0);
  return (
    <>
      <Head>
        <title>Our Services - Graphly | Digital Branding & Web Design</title>
        <meta
          name="description"
          content="Explore Graphly's services in branding, web design, digital strategy, and UI/UX design to elevate your brand."
        />
        <meta
          property="og:title"
          content="Graphly Services - Creative Branding & Web Design"
        />
        <meta
          property="og:description"
          content="Discover our range of services, from web design to digital marketing."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://graphlyco.com/services" />
        <link rel="canonical" href="https://graphlyco.com/services" />
      </Head>
      <PageTransition>
        <Header />
        <section
          className="min-h-screen bg-heroBg bg-no-repeat px-mediumSection pt-36 flex flex-col justify-between"
          ref={scrollContainer}
          data-scroll-section>
          <div className="uppercase relative sm:mt-20 mt-36">
            <h1 className="sm:ml-36">
              <TextAnimation text="Empowering" once delayIndex={1} />
            </h1>
            <h1 className="sm:ml-72">
              <TextAnimation text="Brands" once delayIndex={3} />
            </h1>
            <h1 className="sm:ml-96">
              <TextAnimation text="Everywhere" once delayIndex={2} />
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
            className="absolute sm:top-60 sm:right-20 bottom-10 "
            data-scroll
            data-scroll-speed="0.2">
            <div className="relative w-[90vw] sm:w-[25vw] h-36 sm:h-[30vh] rounded-2xl overflow-hidden">
              <Image src="/works/014.webp" fill objectFit="cover" alt="about" />
            </div>
          </motion.div>
        </section>
        <section className="py-section px-mediumSection grid sm:grid-cols-2 gap-base">
          <div>
            <h2 className="uppercase leading-none font-semibold">
              <span className="sm:text-[1em] text-[0.7em]">
                <TextMaskAnimation
                  phrases={[
                    "Brand",
                    "identity &",
                    <span key={"Strategy"} className="gradient-text">
                      Strategy
                    </span>,
                  ]}
                />
              </span>
            </h2>
            <p className="sm:mt-20 mt-10">
              Helping you uncover your brand’s purpose and uniqueness – and the
              game plan to deliver it to win your customers’ devotion.
            </p>
          </div>
          <div className="pt-5">
            <div>
              <motion.ul
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }}>
                {branding.map(({ title, description }, i) => (
                  <motion.li
                    key={i}
                    className={`pb-5 ${
                      branding.length - 1 !== i ? "border-b" : ""
                    } border-zinc-400 mb-5 cursor-pointer h-full overflow-hidden`}
                    initial={false}
                    animate={{ maxHeight: activeBranding === i ? 192 : 48 }}
                    transition={{ duration: 0.5, ease: "linear" }}
                    onClick={() =>
                      setActiveBranding(activeBranding === i ? null : i)
                    }>
                    <h5 className="flex justify-between items-center pr-5 ">
                      {title}
                      <motion.div
                        className="w-2 h-2 rounded-full"
                        animate={{
                          backgroundColor:
                            activeBranding === i ? "#FF5722" : "#A1A1A1",
                        }}
                        transition={{ duration: 0.3 }}></motion.div>
                    </h5>
                    <motion.p
                      className="mt-5"
                      initial={{ opacity: 0, y: 10 }}
                      animate={
                        activeBranding === i
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
        </section>
        <section className="p-mediumSection grid sm:grid-cols-2 gap-base">
          <div>
            <h2 className="uppercase leading-none font-semibold">
              <span className="sm:text-[0.98em] text-[0.7em]">
                <TextMaskAnimation
                  phrases={[
                    "Content &",
                    <span key={"Campaigns"} className="gradient-text">
                      Campaigns
                    </span>,
                  ]}
                />
              </span>
            </h2>
            <p className="sm:mt-20 mt-10">
              Creating and implementing a multi-platform campaign strategy and
              content that is based on consumer preferences and trends, to drive
              engagement and conversions.
            </p>
          </div>
          <div className="pt-5">
            <div>
              <motion.ul
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }}>
                {content.map(({ title, description }, i) => (
                  <motion.li
                    key={i}
                    className={`pb-5 ${
                      content.length - 1 !== i ? "border-b" : ""
                    } border-zinc-400 mb-5 cursor-pointer h-full overflow-hidden`}
                    initial={false}
                    animate={{ maxHeight: activeWeb === i ? 192 : 48 }}
                    transition={{ duration: 0.5, ease: "linear" }}
                    onClick={() => setActiveWeb(activeWeb === i ? null : i)}>
                    <h5 className="flex justify-between items-center pr-5 ">
                      {title}
                      <motion.div
                        className="w-2 h-2 rounded-full"
                        animate={{
                          backgroundColor:
                            activeWeb === i ? "#FF5722" : "#A1A1A1",
                        }}
                        transition={{ duration: 0.3 }}></motion.div>
                    </h5>
                    <motion.p
                      className="mt-5"
                      initial={{ opacity: 0, y: 10 }}
                      animate={
                        activeWeb === i
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
        </section>
        <section className="p-mediumSection pb-section grid sm:grid-cols-2 gap-base">
          <div>
            <h2 className="uppercase leading-none font-semibold">
              <span className="sm:text-[1em] text-[0.7em]">
                <TextMaskAnimation
                  phrases={[
                    "Digital",
                    <span key={"Web"} className="gradient-text">
                      & Web
                    </span>,
                  ]}
                />
              </span>
            </h2>
            <p className="sm:mt-20 mt-10">
              Designing engaging digital experiences that combine brand strategy
              and creativity with UX insights to deliver functionality and ease
              of use. Always cutting-edge.
            </p>
          </div>
          <div className="pt-5">
            <div>
              <motion.ul
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }}>
                {web.map(({ title, description }, i) => (
                  <motion.li
                    key={i}
                    className={`pb-5 ${
                      web.length - 1 !== i ? "border-b" : ""
                    } border-zinc-400 mb-5 cursor-pointer h-full overflow-hidden`}
                    initial={false}
                    animate={{ maxHeight: activeWeb === i ? 192 : 48 }}
                    transition={{ duration: 0.5, ease: "linear" }}
                    onClick={() => setActiveWeb(activeWeb === i ? null : i)}>
                    <h5 className="flex justify-between items-center pr-5 ">
                      {title}
                      <motion.div
                        className="w-2 h-2 rounded-full"
                        animate={{
                          backgroundColor:
                            activeWeb === i ? "#FF5722" : "#A1A1A1",
                        }}
                        transition={{ duration: 0.3 }}></motion.div>
                    </h5>
                    <motion.p
                      className="mt-5"
                      initial={{ opacity: 0, y: 10 }}
                      animate={
                        activeWeb === i
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
        </section>
        <Footer />
      </PageTransition>
    </>
  );
};

export default Services;
