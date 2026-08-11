/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#0B0A08",
        ink: "#1B140F",
        ink2: "#241811",
        gold: "#C6A15B",
        goldLight: "#E3CE99",
        ivory: "#F8F4EC",
        beige: "#EAE1CF",
        brown: "#3A2618",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body: ["'Jost'", "sans-serif"],
      },
      letterSpacing: {
        wider2: ".28em",
        wider3: ".35em",
      },
      keyframes: {
        riseGlow: {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "10%": { opacity: "1" },
          "100%": { transform: "translateY(-140px)", opacity: "0" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        riseGlow: "riseGlow 1.8s ease-in-out infinite",
        fadeUp: "fadeUp .7s ease both",
      },
    },
  },
  plugins: [],
};
