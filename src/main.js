import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/store'
import './element'
import 'bootstrap/dist/css/bootstrap.min.css'

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
