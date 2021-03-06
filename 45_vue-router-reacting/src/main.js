import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
 Vue.use(VueRouter)
import {routes} from './routes'

const router = new VueRouter({
  routes,
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
