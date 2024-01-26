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
        headerboarder: "#E5EAEF",
        textcolor: "#26282C",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      height: {
        "6/7": "90%",
      },
      space: {
        9: "50%",
      },
    },
  },
  plugins: [require("tailwindcss")],
};
