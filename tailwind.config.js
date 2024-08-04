/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "blue-gray": "#2C3E50",
        cgreen: "#1ABC9C",
        foot: "#1A252F",
      },
    },
  },
  plugins: [],
};
