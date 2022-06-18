<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div class="container">
    <NavBar />

    <router-view v-slot="{ Component }">
      <transition mode="out-in" name="fade">
        <component
          :is="Component"
          :key="route.fullPath"
        />
      </transition>
    </router-view>

    <p>
      Test text to see if the theme switcher is working.
    </p>

    <Footer />
  </div>
</template>

<style lang="scss">
@import "@/../assets/css/typography.scss";

html {
  @apply bg-overcast-light;
  height: 100%;
}

html.dark {
  @apply bg-deepnight-dark;
}

body {
  height: 100%;
}

.container {
  text-align: center;

  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  margin: 0 auto;
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
