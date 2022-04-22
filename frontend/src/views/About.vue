<script>
export default {
  mounted() {
    this.$store.dispatch("siteElements/setActiveButton", this.$route.name);
  },
  beforeRouteLeave(to, from) {}
}
</script>

<template>
  <div class="about">
  </div>
</template>

<style lang="scss" scoped>
</style>