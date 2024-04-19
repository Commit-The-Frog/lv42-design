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
        'default-desktop': "url('../img/background-desktop.svg')",
        'xbox': "url('../img/xbox.png')",
        'switch': "url('../img/switch.png')",
        'ps5': "url('../img/ps5.png')",
        'controller-icon': "url('../img/controller-icon.svg')",
        'ps5-btn-info': "url('../img/ps5-button-info.png')",
      }
    },
  },
  plugins: [],
}

