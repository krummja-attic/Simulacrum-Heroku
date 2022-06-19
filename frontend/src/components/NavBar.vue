<template>
  <div class="navbar">
    <div class="logo">
      <Logo />
    </div>
    <nav>
      <router-link to="/blog">
        Blog
      </router-link>
      <router-link to="/projects">
        Projects
      </router-link>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.navbar {
  // @apply: bg-deepnight-normal;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  height: 50px;
}

a {
  margin: 0 16px;
  font-weight: 700;
}
</style>
