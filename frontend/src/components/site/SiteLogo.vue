<template>
  <div class="site-logo">
    <router-link :to="'/'">
      <img 
        class="logo" 
        src="@/assets/image/logo.svg"
      >
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  position: absolute;
  top: 30px;
  left: 30px;
  width: 64px;

  transition-property: transform, filter;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    transition-property: transform, filter;
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transform:
      translateY(-5px);
    filter:
      brightness(10)
      drop-shadow(-2px 2px var(--accent-1));
  }
}
</style>
