module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '10px 20px 40px rgba(0,0,0,0.25)',
      },
      colors: {
        customBg: '#010615',
        customCard: '#060c21',
      },
      keyframes: {
        animate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        animate: 'animate 6s infinite linear',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.preserve-3d': {
          'transform-style': 'preserve-3d',
        },
        '.perspective': {
          'transform': 'perspective(1000px)',
        },
        '.-rotateY-180': {
          'transform': 'rotateY(-180deg)',
        },
        '.rotateY-180': {
          'transform': 'rotateY(180deg)',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.animation-delay': {
          'animation-delay': '-3s',
        },
        '.card::before, .card::after': {
          background: 'linear-gradient(235deg, #ff005e, #010615, #fbff00)',
        },
        '.card::after': {
          filter: 'blur(40px)',
        },
        '.auth::before': {
          background: 'linear-gradient(0deg, transparent, transparent, #45f3ff, #45f3ff, #45f3ff)',
        },
        '.auth::after': {
          background: 'linear-gradient(0deg, transparent, transparent, #ff2770, #ff2770, #ff2770)',
        }
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}
