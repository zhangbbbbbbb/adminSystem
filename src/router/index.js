import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '../view/MainView.vue'

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		component: MainView
	}
]

const router = new VueRouter({
	routes
})

export default router