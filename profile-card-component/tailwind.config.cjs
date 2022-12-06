//variables
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Kumbh Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "dark-cyan": "hsl(185, 75%, 39%)",
        "very-dark-desaturated-blue": "hsl(229, 23%, 23%)",
        "dark-grayish-blue": "hsl(227, 10%, 46%)",
        "dark-gray": "hsl(0, 0%, 59%)",
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
