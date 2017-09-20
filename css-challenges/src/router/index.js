import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Test from '@/components/Test'
import Menus from '@/components/menus'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/menus',
      name: 'menus',
      component: Menus
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
