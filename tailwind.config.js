/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.htm", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "weather-primary": "#00668a",
        "weather-secondery": "#004e71"
      }
    },
    fontFamily: {
      Roboto: ["Roboto, sans-serif"]
    },
    container: {
      padding: "2rem",
      center: true
    },
    screens: {
      sm: "640px",
      md: "768px"
    }
  },
  plugins: [],
}

