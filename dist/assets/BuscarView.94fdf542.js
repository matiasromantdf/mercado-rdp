import{a as d}from"./index.becf6c0c.js";import{_ as u,r as _,o as r,c as n,a as t,m as p,B as m,t as i,F as h,d as g,b as v,w as x}from"./index.7ba4806a.js";const b={data(){return{texto:"",url:"https://mercado.elgranero.net/api/api.php",articulos:[]}},emits:{update:"update"},methods:{buscar(){d.get(this.url+"?accion=buscar&texto="+this.texto).then(s=>{this.articulos=s.data,console.log(s.data),sessionStorage.setItem("resultado",JSON.stringify(this.articulos))}).catch(s=>{console.log(s)})}},mounted(){this.$emit("update",4),sessionStorage.getItem("resultado")&&(this.articulos=JSON.parse(sessionStorage.getItem("resultado")))}},f={class:"container"},y={class:"row"},w={class:"col"},B={style:{"margin-top":"20px"}},k={class:"row"},S={class:"col"},I={class:"table"};function V(s,a,N,C,o,l){const c=_("router-link");return r(),n("div",f,[t("div",y,[t("div",w,[t("div",B,[p(t("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=e=>o.texto=e),placeholder:"Ingrese el nombre del producto",class:"form-control"},null,512),[[m,o.texto]]),t("button",{onClick:a[1]||(a[1]=(...e)=>l.buscar&&l.buscar(...e)),class:"btn btn-primary mt-2"},"Buscar")])])]),t("div",k,[t("div",S,[t("table",I,[t("th",null,"Articulos encontrados: "+i(o.articulos.length>0?o.articulos.length:"no se encontro!"),1),(r(!0),n(h,null,g(o.articulos,e=>(r(),n("tr",{key:e.id},[v(c,{to:{name:"articulo",params:{id:e.id}}},{default:x(()=>[t("td",null,i(e.detalle),1)]),_:2},1032,["to"])]))),128))])])])])}var J=u(b,[["render",V],["__scopeId","data-v-fabce528"]]);export{J as default};
