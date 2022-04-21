<script>
export default {
  name: "projects",
  mounted() {
    this.$store.dispatch("siteElements/setActiveButton", this.$route.name);
  }
}
</script>

<template>
  <div class="projects">
  </div>
</template>

<style lang="scss" scoped>
</style>