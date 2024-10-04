/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      inherit: "inherit",
      white: "#FFFFFF",
      black: "#000000",
      matte: "#141414",
      dark: "#1e1f21",
      accent: "#839ee1",
    },
    fontFamily: {
      sans: ["Inter"],
      mono: ["Courier"],
    },
    fontWeight: {
      normal: "400",
      medium: "500",
      semibold: "600",
    },
    letterSpacing: {
      normal: "0",
      wide: ".025em",
      wider: ".15em",
      widest: ".2em",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
