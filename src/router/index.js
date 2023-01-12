import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../view/HomeView.vue'
import UserView from '../view/UserView.vue'

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		component: HomeView
	},
  {
    path: '/home',
    component: HomeView
  },
  {
    path: '/user',
    component: UserView
  }
]

const router = new VueRouter({
	routes
})

export default router