import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

import LoginPage from '@/pages/LoginPage.vue'
import IndexPage from '@/pages/IndexPage.vue'
import Page1 from '@/pages/Page1.vue'
import Page2 from '@/pages/Page2.vue'
import Page3 from '@/pages/Page2.vue'
import Page4 from '@/pages/Page4.vue'


Vue.use(VueRouter)

const { sessionStorage } = window

const router = new VueRouter({
  routes: [
    {
      name: 'Login',
      path: '/login',
      component: LoginPage,
      meta: {
        requireAuth: false
      }
    },
    {
      name: 'Index',
      path: '/',
      component: IndexPage,
      meta: {
        requireAuth: true
      },
      redirect: 'page1',
      children: [
        {
          name: 'Page1',
          path: 'page1',
          component: Page1
        },
		{
		  name: 'Page2',
		  path: 'page2',
		  component: Page2
		},
		{
		  name: 'Page3',
		  path: 'page3',
		  component: Page3
		},
		{
		  name: 'Page4',
		  path: 'page4',
		  component: Page4
		}

      ]
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requireAuth)) {
//     if (store.state.accessToken) {
//       next()
//     } else if (sessionStorage.getItem('accessToken')) {
//       // 一般在已经登录完成的页面中刷新时，就会跳到此处
//       store.state.accessToken = sessionStorage.getItem('accessToken')
//       store.action.getBaseData().then(() => {
//         next()
//       })
//     } else {
//       next({ name: 'Login' })
//     }
//   } else if (to.matched.length === 0) {
//     // first open
//     next({ name: 'Login' })
//   } else {
//     next()
//   }
// })

export default router
