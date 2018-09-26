
<template>
  <section>
    <h1>Portada Global</h1>
    <h3>{{ auth }}</h3>
      <button @click="cambiarAuth">auth</button>
      <router-link to="/admin">Administracion</router-link>
    <hr>
       <router-view></router-view>
  </section>
</template>

<script>
  import {mapState, mapMutations} from 'vuex';

  export default {
      computed: mapState(['auth']),
      methods: mapMutations(['cambiarAuth']),
  }
</script>
