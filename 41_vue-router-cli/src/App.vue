<template>
  <div id="app">
      <h2>{{ msg }}</h2>
      <router-link to="/">Portada</router-link>
      <router-link to="/contacto">Contacto</router-link>
      <hr>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Aprendiendo Vue-Route -Cli (node, webpack, npm install -S vue-route)'
    }
  }
}
</script>
