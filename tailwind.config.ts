import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "2rem",
      "4xl": "3rem",
      "5xl": "4rem",
      "6xl": "5rem",
    },
    fontWeight: {
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    extend: {
      fontFamily: {
        ibm: ['"IBM Plex Sans"', "sans-serif"],
      },
      spacing: {
        0.25: "0.25rem",
        0.5: "0.5rem",
        0.75: "0.75rem",
        1: "1rem",
        2: "2rem",
        3: "3rem",
        4: "4rem",
        5: "5rem",
        6: "6rem",
        10: "10rem",
        15: "15rem",
      },
      colors: {
        white: "#FFFFFF",
        black: "#141313",
        "icon-light-background": "rgba(20, 19, 19, 0.05)",
        "gradient-start": "#ffb147",
        "gradient-mid": "#ff6c63",
        "gradient-end": "#b86adf",
        "text-highlight": "#B86ADF",
      },
    },
  },

  screens: {
    sm: "480px",
    md: "768px",
    lg: "976px",
    xl: "1440px",
  },

  
  plugins: [],
};
export default config;
