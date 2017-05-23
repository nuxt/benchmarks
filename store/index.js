export default {
  state () {
    return {
      title: 'Nuxt',
      ctr: -1
    }
  },
  mutations: {
    incCtr (state) {
      state.ctr++
    }
  }
}
