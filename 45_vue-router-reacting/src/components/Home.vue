<template>
  <section>
    <ul>
      <li v-for=" know in knows" :key="know"> {{know}}</li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
return {
    knows : [
      'path: /user/:idnew, component: user >>> se asigna una ruta dinamica :idnew',
      'para solucionar la reactividad, q no se muetra en el iduser al presionar link usernew se utiliza watch',
      '$route (to), significa a donde se direccionara la ruta : this.iduser = to.params.idnew;',
      'Esto con el fin de reutilizar el componente y no perder la reactividad de la RUTA (thanks WATCH)',
      'EN resumen el componente es REUTILIZADO y el parametro de RUTA es REACTIVO con WATCH',
    ],
}
  }
  }
</script>

