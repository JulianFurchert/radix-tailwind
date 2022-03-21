const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: "jit",
  content: [
    "../component-library/src/components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
      }
    },
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('data-vertical', '&[data-orientation="vertical"]')
      addVariant('data-horizontal', '&[data-orientation="horizontal"]')
      addVariant('data-checked', '&[data-state="checked"]')
      addVariant('data-active', '&[data-state="active"]')
      addVariant('data-inactive', '&[data-state="inactive"]')
      addVariant('data-open', '&[data-state="open"]')
      addVariant('data-open-child', '[data-state="open"] &')
    })
  ]
}
