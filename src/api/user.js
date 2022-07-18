import request from '@/utils/request'

const login = (data) => {
  return request({
    url: '/admin/login',
    method: 'POST',
    data
  })
}

const getMenu = () => {
  return request({
    url: '/admin/getinfo',
    method: 'POST'
  })
}

export default {
  login,
  getMenu
}
