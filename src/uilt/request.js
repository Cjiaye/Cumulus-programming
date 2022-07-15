import axios from 'axios'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 添加请求拦截器
service.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('token') || ''
    if (token) {
      config.headers.token = token
    }
    // console.log(config.headers.Authorization)
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  function (response) {
    // console.log('拦截器', response.data)
    if (response.data.code === 400) {
      localStorage.clear()

      this.$router.push('/login')
    }

    return response.data
  },
  function (error) {
    return Promise.reject(error)
  }
)
export default service
