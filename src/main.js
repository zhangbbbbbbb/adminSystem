import Vue from 'vue'
// import { Button, Select } from 'element-ui'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router/index.js'

Vue.config.productionTip = false

// Vue.component(Button.name, Button)
// Vue.component(Select.name, Select)
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
