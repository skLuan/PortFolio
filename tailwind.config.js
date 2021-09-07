module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'main-black': '#04000F'
      },
      fontFamily: {
        'josefin': ['"Josefin Sans"', 'sans-serif']
      },
      letterSpacing: {
        'max-wide': '0.755em',
        'min-wide': '0.5em'
      },
      backgroundImage: theme => ({
        'photo': "url('~/assets/img/photo.jpg')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
