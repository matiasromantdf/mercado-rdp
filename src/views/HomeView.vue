<template>

  <div class="container">


    <loading :active="isLoading" 
        :can-cancel="false" 
        :is-full-page="true"
        :color="'#42A5F5'"
        :background-color="'#D6FEFF'" 
              
        >
    </loading>

    
    <div v-for="tienda in tiendas" :key="tienda.id" class="marco" >
    <p class="nombretienda"> {{tienda.nombre}}</p>
      <router-link :to="'/tiendas/'+ tienda.id" >
     <div class="fotos"  @click="moverSelector(tienda.id)">
     <Carousel  :wrap-around="true" :settings="settings" :autoplay=rnd()>
    
      
      <Slide v-for="articulo in tienda.articulos" :key="articulo" >
       
       <img style="width:75%"  :src="articulo.fotos[0] ==''? '../src/assets/sin-imagen.jpg':articulo.fotos[0]" >
      <div class="nombres"><p>{{articulo.detalle}}</p></div>
      </Slide>

      <template #addons>
       
      </template>
    </Carousel>


  </div>
       </router-link>


    </div>



  </div>

         
    
</template>

<script>
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import axios from 'axios';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default {
  components: {
    Loading,
    Carousel,
    Slide,  
    
    
  },
    data() {
        return{
          url: import.meta.env.VITE_APP_URL_API,
           isLoading: true,
            tiendas:[],
            settings:{
                dir:"ltr",
                
            // autoplay:3000,
        
      },
        }
    },
    components:{
        Carousel,
        Slide,
        
        Navigation,
        Loading
      
    },
     mounted(){
       axios.get(this.url+'?accion=tiendas')
      .then(response => {
          console.log(response.data);
        this.tiendas = response.data;
        this.isLoading = false;       

      })
      .catch(error => {
        console.log(error);
      });
    },
    methods:{
        rnd(){
           return Math.floor(Math.random() * (3300 - 2500) ) + 2800;
        },
        moverSelector(tiendaId){
          this.$emit('update',3);
          localStorage.setItem('tiendaSeleccionada',tiendaId);
          sessionStorage.setItem('nombreTienda',this.tiendas.find(item => item.id == tiendaId).nombre);
        }
    }

    
}
</script>

<style>
.marco{
  
  
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
  max-width: 600px;
}
.nombretienda{
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
}
router-link{
  text-decoration: none;
}
.nombres{
      
    display: block;
    position: absolute;
    bottom: 0;
    color:rgb(31, 27, 27);
    box-shadow: 0px 1px 10px #000;
  
    background-color: rgb(65, 62, 62);
    opacity: 0.5;
    margin-bottom: 0px;

}
.nombres > p{

  color:rgb(255, 255, 255);
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
  z-index: 1;

}
.container{
  
  padding-top: 20px;
  padding-bottom: 60px;
}

</style>