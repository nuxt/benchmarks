export default ({isClient, app, store, route, error, redirect}) => {
  store.commit('incCtr')
}
