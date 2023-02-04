/** @type {import('tailwindcss').Config} */
const daisyui = require('daisyui')
module.exports = {
  content: ["./src/**/*.{svelte,astro}"],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui
  ],
}
