import{_ as v,C,S,P as y,N as k,b as w,d as c,o as r,c as s,a,F as _,r as g,e as u,w as l,t as h,f as x}from"./index.99c6cea9.js";const N={emits:{contarCarrito:"contarCarrito"},name:"ArticulosPortada",data(){return{settings:{dir:"ltr"},articulos:"",carrito:[],fotos:""}},components:{Carousel:C,Slide:S,Pagination:y,Navigation:k},methods:{ingresado(t){return this.carrito.find(o=>o.id==t)?"./src/assets/en-carrito.png":"./src/assets/al-carrito.png"},agregarAlCarrito(t){this.carrito.find(o=>o.id==t.id)?alert("ya esta en el carrito"):(t.cantidad=1,this.carrito.push(t),alert("Se agrego al carrito"),localStorage.setItem("carrito",JSON.stringify(this.carrito)),console.log(localStorage.getItem("carrito")),this.$emit("contarCarrito"))},rnd(){return Math.floor(Math.random()*(3300-2500))+2800}},mounted(){this.carrito=JSON.parse(localStorage.getItem("carrito")),this.carrito==null&&(this.carrito=[]),w.get("https://mercado.elgranero.net/api.php?accion=articulos&id=1").then(t=>{console.log(t.data),this.articulos=t.data.datos}).catch(t=>{console.log(t)})}},P={class:"container"},B={class:"row"},V={class:"col-md-12"},A={class:"fotos"},I=["src"],b={class:"card-body"},F=["id","onClick"],H=["src"];function J(t,o,M,O,d,i){const m=c("Slide"),p=c("Pagination"),f=c("Carousel");return r(),s("div",P,[a("div",B,[a("div",V,[(r(!0),s(_,null,g(d.articulos,e=>(r(),s("div",{class:"tarjeta",key:e.id},[a("div",A,[u(f,{"wrap-around":!0,settings:d.settings,autoplay:i.rnd()},{addons:l(()=>[u(p)]),default:l(()=>[(r(!0),s(_,null,g(e.fotos,n=>(r(),x(m,{key:n},{default:l(()=>[a("img",{class:"foto",src:n},null,8,I)]),_:2},1024))),128))]),_:2},1032,["settings","autoplay"])]),a("div",b,[a("p",null,h(e.detalle),1),a("p",null,"Precio: "+h(e.precio),1),a("a",{id:e.id,onClick:n=>i.agregarAlCarrito(e)},[a("img",{src:i.ingresado(e.id)},null,8,H)],8,F)])]))),128))])])])}var D=v(N,[["render",J]]);export{D as default};
