/** @type {import('tailwindcss').Config} */

// import img from "./src/"
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: 'url("./src/assets/jpg/bgg.jpg")',
      },
    },
  },
  plugins: [],
};
