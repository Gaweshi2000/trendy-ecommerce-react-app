/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ['"Hind"', "sans-serif"],
        cursiveTitle: ['"Ga Maamli"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
