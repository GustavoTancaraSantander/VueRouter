
import Empresa from './components/Empresa.vue';
import Usuario from './components/Usuario.vue';
import UsuarioDP from './components/UsuarioDP.vue';
import UsuarioRol from './components/UsuarioRol.vue';

export const routes = [
  {path:'/empresa', component: Empresa, name: 'empresa',
  children: [
    {path:':id', component: Usuario, name: 'user',
        children:[
          {path:'user-rol', component: UsuarioRol, name: 'rol' },
          {path:'user-dp',  component: UsuarioDP, name: 'dp'},
        ]}
  ]},
];

/* Notar la unica diff >> name: '----', se instancia en <router-link :to=... */
