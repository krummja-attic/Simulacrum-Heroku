<script setup>
const route = useRoute();
</script>

<template>
  <div class="container" bg="deepnight-dark" debug="red">
    <NavBar />

    <router-view v-slot="{ Component }">
      <transition mode="out-in" name="fade">
        <component 
          :is="Component"
          :key="route.fullPath"
        />
      </transition>
    </router-view>

  </div>
</template>

<style>
html, body {
  @apply bg-deepnight-dark;
  
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
