<template>
  <section>
    <h2>Portada Global</h2>
      <h3>{{ auth }}</h3>
      <button @click="cambiarAuth">UpdateStateAuth</button>
      <router-link to="/admin">Mangement</router-link>
      <hr>
      <router-view></router-view>
  </section>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  computed: mapState(['auth']),
  methods:  mapMutations(['cambiarAuth']),
}
</script>

