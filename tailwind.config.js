/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        lightmode: "#FAFAFA",
        darkmode: "#34CAA5",
        sidebar: "#F7F8FA",
        sidebarborder: "#EBECF2",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss")],
};
