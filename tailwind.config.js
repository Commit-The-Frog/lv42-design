/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html", "./public/renewal/*.html"],
  theme: {
    fontFamily: {
      "noto" : ['Noto Sans KR', 'sans-serif'],
      "outfit" : ['Outfit', 'sans-serif'],
      "Bolwby-One" : ['Bowlby One SC', 'sans-serif']
    },
    extend: {
      boxShadow: {
        'basic': 'inset 0px -4px rgba(0, 0, 0, 0.1)',
        'selected' : 'inset 0px 4px 1px rgba(0, 0, 0, 0.4)',
        'not-selected' : 'inset 0px -4px 1px rgba(0, 0, 0, 0.4)',
        'modal': '4px 4px 4px 1px rgba(0, 0, 0, 0.25)'
      },
      animation: {
        shake: 'shake .5s ease-in-out'
      },
      keyframes: {
        shake: {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '50%': { transform: 'translateX(5px)' },
          '75%': { transform: 'translateX(-2.5px)' },
          '100%': { transform: 'translateX(0)' }
        }
      },
      screens: {
        'pointerhover': {
          'raw': "(hover:hover) and (pointer:fine)"
        },
        'mobile' : {
          'raw': "(hover:none)"
        }
      },
      backgroundImage: {
        'logo': "url('../img/logo/logo.svg')",
        'logo-hazy': "url('../img/logo/logo-darkened.svg')",
        'default': "url('../img/background.svg')",
        'default-desktop': "url('../img/background-desktop.svg')",
        'xbox': "url('../img/xbox.png')",
        'switch': "url('../img/switch.png')",
        'ps5': "url('../img/ps5.png')",
        'controller-icon': "url('../img/controller-icon2.svg')",
        'ps5-btn-info': "url('../img/ps5-button-info3.png')",
        'switch-btn-info': "url('../img/switch-button-info2.png')",
        'switch-pro-btn-info': "url('../img/switch-pro-button-info.png')",
        'xbox-btn-info': "url('../img/xbox-button-info2.png')"
      }
    },
  },
  plugins: [
    require("@xpd/tailwind-3dtransforms")
  ],
}

