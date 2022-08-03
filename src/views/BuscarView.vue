<template>
<div class="container">
    <div class ="row">
        <div class ="col">
            <div style="margin-top:20px">
            <input type="text" v-model="texto" placeholder="Ingrese el nombre del producto" class="form-control">
            <button @click="buscar" class="btn btn-primary mt-2">Buscar</button>
            </div>
        </div>

    </div>
    <div class="row">
        <div class="col">
        <table class="table">
            <th>Tienda</th>
            <th>Articulo</th>
            <tr v-for="articulo in articulos" :key="articulo">
                <router-link :to="{name:'tiendas',params:{id:articulo.id}}" @click="enviarNombre(articulo.nombre)">
                <td>{{articulo.nombre}}</td>
                </router-link>
                <td>{{articulo.detalle}}</td>
            </tr>
        </table>
        </div>

    </div>

</div>
  
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return {
            texto:'',
            url: import.meta.env.VITE_APP_URL_API,
            articulos: [],
            
        }
    },
    methods:{
        enviarNombre(nombre){
            sessionStorage.setItem('nombreTienda',nombre);
        },
        buscar(){
            axios.get(this.url+'?accion=buscar&texto='+this.texto)
            .then(response => {
                this.articulos = response.data;
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            })
        }
    }

}
</script>

<style scoped>

</style>