module.exports = {
  content: ['./dist/**/*.{html,js}', './dist/js/*.js'],
  theme: {
    fontFamily: {
      'inter': ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        'primary': '#ED313F',
        'secondary': '#EDECE5',
        'text': '#040917',
        'text-alt': '#634E22',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
