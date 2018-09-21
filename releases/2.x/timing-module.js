module.exports = function () {
  console.time('init')

  this.nuxt.hook('build:before', () => {
    console.time('>build')
  })

  this.nuxt.hook('build:done', () => {
    console.timeEnd('>build')
  })

  // ------------

  this.nuxt.hook('build:compile', ({ name }) => {
    console.time('>build:' + name)
  })

  this.nuxt.hook('build:compiled', ({ name }) => {
    console.timeEnd('>build:' + name)
  })
}
