const {runServer} = require('./server')
const {benchmark} = require('./benchmark')
const tests = require('../tests')
const fs = require('fs-extra')

async function start() {
  // Specify a fixture filter using args
  const _tests = process.argv[2] ? tests.filter(t => t.fixture === process.argv[2]) : tests
  let test
  while (test = _tests.shift()) {
    const {name, vendorSet, config, fixture} = test
    console.log('------ ' + name + ' ------')
    const {nuxt, server, url, stop} = await runServer(vendorSet, fixture, config)
    console.log('Starting benchmarks')
    await benchmark({name, fixture, url})
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
