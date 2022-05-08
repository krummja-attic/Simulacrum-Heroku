<template>
  <div class="site-logo">
    <router-link :to="'/'">
      <img 
        class="logo" 
        src="@/assets/image/logo-light.svg"
      >
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/app.scss";

.logo {
  position: absolute;
  top: 30px;
  left: 96px;
  width: 64px;

  transition-property: transform;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    transition-property: transform;
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transform:
      translateY(-5px);
    filter: 
      invert(68%) 
      sepia(24%) 
      saturate(7463%) 
      hue-rotate(307deg) 
      brightness(92%)
      contrast(82%);
  }
}
</style>
