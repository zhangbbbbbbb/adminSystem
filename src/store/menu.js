export default {
  namespaced: true,
  state: {
    defaultPage: {
      path: '/home',
      component: 'HomeView'
    },
    menuList: [
      {
        path: '/home',
        name: 'home',
        label: '首页',
        icon:'s-home',
        url: 'Home/Home',
        component: 'HomeView'
      },
      {
        path: '/mall',
        name: 'mall',
        label: '商品管理',
        icon:'s-goods',
        url: 'MallManage/MallManage',
        component: 'MallManageView'
      },
      {
        path: '/user',
        name: 'user',
        label: '用户管理',
        icon:'user',
        url: 'UserManage/userManage',
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
            url: 'other/Pageone',
            component: 'PageoneView'
          },
          {
            path: '/page2',
            name: 'page2',
            label: '页面2',
            icon:'setting',
            url: 'other/Pagetwo',
            component: 'PagetwoView'
          }
        ]
      }
    ]
  }
}