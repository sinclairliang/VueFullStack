import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import AppIndex from '@/components/home/AppIndex'
import LibraryIndex from '../components/library/LibraryIndex'
import Login from '@/components/Login'
import Register from '@/components/Register'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'AppIndex',
          component: AppIndex,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/Library',
          name: 'Library',
          component: LibraryIndex,
          meta: {
            requireAuth: true
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'index',
      redirect: '/index',
      component: AppIndex,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
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
            component: () => import('../components/home/AppIndex')
          },
          {
            path: '/library',
            name: 'Library',
            component: () => import('../components/library/LibraryIndex')
          }
        ]
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('../components/Login')
      },
      {
        path: '/register',
        name: 'Register',
        component: () => import('../components/Register')
      },
      {
        path: '/admin',
        name: 'Admin',
        component: () => import('../components/admin/AdminIndex'),
        meta: {
          requireAuth: true
        },
        children: [
          {
            path: '/admin/dashboard',
            name: 'Dashboard',
            component: () =>
              import('../components/admin/dashboard/admin/index'),
            meta: {
              requireAuth: true
            }
          }
        ]
      },
      {
        path: '*',
        component: () => import('../components/pages/Error404')
      }
    ]
  })
