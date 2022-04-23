<script>
export default {
  mounted() {
    this.$store.dispatch("siteElements/setActiveButton", this.$route.name);
  }
}
</script>


<template>
  <div class="home">
    <!--  -->
  </div>
</template>


<style lang="scss" scoped>
</style>
