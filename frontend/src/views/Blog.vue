<script>
export default {
  name: "blog",
  mounted() {
    this.$store.dispatch("siteElements/setActiveButton", this.$route.name);
  }
}
</script>

<template>
  <div class="blog">
  </div>
</template>

<style lang="scss" scoped>
</style>