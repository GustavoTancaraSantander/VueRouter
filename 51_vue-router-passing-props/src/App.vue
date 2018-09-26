<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <router-link :to="{name:'ventasEmpleado'}">ventas</router-link>
    <hr>
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome in-Nested Routes Components Vue.js App'
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
