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
        white: "#ffffff",
        black: "#17181d",
        deepBlue: "#3559C1",
        lightBlue: "#EBF3FF",
        blue: {
          100: "#EBF3FF",
          200: "#bee3f8",
          300: "#bee3f8",
          400: "#3559C1",
          500: "#204CAC",
        },
        "black-00": "#000000",
        "gray-100": "#7f7f7f",
        "gray-30": "#dedede",
        "gray-10": "#fbf9f8",
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
        xlg: "20px",
        xxlg: "32px",
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
