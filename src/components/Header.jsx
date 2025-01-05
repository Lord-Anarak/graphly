"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";
import Button from "./Button";

const Header = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }}
      className="flex justify-between items-center px-10 py-5 absolute w-full">
      <div>
        <Link href="/">
          <Image src="/logo.webp" width="200" height="200" alt="" />
        </Link>
      </div>
      <nav className="uppercase flex items-center gap-2">
        <Link href="/about">
          <Button>About</Button>
        </Link>
        <Link href="/services">
          <Button>Services</Button>
        </Link>
        <Link href="/works">
          <Button>Works</Button>
        </Link>
      </nav>
      <Link
        href="/contact"
        className="p-3 px-10 text-zinc-900 bg-zinc-50 rounded-full">
        Contact Now
      </Link>
    </motion.div>
  );
};

export default Header;
