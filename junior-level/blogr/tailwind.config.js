import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Overpass", ...defaultTheme.fontFamily.sans],
        ubuntu: ["Ubuntu"],
      },
      colors: {
        "light-red-cta-text": "hsl(356, 100%, 66%)",
        "very-light-red-cta-hover-bg": "hsl(355, 100%, 74%)",
        "very-dark-blue-headings": "hsl(208, 49%, 24%)",
        "grayish-blue-links-text": "hsl(10, 100%, 90%)",
        "grayish-blue-footer-text": "hsl(240, 2%, 79%)",
        "grayish-blue-links-mobile-bg": "hsl(240, 7%, 94%)",
        "very-dark-grayish-blue-body-copy": "hsl(207, 13%, 34%)",
        "very-dark-black-blue-footer-bg": "hsl(240, 10%, 16%)",
        "very-light-red": "hsl(13, 100%, 72%)",
        "light-red": "hsl(353, 100%, 62%)",
        "very-dark-gray-blue": "hsl(237, 17%, 21%)",
        "very-dark-desaturated-blue": "hsl(237, 23%, 32%)",
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
