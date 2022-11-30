/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./home.html"],
  theme: {
    extend: {
      screens: {
        lgscreen: {max: '1024px'},
        mdscreen: {max: '768px'}
      },

      fontFamily: {
        'ubuntu': 'Ubuntu, sans-serif',
        'roboto': 'Roboto, sans-serif',
        'open-sans': 'Open Sans, sans-serif'
      },

      fontSize: {
        16: '16px',
        29: '29px',
      },

      colors: {
        lightblack: '#111111',
        sky: '#9baaf9',
        gray: '#999999',
        lightgray: '#c0c0c0',
        bluebg: '#0d31f0',
      },

      borderRadius: {
        50: '50px',
      },

      gap: {
        30: '30px',
      },

      padding: {
        '10px': '10px',
        15: '15px',
        '20px': '20px',
        '27px': '27px',
        30: '30px',
        '60px': '60px',
      },

      margin: {
        30: '30px',
        '60px': '60px',
      }
    },
  },
  plugins: [],
}
