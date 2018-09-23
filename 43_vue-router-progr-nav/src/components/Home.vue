<template>
  <section>
    <h2>Home</h2>
    <ul>
      <li v-for="know in knows" :key="know"> {{know}} </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      knows: [
          'Router - link programatic NAV',
          'La diferencia entre un router link - $router.push(), es que push guarda el cambio de ruta en STACK(list)',
          'Y push permite utilizar rutas DINAMICAS con queery String',
          'Asi como pasar Paremetros a traves de las RUTAS',
          'Ademas permite la navegacion en la lista de STACk (es decir, +-#N [adelante o atras])',
          'Eso siempre que este registrado en Stack',
          'Desde la version 2.2.0+ , exitn DOS COLLBACK de push() q se pueden implementar para saber si una ruta se COMPLETO o ABORT',
          '$roote.replace == push, pero no guarda la ruta en el stack esa anonima',
          'metodo para moverse en el stack de la ruta (route.go(+-#)) para moverse en la historia',
      ],
    }
  },
}
</script>

