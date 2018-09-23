<template>
    <h2> {{ userid }}</h2>
</template>

<script>
export default {
  data() {
    return {
      userid: this.$route.params.id,
    }
  },
}
</script>


