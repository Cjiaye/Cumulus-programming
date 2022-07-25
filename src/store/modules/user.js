import UserApi from '../../api/user'
import { setItem, getItem } from '../../utils/storage'
const TOKEN_KEY = 'token'
export default {
  namespaced: true,
  state: {
    token: getItem(TOKEN_KEY) || ''
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
      setItem(TOKEN_KEY, token)
    }
  },
  actions: {
    async login({ commit }, payload) {
      const response = await UserApi.login(payload)
      // console.log(response)
      commit('SET_TOKEN', response.data.data.token)
      return response
    },
    async getmenu({ commit }) {
      const response = await UserApi.getMenu()
      // console.log(response)
      return response
    },
    async statistics1({ commit }) {
      const response = await UserApi.getstatistics1()
      // console.log(response)
      return response
    },
    async getshop({ commit }) {
      const response = await UserApi.getShopList()
      // console.log(response)
      return response
    },
    async getsort({ commit }) {
      const response = await UserApi.getclassify()
      // console.log(response)
      return response
    },
    async getsku({ commit }) {
      const response = await UserApi.getSkuList()
      // console.log(response)
      return response
    },
    async getcupon({ commit }) {
      const response = await UserApi.getcoupon()
      // console.log(response)
      return response
    },
    async getmember({ commit }) {
      const response = await UserApi.getmember()
      console.log(response)
      return response
    }
  }
}
