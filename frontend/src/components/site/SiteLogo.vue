<template>
  <div class="site-logo">
    <router-link :to="'/'">
      <img 
        class="logo" 
        src="@/assets/image/logo-dark.svg"
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
      brightness(1.6)
      contrast(200%)
      hue-rotate(-80deg)
      drop-shadow(-2px 2px var(--link-color));
  }
}
</style>
