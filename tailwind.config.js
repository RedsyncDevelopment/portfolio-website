/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Exo", "sans-serif"],
    },
    extend: {
      colors: {
        "primary-blue-200": "#80dffd",
        "primary-blue-400": "#00befa",
        "primary-blue-700": "#005f7d",
        "secondary-gray-200": "#f4f4f4",
        "secondary-gray-400": "#8c8c8c",
        "secondary-gray-700": "#2a2a2a",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("tailwind-scrollbar-hide")],
};
