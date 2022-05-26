<template>
<div class="cuerpo">
  <h1>Contenido del Carrito</h1>
  
  <table class="table-success">
    <th>Articulo</th>
    <th>Foto</th>
    <th>Precio</th>
    <th>Cantidad</th>
    <th>Subtotal</th>
    <th>Acción</th>
  <!-- mostrar el contenido del carrito-->
    <tr v-for="(item, index) in carrito" :key="index">
      <td>{{item.detalle}}</td>
      <img :src="item.fotos[0]" alt="" style="width:50px">
      <td>{{item.precio}}</td>
       <td>{{item.cantidad}}</td>
      <!-- <p>{{item.detalle}}</p>
      <p>{{item.precio}}</p>
      <p>{{item.cantidad}}</p>
      <img :src="item.fotos[0]" alt="" style="width:50px">
      <button @click="eliminar(index)">Eliminar</button> -->

      
    </tr>
  </table>
<button @click="vaciarCarrito" class="btn btn-danger">Vaciar Carrito</button>
</div>
</template>

<script>
export default {
  data(){
    return {
      carrito: [],
      articulos: [],
      fotos: [],
    }
  },
    
  emits: {
    contarCarrito: 'contarCarrito'
  },
 
  methods:{
   
      vaciarCarrito(){
        this.carrito = [];
        localStorage.setItem('carrito', JSON.stringify(this.carrito));
        this.$emit('contarCarrito');
      },
    },

  mounted(){
    window.scrollTo(0, 0);
    //leer el carrito de localstorage
    this.carrito = JSON.parse(localStorage.getItem('carrito'));
    if(this.carrito == null){
      this.carrito = [];
    }
  }

  }


</script>


<style>

</style>