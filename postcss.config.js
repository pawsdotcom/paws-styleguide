const webpack = require('webpack')

module.exports = {
  plugins: {
    'postcss-import': {
      addDependencyTo: webpack,
      path: ['./src/styles']
    },
    'postcss-mixins': {},
    'postcss-nested': {},
    'cssnano': {},
    'postcss-cssnext': {
      features: {
        nesting: false,
        autoprefixer: false
      }
    }
  }
}
