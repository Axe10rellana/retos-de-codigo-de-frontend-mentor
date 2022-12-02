//variables
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "soft-blue": "hsl(215, 51%, 70%)",
        "custom-cyan": "hsl(178, 100%, 50%)",
        "very-dark-blue-main": "hsl(217, 54%, 11%)",
        "very-dark-blue-card": "hsl(216, 50%, 16%)",
        "very-dark-blue-line": "hsl(215, 32%, 27%)",
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
