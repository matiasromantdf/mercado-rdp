<template>
<loading :active="isLoading" 
        :can-cancel="false" 
        :is-full-page="true"
        :color="'#42A5F5'"
        :background-color="'#D6FEFF'"
        
        >
</loading>

<div class="container">
<div class="row">
<div class="col">
<h1>{{nombreTienda}}</h1>


<div class="tarjeta" v-for="articulo in articulos" :key="articulo.id" >
  <div class="lado-izq">

    <div class="fotos">
    
      <div v-for="foto in articulo.fotos" :key="foto" >
        <img class="foto" :src="foto ==''?'../src/assets/sin-imagen.jpg':foto" >
      </div>

    </div>  
    
  

  </div>

  <div class="lado-der">
    <div class = "nombre">
      <h4>{{articulo.detalle}}</h4>    
      <p>Precio: {{articulo.precio}}</p>
    </div>
    
    <a :id="articulo.id"  @click="agregarAlCarrito(articulo)"><img :src="estaEnCarrito(articulo.id)" > </a>

  </div>


</div>

</div>
</div>
</div>
 
</template>

<script>

import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import axios from 'axios';



export default {
  
  emits: {
    actualizarBadgeCarrito: 'actualizarBadgeCarrito',
    update: 'update'
  },
  

  name: 'ArticulosPortada',
  data() {
    return {
       url: import.meta.env.VITE_APP_URL_API,
      nombreTienda:'', 
      isLoading: true,
      settings:{
        dir:"ltr",
       // autoplay:3000,       
      },
      articulos: '',
      carrito: [],
      fotos: '', 
     
    }
  },

  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    Loading,
    
  },

  methods: {
    estaEnCarrito(idart){
      if(this.carrito.find(item => item.id == idart)){
        //inhabilitar el link
       
        return '../src/assets/en-carrito.png';
        
      }else{
        return '../src/assets/al-carrito.png';
      }
    
    },

    agregarAlCarrito(articulo){

      //verificar si exite en el carrito
      if(this.carrito.find(item => item.id == articulo.id)){
       alert('ya esta en el carrito');
      }
      else{
        
      articulo.cantidad = 1;

      //agregar al carrito
      this.carrito.push(articulo);
      
      this.$toast.success("se agrego correctamente al carrito! ",{
                          position:
                          "top-left"
                          });
      
      
      
      //actualizar el carrito localstorage
      localStorage.setItem('carrito', JSON.stringify(this.carrito));
      // console.log(localStorage.getItem('carrito'));
      this.$emit('actualizarBadgeCarrito');

      }
    
    },

    rnd() {
        return Math.floor(Math.random() * (3300 - 2500) ) + 2800;
      }
  },
  mounted() {
    
    // console.log(localStorage.getItem('tiendaSeleccionada'));
    //leer el carrito de localstorage
      this.carrito = JSON.parse(localStorage.getItem('carrito'));
      if(this.carrito == null){
        this.carrito = [];
      }
   if(this.$route.params.id != 'ultima'){
     
     this.isLoading=true;
       
    axios.get(this.url+'?accion=articulos&id='+this.$route.params.id)
    // axios.get('http://localhost/apigranero/api.php?accion=articulos&id='+this.$route.params.id)
      .then(response => {
          console.log(response.data);
        this.articulos = response.data.datos;
        this.isLoading = false;
      })
      .catch(error => {
        console.log(error);
      });

   }
   else{
     if(localStorage.getItem('tiendaSeleccionada')){//si localstorage tiene el item tiendaSeleccionada

        this.isLoading=true;
        axios.get(this.url+'?accion=articulos&id='+localStorage.getItem('tiendaSeleccionada'))
        // axios.get('http://localhost/apigranero/api.php?accion=articulos&id='+localStorage.getItem('tiendaSeleccionada'))
          .then(response => {
              // console.log(response.data);
            this.articulos = response.data.datos;
            this.isLoading = false;
          })
          .catch(error => {
            console.log(error);
          });
           }
          else{
            alert('No hay tienda seleccionada');
            this.$router.push('/');
            
            this.$emit('update',1);
          }

  

   }
   this.nombreTienda= sessionStorage.getItem('nombreTienda');

  }
}

</script>

<style>
.tarjeta{
  background-color: #FFF;
 
  width: 95%;
  margin-top: 20px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #000;
  float: left;
  display: inline-block;
  padding-bottom:20px;
  padding-left:10px;
}
.lado-der{
  width: 40%;
  float: right;
  display: inline-block;
}
.lado-izq{
  width: 55%;
  float: left;
}

.foto{
width: 80px;
float: left;
margin: 5px;


}

.nombre{
  width: 80%;
  float: left;
  display: block;
}

/* en pantallas grandes*/
@media (min-width: 1200px) {
  .tarjeta{
    margin-right: 30px;
  }
}
/* seleccionar la ultima tarjeta */
.tarjeta:last-child{
  margin-bottom: 80px;
}



</style>