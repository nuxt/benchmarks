const Nuxt = require('nuxt')

module.exports = async function (config) {
  /*
  ** Building
  */
  const defaultConfig = require('./nuxt.config')
  console.log('[nuxt] Building...')
  const builder = await new Nuxt(Object.assign({}, defaultConfig, config))
  await builder.build()
  await builder.close()
  console.log('[nuxt] Building done')
  /*
  ** Starting
  */
  console.log('[nuxt] Starting nuxt')
  const nuxt = await new Nuxt(Object.assign({}, defaultConfig, config))
  const server = new nuxt.Server(nuxt).listen(3000, '0.0.0.0')
  return { nuxt, server, url: 'http://localhost:3000' }
}

