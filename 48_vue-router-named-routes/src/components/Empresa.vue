<template>
<main>
    <h2>Empresa --------.org</h2>
    <!-- <router-link :to="'/empresa/'+ $route.params.id ">User</router-link> -->
    <router-link :to="{ name: 'user' , params: {id: datosUser.iduser} }">User</router-link>

    <hr>
        <router-view></router-view>
</main>
</template>

<script>
import axios from 'axios'
export default {
  mounted() {
    //this.cargarUser;
        axios.get('https://randomuser.me/api/')
          .then((response) => {
            this.usuario = response.data.results[0].id.name;
           // this.iduser = response.data.results[0].id.name;
              console.log(response);
              console.log('usuario',this.usuario);
          })
  },
  data() {
    return {
      usuario: null,
      //iduser: null,
    }
  },
  computed: {
    datosUser() {
      return {
        iduser: this.usuario,
        // iduser: this.usuario.id,
        // nombre: `${this.usuario.name.first} ${this.usuario.name.last}`,
        // foto: this.usuario.picture.large,
        // correoe: this.usuario.email,
  /* NOTA: revisar xq desde computed no se accede a la data de AXIOS (line coments) */
      }
    }
  }
}
</script>

