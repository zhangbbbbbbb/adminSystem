import axios from 'axios'

axios.default.baseURL = 'http://www.test.com/'
axios.interceptors.request.use(config => {
  return config
})
axios.interceptors.response.use(res => {
  return res
},err => {
  return Promise.reject(err)
})

export default axios