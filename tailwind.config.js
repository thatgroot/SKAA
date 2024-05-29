/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#05050F",
        secondary: "#0E0C15",
        default: "#F2F2F2",
        tertiary: "#00ffa3",
        description: "rgba(255, 255, 255, 0.49)",
      },
      fontFamily: {
        proximaNova: ["Proxima Nova"],
      },
      backgroundImage: {
        colorfulText:
          "linear-gradient(90deg,#b640ff,#02e7ea,#00fbae,#02e7ea,#b640ff)",
        pyramids: "url(./assets/pyramid.png)",
        logoSpot: "url(./assets/logo-spot.png)",
        purpleGr: "linear-gradient(90deg,#b640ff,#02e7ea)",
      },
    },
  },
  plugins: [],
};
