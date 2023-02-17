export default {
  namespaced: true,
  state: {
    defaultPage: {
      path: '/home',
      name: 'home',
      label: '首页',
      icon:'s-home',
      component: 'HomeView'
    },
    routes: [
      {
        path: '/mall',
        name: 'mall',
        label: '商品管理',
        icon:'s-goods',
        component: 'MallManageView'
      },
      {
        path: '/user',
        name: 'user',
        label: '用户管理',
        icon:'user',
        component: 'UserManageView'
      },
      {
        name: 'other',
        label: '其他',
        icon: 'more',
        children: [
          {
            path: '/page1',
            name: 'page1',
            label: '页面1',
            icon:'setting',
            component: 'PageOneView'
          },
          {
            path: '/page2',
            name: 'page2',
            label: '页面2',
            icon:'setting',
            component: 'PageTwoView'
          }
        ]
      }
    ],
    isCollapse: true
  },
  getters: {
    menuList(state) {
      return [state.defaultPage, ...state.routes]
    }
  },
  mutations: {
    setIsCollapse(state, payLoad) {
      state.isCollapse = payLoad
    }
  }
}