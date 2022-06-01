import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  BASE_URL: '/mercado-rdp/',
  routes: [
    {
      path: '/carrito',
      name: 'carrito',
      component: () => import( '@/views/CarritoView.vue')

    },
    {
      path: '/',
      name: 'home',
      component: () => import( '@/views/HomeView.vue')
    },
    {
      path: '/tiendas',
      name: 'tiendas',
      component: () => import( '@/views/TiendasView.vue')
    },
   
  ]
})


export default router
