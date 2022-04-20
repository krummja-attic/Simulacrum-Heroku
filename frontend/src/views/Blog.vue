<template>
  <div class="blog">
  </div>
</template>

<script>
export default {
  name: "blog",
  mounted() {
    this.$store.dispatch("siteElements/setActiveButton", this.$route.name);
  }
}
</script>

<style lang="scss" scoped>
</style>