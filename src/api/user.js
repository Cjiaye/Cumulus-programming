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

const getShopList = () => {
  return request({
    url: '/admin/goods/1?tab=all',
    method: 'GET'
  })
}

const getclassify = () => {
  return request({
    url: '/admin/category',
    method: 'GET'
  })
}

export default {
  login,
  getMenu,
  getstatistics1,
  getShopList,
  getclassify
}
