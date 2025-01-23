"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Button from "./Button";
import { usePathname, useRouter } from "next/navigation";

const navLinks = ["home", "about", "services", "works", "contact"];

const Header = () => {
  const path = usePathname();
  const router = useRouter();

  const [IsOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  const variants = {
    open: {
      width: 300,
      height: 380,
    },
    closed: {
      width: 64,
      height: 64,
    },
  };

  const handleNavigation = (e, href) => {
    e.preventDefault();

    // Close mobile menu if open
    setIsOpen(false);
    setIsScrolled(false);

    // Navigate without scrolling
    router.push(href, undefined, { scroll: false });
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 1200);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }}
      className="flex justify-between items-center sm:px-10 px-5 py-5 absolute w-full">
      <div className="relative w-[calc(max(200px,10vw))] h-[calc(max(50px,1vw))]">
        <Link href="/">
          <Image
            src={path === "/contact" ? "/graphly.webp" : "/logo.webp"}
            fill
            objectFit="contain"
            alt="Company Logo"
          />
        </Link>
      </div>
      <nav className="uppercase sm:flex hidden items-center gap-2">
        {navLinks.map((link, i) => {
          const href = `/${link === "home" ? "" : link}`;
          return (
            <Link
              key={i}
              href={href}
              onClick={(e) => handleNavigation(e, href)}
              className="capitalize">
              <Button>{link}</Button>
            </Link>
          );
        })}
      </nav>
      <button
        className="sm:hidden flex items-center"
        onClick={() => setIsOpen(!IsOpen)}>
        <Button>MENU</Button>
      </button>
      <motion.button
        initial={{ scale: 0, y: 0, x: 0 }}
        animate={{
          scale: isScrolled || IsOpen ? 1 : 0,
          y: IsOpen ? 20 : 0,
          x: IsOpen ? -20 : 0,
        }}
        transition={{
          duration: 0.3,
          delay: 0.3,
          ease: "easeIn",
          type: "tween",
        }}
        className={`burgerButton z-50`}
        onClick={() => setIsOpen(!IsOpen)}>
        <div
          backgroundColor={"#2563eb"}
          className={`h-16 w-16 text-white bg-gray-50 rounded-full absolute flex items-center justify-center cursor-pointer`}>
          <div className={`burger ${IsOpen ? "burgerActive" : ""} z-30`}></div>
        </div>
      </motion.button>
      <AnimatePresence mode="wait">
        {IsOpen && (
          <motion.div
            className="bg-gray-50 fixed top-3 right-3 sm:top-10 sm:right-10 rounded-[2.5rem] z-10 overflow-hidden"
            variants={variants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ ease: [0.83, 0, 0.17, 1], duration: 1 }}>
            <div className="p-10">
              <motion.h4
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ ease: [0.83, 0, 0.17, 1], duration: 1 }}
                className="text-gray-400 uppercase font-medium origin-center">
                Menu
              </motion.h4>
              <motion.ul
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ ease: [0.83, 0, 0.17, 1], duration: 1 }}
                className="text-gray-900 capitalize text-medium mt-5">
                {navLinks.map((link, i) => {
                  const href = `/${link === "home" ? "" : link}`;
                  return (
                    <li key={i}>
                      <Link
                        href={href}
                        scroll={false}
                        onClick={(e) => {
                          handleNavigation(e, href);
                        }}>
                        {link}
                      </Link>
                    </li>
                  );
                })}
              </motion.ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
