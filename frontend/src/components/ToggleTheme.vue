<script setup lang="ts">
import { isDark } from '../utilities'

function toggleDark() {
  isDark.value = !isDark.value
}
</script>

<template>
  <div class="toggle-theme">
    <a class="select-none" title="Toggle Color Scheme" @click="toggleDark">
      <ri-moon-line v-show="isDark" />
      <ri-sun-line v-show="!isDark" />
    </a>
  </div>
</template>

<style scoped lang="scss">
.toggle-theme {
  margin-left: 16px;
}
</style>
