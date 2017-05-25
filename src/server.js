const fs = require('fs-extra')
const path = require('path')

// process.env.DEBUG = 'nuxt:*'

async function copyVendorSet(vendorSet) {
  const rootDir = path.resolve(__dirname, '..', 'vendor', vendorSet)
  const packages = await fs.readdir(rootDir)
  await packages.map(p => {
    console.log(`${vendorSet}/${p} ~> node_modules...`)
    return fs.copy(path.resolve(rootDir, p), path.resolve(__dirname, '..', 'node_modules', p))
  })
}

module.exports.runServer = async function runServer(vendorSet, fixture, config) {
  await copyVendorSet(vendorSet)
  const buildAndRun = require(`../fixtures/${fixture}/start`)
  return buildAndRun(config)
}
