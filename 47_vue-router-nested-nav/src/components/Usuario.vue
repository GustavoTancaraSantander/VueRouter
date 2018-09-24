<template>
  <section>
      <h2>Welcome User: {{ $route.params.id }}</h2>
      <router-link :to="'/empresa/'+this.$route.params.id+'/usuario-rol'">Rol</router-link>
      <router-link :to="'/empresa/'+$route.params.id+'/usuario-datos'">Datos Personales</router-link>
      <hr>
      <router-view></router-view><!-- seran vistos los router-links ^-->
  </section>
</template>
<!--  Tanto >> $route.params.id  &  $route.params.id , dan los mismo resultado.
    No obstante, al utilizar this.|$route.params.id en el modelo (data())>> provoca
    renderizado nulo (lo que hace necesario reactulizar navegador)| y error respectivamente -->

