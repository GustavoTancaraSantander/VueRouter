import Equipo from './components/Equipo.vue'
import EquipoDev from './components/EquipoDevelopers.vue'
import EquipoDevOps from './components/EquipoDevOps.vue'

export const routes = [
  {path: '/Equipo', component: Equipo,
  children : [
      { path: '/EquipoDevelopers', component: EquipoDev}, // test -> http://localhost:8080/#/EquipoDevelopers
      { path: 'EquipoDevOps', component: EquipoDevOps},// test -> http://localhost:8080/#/Equipo/EquipoDevOps
  ]}
];
