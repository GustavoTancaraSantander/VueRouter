import Ventas from './components/Ventas.vue';
import VentasPagosAdm from './components/VentasPagosAdm.vue';

var ape = Ventas.iduser;
console.log(ape);

export const routes =  [
  //{path: '/ventas/:accessAPE' ,component:Ventas, name: 'ventasEmpleado', props: true},
  {path: '/ventas' ,component:Ventas, name: 'ventasEmpleado', props: {accessAPE: true}},
  {path: '/ventasAPE' ,  component:VentasPagosAdm},
];

/* props: dynamicPropsFn ---> revisar para obtener el tipo de usuario de la $route.params.
  https://github.com/vuejs/vue-router/blob/dev/examples/route-props/app.js
  progressive >> next >> add login & lograr hacer dynamic ---> props: {accessAPE: true}
  */
