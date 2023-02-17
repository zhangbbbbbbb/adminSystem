import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const defaultPage = store.state.menu.defaultPage
const routes = [
 {
   path: '/',
   redirect: defaultPage.path
 },
 {
   path: defaultPage.path,
   name: defaultPage.name,
   component: (resolve) => require([`../view/${defaultPage.component}.vue`], resolve),
   meta: {
    label: defaultPage.label
   }
 }
]

const router = new VueRouter({
	routes
})

export default router