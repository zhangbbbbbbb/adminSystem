import Vue from 'vue'
// import { Button, Select } from 'element-ui'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './api/request.js'
import { createRoutes } from './api/router'
import config from '../common.config'

Vue.config.productionTip = false

// Vue.component(Button.name, Button)
// Vue.component(Select.name, Select)
Vue.use(ElementUI)

// 批量导入数据访问接口
Object.keys(axios).forEach(key => {
  Vue.prototype[`$${key}`] = axios[key]
})
Vue.prototype.$config = config

Vue.directive('scoped', {
  inserted: function(el, binding, vnode) {
    const scopedId = binding.value.$options._scopeId
    console.dir(el)
    console.dir(el.__vue__)
    console.dir(vnode)
    if(!scopedId) {
      return
    }
    // const componentTag = el.__vue__.$vnode.tag
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    // console.log(this.$getMenu)
    // 初始化菜单信息
    if(store.state.token) {
      this.$getMenu().then((res) => {
        // console.log(res)
        store.commit('menu/changeRoutes', res.data.data)
        let newRoutes = createRoutes(store.state.menu.routes)
        // console.log(newRoutes)
        newRoutes.forEach(item => {
          this.$router.addRoute(item)
        })
      })
    }

    // 未对接后台，先直接添加路由
    
  }
}).$mount('#app')
