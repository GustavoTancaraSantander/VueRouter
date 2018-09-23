import home from './components/Home.vue'
import user from './components/Usuario.vue'

export const routes = [
  {path: '/', component: home},
  {path: '/usuario/:id', component: user},
];
