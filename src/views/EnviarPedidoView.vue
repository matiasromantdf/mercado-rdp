<template>
<!--formulario para enviar el pedido-->
 
    <div class="alert alert-info" style="margin-top:0px" >
        <p>Está todo listo para registrar el pedido! Los articulos se agruparon por tienda, al presionar el botón vamos a enviarle a cada comerciante su pedido.</p>
    </div>

    <div class="formulario">  
        <div class="container">  
        <div class="row" id="fila">            
            <div class="col col-2"  >
                <i id ="icono-form" class="fas fa-user"></i>
            </div>
            <div class="col col-10">                    
                <input type="text" class="form-control" id="nombre" placeholder="Nombre y Apellido" v-model="nombre">
            </div>           
        </div>
       
        <div class="row" id="fila">            
            <div class="col col-2"  >
                <i id ="icono-form" class="fas fa-map-marker-alt"></i>
            </div>
            <div class="col col-10">                    
                <input type="text" class="form-control" id="direccion" placeholder="Dirección" v-model="direccion">
            </div>           
        </div>

        <div class="row" id="fila">            
            <div class="col col-2"  >
                <i id ="icono-form" class="fas fa-mobile"></i>
            </div>
            <div class="col col-10">                    
                <input type="text" class="form-control" id="telefono" placeholder="Teléfono" v-model="telefono">
            </div>           
        </div>

        <div class="row" id="fila">
            <br>
            <br>
                               
            <div class="col col-2"  >
              
            </div>           
        </div>

        </div>
    </div>
   
   <div class="container">
        <div v-for="tienda in tiendasCarrito" :key="tienda" class="table" id="tabla">
            <h4>{{tienda.nombre}}</h4><button class="btn sm btn-primary" style="float:right" @click="enviarPedido(tienda)">Enviar</button>
            <div v-for="articulo in carrito" :key="articulo">
                <div v-if="articulo.id_tienda == tienda.id">
                <td>{{articulo.detalle}}: {{articulo.cantidad}}</td>
                </div>
            </div>
            <hr>
            
                
        </div>
        
    </div>

</template>

<script>
import Swal from 'vue-sweetalert2';
import axios from 'axios';
export default {
    data(){
        return{

            url: import.meta.env.VITE_APP_URL_API,
            carrito: [],
            nombre: '',
            direccion: '',
            telefono: '',
            tiendas:[],
            tiendasCarrito:[],
            }
    },

    components: {
        Swal,
    },
    emits: ['actualizarBadgeCarrito','update'],
    mounted(){       
       
        //leer el carrito de localstorage
        this.carrito = JSON.parse(localStorage.getItem('carrito'));
        this.tiendas = axios.get(this.url+'?accion=tiendas').then(response => {
            this.tiendas = response.data;
            this.obtenerTiendasCarrito();
            
            let temp = [];
            for(let i=0; i<this.tiendasCarrito.length; i++){
                for(let j=0; j<this.tiendas.length;j++){
                   
                    if(this.tiendas[j].id == this.tiendasCarrito[i]){
                        
                        temp.push(this.tiendas[j]);
                    }

                }
            }
            this.tiendasCarrito=temp;
            
            });
      
               
      
      
    },
    methods: {

        obtenerTiendasCarrito(){
            for(let i =0; i<this.carrito.length; i++){
                if(this.tiendasCarrito.indexOf(this.carrito[i].id_tienda) == -1){
                    this.tiendasCarrito.push(this.carrito[i].id_tienda);
                }               
            }

        },
        eliminarTiendaCarrito(idTienda){
            for(let i=0; i<this.carrito.length; i++){
                if(this.carrito[i].id_tienda == idTienda){
                    this.carrito.splice(i,1);
                    i=i-1;

                }
            }
            for(let j=0; j<this.tiendasCarrito.length; j++){
                if(this.tiendasCarrito[j].id == idTienda){
                    this.tiendasCarrito.splice(j,1);
                    j=j-1;

                }
            }
        },
          
        enviarPedido(tienda){

            this.$swal({
            title: 'Pedido Registrado!',
            text: "Se envió el mensaje al vendedor!",
            icon: 'success',               
            });

            //esperar dos segundos
            setTimeout(function(){
            console.log("Executed after 1 second");
            }, 3000);


            var pedido = 'Hola! soy'+this.nombre+'\r\n';
            for (let i=0; i<this.carrito.length; i++){
                pedido += 'cod: '+this.carrito[i].id + ' art: '+ this.carrito[i].detalle+' cant: '+this.carrito[i].cantidad+ '\r\n\r\n';

            }
            pedido=window.encodeURI(pedido);
            //abrir whatsapp
            
            window.open('https://api.whatsapp.com/send?phone=+549'+tienda.contacto+'&text='+pedido,'_blank');

            //enviar por POST el carrito al servidor
            // axios.post(this.url, {
            //     nombre: this.nombre,
            //     direccion: this.direccion,
            //     telefono: this.telefono,
            //     carrito: this.carrito
            // })
            // .then(response => {
            //     console.log(response);
            // });
           
  
            //limpiar el carrito
           // this.carrito = [];
           this.eliminarTiendaCarrito(tienda.id);
            localStorage.setItem('carrito', JSON.stringify(this.carrito));
            
            this.$emit('actualizarBadgeCarrito');
            //redireccionar a la pagina de inicio

           

            if(this.carrito.length==0){
                 this.$router.push({name:'home'});
                  this.$emit('update');
            }
            else{
                this.$router.push({name:'enviar'});
            }
               
        },
    }
}
</script>

<style>
#tabla{
   padding: 20px;
   margin-bottom:50px;
   
}
#tabla:last-of-type{
    
    margin-bottom:50px;
}
.formulario{
    display: flex;
    margin-top:20px;
    margin-bottom:20px;
    width:100%;
    padding:20px;
}
#icono-form{
    font-size:30px;
    color:#007bff;
    text-align:center;
    vertical-align: baseline;

}
#fila{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom:10px;
    
    float:left;
}
</style>