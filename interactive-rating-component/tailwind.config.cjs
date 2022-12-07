//variables
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Overpass", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "custom-orange": "hsl(25, 97%, 53%)",
        "light-grey": "hsl(217, 12%, 63%)",
        "medium-grey": "hsl(216, 12%, 54%)",
        "dark-blue": "hsl(213, 19%, 18%)",
        "very-dark-blue": "hsl(216, 12%, 8%)",
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
