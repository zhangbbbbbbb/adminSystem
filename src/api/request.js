import axios from 'axios'
import store from '../store'

axios.default.baseURL = '/api'
axios.interceptors.request.use(config => {
  return config
})
axios.interceptors.response.use(res => {
  return res
},err => {
  return Promise.reject(err)
})

console.log(store.state.token)

// 正确导出
export const getMenu = axios.create({
  baseURL: '/api/aside/menu',
  headers: {
    token: store.state.token
  }
})

// export const getMenu错误写法
// export  getMenu错误写法
export default axios