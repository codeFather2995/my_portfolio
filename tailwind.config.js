/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "deep-blue": "#010026",
        grey: "#ededed",
        coral: "rgb(255, 127, 80)",
        pink:"rgb(255, 218, 185)",
        peach: "rgb(255, 229, 180)",
        orange:"rgb(255, 140, 0)",
        yellow: "rgb(255, 255, 0)",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(to right top, #bfbfbf, #cbcbcb, #d7d7d7, #e3e3e3, #efefef, #dfdfe2, #d0cfd4, #c0bfc7, #93919f, #686679, #403e55, #1a1a33 )",

        "gradient-about":
          "linear-gradient(to bottom, #ffffff, #e9e9ea, #d4d4d6, #bfbfc2, #aaabae, #949598, #7f7f82, #6b6a6d, #504f51, #373536, #1f1e1e, #000000)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
}
