/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/aseets/**/*.{js,ts,jsx,tsx,mdx,css,png.jpg}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   hero: 'url("./src/assets/images/sections/hero.png")',
      //   galaxy:
      //     "url('http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back05.jpg')",
      // },
      backgroundImage: () => ({
        hero: `linear-gradient(rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)),url('../assets/images/sections/hero.png')`,
        about: `linear-gradient(rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)),url('../assets/images/sections/weAre.png')`,
        chooseUs: `linear-gradient(rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)),url('../assets/images/sections/chooseUs.png')`,
        contactUs: `linear-gradient(rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)),url('../assets/images/sections/contactUs.png')`,
        ourGallery: `linear-gradient(rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)),url('../assets/images/sections/ourGallery.png')`,
      }),
      backgroundColor: {
        white: "#fff",
        black: "rgba(0,0,0,0.9)",
        overlay: "rgba(1, 10, 5, 0.92)",
        unActiveImage: "rgba(9, 20, 16, 0.25)",
        light1: "rgba(255, 255, 255, 0.1)",
        light2: "rgba(255, 255, 255, 0.2)",
        input: "rgba(255, 255, 255, 0.05)",
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
        karantina: ["Karantina", "system-ui"],
      },
      letterSpacing: {
        thin: "-.04em",
        base: "0.09em",
        normal: "0.1em",
        wide: ".18em",
        wider: ".05em",
        widest: ".1em",
        large: "2.28em",
      },
      fontWeight: {
        100: "100",
        200: "200",
        300: "300",
        400: "400",
        500: "500",
        600: "600",
        700: "700",
        800: "800",
        900: "900",
      },
      screens: {
        xs: "320px",
        sm: "768px",
        md: "1024px",
        lg: "1280px",
        xl: "1440px",
      },
      colors: {
        mainGray: "#181716",
        mainWhite: "#ffffff",

        borderDark: "#78814d",
        borderLight: "#b3bb8c",
        borderBg: "#c4c8b1",

        gray20: "#4e5431",
        gray50: "#EFE6E6",
        gray100: "#DFCCCC",
        gray500: "#5E0000",

        primary100: "#FFE1E0",
        primary200: "#c9cbbf",
        primary300: "#FFA6A3",
        primary500: "#FF6B66",
        secondary400: "#FFCD5B",
        secondary500: "#FFC132",
        rose800: "5c0003",

        backdrop: "rgba(1, 10, 5, 0.75)",
      },
    },
  },
  plugins: [],
};
