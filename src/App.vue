
 
<template class="container">


<cabecera></cabecera>

<router-view @actualizarBadgeCarrito="contar" @update ="update" >
</router-view>

<curvedBottomNavigation :options="options"  
  foreground-color='rgb(215, 215, 216)'
  badge-color='#FB452A'
  background-color='#FF6D22'
  icon-color='#1E1A1A'
  :value = "selected"
  @update = "update"
  
></CurvedBottomNavigation> 


</template>


<script>

import Cabecera from '@/components/Cabecera.vue'

import { CurvedBottomNavigation } from "bottom-navigation-vue";



export default {
  setup(){
  
  },
  emits: {
    actualizarBadgeCarrito: 'actualizarBadgeCarrito',
    
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
              CurvedBottomNavigation,
             
           
              },
data: () => ({
      
      carrito: [],
      selected:1,
      options: [
        {
          id: 1,
          icon: "fas fa-store",
          title: "Tiendas",
          path: {name:'home'},
        },
        { id: 2, icon: "fas fa-shopping-cart", 
        title: "Carrito", 
        path:{name:'carrito'},
        badge: 0,
        // childs: [
        //   {id:201, icon:"fas fa-list",title:"Ver",path:{name:'carrito'}},
        //   {id:202, icon:"fas fa-check",title:"Enviar",path:{name:'enviar'}},
          
        //   ]},
        },
        {
          id: 3,
          icon: "fas fa-tags",
          title: "Ver Tienda",
          path: {name:'tiendas',params:{id:'ultima'}}
          // childs: [{ id: 301, icon: "fas fa-tools", title: "Servicios" },{ id: 301, icon: "fas fa-tshirt", title: "Ventas",path: {name:'tiendas',params:{id:'ultima'}} }],
         
        },
        { id: 4, icon: "fas fa-search", title: "Buscar", badge: 0, path:{name:'buscar'} },
        
      ],
    }),
    methods:{
      update(num){        
        this.selected = num;
      },
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
<style >
#app{
  background-color: rgb(215, 215, 216);
  min-height: 900px;

}  
 
@media (min-width: 992px) {
  
}
</style>