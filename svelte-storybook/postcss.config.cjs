const autoprefixer = require('autoprefixer')
const postcssNested = require('postcss-nested')
const cssnano = require('cssnano')

module.exports = {
  plugins: [
    require('postcss-for'),
    require('postcss-math'),
    postcssNested,
    autoprefixer,
    cssnano({ preset: 'default' })
  ]
}
