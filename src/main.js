import Vue from 'vue'
// import { Button, Select } from 'element-ui'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import axios, { getMenu } from './api/request.js'
import { createRoutes } from './api/router'

Vue.config.productionTip = false

// Vue.component(Button.name, Button)
// Vue.component(Select.name, Select)
Vue.use(ElementUI)

Vue.prototype.$axios = axios
Vue.prototype.$getMenu = getMenu

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    // 初始化菜单信息
    // if(store.state.token) {
    //   this.$getMenu().then((res) => {
    //     console.log(res)
    //   })
    // }

    // 未对接后台，先直接添加路由
    let newRoutes = createRoutes(store.state.menu.routes)
    console.log(newRoutes)
    newRoutes.forEach(item => {
      this.$router.addRoute(item)
    })
  }
}).$mount('#app')
