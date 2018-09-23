<template>
  <section>
    <h2>user ID:{{ iduser }}</h2>
  </section>
</template>

<script>
export default {
  data() {
    return {
      iduser: this.$route.params.idnew,
    }
  },

  /* para solucionar la reactividad, q no se muetra en el iduser al presionar link(usernew)
  se utiliza watch */

  watch: {
    '$route'(to) {
      this.iduser = to.params.idnew;
    }
  },
}
</script>



