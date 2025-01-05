/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        heroBg: "url(/heroBg.webp)",
      },
      fontSize: {
        desc: "max(2em, 4.5vw)",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      padding: {
        section: "min(8vw, 8em)",
        mediumSection: "min(6vw, 6em)",
      },
      gap: {
        base: "min(4vw, 4em)",
      },
    },
  },
  plugins: [],
};
