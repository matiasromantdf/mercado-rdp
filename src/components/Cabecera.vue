<template>
  
    <!-- <img src="../assets/portada.gif" alt=""> -->
  
    <div class="fondo">
      <img src="../assets/bag2.png" id="img2">
      <img src="../assets/bags.png" id="img1">
      <h2>Mercado</h2>
      <h1>OnLine</h1>           
      
    </div>
   
  

</template>

<script>
export default {
  name:'Cabecera'

}
</script>

<style>
#img1{
  margin-top: 15px;  
  width: 20%;
  margin-right: 10px;
  float:right;
  max-width: 220px;
  animation-duration: 5s;
  animation-name: slidein;
  animation-iteration-count: infinite;
}
#img2{
  margin-top: 15px;
  margin-left: 10px;
  width: 18%;
  float:left;
  max-width: 220px;
  animation-duration: 7s;
  animation-name: slidein;
  animation-iteration-count: infinite;
}
.fondo{
  
  height: 150px;
  width: 100%;
  background-image:
  linear-gradient(to right, orange, #f06e23, #d33429, rgb(172, 44, 44));  
  
}
.fondo >h2{
  margin:auto;
  width: 30%;
  text-align: center;
  padding: 10px;
}
.fondo >h1{
  margin:auto;
  margin-top: 0;
  width: 30%;
  text-align: center;
  font-weight: bold;
  color:rgb(158, 156, 165);
  text-anchor: start;
  /* animation-duration: 5s;
  animation-name: slidein;
  animation-iteration-count: infinite; */

}
@keyframes slidein {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  2% { transform: translate(-1px, -2px) rotate(-2deg); }
  4% { transform: translate(-3px, 0px) rotate(21deg); }
  6% { transform: translate(3px, 2px) rotate(0deg); }
  8% { transform: translate(1px, -1px) rotate(11deg); }
  10% { transform: translate(-1px, 2px) rotate(-1deg); }
  12% { transform: translate(-3px, 1px) rotate(0deg); }
  14% { transform: translate(3px, 1px) rotate(-1deg); }
  16% { transform: translate(-2px, -2px) rotate(1deg); }
  18% { transform: translate(2px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}
#jumbo{
 
  width: 100%;
  margin-top:10px;
 
}
#jumbo img{
  width: 100%;
  height: auto;
}
@media screen and (min-width: 800px) {
  #jumbo{
    width: 800px;    
    margin: 0 auto;
  }
}

</style>