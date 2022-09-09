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
      path: '/tiendas/:id',
      name: 'tiendas',
      component: () => import( '@/views/VerTiendaView.vue')
    },
    {
      path: '/enviar',
      name: 'enviar',
      component: () => import( '@/views/EnviarPedidoView.vue')
    },
    {
      path:'/buscar',
      name:'buscar',
      component: () => import( '@/views/BuscarView.vue')
    },
    {
      path: '/articulo/:id',
      name: 'articulo',
      component: () => import( '@/views/VerArticuloView.vue')
    }

   
  ]
})


export default router
