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

const getstatistics1 = () => {
  return request({
    url: 'admin/statistics1',
    method: 'GET'
  })
}
const getstatistics2 = () => {
  return request({
    url: 'admin/statistics2',
    method: 'GET'
  })
}
const getstatistics3 = () => {
  return request({
    url: 'admin/statistics3',
    method: 'GET'
  })
}

export default {
  login,
  getMenu,
  getstatistics1,
  getstatistics2,
  getstatistics3
}
