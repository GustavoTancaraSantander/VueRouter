import AllComponents from './components/AllComponents.vue';
import NotFound from './components/NotFound.vue';

export const routes = [
  {path:'/allComponent', component: AllComponents , name:'cualquierRoute'},
  {path:'*', component: NotFound},
];
