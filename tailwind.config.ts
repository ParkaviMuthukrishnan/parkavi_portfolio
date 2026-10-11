import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0b090c",
          elevated: "#120f14",
          card: "rgba(255, 255, 255, 0.04)",
        },
        fg: {
          DEFAULT: "#eae5ec",
          muted: "#a49ea8",
          subtle: "#726c77",
        },
        accent: {
          DEFAULT: "#f97316",
          from: "#f97316",
          to: "#fbbf24",
          soft: "rgba(249, 115, 22, 0.14)",
        },
        line: "rgba(255, 255, 255, 0.08)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "var(--font-inter)", "ui-sans-serif", "sans-serif"],
      },
      fontSize: {
        display: ["clamp(2.75rem, 8vw, 6.5rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-sm": ["clamp(2.25rem, 6vw, 4.5rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(135deg, #f97316 0%, #fbbf24 100%)",
        "accent-gradient-soft":
          "linear-gradient(135deg, rgba(249,115,22,0.18) 0%, rgba(251,191,36,0.10) 100%)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(249,115,22,0.35), 0 20px 60px -20px rgba(249,115,22,0.45)",
        "glow-sm": "0 0 0 1px rgba(249,115,22,0.25), 0 10px 30px -12px rgba(249,115,22,0.4)",
        card: "0 1px 0 0 rgba(255,255,255,0.05) inset, 0 20px 50px -30px rgba(0,0,0,0.8)",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "33%": { transform: "translate3d(6vw, -4vh, 0) scale(1.08)" },
          "66%": { transform: "translate3d(-4vw, 5vh, 0) scale(0.95)" },
        },
        "blob-alt": {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "33%": { transform: "translate3d(-5vw, 5vh, 0) scale(0.94)" },
          "66%": { transform: "translate3d(5vw, -3vh, 0) scale(1.06)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        caret: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "scroll-hint": {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "40%": { opacity: "1" },
          "100%": { transform: "translateY(10px)", opacity: "0" },
        },
      },
      animation: {
        blob: "blob 28s ease-in-out infinite",
        "blob-alt": "blob-alt 34s ease-in-out infinite",
        marquee: "marquee 45s linear infinite",
        "marquee-reverse": "marquee-reverse 55s linear infinite",
        caret: "caret 1s steps(1) infinite",
        "scroll-hint": "scroll-hint 1.8s ease-in-out infinite",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
