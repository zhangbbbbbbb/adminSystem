import Vue from 'vue'
import VueRouter from 'vue-router'
// import MainView from '../view/MainView.vue'

// 存储路由
let routeList = []
const requireComponents = require.context('../view', true, /\.vue/)
// 遍历出每个组件的路径
requireComponents.keys().forEach(fileName => {
  // 组件实例
  const reqCom = requireComponents(fileName).default
  // 截取路径作为组件名
  const reqComName = reqCom.name|| fileName.replace(/\.\/(.*)\.vue/,'$1')
  // 存放路由
  routeList[reqComName] = reqCom
})
console.log(routeList)

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		component: routeList['MainView']
	}
]

const router = new VueRouter({
	routes
})

export default router