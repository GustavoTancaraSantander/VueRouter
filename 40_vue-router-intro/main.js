const home = Vue.component('Home', {
      template: ` <h2>Portada</h2>  `, 
});

const contact = Vue.component('Contacto', {
      template: ` <h2>Contacto</h2>  `, 
});

const routes = [
      {path: '/', component: home},
      {path: '/contacto', component: contact},
];

const router = new VueRouter({
      routes: routes,   
});

new Vue({
   el: 'main',
   router,
   data: {
         msg:'Aprendiendo Vue-Router '
   }   
});