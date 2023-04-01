export default {
  namespaced: true,
  state: {
    mainContentWidth: 0
  },
  mutations: {
    setMainContentWidth(state, value) {
      state.mainContentWidth = value
    }
  }
}