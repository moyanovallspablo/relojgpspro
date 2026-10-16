import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#F4F4F5",
        subtle: "#FAFBFB",
        surface: "#FFFFFF",
        ink: {
          DEFAULT: "#09090B",
          700: "#27272A",
          500: "#52525B",
          300: "#A1A1AA",
        },
        line: "#E4E4E7",
        accent: {
          DEFAULT: "#0284C7",
          dark: "#026690",
          tint: "#E0F2FE",
        },
        signal: {
          green: "#047857",
          greenTint: "#ECFDF5",
        },
        warning: {
          DEFAULT: "#B45309",
          tint: "#FFFBEB",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "1200px",
        prose: "68ch",
      },
      borderRadius: {
        card: "10px",
      },
    },
  },
  // hover: y group-hover: solo con puntero fino (ratón/trackpad): en
  // móvil un toque no deja el estado hover pegado.
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
