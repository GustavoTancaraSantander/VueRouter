<template>
  <div id="app">
    <h1>{{ msg }}</h1>
     <!-- <router-link to="/empresa">Empresa</router-link> -->
     <router-link :to="{name: 'empresa'}">Empresa</router-link>
     <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Home Vue.js App.vue (Named-Routes)'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

</style>
