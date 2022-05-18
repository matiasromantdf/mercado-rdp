
 
<template>


<cabecera></cabecera>



<curvedBottomNavigation :options="options" v-model="selected" 
  value="1"
   foreground-color='#38726C'
  badge-color='#C33124'
  background-color='#9BC1BC'
  icon-color='#000000'
></CurvedBottomNavigation> 
 



<router-view></router-view>

</template>


<script>

import Cabecera from '@/components/Cabecera.vue'
import ArticulosPortada from '@/components/ArticulosPortada.vue'
import { CurvedBottomNavigation } from "bottom-navigation-vue";

export default {
  name: 'App',
  components: {
              Cabecera,
              ArticulosPortada,
              CurvedBottomNavigation  
           
              },
data: () => ({
      selected: 1,
      options: [
        {
          id: 1,
          icon: "fas fa-home",
          title: "Home",
          path: {name:'home'},
        },
        { id: 2, icon: "fas fa-shopping-cart", title: "Wallet", path:{name:'carrito'} },
        {
          id: 3,
          icon: "fas fa-plus",
          title: "Setting",
          childs: [{ id: 301, icon: "fas fa-ticket-alt", title: "Tickets" },{ id: 301, icon: "fas fa-ticket-alt", title: "Tickets" }],
         
        },
        { id: 4, icon: "fas fa-bell", title: "Notification", badge: 7 },
        { id: 5, icon: "fas fa-bell", title: "Notification", badge: 15 },
      ],
    }),
}

</script>
<style scoped>

</style>