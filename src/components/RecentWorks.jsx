import React from "react";

const Works = [
  {
    title: "Sauvage Perfume",
    desc: "Product design | 3D Model | Creative Animation",
    file: "#",
  },
  {
    title: "Sauvage Perfume",
    desc: "Product design | 3D Model | Creative Animation",
    file: "#",
  },
];

const RecentWorks = () => {
  return (
    <section className="p-10 mt-10">
      <div className="mt-20 grid grid-cols-2 gap-20">
        {Works.map(({ title, desc, src }, i) => (
          <div key={i}>
            <div className="rounded-3xl w-full h-[300px] bg-zinc-300"></div>
            <h3 className="mt-5">{title}</h3>
            <p className="font-extralight tracking-normal">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentWorks;
