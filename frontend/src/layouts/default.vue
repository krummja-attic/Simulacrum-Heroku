<template>
  <header>
  </header>

  <main class="centered">
    <router-view />
  </main>

  <footer>
  </footer>
</template>

<style scoped>
header {
  min-height: 40px;
}

footer {
  min-height: 40px;
}

.centered {
  display: grid;
  place-items: center;
}
</style>
