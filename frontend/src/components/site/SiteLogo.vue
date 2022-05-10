<script setup>
import { ref, watch, computed } from 'vue';
import { useStore } from 'vuex';

const dark = ref(true);
const store = useStore();
const darkMode = computed(() => store.state.siteElements.darkMode);

watch(darkMode, () => {
  dark.value = !dark.value;
});
</script>


<template>
  <div class="site-logo">
    <router-link :to="'/'">
      <img 
        v-if="dark"
        class="logo" 
        src="@/assets/image/logo-light.svg"
      >
      <img 
        v-else
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
