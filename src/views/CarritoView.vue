<template>
<div class="cuerpo">
  <h1>Vista del carro</h1>
  <button @click="agregar">Agregar</button>
</div>
</template>

<script>
export default {
  emits: {
    agregar: 'agregar'
  },
  methods:{
    agregar(){
      this.$emit('agregar');
      
      }
    }

  }


</script>


<style>

</style>