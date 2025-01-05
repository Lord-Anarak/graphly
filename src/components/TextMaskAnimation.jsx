import { useInView, motion } from "motion/react";

const TextMaskAnimation = ({ phrases }) => {
  const animation = {
    initial: { y: "100%" },
    enter: (i) => ({
      y: "0",
      transition: {
        duration: 1,
        ease: [0.83, 0, 0.17, 1],
        delay: 0.075 * i,
      },
    }),
  };

  return (
    <div>
      {phrases.map((phrase, index) => {
        return (
          <div key={index} className="overflow-hidden">
            <motion.p
              custom={index}
              variants={animation}
              initial="initial"
              whileInView={"enter"}
              viewport={{ once: true }}>
              {phrase}
            </motion.p>
          </div>
        );
      })}
    </div>
  );
};

export default TextMaskAnimation;
