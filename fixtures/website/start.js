const Nuxt = require('nuxt')
const defaultConfig = require('./nuxt.config')

module.exports = async function (config) {
  const _config = Object.assign({}, defaultConfig, config)

  /*
  ** Building
  */
  console.log('[nuxt] Building...')
  const builder = await new Nuxt(_config)
  await builder.build()
  await builder.close()
  console.log('[nuxt] Building done')
  /*
  ** Starting
  */
  console.log('[nuxt] Starting docs API')
  const docsAPI = await require('./docs/api')
  console.log('[nuxt] Starting nuxt')
  const nuxt = await new Nuxt(_config)
  const server = new nuxt.Server(nuxt).listen(3000, '0.0.0.0')
  return {
    nuxt,
    server,
    url: 'http://localhost:3000/api/configuration-build',
    stop: () => docsAPI.close()
  }
}
