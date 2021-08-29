module.exports = {
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    safeList: [],
    content: ['./index.html', './src/**/*.tsx', './src/**/*.ts'],
  },
  theme: {
    extend: {
      height: {
        'screen-excluding-header': 'calc(100vh - 56px)',
      },
      backgroundImage: theme => ({
        'title-screen': "url('/src/assets/images/background.png')",
        'save-bg': "url('/src/assets/images/SaveBG.png')",
      }),
      colors: {
        'is-tomato': '#ff4936',
        'is-maroon': {
          'opacity-85': 'rgba(95, 11, 3,0.85)',
          DEFAULT: 'rgb(95, 11, 3)',
        },
        'is-redbrown': '#a32b1a',
        'is-yellowgreen': '#77d026',
        'is-transparent-black': 'rgba(0,0,0,0.4)',
      },
      keyframes: {
        charHover: {
          '0%, 100%': { backgroundColor: '#000' },
          '50%': { backgroundColor: '#467916' },
        },
      },
      animation: {
        charHover: 'charHover 2s infinite',
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
    },
  },
  plugins: [],
}
