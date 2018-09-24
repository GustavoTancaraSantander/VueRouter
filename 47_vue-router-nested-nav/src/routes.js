import Empresa from './components/Empresa.vue'
import Usuario from './components/Usuario.vue';
import UsuarioRol from './components/UsuarioRol.vue';
import UsuarioDatos from './components/UsuarioDatos.vue';


export const routes = [
  {path:'/empresa', component: Empresa,
  children: [
    {path:':id', component: Usuario,
    children: [
      {path:'usuario-rol', component: UsuarioRol},
      {path:'usuario-datos', component: UsuarioDatos},
    ]}
  ]}
];

/* :id parametro dynamiccomo ya ha sido visto, sale un poco de la estructura dispuesta
pero asi es loe encuentro con + sentido*/
