module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        purple: {
          100: "#eecfeb",
          800: "#611ca7",
          "100_02": "#dcc5e6",
          "100_01": "#e5cad6",
          "100_03": "#f8c5ea",
        },
        deep_orange: {
          50: "#f6e1e1",
          100: "#f4bfbf",
          400: "#fb6e52",
          "100_01": "#f8cdbf",
        },
        teal: {
          100: "#a5cdda",
          200: "#8fbac8",
          "100_01": "#a9d4e1",
          "100_02": "#a1ebde",
          "200_01": "#8ebac8",
        },
        blue_gray: { 50: "#f1f2f2", 100: "#d9d9d9" },
        orange: { 100: "#f2d5a9", "100_01": "#f4d6a8", "100_02": "#f9d8a6" },
        light_green: { 400: "#b6d152", 500: "#9fb543", "400_51": "#b6d15251" },
        red: { 100: "#f0d8d8", 400: "#dd5a4b", "400_01": "#db5242" },
        black: { 900: "#000000", "900_3f": "#0000003f", "900_26": "#00000026" },
        deep_purple: { 100: "#d1b5e7", 200: "#a8a2ec" },
        pink: { 200: "#fb8ec8", 300: "#bf5888", "200_60": "#fb8ec860" },
        cyan: { 100: "#c0faef", 200: "#83ebd8", "200_01": "#83ebd9" },
        lime: { 100: "#f8e7cd", 200: "#e5f5a3" },
        gray: {
          400: "#c5a9a9",
          700: "#5d5d5d",
          800: "#594a42",
          "400_01": "#b8aeae",
          "400_02": "#bcb2b2",
          "700_01": "#8c5243",
        },
        indigo: { 200: "#a7a1eb" },
        blue: { 100: "#bee1ed" },
        white: { A700: "#ffffff" },
      },
      boxShadow: {
        bs: "0px 4px  4px 0px #0000003f",
        bs1: "inset 0px 4px  4px 0px #0000003f",
        bs2: "inset 0px 4px  4px 0px #00000026",
      },
      fontFamily: {
        assistant: "Assistant",
        atma: "Atma",
        josefinslab: "Josefin Slab",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
