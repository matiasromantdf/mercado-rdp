

<template>

<div class="container">
<div class="row">
<div class="col-md-12">

  
<div class="tarjeta" v-for="articulo in articulos" :key="articulo.id" >


  <div class="fotos">
    <Carousel  :wrap-around="true" :settings="settings" :autoplay=rnd()>
      <Slide v-for="foto in articulo.fotos" :key="foto" >
        <img class="foto" :src="foto" >
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>


  </div>

        

  <div class="card-body"> 
    
    <p>{{articulo.detalle}}</p>
    
    <p>Precio: {{articulo.precio}}</p>
    <a href="#" class="btn btn-primary btn-sm" @click="agregarAlCarrito(articulo)">Al Carrito!</a>
  </div>
  


</div>

</div>
</div>
</div>
  
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import axios from 'axios';

export default {
  
  emits: {
    sumar: 'sumar'
  },
  

  name: 'ArticulosPortada',
  data() {
    return {
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
  },

  methods: {

    agregarAlCarrito(item){
      //agregar al carrito
      this.carrito.push(item);
      alert('Se agrego al carrito');
      
      this.$emit('sumar');//no funca porque esta dentro de otro componente
      //actualizar el carrito localstorage
      localStorage.setItem('carrito', JSON.stringify(this.carrito));
      console.log(localStorage.getItem('carrito'));

    },

    rnd() {
        return Math.floor(Math.random() * (3300 - 2800) ) + 2800;
      }
  },
  mounted() {
    
    //leer el carrito de localstorage
      this.carrito = JSON.parse(localStorage.getItem('carrito'));
      if(this.carrito == null){
        this.carrito = [];
      }
    
    axios.get('http://localhost/apigranero/api.php?accion=articulos&id=1')
      .then(response => {
          console.log(response.data);
        this.articulos = response.data.datos;
      })
      .catch(error => {
        console.log(error);
      })
  }
}

</script>

<style>
.fotos{
  width: 200px;
  height: 200px; 
  align-items: center;
  margin: 0 auto;
  margin-bottom:60px;

}
.foto{
width: 200px;


}

.tarjeta{
  background-color: #FFF;
  height: 400px;
  width: 300px;
  margin-top: 20px;
  margin-right: 10px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #000;
  float: left;
  display: inline-block;
}




.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color:  var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>