/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(to right top, #bfbfbf, #cbcbcb, #d7d7d7, #e3e3e3, #efefef, #dfdfe2, #d0cfd4, #c0bfc7, #93919f, #686679, #403e55, #1a1a33 )",

        "gradient-rainblue":
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
      }),
    },
  },
  plugins: [],
}
