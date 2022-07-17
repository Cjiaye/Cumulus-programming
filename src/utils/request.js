import axios from 'axios'
import store from '@/store'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 添加请求拦截器
service.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('token')
    config.headers.token = token
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  function (response) {
    // if (response.data.code === 200) {
    //   return response.data.data
    // }
    const authorization = response.data.data.token
    if (authorization) {
      console.log('---', authorization)
      store.commit('user/SET_TOKEN', authorization)
    }
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)
export default service
