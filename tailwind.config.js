const daisyui = require("daisyui");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "all-bg": "#FAFAFA",
        "bg-base": "#593D72",
        inactive: "#737272",
        accent: "#7BB147",
        accent2: "#45AE7E",
        "gray-text": "#6D6D6D",
        "gray-stronger": "#292C32",
        "gray-on-gray": "#8C8C8C",
        "bg-gray": "#ABEEDA",
        "bg-blue": "#055EF1",
        primary: "#292c32",
        secondary: "#6F7278",
        success: "#ff6d3f",
        successLight: "#dff7f4",
        info: "#2979ff",
        infoLight: "#d9e7ff",
        error: "#f4511e",
        errorLight: "#ffefeb",
        warning: "#f2a200",
        warningLight: "#fff2d9",
        opacity: "0.6",
      },
      minWidth: {
        "1/2": "50%",
        "1/3": "33%",
        "1/4": "25%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        24: "6rem",
      },
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "14px",
        lg: "16px",
        xl: "18px",
        xxl: "20px",
        xxxl: "32px",
      },
      spacing: {
        "input-height": "44px",
        "input-height-lg": "48px",
        "button-height": "44px",
        "button-height-2": "32px",
      },
      height: {
        screen: ["100vh", "100dvh"],
      },
      minHeight: {
        screen: ["100vh", "100dvh"],
      },
      maxHeight: {
        screen: ["100vh", "100dvh"],
      },
    },
  },
  plugins: [require("daisyui")],
};
