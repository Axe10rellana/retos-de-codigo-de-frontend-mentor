//variables
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        lexecaDeca: ["Lexeca Deca"],
      },
      colors: {
        "very-dark-blue-main-bg": "hsl(233, 47%, 7%)",
        "dark-desaturated-blue-card-bg": "hsl(244, 38%, 16%)",
        "soft-violet": "hsl(277, 64%, 61%)",
        "custom-violet": "hsl(280, 100%, 35%)",
        "slightly-transparent-white-main-p": "hsla(0, 0%, 100%, 0.75)",
        "slightly-transparent-white-stat-h": "hsla(0, 0%, 100%, 0.6)",
      },
      screen: {
        lg: "1440px",
        xs: "375px",
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
