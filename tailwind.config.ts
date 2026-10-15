import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        burgundy: "#5A0012",
        "burgundy-dark": "#350008",
        maroon: "#700018",
        "deep-black": "#160005",
        gold: "#D4AF37",
        "gold-bright": "#F5D76E",
        champagne: "#FFF1C7",
        cream: "#FFF8E7",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "maroon-gradient": "linear-gradient(180deg, #350008 0%, #160005 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
