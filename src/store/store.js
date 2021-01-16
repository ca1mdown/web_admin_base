import Vue from 'vue'
// import api from '@/api'
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
