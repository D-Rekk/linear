import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: `"SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif`,
    },
    fontSize: {
      xs: "1.3rem",
      sm: "1.4rem",
      md: "1.6rem",
      ml: "1.8rem",
      lg: ["2.2rem", "1.3"],
      xl: "2.4rem",
      "2xl": "2.6rem",
      "3xl": "3.2rem",
      "4xl": "4rem",
      "5xl": ["4.4rem", "1"],
      "6xl": ["4.8rem", "1"],
      "7xl": ["8rem", "1"],
    },
    colors: {
      white: "#fff",
      background: "#000212",
      gray: "#b4bcd0",
      "fixed-gray": "#6C7284",
      hover: "#f7f8f8",
      "brand-bg": "#5e6ad2",
    },
    backgroundImage: {
      "hero-page": "radial-gradient(ellipse 80% 50% at 50% -20%,rgba(120,119,198,0.3), transparent)",
    },
    spacing: {
      0: "0",
      1: "0.4rem",
      2: "0.8rem",
      3: "1.2rem",
      4: "1.6rem",
      5: "2rem",
      6: "2.4rem",
      7: "2.8rem",
      8: "3.2rem",
      9: "3.6rem",
      10: "4rem",
      11: "4.4rem",
      12: "4.8rem",
      13: "5.6rem",
      ham: `calc(100vh - 4.8rem)`,
    },
    extend: {
      animation: {
        loading: "loading cubic-bezier(0.42, 0, 0.1, 1) 2s infinite",
      },
      keyframes: {
        loading: {
          "0%": {
            transform: "translateX(-10%)",
            opacity: "0",
          },
          "40%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
      minWidth: {
        sections: "min(18rem, 100%)",
      },
      transitionDuration: {
        400: "400ms",
      },
      transitionTimingFunction: {
        "out-slow-in": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addUtilities, addComponents, theme }) {
      addBase(theme("customBase", {}));
      addComponents(theme("customComponents", {}));
      addUtilities(theme("customUtilities", {}));
    }),
  ],
};
export default config
