import React from "react";
import { FocusCards } from "./ui/FocusCards";

const Works = [
  {
    title: "Spicy",
    desc: "Brand Strategy & Voice, Branding & Design",
    src: "/works/002.webp",
  },
  {
    title: "Sauvage Perfume",
    desc: "Product design | 3D Model | Creative Animation",
    src: "/works/003.webp",
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
    <section className="p-section px-10 mt-10">
      <FocusCards cards={Works} />
    </section>
  );
};

export default RecentWorks;
