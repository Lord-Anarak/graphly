import React from "react";

const Button = ({ children, isButton }) => {
  return (
    <div className="relative overflow-hidden group rounded-full px-1">
      <div className="relative transition-transform duration-300 ease-in-out  group-hover:-translate-y-2 group-hover:scale-50 mix-blend-difference">
        <span
          className={`inline-block  whitespace-nowrap ${
            isButton
              ? "py-3 px-4 border border-zinc-100 rounded-full"
              : "px-4 py-1"
          }`}>
          {children}
        </span>
      </div>
      <div className="absolute inset-0 h-full w-full top-full bg-orange-600 transition-transform duration-300 rounded-full ease-in-out group-hover:-translate-y-full scale-75 group-hover:scale-100"></div>
      <div className="absolute top-full flex justify-center left-0 right-0 transition-transform duration-300 ease-in-out scale-75 group-hover:-translate-y-full group-hover:scale-100">
        <span
          className={`inline-block whitespace-nowrap ${
            isButton ? "py-3 px-4 " : "px-4 py-1"
          }`}>
          {children}
        </span>
      </div>
    </div>
  );
};

export default Button;
