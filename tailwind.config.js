/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#335a8a",
          "blue-dark": "#264467",
          "blue-light": "#4a72a3",
          charcoal: "#575654",
          "charcoal-dark": "#3a3a38",
          cream: "#f7f4ee",
          accent: "#c89b3c", // gold accent matching showroom
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        container: "1240px",
      },
    },
  },
  plugins: [],
};
