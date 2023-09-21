import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SystemView from '../views/SystemView.vue'
import notFound from '../views/NotFoundView.vue'
import user from '../views/UserView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/system',
      name: 'systemview',
      component: SystemView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: notFound
    }, 
    {
      path: '/user/:codigo',
      name: 'userview',
      component: user
    },
  ]
})

export default router
