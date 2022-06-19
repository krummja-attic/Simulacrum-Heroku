<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div class="container">
    <NavBar />

    <router-view
      v-slot="{ Component }"
      class="content-wrapper"
    >
      <transition mode="out-in" name="fade">
        <component
          :is="Component"
          :key="route.fullPath"
        />
      </transition>
    </router-view>

    <Footer />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&display=swap');

.container {
  text-align: center;

  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  margin: 0 auto;
}

.content-wrapper {
  margin: 24px 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
