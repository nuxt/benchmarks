module.exports = {
  dev: false,
  rootDir: __dirname,
  srcDir: __dirname,
  head: {
    title: 'starter',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  loading: {color: '#3B8070'},
  plugins: [
    '~plugins/storetest.js',
    '~plugins/bootstrap-vue.js'
  ],
  render: {
    gzip: false
  },
  build: {
    extractCSS: true
  }
}
