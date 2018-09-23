<template>
<section>
  <h2>Contacto</h2>
  <p>Volvera Automaticamente en 1,5 segundos a Home (revisar console)</p>
  <button @click="volverHome()">volver a Home</button>
</section>
</template>

<script>
export default {
  created() {
    setTimeout(() => {
      this.$router.push('/');
    }, 1500);
  },
  methods: {
    volverHome() {
      this.$router.push('/', () => console.log('onComplete? Ejecutado antes de terminar'));
    }
  },
}
</script>

