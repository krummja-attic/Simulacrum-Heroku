<script setup>
</script>


<template>
  <div class="home">
    <div class="test"></div>
  </div>
</template>


<style lang="scss" scoped>
@import "@/assets/scss/app.scss";

.home {
  display: flex; 
}

@include desktop {
  .home {
    flex-flow: column;
    margin: 3% 12%;
  }
}

.test {
  width: 100%;
  height: 400px;
  background-color: rgba(255, 0, 0, 0.25);
}
</style>
