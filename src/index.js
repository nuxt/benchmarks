const { runServer } = require('./server')
const { benchmark } = require('./benchmark')
const tests = require('../tests')
const fs = require('fs-extra')

async function start() {
  let test
  while (test = tests.shift()) {
    const {name, vendorSet, config} = test
    console.log('------ ' + name + ' ------')
    const fixture = process.argv[2]
    const {nuxt, server, url, stop} = await runServer(vendorSet, fixture, config)
    console.log('Starting benchmarks')
    await benchmark({ name, fixture, url })
    console.log('Stopping server')
    await nuxt.close()
    await server.close()
    if (typeof stop === 'function') {
      await stop()
    }
  }
  process.exit()
}

start()
