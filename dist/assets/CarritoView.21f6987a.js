import{_ as h,o as e,c as r,a as t,t as a,F as u,r as m,b as _}from"./index.5d4da705.js";const p={data(){return{carrito:[],articulos:[],fotos:[]}},components:{},computed:{total(){let o=0;for(let s=0;s<this.carrito.length;s++)o+=this.carrito[s].precio*this.carrito[s].cantidad;return o}},emits:{actualizarBadgeCarrito:"actualizarBadgeCarrito"},methods:{eliminarDelCarrito(o){this.carrito.splice(o,1),localStorage.setItem("carrito",JSON.stringify(this.carrito)),this.$emit("actualizarBadgeCarrito")},sumar(o,s){this.carrito[o].cantidad++,localStorage.setItem("carrito",JSON.stringify(this.carrito)),this.$emit("actualizarBadgeCarrito")}},mounted(){window.scrollTo(0,0),this.carrito=JSON.parse(localStorage.getItem("carrito")),this.carrito==null&&(this.carrito=[])}},v={class:"container"},g={class:"row"},C={class:"col md-10"},f=t("br",null,null,-1),b={key:0},y=t("br",null,null,-1),k={class:"table"},S=t("th",{scope:"col"},"Articulo",-1),w=t("th",{scope:"col"},"Cantidad",-1),B=t("th",{scope:"col"},"Subt.",-1),N=t("th",null,null,-1),$={style:{width:"140px"}},x=["src"],z={class:"campoNumerico"},V={class:""},D={class:"contenedor-botones"},I=["value"],J=["onClick"],O=["onClick"],F=t("i",{class:"fas fa-trash"},null,-1),T=[F],A={key:1},E=t("h3",null,"Carrito vac\xEDo",-1),L=[E];function P(o,s,j,q,d,c){return e(),r("div",v,[t("div",g,[t("div",C,[f,d.carrito.length>0?(e(),r("div",b,[t("h3",null,"Carrito: $"+a(c.total),1),y,t("table",k,[S,w,B,N,(e(!0),r(u,null,m(d.carrito,(i,l)=>(e(),r("tr",{key:l,class:"fila"},[t("td",$,[_(a(i.detalle)+" ",1),t("img",{src:i.fotos[0],alt:"",style:{width:"80px"}},null,8,x),_(" Precio: $"+a(i.precio),1)]),t("td",null,[t("div",z,[t("div",V,[t("div",D,[t("button",{onClick:s[0]||(s[0]=(...n)=>o.restar&&o.restar(...n)),id:"boton-masmenos"},"-"),t("input",{id:"texto",type:"text",value:i.cantidad},null,8,I),t("button",{onClick:n=>c.sumar(l,i),id:"boton-masmenos"},"+",8,J)])])])]),t("td",null,"$"+a(i.precio*i.cantidad),1),t("td",null,[t("a",{class:"btn-eliminar",onClick:n=>c.eliminarDelCarrito(l)},T,8,O)])]))),128))])])):(e(),r("div",A,L))])])])}var H=h(p,[["render",P]]);export{H as default};
