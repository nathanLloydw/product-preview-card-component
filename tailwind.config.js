module.exports = {
  content: [
      './index.html',
      './public/**/*.html',
      './src/**/*.js',
      './src/**/*.css',
  ],
  theme: {
    extend: {
        colors:
            {
                'dark-cyan':'hsl(158, 36%, 37%)',
                'cream':'hsl(30, 38%, 92%)',
                'v-dark-blue':'hsl(212, 21%, 14%)',
                'dark-grayish-blue':'hsl(228, 12%, 48%)',
            }
    },
  },
  plugins: [],
}
