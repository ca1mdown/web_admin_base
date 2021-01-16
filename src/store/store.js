import Vue from 'vue'
import api from '@/api'
import findIndex from 'lodash/findIndex'

const { sessionStorage } = window

const state = {
  username: '',
  password: '',
  accessToken: '',
  houseList: [],
  secondHouseList: [],
  cardList: [],
  searchKeyList: [],
  userActionList: [],
  subscribeLookHouseList: [],
  recommendClientList: [],
  districtList: [],
  setupList: null
}
Vue.observable(state)

const action = {
	login (username, password) {
	  return api.login(username, password).then(res => {
	    // eslint-disable-next-line camelcase
	    const { errmsg, access_token } = res.data
	    if (errmsg) {
	      // login error
	      return Promise.reject(errmsg)
	    } else {
	      // login success
	      // eslint-disable-next-line camelcase
	      state.accessToken = access_token
	      state.username = username
	      state.password = password
	      sessionStorage.setItem('accessToken', access_token)
	    }
	  })
	},
	logout () {
	  state.accessToken = ''
	  state.username = ''
	  state.password = ''
	  sessionStorage.removeItem('accessToken')
	}
}

const store = {
  state,
  action
}

export default store
