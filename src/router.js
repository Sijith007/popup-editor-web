import Vue from 'vue'
import Router from 'vue-router'
import HomeLayout from '@/layout/HomeLayout'
Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: 'home',
      component: HomeLayout,
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('./views/Home.vue'),
        },
      ],
    }
  ],
  scrollBehavior() {
    window.scrollTo(0,0);
  }
})
