import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  BASE_URL: '/mercado-rdp/',
  routes: [
    {
      path: '/carrito',
      name: 'carrito',
      component: () => import( '@/views/CarritoView.vue#titulo')

    },
    {
      path: '/',
      name: 'home',
      component: () => import( '@/views/HomeView.vue')
    },
   
  ]
})


export default router
