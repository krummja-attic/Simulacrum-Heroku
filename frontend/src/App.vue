<template>
  <!-- <div class="container" bg="deepnight-dark"> -->
    <router-view />
  <!-- </div> -->
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
</style>
