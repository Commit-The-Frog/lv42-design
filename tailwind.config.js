/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    fontFamily: {
      "noto" : ['Noto Sans KR', 'sans-serif'],
      "outfit" : ['Outfit', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'logo': "url('../img/logo/logo.svg')",
        'logo-hazy': "url('../img/logo/logo-darkened.svg')",
        'default': "url('../img/background.svg')",
        'xbox': "url('../img/xbox.svg')"
      }
    },
  },
  plugins: [],
}

