import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
Vue.use(VueRouter)
import {routes} from './routes'
import {store} from './store'

const router = new VueRouter({
  routes,
})

router.beforeEach((to, from, next) => {
  console.log('Access Global Guards');
  next(); // next() en este caso continua y no se actuliza con: store.state.auth
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
