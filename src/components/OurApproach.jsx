import React from "react";

const approach = [
  {
    title: "Assess the Project",
    desc: "We begin by understanding your vision, goals, and requirements to lay a strong foundation.",
  },
  {
    title: "Research & Strategy",
    desc: "Conduct in-depth research and develop a strategic plan to ensure a data-driven approach.",
  },
  {
    title: "Design & Prototype",
    desc: "Create wireframes, design mockups, and interactive prototypes to visualize the final product.",
  },
  {
    title: "Develop & Implement",
    desc: "Transform designs into a fully functional, high-performance solution using cutting-edge technology.",
  },
  {
    title: "Test & Refine",
    desc: "Perform rigorous testing and optimizations to ensure flawless performance and user experience.",
  },
  {
    title: "Launch & Support",
    desc: "Deploy the final product and provide ongoing support to ensure continued success.",
  },
];

const OurApproach = () => {
  return (
    <section className="p-mediumSection min-h-screen">
      <div className="grid sm:grid-cols-2 gap-base ">
        <div className="sticky sm:top-20 top-[15vh] self-start">
          <h2 className="uppercase text-desc sm:text-[clamp(5em,7.5vw,7.5em)] sm:leading-none">
            Our <span className="gradient-text font-black">Approach</span>
          </h2>
        </div>
        <ul className="flex flex-col gap-base">
          {approach.map((step, i) => (
            <li
              key={i}
              className="py-16 mt-10 sm:mt-0 px-3 border-b border-zinc-700 flex sm:gap-7 gap-3 sticky top-[25vh] sm:top-[15vh] self-start bg-[#090909] rounded-3xl">
              <span className="text-[calc(theme(fontSize.desc)*0.7)]">
                0{i + 1}/
              </span>
              <div>
                <h4 className="text-[calc(theme(fontSize.desc)*0.7)] uppercase">
                  {step.title}
                </h4>
                <p className="mt-2">{step.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OurApproach;
