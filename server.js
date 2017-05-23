const Nuxt = require('nuxt')
const defaultConfig = require('./nuxt.config')
const fs = require('fs-extra')
const path = require('path')
const _ = require('lodash')

process.env.DEBUG = 'nuxt:*'

async function buildAndRun(config) {
  console.log('[nuxt] Building...')
  const builder = await new Nuxt(_.defaultsDeep({}, defaultConfig, config))
  await builder.build()
  await builder.close()
  console.log('[nuxt] Building done')

  // Create a new instance to ensure it is cleaned up
  console.log('[nuxt] Starting nuxt')
  const nuxt = await new Nuxt(Object.assign({}, defaultConfig, config))
  const server = new nuxt.Server(nuxt).listen(3000, '0.0.0.0')
  return {nuxt, server}
}

async function copyVendorSet(vendorSet) {
  const rootDir = path.resolve(__dirname, 'vendor', vendorSet)
  const packages = await fs.readdir(rootDir)
  await packages.map(p => {
    console.log(`${vendorSet}/${p} ~> node_modules...`)
    return fs.copy(path.resolve(rootDir, p), path.resolve('node_modules', p))
  })
}

module.exports.runServer = async function runServer(vendorSet, config) {
  await copyVendorSet(vendorSet)
  return buildAndRun(config)
}
