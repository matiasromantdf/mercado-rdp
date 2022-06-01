
 
<template class="container">



<cabecera></cabecera>

<router-view @actualizarBadgeCarrito="contar" class="estilosVistas">
</router-view>

<curvedBottomNavigation :options="options"  
  foreground-color='#42A5F5'
  badge-color='#FB752D'
  background-color='#D6FEFF'
  icon-color='#1E1A1A'
  :value="selected"
  
></CurvedBottomNavigation> 


</template>


<script>

import Cabecera from '@/components/Cabecera.vue'

import { CurvedBottomNavigation } from "bottom-navigation-vue";

export default {
  setup(){
  
  },
  computed:{
    // cambiar el badge de la pestaña de carrito segun la cantidad de items
 

  },
  mounted(){
  
  this.contar();
   
  },
  name: 'App',
  components: {
              Cabecera,              
              CurvedBottomNavigation  
           
              },
data: () => ({
      selected: 1,
      carrito: [],
      
      options: [
        {
          id: 1,
          icon: "fas fa-tags",
          title: "Artículos",
          path: {name:'home'},
        },
        { id: 2, icon: "fas fa-shopping-cart", title: "Carrito", path:{name:'carrito'},badge: 0 },
        {
          id: 3,
          icon: "fas fa-store",
          title: "Tiendas",
          childs: [{ id: 301, icon: "fas fa-tools", title: "Servicios" },{ id: 301, icon: "fas fa-tshirt", title: "Ventas",path: {name:'tiendas'} }],
         
        },
        { id: 4, icon: "fas fa-inbox", title: "Mensajes", badge: 7 },
        
      ],
    }),
    methods:{
      contar(){
       
        this.carrito=JSON.parse(localStorage.getItem('carrito'));
        if(this.carrito == null){
          this.carrito = [];
        }

        this.options[1].badge = this.carrito.length;
       
        
        
        }
      }
    }


</script>
<style scoped>
.aplicacion{
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.estilosVistas{
   
  
  
}
</style>