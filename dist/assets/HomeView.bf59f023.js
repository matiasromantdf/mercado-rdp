import{s as m,C as p,S as g,N as C}from"./carousel.b6bbe098.js";import{a as b}from"./index.becf6c0c.js";import{_ as w,r as n,o as a,c as r,a as t,b as l,F as h,d as f,w as c,t as d,f as x}from"./index.7ba4806a.js";const L={components:{Loading:m,Carousel:p,Slide:g},data(){return{url:"https://mercado.elgranero.net/api/api.php",isLoading:!0,tiendas:[],settings:{dir:"ltr"}}},components:{Carousel:p,Slide:g,Navigation:C,Loading:m},mounted(){b.get(this.url+"?accion=tiendas").then(e=>{console.log(e.data),this.tiendas=e.data,this.isLoading=!1}).catch(e=>{console.log(e)})},methods:{rnd(){return Math.floor(Math.random()*(5300-2500))+3500},moverSelector(e){this.$emit("update",3),localStorage.setItem("tiendaSeleccionada",e),sessionStorage.setItem("nombreTienda",this.tiendas.find(_=>_.id==e).nombre)}}},F={class:"container"},B={class:"row"},N={class:"col"},V={class:"nombretienda"},D={class:"detalletienda"},E={class:"carousel"},H=["src"],M={class:"detalle"};function $(e,_,j,I,i,u){const v=n("loading"),k=n("Slide"),S=n("Carousel"),y=n("router-link");return a(),r("div",F,[t("div",B,[t("div",N,[l(v,{active:i.isLoading,"can-cancel":!1,"is-full-page":!0,color:"black","background-color":"#D6FEFF"},null,8,["active"]),(a(!0),r(h,null,f(i.tiendas,s=>(a(),r("div",{key:s.id,class:"marco"},[l(y,{to:"/tiendas/"+s.id,onClick:o=>u.moverSelector(s.id)},{default:c(()=>[t("p",V,d(s.nombre),1),t("p",D,d(s.resenia),1),t("div",E,[l(S,{"wrap-around":!0,settings:i.settings,autoplay:u.rnd()},{default:c(()=>[(a(!0),r(h,null,f(s.articulos,o=>(a(),x(k,{key:o},{default:c(()=>[t("img",{style:{width:"50%"},src:o.fotos[0]==""?"../src/assets/sin-imagen.jpg":o.fotos[0]},null,8,H),t("div",M,[t("p",null,d(o.detalle),1)])]),_:2},1024))),128))]),_:2},1032,["settings","autoplay"])])]),_:2},1032,["to","onClick"])]))),128))])])])}var A=w(L,[["render",$]]);export{A as default};