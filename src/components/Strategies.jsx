import React from "react";
import TextMaskAnimation from "./TextMaskAnimation";

const benifits = [
  "Efficient Sprint Planning",
  "On Time Delivery",
  "Innovative Strategies",
  "Standup and Demos",
];

const Strategies = () => {
  return (
    <section className="py-section px-mediumSection flex flex-wrap justify-between items-start gap-base overflow-hidden">
      <div className="text-desc leading-tight sm:w-1/2">
        <TextMaskAnimation
          phrases={[
            "Strategies for building Growing and Managing",
            "your Brands Identity",
          ]}
        />
      </div>
      <div className="sm:mt-5 mt-5">
        <div className="whitespace-nowrap text-para">
          <TextMaskAnimation
            phrases={[
              "Must explain to you how all this mistaken idea of",
              "denouncing pleasure and praising pain was born and",
              "I will give you a complete account of the system,",
              "and expound the actual teachings of the great",
              "explorer of the truth.",
              "The master-builder of human happiness. No one",
              "rejects, dislikes, or avoids pleasure itself, because it",
              "is pleasure, but because those who do not know how",
              "to pursue pleasure rationally encounter.",
            ]}
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-5 text-[1em] mt-10">
          {benifits.map((benifit, i) => (
            <p key={i} className="flex items-center">
              <span className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM11.7682 15.6402L16.7682 9.64018L15.2318 8.35982L10.9328 13.5186L8.70711 11.2929L7.29289 12.7071L10.2929 15.7071L11.0672 16.4814L11.7682 15.6402Z"
                    fill="#F26622"
                  />
                </svg>
              </span>
              {benifit}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strategies;
