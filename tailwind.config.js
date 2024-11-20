module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: (theme) => ({
        '9/10': '90%',
      }),
      fontFamily: {
        ral: ['Raleway']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
