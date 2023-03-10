/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'light-coffee': '#C89F94'
      },
      height:{
        'height-slider': '530px',
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        }
      },
      animation:{
        slideDown: 'slideDown 0.5s ease-in-out'
      }
    },
  },
  plugins: [],
}
