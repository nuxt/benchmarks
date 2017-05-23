const {runServer} = require('./server')
const {benchmark} = require('./benchmark')
const tests = require('../tests')
const fs = require('fs-extra')

async function start() {
  let test
  while (test = tests.shift()) {
    const {name, vendorSet, config} = test
    console.log('------ ' + name + ' ------')
    const {nuxt, server} = await runServer(vendorSet, config)
    console.log('Starting benchmarks')
    await benchmark({name})
    console.log('Stopping server')
    await nuxt.close()
    await server.close()
  }
}

start()
