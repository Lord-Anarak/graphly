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
    <section className="p-10">
      <h5 className="uppercase font-light">Our Services</h5>
      <div className="mt-20 border-t border-zinc-700">
        <ul>
          {services.map((service, i) => (
            <li
              key={i}
              className="py-10 px-5 border-b border-zinc-700 text-desc uppercase">
              <span className="mr-20">0{i + 1}/</span>
              {service}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OurServices;
