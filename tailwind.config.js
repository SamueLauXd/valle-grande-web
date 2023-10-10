const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "white": "#FFFFFF",
      "red": "#C5352C",
      "green": "#4E804E",
      "yellow": "#F9D348"
    }
  },
  plugins: [],
});