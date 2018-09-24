<template>
    <main>
        <h1> Empresa Gemelos </h1>
        <router-link :to="'/empresa/'+$route.params.id" >Usuario</router-link>
        <router-view></router-view>
    </main>
</template>
