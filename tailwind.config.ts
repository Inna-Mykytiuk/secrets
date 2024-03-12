/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: () => ({
        hero: `linear-gradient(rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)),url(/images/sections/hero.png)`,
        heroDesk: `linear-gradient(rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)), image-set(url('/images/sections/hero-desk.png') 1x, url('/images/sections/hero@2x-desk.png') 2x)`,
        heroTab: `linear-gradient(rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)), image-set(url('/images/sections/hero-tab.png') 1x, url('/images/sections/hero@2x-tab.png') 2x)`,
        heroMob: `linear-gradient(rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)), image-set(url('/images/sections/hero-mob.png') 1x, url('/images/sections/hero@2x-mob.png') 2x)`,
        about: `linear-gradient(rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)),url(/images/sections/weAre.png)`,
        aboutMob: `linear-gradient(rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)),url(/images/sections/weAreMob1.png)`,
        aboutMob1: `linear-gradient(rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)),url(/images/sections/weAreMob.png)`,
        chooseUs: `linear-gradient(rgba(2, 15, 8, 0.75), rgba(2, 15, 8, 0.75)),url(/images/sections/chooseUs.png)`,
        chooseUsMob: `linear-gradient(rgba(2, 15, 8, 0.75), rgba(2, 15, 8, 0.75)),url(/images/sections/chooseUsMob.png)`,
        contactUs: `linear-gradient(rgba(2, 15, 8, 0.75), rgba(2, 15, 8, 0.75)),url(/images/sections/contactUs.png)`,
        ourGallery: `linear-gradient(rgba(2, 15, 8, 0.85), rgba(2, 15, 8, 0.85)),url(/images/sections/ourGallery.png)`,
        invalid: "url(/icons/invalid.svg)",
      }),
      backgroundColor: {
        white: "#fff",
        black: "rgba(0,0,0,0.9)",
        overlay: "rgba(1, 10, 5, 0.92)",
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
      screens: {
        xs: "320px",
        x: "480px",
        sm: "768px",
        md: "1024px",
        lg: "1280px",
        xl: "1440px",

        smOnly: { max: "767.98px" },
        mdOnly: { min: "768px", max: "1279.98px" },
      },
      colors: {
        mainWhite: "#ffffff",
        backdrop: "rgba(1, 10, 5, 0.75)",
        red: "#FF5757",
      },
    },
  },
  plugins: [],
};
