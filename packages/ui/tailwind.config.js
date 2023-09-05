/** @type {import('tailwindcss').Config} */
const sharedConfig = require('@rvmplz/tailwind-config');

module.exports = {
  presets: [sharedConfig],
  content: [
    "./**/*.{js,ts,jsx,tsx}",
  ],
};
