const {runServer} = require('./server')
const {benchmark} = require('./benchmark')
const runs = require('./runs')
const fs = require('fs-extra')

async function run() {
  let run
  while (run = runs.shift()) {
    const {name, vendorSet, config} = run
    console.log('------ ' + name + ' ------')
    const {nuxt, server} = await runServer(vendorSet, config)
    console.log('Starting benchmarks')
    await benchmark({name})
    console.log('Stopping server')
    await nuxt.close()
    await server.close()
  }
}

run()
