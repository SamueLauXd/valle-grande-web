const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'landing-bg' : "url('./assets/landing-bg-image.webp')"
      }
    },
    colors: {
      "white": "#FFFFFF",
      "redish": "#C5352C",
      "green": {
        "dark": "#4E804E",
        "light": "#A5C516"
      },
      "yellow": "#F9D348"
    }
  },
  plugins: [],
});