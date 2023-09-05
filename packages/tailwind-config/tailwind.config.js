/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './web/**/*.{js,ts,jsx,tsx}',
    "./**/*.{js,ts,jsx,tsx}",

  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        figtree: ['var(--font-noto-sans)'],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
