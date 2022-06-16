<script setup>
const route = useRoute();
</script>

<template>
  <div class="container" bg="deepnight-dark" debug="red">
    <nav debug="blue">
      <router-link to="/">Home</router-link> | 
      <router-link to="/blog">Blog</router-link> | 
      <router-link to="/projects">Projects</router-link>
    </nav>

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

nav {
  height: 60px;
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
