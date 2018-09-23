import home from './components/Home.vue'
import user from './components/User.vue'

export const routes = [
  {path: '/', component: home},
  {path: '/user/:idnew', component: user},
];
