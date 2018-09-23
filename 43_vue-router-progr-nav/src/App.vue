<template>
  <div id="app">
    <h5>{{ msg }}</h5>
    <router-link to="/" exact >Home</router-link>
    <router-link to="/contacto">Contacto</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

  data () {
    return {
      msg: 'Error in instance / install (vue-route ~~~ vue-router)',
    }
  }
}
</script>
<style>
  .router-link-active {
    color: red;
  }
</style>


