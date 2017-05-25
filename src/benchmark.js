const apiBenchmark = require('api-benchmark')
const fs = require('fs')
const open = require('open')

const defaultOptions = {
  url: 'http://localhost:3000',
  runMode: 'parallel',
  debug: true,
  maxTime: 10, // in seconds,
  maxConcurrentRequests: 25,
  minSamples: 50000,
  routes: {base: '/'}
}

module.exports.benchmark = function benchmark(_options) {
  const options = Object.assign({}, defaultOptions, _options)
  const { name, url, routes, fixture } = options
  console.log(`Benchmarking ${fixture} ${name} : ${url}`)
  return new Promise((resolve, reject) => {
    apiBenchmark.measure({[name]: url}, routes, options, (err, results) => {
      if (err) {
        return reject(err)
      }
      apiBenchmark.getHtml(results, (err2, html) => {
        if (err2) {
          return reject(err2)
        }
        let file = 'benchmarks/' + name + '.html'
        fs.writeFileSync(file, html)
        open(file)
        resolve(file)
      })
    })
  })
}
