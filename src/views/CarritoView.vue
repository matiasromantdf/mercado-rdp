<template>
<div class="cuerpo">
  <h1>Contenido del Carrito</h1>
  
  <table class="table" >
    <th>Articulo</th>
    <th>Foto</th>
    <th>Precio</th>
    <th>Cantidad</th>
    <th>Subtotal</th>
    <th>Acción</th>
  <!-- mostrar el contenido del carrito-->
    <tr v-for="(item, index) in carrito" :key="index" class="fila">
      <td>{{item.detalle}}</td>
      <img :src="item.fotos[0]" alt="" style="width:50px">
      <td>{{item.precio}}</td>
       <td><input type="number" onchange="actualizarCantidad(item)" :value=item.cantidad></td>
      <td>{{subtotal}}</td>
      <td><a class="btn-eliminar" @click="eliminarDelCarrito(index)"><i class="fas fa-trash"></i></a></td>
      <!-- <p>{{item.detalle}}</p>
      <p>{{item.precio}}</p>
      <p>{{item.cantidad}}</p>
      <img :src="item.fotos[0]" alt="" style="width:50px">
      <button @click="eliminar(index)">Eliminar</button> -->
      
    </tr>
  </table>

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
   
      eliminarDelCarrito(index){
        this.carrito.splice(index, 1);
        localStorage.setItem('carrito', JSON.stringify(this.carrito));
        this.$emit('contarCarrito');
      },
      actualizarCantidad(item){
       
        localStorage.setItem('carrito', JSON.stringify(this.carrito));
        this.$emit('contarCarrito');
      },
        
      

    },
    computed: {
      subtotal(){
        let total = 0;
        for(let item of this.carrito){
          total += item.cantidad * item.precio;
        }
        return total;
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
.btn-eliminar{
 
 border-radius: 30%;
 box-shadow: 1px 1px 10px #000;
 color:rgb(129, 5, 5)
}

.fila td{
 padding: 10px;
 padding-bottom: 15px;
 margin-bottom: 10px;
 border-bottom: 1px solid #000;
}
.table{
  margin-right: 15px;
  text-align: center;
  padding: 10px;

}
.table img{
  margin-bottom: 10px;
  margin-top: 10px;
}
</style>