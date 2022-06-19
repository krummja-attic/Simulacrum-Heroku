<template>
  <footer>
    <ToggleTheme />
  </footer>
</template>

<style scoped lang="scss">
footer {
  height: 60px;

  a {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    transition: opacity 0.2s ease;
    opacity: 0.6;
    outline: none;

    &:hover {
      opacity: 1;
      text-decoration-color: inherit;
    }
  }
}
</style>
