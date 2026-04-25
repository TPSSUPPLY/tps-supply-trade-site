/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          // matches showroom: hsl(213 53% 23%) = #1c3454
          blue: "#1c3454",
          "blue-dark": "#142640",
          "blue-light": "#2a4670",
          // matches showroom foreground: hsl(0 0% 17%) = #2b2b2b
          charcoal: "#2b2b2b",
          "charcoal-dark": "#1a1a1a",
          // matches showroom sidebar bg: hsl(42 15% 95%)
          cream: "#f5f1ea",
          // matches showroom gold accent: hsl(40 45% 50%) = #bf9c43
          accent: "#bf9c43",
          "accent-hover": "#a3852e",
        },
      },
      fontFamily: {
        // mirror showroom: General Sans for sans, Georgia/serif for headings
        sans: ['"General Sans"', 'Satoshi', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        display: ['Satoshi', '"General Sans"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: "1240px",
      },
    },
  },
  plugins: [],
};
