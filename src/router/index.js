import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

function createRoutes(menuList){
  let routes = []
  menuList.forEach(item => {
    if(item.children) {
      routes = [...routes, ...createRoutes(item.children)]
    }else{
      routes.push({
        path: item.path,
        name: item.name,
        component: () => import(`../view/${item.component}`)
      })
    }
  })
  return routes
}

const defaultPage = store.state.menu.defaultPage
const routes = [
 {
   path: '/',
   component: (resolve) => require([`../view/${defaultPage.component}.vue`], resolve)
 },
 {
   path: defaultPage.path,
   component: (resolve) => require([`../view/${defaultPage.component}.vue`], resolve)
 }
]

const router = new VueRouter({
	routes
})

let newRoutes = createRoutes(store.state.menu.routes)
console.log(newRoutes)

export default router