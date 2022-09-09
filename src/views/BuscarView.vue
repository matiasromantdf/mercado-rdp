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
            <th>Articulos encontrados: {{articulos.length>0?articulos.length:'no se encontro!'}}</th>            
            <tr v-for="articulo in articulos" :key="articulo.id">
                <router-link :to="{name:'articulo',params:{id:articulo.id}}" >
                <td>{{articulo.detalle}}</td>
                </router-link>
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
    emits:{
        update:'update'
    },
    methods:{
       
        buscar(){
            axios.get(this.url+'?accion=buscar&texto='+this.texto)
            .then(response => {
                this.articulos = response.data;
                console.log(response.data);
                sessionStorage.setItem('resultado',JSON.stringify(this.articulos));
            })
            .catch(error => {
                console.log(error);
            })
        }
    },
    mounted(){
        this.$emit('update',4);

        if(sessionStorage.getItem('resultado')){
            this.articulos = JSON.parse(sessionStorage.getItem('resultado'))

        }

    },

}
</script>

<style scoped>
table{
    border: none;
}
td{
    border: none;
}
</style>