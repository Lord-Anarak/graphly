import React from "react";
import ReadingText from "./ReadingText";

const About = () => {
  return (
    <section className="px-10 py-20">
      <h5 className="uppercase font-light">What we do</h5>
      <br />
      <div className="text-desc leading-tight">
        <ReadingText
          paragraph="We are a creative agency collaborating with brands to build insightful
        strategies, create unique designs, and craft experiences that bring
        positive change and value."
        />
      </div>
    </section>
  );
};

export default About;
