<template>
  <div id="app">
    <h1> Dynamic Reacting to Params Changes</h1>
    <a href="https://router.vuejs.org/guide/essentials/dynamic-matching.html">DOC</a>
    <router-link to="/" exact>Home</router-link>
    <router-link to="/user/77" >User</router-link>
    <router-link to="/user/99" >UserNew</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
  .router-link-active {
    color: red
  }
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

li {
text-align: left;
text-decoration-style: dotted;
}

a {
  color: #42b983;
}
</style>
