import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: "0.667rem",
      base: "0.778rem",
      md: "0.92rem",
      xl: "1rem",
      "2xl": "1.278rem",
      "3xl": "1.556rem",
      "4xl": "1.944rem",
      "5xl": "2.444rem",
      "6xl": "3.056rem",
      "7xl": "3.833rem",
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
        ibm: ['"Poppins"', "sans-serif"],
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
      screens: {
        sm: "480px",
        md: "1020px",
        lg: "1160px",
      },
      colors: {
        orange: "#FD6F00",
        "orange-50": "#FFEFE6",
        "orange-100": "#FFCFB0",
        "orange-200": "#FFB78A",
        "orange-300": "#FF9654",
        "orange-400": "#FF8233",
        "orange-500": "#FF6300",
        "orange-600": "#E85A00",
        "orange-700": "#B54600",
        "orange-800": "#8C3600",
        "orange-900": "#6B2A00",
        black: "#000000",
        "black-50": "#E6E6E6",
        "black-100": "#B0B0B0",
        "black-200": "#8A8A8A",
        "black-300": "#545454",
        "black-400": "#333333",
        "black-500": "#000000",
        gray: "#F8F8F8",
        "gray-100": "#EDECEC"
      },
    },
  },
  
  plugins: [],
};
export default config;
