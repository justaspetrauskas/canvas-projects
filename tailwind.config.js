/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "cosmic-black": "#18191B",
        "cosmic-white": "#FEFEFF",
      },
      dropShadow: {
        "cosmic-glow": "0px 0px 2px ",
      },
    },
  },
  plugins: [],
};
