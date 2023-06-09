//variables
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Hanken Grotesk", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "light-red": "hsl(0, 100%, 67%)",
        "orange-yellow": "hsl(39, 100%, 56%)",
        "green-teal": "hsl(166, 100%, 37%)",
        "light-lavender": "hsl(241, 100%, 89%)",
        "cobalt-blue": "hsl(234, 85%, 45%)",
        "light-slate-blue": "hsl(252, 100%, 67%)",
        "light-royal-blue": "hsl(241, 81%, 54%)",
        "pale-blue": "hsl(221, 100%, 96%)",
        "dark-gray-blue": "hsl(224, 30%, 27%)",
        "violet-blue": "hsla(256, 72%, 46%, 1)",
        "persian-blue": "hsla(241, 72%, 46%, 0)",
        "dark-lavender": "hsla(290, 3%, 62%, 1)",
        "violet-bg-results": "hsla(248, 93%, 61%, 1)",
        "violet-bg-results-from": "hsla(246, 85%, 57%, 1)",
        "violet-text-results": "hsla(250, 100%, 82%, 1)",
        "violet-text-circle": "hsla(246, 100%, 74%, 1)",
        "white-text-circle": "hsla(300, 100%, 100%, 1)",
        "gray-text-parragraph": "hsla(241, 100%, 89%, 1)",
        "white-text-heading": "hsla(260, 100%, 99%, 1)",
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
