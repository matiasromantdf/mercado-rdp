<template>
  <p>articulos desde la portada {{articulos}}</p>
</template>

<script>
import axios from 'axios';
export default {
  name: 'ArticulosPortada',
  data() {
    return {
      articulos: ''
    }
  },
  methods: {
    // ...
  },
  mounted() {
    axios.get('http://localhost/apigranero/api.php?accion=listar')
      .then(response => {
          console.log(response.data);
        this.articulos = response.data;
      })
      .catch(error => {
        console.log(error);
      })
  }
}

</script>

<style>

</style>