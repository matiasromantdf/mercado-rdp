import{C as _,S as m,P as p,N as f,s as v}from"./carousel.6f37d3a0.js";import{a as g}from"./index.becf6c0c.js";import{_ as C,d as S,o as s,c as i,e as y,a,t as c,F as l,r as h}from"./index.ce52ab44.js";const L={emits:{actualizarBadgeCarrito:"actualizarBadgeCarrito",update:"update"},name:"ArticulosPortada",data(){return{url:"https://mercado.elgranero.net/api/api.php",nombreTienda:"",isLoading:!0,settings:{dir:"ltr"},articulos:"",carrito:[],fotos:""}},components:{Carousel:_,Slide:m,Pagination:p,Navigation:f,Loading:v},methods:{estaEnCarrito(t){return this.carrito.find(r=>r.id==t)?"../src/assets/en-carrito.png":"../src/assets/al-carrito.png"},agregarAlCarrito(t){this.carrito.find(r=>r.id==t.id)?alert("ya esta en el carrito"):(t.cantidad=1,this.carrito.push(t),this.$toast.success("se agrego correctamente al carrito! ",{position:"top-left"}),localStorage.setItem("carrito",JSON.stringify(this.carrito)),this.$emit("actualizarBadgeCarrito"))},rnd(){return Math.floor(Math.random()*(3300-2500))+2800}},mounted(){this.carrito=JSON.parse(localStorage.getItem("carrito")),this.carrito==null&&(this.carrito=[]),this.$route.params.id!="ultima"?(this.isLoading=!0,g.get(this.url+"?accion=articulos&id="+this.$route.params.id).then(t=>{console.log(t.data),this.articulos=t.data.datos,this.isLoading=!1}).catch(t=>{console.log(t)})):localStorage.getItem("tiendaSeleccionada")?(this.isLoading=!0,g.get(this.url+"?accion=articulos&id="+localStorage.getItem("tiendaSeleccionada")).then(t=>{this.articulos=t.data.datos,this.isLoading=!1}).catch(t=>{console.log(t)})):(alert("No hay tienda seleccionada"),this.$router.push("/"),this.$emit("update",1)),this.nombreTienda=sessionStorage.getItem("nombreTienda")}},k={class:"container"},N={class:"row"},$={class:"col"},b={class:"lado-izq"},B={class:"fotos"},F=["src"],T={class:"lado-der"},V={class:"nombre"},x=["id","onClick"],I=["src"];function z(t,r,A,E,n,d){const u=S("loading");return s(),i(l,null,[y(u,{active:n.isLoading,"can-cancel":!1,"is-full-page":!0,color:"#42A5F5","background-color":"#D6FEFF"},null,8,["active"]),a("div",k,[a("div",N,[a("div",$,[a("h1",null,c(n.nombreTienda),1),(s(!0),i(l,null,h(n.articulos,e=>(s(),i("div",{class:"tarjeta",key:e.id},[a("div",b,[a("div",B,[(s(!0),i(l,null,h(e.fotos,o=>(s(),i("div",{key:o},[a("img",{class:"foto",src:o==""?"../src/assets/sin-imagen.jpg":o},null,8,F)]))),128))])]),a("div",T,[a("div",V,[a("h4",null,c(e.detalle),1),a("p",null,"Precio: "+c(e.precio),1)]),a("a",{id:e.id,onClick:o=>d.agregarAlCarrito(e)},[a("img",{src:d.estaEnCarrito(e.id)},null,8,I)],8,x)])]))),128))])])])],64)}var D=C(L,[["render",z]]);export{D as default};
