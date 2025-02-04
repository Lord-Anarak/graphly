import Image from "next/image";

import Hero from "@/components/Hero";
import Showreel from "@/components/Showreel";
import About from "@/components/About";
import InfiniteText from "@/components/InfiniteText";
import Strategies from "@/components/Strategies";
import OurApproach from "@/components/OurApproach";
import RecentWorks from "@/components/RecentWorks";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Graphly - Creative Digital Solutions & Branding</title>
        <meta
          name="description"
          content="Graphly is a digital agency specializing in branding, web design, and digital transformation for businesses of all sizes."
        />
        <meta
          name="keywords"
          content="Graphly, Digital Agency, Branding, Web Design, Digital Marketing"
        />
        <meta
          property="og:title"
          content="Graphly - Creative Digital Solutions & Branding"
        />
        <meta
          property="og:description"
          content="Transform your brand with Graphly's innovative digital solutions, web design, and branding services."
        />
        <meta property="og:image" content="/og-home.jpg" />
        <meta property="og:url" content="https://graphlyco.com" />
        <link rel="canonical" href="https://graphlyco.com" />
      </Head>

      <PageTransition>
        <main>
          <Header />
          <Hero />
          <Showreel />
          <About />
          <InfiniteText />
          <Strategies />
          <OurApproach />
          <RecentWorks />
          <Footer />
        </main>
      </PageTransition>
    </>
  );
}
