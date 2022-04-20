<template>
  <div class="home">
  </div>
</template>

<script>
export default {
  name: 'home',
  mounted() {
    this.$store.dispatch("siteElements/setActiveButton", this.$route.name);
  }
}
</script>

<style lang="scss" scoped>
</style>
