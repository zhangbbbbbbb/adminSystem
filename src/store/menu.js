import { defaultPage } from '../../common.config'
export default {
  namespaced: true,
  state: {
    routes: [],
    isCollapse: true
  },
  getters: {
    menuList(state) {
      return [defaultPage, ...state.routes]
    }
  },
  mutations: {
    setIsCollapse(state, payLoad) {
      state.isCollapse = payLoad
    },
    changeRoutes(state, payLoad) {
      state.routes = payLoad
    }
  }
}