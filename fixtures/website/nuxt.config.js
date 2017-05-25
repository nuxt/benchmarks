const defaultConfig = require('./nuxtjs.org/nuxt.config')
const path = require('path')

module.exports = Object.assign({
  dev: false,
  srcDir: path.resolve(__dirname, 'nuxtjs.org'),
  render: {
    gzip: false
  },
}, defaultConfig)
