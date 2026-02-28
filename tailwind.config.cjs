const shadcn = require('shadcn/tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  presets: [shadcn],
  theme: {
    extend: {},
  },
  plugins: [],
}
