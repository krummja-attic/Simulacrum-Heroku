<script setup lang="ts">
const route = useRoute()
</script>

<template lang="pug">
.app
  Header
  
  router-view.content(v-slot="{ Component }")
    transition(mode="out-in" name="fade")
      component(:is="Component" :key="route.fullPath")

  Client-Only
    Sakura
  Footer
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
@import "@/../assets/css/layout.scss";

.app {
  // height: 100vh;
  margin: 0 auto;
}

.content {
  margin-top: 160px;
  height: auto;
}

// Transition definitions
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
