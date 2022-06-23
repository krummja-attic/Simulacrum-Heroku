<script setup lang="ts">
import { isDark } from '../utilities'
</script>

<template lang="pug">
.logo
  router-link(to="/")
    img(v-show="isDark" src="@/../assets/img/logo-light.svg")
    img(v-show="!isDark" src="@/../assets/img/logo-dark.svg")
</template>

<style scoped lang="scss">
.logo {
  width: 64px;

  &:hover {
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

  transition-property: transform;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
</style>
