import React from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
} from "motion/react";

const services = ["Branding", "Commercials", "Web Design", "Development"];

const InfiniteText = () => {
  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (v) => `${-v % 194.1}%`);

  useAnimationFrame((t, delta) => {
    baseX.set(baseX.get() + delta / 100);
  });
  return (
    <div className="relative py-5 overflow-hidden border-y border-zinc-600 mt-10">
      <motion.div
        style={{ x }}
        className="flex items-center whitespace-nowrap flex-nowrap relative gap-5 text-desc">
        {[...services, ...services].map((service, index) => (
          <div className="flex items-center gap-5" key={indexss}>
            <p key={index} className="uppercase text-[1.4em] font-bold">
              {service}
            </p>

            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="53"
                height="53"
                viewBox="0 0 53 53"
                fill="none">
                <path
                  d="M26.7253 0L33.9445 18.8919L52.8363 26.111L33.9445 33.3301L26.7253 52.222L19.5062 33.3301L0.614319 26.111L19.5062 18.8919L26.7253 0Z"
                  fill="#F26622"
                />
              </svg>
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteText;
