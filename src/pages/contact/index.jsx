import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import TextAnimation from "@/components/TextAnimation";
import TextMaskAnimation from "@/components/TextMaskAnimation";
import { motion } from "motion/react";
import React from "react";

const Contact = () => {
  return (
    <PageTransition>
      <div className="bg-zinc-100">
        <Header />
        <section className="grid grid-cols-2 py-section pt-[30vh] px-mediumSection gap-base">
          <div className="flex justify-between flex-col">
            <h2 className="text-desc uppercase text-zinc-900 font-medium">
              <TextAnimation text="Need a fresh" once />
              <TextAnimation text="Perspective?" once />
            </h2>
            <p className="text-zinc-900 text-[1.2em] font-medium">
              <TextMaskAnimation
                phrases={[
                  "We engage in projects of varying scales – from helping startups to",
                  "global brands. Get in touch to see how we can help you.",
                ]}
              />
            </p>
          </div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1.5,
              delay: 0.3,
              ease: [0.83, 0, 0.17, 1],
            }}>
            <form
              action="#"
              className="flex flex-col text-zinc-900 font-medium">
              <label for="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                className="mt-3 bg-transparent border-b border-zinc-400 py-3 placeholder:text-2xl"
              />
              <label for="email" className="mt-10">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                className="mt-3 bg-transparent border-b border-zinc-400 py-3 placeholder:text-2xl"
              />
              <label for="message" className="mt-10">
                Message
              </label>
              <textarea
                name="message"
                className="mt-3 bg-transparent border-b border-zinc-400 py-3"
                rows={3}
              />
              <button
                type="submit"
                className="mt-5 py-3 px-5 border border-zinc-900 rounded-full w-36">
                SEND FORM
              </button>
            </form>
          </motion.div>
        </section>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Contact;
