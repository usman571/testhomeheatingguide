const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dimensions: {
        container: {
          width: "1280px",
          height: "3457px",
        },
      },
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      Poppins:["Poppins","sans-serif"]
    },
  },
  plugins: [],
});
