"use client";
import "@/styles/globals.css";
import { AnimatePresence } from "motion/react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { useEffect, useState } from "react";
import Preloader from "@/components/Preloader";

const sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps, router }) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotivescroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <main className={`${sans.className}`}>
      <Preloader onLoadingComplete={() => setIsLoading(false)} />
      <AnimatePresence mode="wait">
        {!isLoading && <Component key={router.route} {...pageProps} />}
      </AnimatePresence>
    </main>
  );
}
