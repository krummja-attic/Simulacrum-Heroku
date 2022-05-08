<script setup>
import { defineProps } from 'vue';

defineProps({
  path: {
    type: String,
    default: ""
  },
  label: {
    type: String,
    default: ""
  }
});
</script>


<template>
  <div class="navitem type-general">
    <router-link :to="path">
      {{ label }}
    </router-link>
  </div>
</template>


<style scoped lang="scss">
@import "@/assets/scss/app.scss";

.navitem {
  position: relative;
  width: auto;
  height: calc(100% + 5px);
  font: 16px 'Arvo', sans-serif;
}
</style>
