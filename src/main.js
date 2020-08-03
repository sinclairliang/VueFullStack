import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8443/api'

Vue.prototype.$axios = axios
Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
