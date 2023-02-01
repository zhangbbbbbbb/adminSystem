import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
// import HomeView from '../view/HomeView.vue'
// console.log(HomeView)

Vue.use(VueRouter)

function setRoutes(list){
  list.forEach(item => {
    if(item.children) {
      setRoutes(item.children)
    }else{
      routes.push(
        {
          path: item.path,
          name: item.name,
          component: () => import(`../view/${item.component}`)
        }
      )
    }
  })
}

const routes = [
 {
   path: '/',
   component: (resolve) => require([`../view/${store.state.menu.defaultPage.component}.vue`], resolve)
 }
]

setRoutes(store.state.menu.menuList)
// console.log(routes)

const router = new VueRouter({
	routes
})

export default router