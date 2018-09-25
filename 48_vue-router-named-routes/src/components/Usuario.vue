<template>
  <section>
    <h2>Usuario identificado ID: {{ $route.params.id }}</h2>
    <!-- <router-link :to="'/empresa/'+ $route.params.id + '/user-rol'">Rol</router-link> -->
    <!-- <router-link :to="'/empresa/'+ $route.params.id + '/user-dp'">Datos P.</router-link> -->
    <router-link :to="{name:'rol', params:{id: $route.params.id }}">Rol</router-link>
    <router-link :to="{name: 'dp', params:{id: $route.params.id }}">Datos P.</router-link>
    <hr>
    <router-view></router-view>
  </section>
  <!-- sin importar el orden | secuencia de NAV solo considerar (name:'', params:{id:----})
  params es opcional, en si usarlo solo cuando se tenga parametros, valga la redundancia -->
</template>

