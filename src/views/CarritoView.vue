<template>
<div class="container">
  <div class="row">
    <div class="col md-10">
      <br>
      <div v-if="carrito.length>0" >
  <h3>Carrito: ${{total}}</h3>
  <br>
  
  <table class="table" >
    <th scope="col">Articulo</th>
  
    <th scope="col">Cantidad</th>
    <th scope="col">Subt.</th>
    <th></th>
  <!-- mostrar el contenido del carrito-->
    <tr v-for="(item, index) in carrito" :key="index" class="fila">
      <td style="width:140px">{{item.detalle}} <img :src="item.fotos[0]" alt="" style="width:80px"> Precio: ${{item.precio}}</td>
     
      <td>
          <div class="campoNumerico">
              <div class="">
              <div class="contenedor-botones">
                  <button @click="restar(index,item)" id="boton-masmenos">-</button>
                  <input id="texto" type="text" :value="item.cantidad" >
                  <button @click="sumar(index,item)" id="boton-masmenos">+</button>
              </div>
              </div>
          </div>

      </td>
      <td>${{item.precio*item.cantidad}}</td>
      <td><a class="btn-eliminar" @click="eliminarDelCarrito(index)"><i class="fas fa-trash"></i></a></td>
      
      <!-- <p>{{item.detalle}}</p>
      <p>{{item.precio}}</p>
      <p>{{item.cantidad}}</p>
      <img :src="item.fotos[0]" alt="" style="width:50px">
      <button @click="eliminar(index)">Eliminar</button> -->
      
    </tr>
  </table>

  </div>
  <div v-else>
    <h3>Carrito vacío</h3>
  </div>

  
    </div>
  </div>
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
  components: {
  
},
computed: {
  total(){
    let total = 0;
    for(let i=0; i<this.carrito.length; i++){
      total += this.carrito[i].precio*this.carrito[i].cantidad;
    }
    return total;
  }
},  
  emits: {
    actualizarBadgeCarrito: 'actualizarBadgeCarrito'
  },
 
  methods:{

      
      eliminarDelCarrito(index){
        this.carrito.splice(index, 1);
        localStorage.setItem('carrito', JSON.stringify(this.carrito));
        this.$emit('actualizarBadgeCarrito');
      },
      sumar(index,item){

        
        this.carrito[index].cantidad++;
        localStorage.setItem('carrito', JSON.stringify(this.carrito));
        this.$emit('actualizarBadgeCarrito');
      },
      restar(index,item){
        if(this.carrito[index].cantidad>1){
          this.carrito[index].cantidad--;
          localStorage.setItem('carrito', JSON.stringify(this.carrito));
          this.$emit('actualizarBadgeCarrito');
        }
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
.table{

  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 14px;
  margin-bottom: 70px;
}

.fila td{
 padding: 10px;
 padding-bottom: 15px;
 margin-bottom: 10px;
 border-bottom: 1px solid #000;
 vertical-align: center;
}
.tabla{  
  text-align: center;
}

table img{
  margin-bottom: 10px;
  margin-top: 10px;
}

#texto{
    width: 40px;   
    color:rgb(29, 26, 26);
    text-align: center;
    /* background-color: #42A5F5; */

    border: none;
    pointer-events: none;
    float: left;
    display: inline-block;
}
#boton-masmenos{
    border-radius: 50%;
    width: 20px;
    float: left;
    display: inline-block;
    background-color: rgb(75, 122, 177);
    border: none;
    color: white;
    font-size: 13px;
    

}
.campoNumerico{
    display: flex;
    justify-content: center;
    width: 110px;
    height: 100%;
    background-color: #42A5F5;
    border-radius: 50%;
    margin: 0 auto;
}

</style>