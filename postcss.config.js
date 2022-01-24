module.exports = {
    plugins: [
      require('postcss-nested'),
      require('postcss-import'),
      require('tailwindcss/nesting'),
      require(`tailwindcss`)(`./src/_styles/tailwind.config.js`),
      require(`autoprefixer`),
      require('cssnano')({
        preset: 'default',
      }),
    ],
  }