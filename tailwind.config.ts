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
      sm: "1.4rem",
      md: "1.6rem",
      lg: ["2.2rem", "1.3"],
      "5xl": ["8rem", "1"],
    },
    colors: {
      white: "#fff",
      background: "#000212",
      linkHover: "#b4bcd099",
      "brand-bg": "#5e6ad2" 
    },
    customUtilities: {
      '.medium': {
        transition: 'color 0.25s linear'
      },
      ".header-blur": {
        backdropFilter: "blur(30px) saturate(120%)"
      },
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
    },
  },
  plugins: [
    plugin(function ({ addBase, addUtilities, addComponents, theme }) {
      addBase(theme('customBase', {}))
      addComponents(theme('customComponents', {}))
      addUtilities(theme('customUtilities', {}))
    }),
  ],
};
export default config
