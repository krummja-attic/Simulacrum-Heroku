<template>
  <div class="about">

  </div>
</template>

<script>
export default {
  name: "about",
  mounted() {
    this.$store.dispatch("siteElements/setActiveButton", this.$route.name);
  }
}
</script>

<style lang="scss" scoped>
.box {
  height: 30px;
  width: 30px;
  background: rgba(247, 243, 239, 0.5);
}
</style>