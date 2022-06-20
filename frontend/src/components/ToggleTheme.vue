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
@import "@/../assets/css/layout.scss";

.toggle-theme {
  margin-left: 16px;
  height: 100%;

  svg {
    transform: scale(0.95);
  }

  @include tablet {
    svg {
      transform: scale(1.05);
    }
  }

  @include desktop {
    svg {
      transform: scale(1.25);
    }
  }
}
</style>
