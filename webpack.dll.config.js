const webpack = require('webpack')
const library = '[name]_lib'
const path = require('path')

module.exports = {
  entry: {
    vue: ['vue','vue-router','vuex','vuex-router-sync']
  },

  output: {
    filename: '[name].dll.js',
    path: './www/dist/',
    library
  },

  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, './www/dist/[name]-manifest.json'),
      // This must match the output.library option above
      name: library
    }),
  ],
}