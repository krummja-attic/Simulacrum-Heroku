<template>
  <div class="projects">
  </div>
</template>

<script>
export default {
  name: "projects",
  mounted() {
    this.$store.dispatch("siteElements/setActiveButton", this.$route.name);
  }
}
</script>

<style lang="scss" scoped>
</style>