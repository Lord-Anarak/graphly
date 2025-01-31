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

export default function Home() {
  return (
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
  );
}
