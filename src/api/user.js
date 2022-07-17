import request from '@/uilt/request'

const login = (data) => {
  return request({
    url: '/admin/login',
    method: 'POST',
    data
  })
}

export default {
  login
}
