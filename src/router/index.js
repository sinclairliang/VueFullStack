import Vue from 'vue'
import Router from 'vue-router'
import AppIndex from '../components/home/AppIndex'
import LibraryIndex from '../components/library/LibraryIndex'
import Login from '../components/Login'
import Home from '../components/Home'
import AdminIndex from '../components/admin/AdminIndex'
import Register from '../components/Register'
import Error404 from '../components/pages/Error404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Default',
      redirect: '/home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'AppIndex',
          component: AppIndex
        },
        {
          path: '/library',
          name: 'Library',
          component: LibraryIndex
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/admin',
      name: 'Admin',
      component: AdminIndex,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '*',
      component: Error404
    }
  ]
})

export const createRouter = routes =>
  new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'Default',
        redirect: '/home',
        component: Home
      },
      {
        path: '/home',
        name: 'Home',
        component: Home,
        redirect: '/index',
        children: [
          {
            path: '/index',
            name: 'AppIndex',
            component: AppIndex
          },
          {
            path: '/library',
            name: 'Library',
            component: LibraryIndex
          }
        ]
      },
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '/register',
        name: 'Register',
        component: Register
      },
      {
        path: '/admin',
        name: 'Admin',
        component: AdminIndex,
        meta: {
          requireAuth: true
        }
      },
      {
        path: '*',
        component: Error404
      }
    ]
  })
