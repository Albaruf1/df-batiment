import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        df: {
          // Identité officielle DF Bâtiment (extraite du logo source)
          blue: "#0078B8",
          "blue-soft": "#58A8D0",
          "blue-deep": "#005F93",
          ink: "#182830",
          "ink-2": "#1F333D",
          card: "#22363F",
          paper: "#EAF0F2",
          light: "#F4F6F9",
          "light-2": "#E8ECF2",
          muted: "#8AA0A8",
          "muted-d": "#5E6E75"
        }
      },
      fontFamily: {
        arch: ["var(--font-archivo)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"]
      },
      maxWidth: { content: "1320px" },
      transitionTimingFunction: { df: "cubic-bezier(.16,1,.3,1)" }
    }
  },
  plugins: []
};
export default config;
