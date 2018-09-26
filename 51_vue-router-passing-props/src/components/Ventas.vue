<template>
<section>
    <h2> Control de ventas por Empleado</h2>
    <input type="text" v-model="iduser">
    <h4>  Usuario: {{ iduser }}</h4>
    <h4>  Access APE: {{ accessAPE }}</h4>

    <!-- <h4>  Usuario $router: {{ $route.params.iduser }}</h4> -->
    <!-- <template v-if="accessAPE ==='true'"> -->

    <template v-if="accessAPE">   <!-- Debe coincidir con ->> props: ['accessAPE'], y en routes props: {accessAPE: true}-->
        <router-link to="/ventasAPE">AdmPagosEmpleado</router-link>
        <router-view></router-view>
    </template>
    <hr>
</section>
</template>

<script>
  export default {
    props: ['accessAPE'],
  name: 'app',
  data () {
    return {
      iduser: 'Adm'
    }
  }
}
</script>
