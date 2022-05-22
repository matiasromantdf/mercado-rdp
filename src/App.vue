
 
<template>


<cabecera></cabecera>



<curvedBottomNavigation :options="options"  
  :value='selected'
  foreground-color='#42A5F5'
  badge-color='#FB752D'
  background-color='#D6FEFF'
  icon-color='#1E1A1A'
  
></CurvedBottomNavigation> 
 



<router-view @agregar="agregar"></router-view>

</template>


<script>

import Cabecera from '@/components/Cabecera.vue'
import ArticulosPortada from '@/components/ArticulosPortada.vue'
import { CurvedBottomNavigation } from "bottom-navigation-vue";

export default {
  setup(){
  
  },
  mounted(){
  
   this.options[1].badge = this.sumacarrito;
  },
  name: 'App',
  components: {
              Cabecera,
              ArticulosPortada,
              CurvedBottomNavigation  
           
              },
data: () => ({
      sumacarrito:22,
      selected: 1,
      options: [
        {
          id: 1,
          icon: "fas fa-home",
          title: "Home",
          path: {name:'home'},
        },
        { id: 2, icon: "fas fa-shopping-cart", title: "Carrito", path:{name:'carrito'},badge: 0 },
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
    methods:{
      agregar(){
        this.options[1].badge++;
        this.selected = 2;
        
        }
      }
    }


</script>
<style scoped>

</style>