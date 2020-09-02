import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

axios.defaults.baseURL = 'http://localhost:8098/api'
axios.defaults.withCredentials = true
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
  if (store.state.user.username && to.path.startsWith('/admin')) {
    initAdminMenu(router, store)
  }
  if (store.state.username && to.path.startsWith('/login')) {
    next({
      name: 'Dashboard'
    })
  }
  if (to.meta.requireAuth) {
    if (store.state.user) {
      axios.get('/authentication').then(resp => {
        if (resp) {
          next()
        }
      })
    } else {
      next({
        path: 'login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next({
      path: 'login',
      query: {
        redirect: to.fullPath
      }
    })
  }
})

const initAdminMenu = (router, store) => {
  if (store.state.adminMenus.length > 0) {
    return
  }
  axios.get('/menu').then(resp => {
    if (resp && resp.status === 200) {
      var fmtRoutes = formatRoutes(resp.data.result)
      router.addRoutes(fmtRoutes)
      store.commit('initAdminMenu', fmtRoutes)
    }
  })
}

const formatRoutes = routes => {
  let fmtRoutes = []
  routes.forEach(route => {
    if (route.children) {
      route.children = formatRoutes(route.children)
    }

    let fmtRoute = {
      path: route.path,
      component: resolve => {
        require(['./components/admin/' + route.component + '.vue'], resolve)
      },
      name: route.name,
      iconCls: route.iconCls,
      meta: {
        requireAuth: true
      },
      children: route.children
    }
    fmtRoutes.push(fmtRoute)
  })
  return fmtRoutes
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  components: { App },
  template: '<App/>'
})
