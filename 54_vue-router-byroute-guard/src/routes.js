import Home from './components/Home.vue';
import Admin from './components/Admin.vue';
import {store} from './store'

export const routes = [
  {path:'/portada', component: Home },
  {path:'/admin', component: Admin,
    beforeEnter: (to, from, next) => {
        console.log('Access Local by Route Admin',to,from)
        next(store.state.auth)
    }
  },
];
