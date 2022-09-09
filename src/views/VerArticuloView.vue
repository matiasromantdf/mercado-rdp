<template>
    <div class="container">
        <h4>{{articulo.detalle}}</h4>
        <div class="row pt-2">
            <div class="col-sm-8">
                <div v-for="foto in articulo.fotos" :key="foto.id">
                    <img :src="foto" @click="verModal(foto)">
                </div>
                
            </div>
            <small v-if="hayFotos" >click para ampliar foto</small>
            <br><br>
            <div class="col-sm-2">
                <h3>Precio: ${{articulo.precio}}</h3>
                <h5>{{articulo.descripcion_larga}}</h5>
                <div id="carrito">
                    
                    <a @click="agregarAlCarrito"><img :src="estaEnCarrito" ></a>
                    <p>{{textoIcono}}</p>
                </div>
                <button class="btn btn-primary" @click="$router.go(-1)">Volver</button>
            </div>
        </div>
    </div>


 <!--modal para ver la foto ampliada-->
 <div class="modal fade" id="modalFoto" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"></h5>
       
      </div>
      <div class="modal-body">
        <img :src="fotomodal" style="width:80%">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" @click="cerrarModal">Cerrar</button>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            url: import.meta.env.VITE_APP_URL_API,
            articulo:{},
            carrito:[],
            textoIcono:'',
            fotomodal:'',
            hayFotos:false,

        }
    },
    emits: {
    actualizarBadgeCarrito: 'actualizarBadgeCarrito',
    update: 'update'
    },
    computed:{

        estaEnCarrito(){
            var idart = this.articulo.id;
            if(this.carrito.find(item => item.id == idart)){
            //inhabilitar el link
                this.textoIcono='Ya esta en carrito';
                return '../src/assets/en-carrito.png';
        
            }else{
                this.textoIcono='Agregar al carrito';
                return '../src/assets/al-carrito.png';
            }
    
    },
   

    },
    methods:{
        
        verModal(foto){
        this.fotomodal = foto;
        $('#modalFoto').modal('show');

        },
        cerrarModal(){
        $('#modalFoto').modal('hide');
        },
       
        agregarAlCarrito(){
        var articulo = this.articulo;

        //verificar si exite en el carrito
        if(this.carrito.find(item => item.id == articulo.id)){
        alert('ya esta en el carrito');
        }
        else{
            
        this.articulo.cantidad = 1;

        //agregar al carrito
        this.carrito.push(this.articulo);
        
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


    },
    created(){
        axios.get(this.url+'?accion=articulo&id='+this.$route.params.id)
        .then(response=>{
            //console.log(response.data.datos);
            this.articulo=response.data.datos[0];
            if(response.data.datos[0].fotos.length>0){
                this.hayFotos=true
            }
            else{
                this.hayFotos=false;
            }

        }        
        );
        this.carrito = JSON.parse(localStorage.getItem('carrito'));
        if(this.carrito == null){
        this.carrito = [];
      }
    }
  

}
</script>

<style>
h5{
    overflow-wrap: break-word;
}
img{
    width:100px;
    float:left;
    margin:10px;
}
#carrito{
    width:100px;
}
#carrito img{
    width:50px;
    float:left;
}
#carrito p{
    float:left;
}
button{
    float:right;
    margin-right: 30px;
}
</style>