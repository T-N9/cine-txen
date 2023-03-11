/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  important: "#__next",
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#278EA5",
        secondary: "#1F4287",
        light: "#21E6C1",
        dark: "#071E3D",
        black: "#1c2a30",
        wah: "#ffffff",
        gray: "#ebebeb",
        warning: "#dacd18",
        danger: "#FF304F",
        "light-overlay": "rgba(#21E6C1, 0.1)",
      },
      fontFamily: {
        primary: ["Nunito", "sans-serif"],
        heading: ["Catamaran", "sans-serif"],
        writing: ["Yellowtail", "cursive"],
        special: ["Cairo", "sans-serif"],
      },
      dropShadow: {
        text: "1px 1px 2px #071e3d",
      },
      fontSize: {
        "cfs-1": "1rem",
        "cfs-2": "1.125rem",
        "cfs-3": "1.25rem",
        "cfs-4": "1.375rem",
        "cfs-5": "1.625rem",
        "cfs-6": "1.75rem",
        "cfs-7": "2rem",
        "cfs-8": "2.375rem",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
}
