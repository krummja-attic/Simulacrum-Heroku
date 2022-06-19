<script setup lang="ts">
import { isDark } from '../utilities'
</script>

<template>
  <div class="logo">
    <router-link to="/">
      <img v-show="isDark" src="@/../assets/img/logo-light.svg">
      <img v-show="!isDark" src="@/../assets/img/logo-dark.svg">
    </router-link>
  </div>
</template>

<style scoped lang="scss">
.logo {
  width: 64px;
}
</style>
