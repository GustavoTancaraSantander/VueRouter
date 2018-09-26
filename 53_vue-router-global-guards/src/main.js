import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
Vue.use(VueRouter)
import {routes} from './routes'
import {store} from './store'

const router = new VueRouter({
  mode: 'history',
  routes,
});

/* con .beforeEach( to=a, from=de, next=booleano[q decide seguir o no la NAV] ) */
router.beforeEach((to, from, next) => {
  // to and from are both route objects
  console.log(to,from);
  next(store.state.auth);
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
