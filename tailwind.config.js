/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#23222a",
        secondary: "#2F2F2F",
        textColor: "#e7e6eb",
        creamyColor: "#A3FFAE",
      },
    },
  },
  plugins: [],
};
