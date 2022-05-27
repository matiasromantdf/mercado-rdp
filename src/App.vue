
 
<template>


<cabecera></cabecera>



<curvedBottomNavigation :options="options"  
  foreground-color='#42A5F5'
  badge-color='#FB752D'
  background-color='#D6FEFF'
  icon-color='#1E1A1A'
  :value="selected"
  @click="update"
></CurvedBottomNavigation> 
 



<router-view @contarCarrito="contar" class="estilosVistas">
</router-view>

</template>


<script>

import Cabecera from '@/components/Cabecera.vue'
import ArticulosPortada from '@/components/ArticulosPortada.vue'
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
              ArticulosPortada,
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
          icon: "fas fa-search",
          title: "Listar",
          childs: [{ id: 301, icon: "fas fa-tools", title: "Servicio" },{ id: 301, icon: "fas fa-tshirt", title: "Artículo" }],
         
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
.estilosVistas{
  margin:0 auto;
  background-color: #42A5F5;
  min-height: 600px;
}
</style>