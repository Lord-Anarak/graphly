import React from "react";
import { FocusCards } from "./ui/FocusCards";

const Works = [
  {
    title: "Spicy",
    desc: "Brand Strategy & Voice, Branding & Design",
    src: "/works/002.webp",
  },
  {
    title: "Pages",
    desc: "Brand Strategy & Voice, Branding & Design",
    src: "/works/brand/015.webp",
    link: "/works/pages",
  },
  {
    title: "Sauvage Perfume",
    desc: "Product design | 3D Model | Creative Animation",
    src: "/works/005.webp",
  },
  {
    title: "Sauvage Perfume",
    desc: "Product design | 3D Model | Creative Animation",
    src: "/works/006.webp",
  },
];

const RecentWorks = () => {
  return (
    <section className="py-section px-mediumSection">
      <FocusCards cards={Works} />
    </section>
  );
};

export default RecentWorks;
