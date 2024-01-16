/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      tablet: "34.375rem", // 550px
      laptop: "68.75rem", // 1100px
      desktop: "93.75rem", // 1500px
    },
    extend: {
      fontFamily: {
        primary: ["Roboto Condensed", "sans-serif"],
        secondary: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        primary: "#3081D0",
        secondary: "#F8E559",
        dark: "#1D2130",
        light: "#EFF7F2",
        tertiary: "#6DB9EF",
        textDark: "#6D6D6D",
        textLight: "#4D4D4D",
      },
      fontSize: {
        HomeHeading: "64px",
        Heading1: "56px",
        Heading2: "48px",
        Heading3: "28px",
        Paragraph: "16px",
        Small: "14px",
      },
    },
  },
  plugins: [],
};
