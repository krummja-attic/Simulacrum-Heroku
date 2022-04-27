<script setup>
</script>


<template>
  <div class="home">
    <div class="wrapper">
      <!--  -->
    </div>
  </div>
</template>


<style lang="scss" scoped>
@import "@/assets/scss/app.scss";

.home {
  display: flex; 
}

.wrapper {
  display: flex;
  flex-direction: column;
}

@include desktop {
  .home {
    flex-flow: column;
    margin: 3% 12%;
  }
}
</style>
