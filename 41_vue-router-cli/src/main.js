import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import {routes} from './routes'
Vue.use(VueRouter)

/* instanciando */
const router = new VueRouter({
    routes,
})
/* Dando ACCESO a la App principal*/
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
