/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#B3AD41",
          50: "#E9E7C3",
          100: "#E4E1B4",
          200: "#D9D596",
          300: "#CEC978",
          400: "#C3BD5A",
          500: "#B3AD41",
          600: "#8A8532",
          700: "#615D23",
          800: "#383614",
          900: "#0E0E05",
          950: "#000000",
        },
      },
    },
  },
  plugins: [],
};
