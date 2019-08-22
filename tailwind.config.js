const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Annie Use Your Telescope"',
          ...defaultTheme.fontFamily.sans,
        ],
        title: [
          '"Open Sans"',
          ...defaultTheme.fontFamily.sans,
        ],
      }
    }
  }
}
