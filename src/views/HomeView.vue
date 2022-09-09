<template>

  <div class="container">
    <div class="row">
      <div class="col">
        

    <loading :active="isLoading" 
        :can-cancel="false" 
        :is-full-page="true"
        :color="'black'"
        :background-color="'#D6FEFF'" 
              
        >
    </loading>

    
    <div v-for="tienda in tiendas" :key="tienda.id" class="marco" >
        <router-link :to="'/tiendas/'+ tienda.id"  @click="moverSelector(tienda.id)" >
         <p class="nombretienda"> {{tienda.nombre}}</p>
          <p class="detalletienda"> {{tienda.resenia}}</p>
        
          <div class="carousel" >
              <Carousel  :wrap-around="true" :settings="settings" :autoplay=rnd() >      
                  
                <Slide v-for="articulo in tienda.articulos" :key="articulo">
            
                  <img style="width:50%" :src="articulo.fotos[0] ==''? '../src/assets/sin-imagen.jpg':articulo.fotos[0]" >
                  <div class="detalle"><p>{{articulo.detalle}}</p></div>
                </Slide>
            
              </Carousel>
          </div>
       </router-link>
       
    </div>
</div>
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
           return Math.floor(Math.random() * (5300 - 2500) ) + 3500;
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
.nombretienda{
  /* background-color: rgb(97, 181, 202);
  border-left: solid rgb(13, 68, 139) 6px;
  width:fit-content;
  padding-left: 15px;
  padding-right: 75px;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  height: 40px;
  color:white; */
  font-size: 60px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;

}
.detalletienda{
  display: flex;
  flex-direction: column;

  border-left: solid rgb(13, 68, 139) 6px;
  width:fit-content;
  padding-left: 15px;
  padding-right: 75px;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  height: 50px;

}
.carousel{
  width:90%;
  
  }
.detalle{
  float:right;
  margin-left:20px
}
.marco{  
  
  margin: 10px;
  padding: 30px;
  width: 100%;
  max-width: 300px;
  max-width: 600px;
  float:left;
  margin-bottom: 100px;
  /* box-shadow: 0 0 4px 4px white inset; */
  

}

a{
  text-decoration: none;
  color: #000;
}
.nombres{
      
    display: block;
    position: absolute;
    bottom: 0;
    color:rgb(31, 27, 27);
    box-shadow: 0px 1px 10px #000;
    height: 30px;
    background-color: rgb(19, 18, 18);
  
    opacity: 0.5;
    margin-bottom: 20px;

}
.nombres > p{

  color:rgb(255, 255, 255);
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  margin-top: -5px;
  z-index: 1;

}
.container{
  
  padding-top: 20px;
  padding-bottom: 100px;
  /* background-image: linear-gradient(#5e6dc5, #e45187); */
  min-height: 600px;


}

</style>