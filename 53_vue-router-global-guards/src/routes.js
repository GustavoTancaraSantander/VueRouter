import Home from './components/Home.vue';
import Admin from './components/Admin.vue';
import NotFound from './components/NotFound.vue';

export const routes = [
  {path:'/portada', component: Home, name: 'portada' },
  {path:'/admin', component: Admin },
  {path:'*', component: NotFound },
];
