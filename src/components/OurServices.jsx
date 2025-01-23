import React from "react";

const services = [
  "branding",
  "web design",
  "digital marketing",
  "commercials",
  "ui/ux Design",
];

const OurServices = () => {
  return (
    <section className="p-mediumSection overflow-hidden">
      <h5 className="uppercase font-light">Our Services</h5>
      <div className="sm:mt-20 mt-10 border-t border-zinc-700">
        <ul>
          {services.map((service, i) => (
            <li
              key={i}
              className="py-10 sm:px-5 px-0 border-b border-zinc-700 text-desc uppercase">
              <span className="sm:mr-20 mr-5">0{i + 1}/</span>
              {service}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OurServices;
