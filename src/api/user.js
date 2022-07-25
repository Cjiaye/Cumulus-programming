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

const getSkuList = () => {
  return request({
    url: '/admin/skus/1',
    method: 'GET'
  })
}

const getcoupon = () => {
  return request({
    url: '/admin/coupon/1',
    method: 'GET'
  })
}

const getmember = () => {
  return request({
    url: '/admin/user_level/1',
    method: 'GET'
  })
}
export default {
  login,
  getMenu,
  getstatistics1,
  getShopList,
  getclassify,
  getSkuList,
  getcoupon,
  getmember
}
