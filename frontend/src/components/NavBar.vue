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
      <ToggleTheme />
    </nav>
  </div>
</template>

<style scoped lang="scss">
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  height: 50px;
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  & > a {
    margin: 0 16px;
    font-weight: 700;
  }

  & * {
    opacity: 0.6;

    &:hover {
      cursor: pointer;
      opacity: 1;
    }

    transition: opacity 0.15s ease-in;
  }
}
</style>
