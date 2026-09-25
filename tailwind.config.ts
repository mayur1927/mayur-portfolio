import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0d0f",
        "bg-alt": "#0e1215",
        panel: "#111619",
        line: "#1e2427",
        fg: "#eef1ef",
        "fg-dim": "#8b9490",
        "fg-faint": "#4c5451",
        accent: "#46e0c4",
        "accent-2": "#8b7fff",
        gh: "#39d353",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-18px)" },
        },
        scrollcue: {
          "0%": { transform: "scaleY(0)", transformOrigin: "top" },
          "50%": { transform: "scaleY(1)", transformOrigin: "top" },
          "50.01%": { transformOrigin: "bottom" },
          "100%": { transform: "scaleY(0)", transformOrigin: "bottom" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        scrollcue: "scrollcue 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
