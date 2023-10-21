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
      ml: ["1.8rem", "1.3"], //lg and below 1+ scaled
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
      "off-white": "#f7f8f8",
      background: "#000212",
      gray: "#b4bcd0",
      "fixed-gray": "#6C7284",
      hover: "#f7f8f8",
      "brand-bg": "#5e6ad2",
    },
    customUtilities: (theme: any) => ({
      ".transition-medium": {
        transition: "all 160ms ease",
      },
      ".transition-color-hover": {
        transition: "160ms ease",
        transitionProperty: "color, fill",
      },
      ".header-blur": {
        backdropFilter: "blur(3rem) saturate(120%)",
      },
      ".text-balance": {
        "text-wrap": "balance",
      },
      ".bg-linear": {
        background:
          "linear-gradient(90deg, transparent 0%, theme(colors.white) 2%, theme(colors.white) 7%, transparent 9%)",
      },
      ".animate-pause": {
        animationPlayState: "paused",
      },
      ".hero-gradient": {
        background: `linear-gradient(to right bottom, rgb(255, 255, 255) 30%, rgba(255, 255, 255, 0.38))`,
        
      },
      ".background-clip": {
        backgroundClip: "text",
        "-webkit-background-clip": "text !important",
      },
      ".transparent":{
        color: "transparent",
        "-webkit-text-fill-color": "transparent",
      },
      ".logotype":{
        backgroundSize: "100% 30rem",
        backgroundImage: "conic-gradient(from var(--angle) at 50% 50%, theme(colors.gray/60%) 40%, #FFFFFFFF 50%, theme(colors.gray/60%) 60%)",
      }
    }),
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
        loading: "loading 2s infinite",
        logotype: "logotype 3s linear infinite",
        "fade-in": "1000ms ease 0ms 1 normal backwards fade-in"
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
        logotype: {
          "from": {
            "--angle": "90deg",
          },
          "to": {
            "--angle": "270deg",
          }
        },
        "fade-in": {
          "from":{
            opacity: "0",
            transform: "translateY(-10px)"
          },
          "to": {
            opacity: "1",
            transform: "translate(0px)"
          }
        }
      },
      minWidth: {
        sections: "min(18rem, 100%)",
      },
      transitionDuration: {
        400: "400ms",
      },
      transitionTimingFunction: {
        "out-slow-in": "cubic-bezier(0.4, 0, 0.2, 1)",
        cubic: "cubic-bezier(0.42, 0, 0.1, 1)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addUtilities, addComponents, theme, matchUtilities }) {
      addBase(theme("customBase", {}));
      addComponents(theme("customComponents", {}));
      addUtilities(theme("customUtilities", {}));
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        }
      );
    }),
  ],
};
export default config
