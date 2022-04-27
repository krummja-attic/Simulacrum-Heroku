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
  <div class="navitem">
    <router-link :to="path">
      {{ label }}
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.navitem {
  position: relative;
  width: auto;
  height: calc(100% + 5px);
  font: 16px 'Arvo', sans-serif;

  a {
    text-decoration: none;
    color: var(--fg-secondary);

    &:hover {
      color: white;
    }

    &::before {
      content: "";
      transform-origin: 50% 100% 0px;
      background-color: var(--accent-1);
      transition: clip-path 0.3s ease 0s, transform 0.3s cubic-bezier(0.2, 1, 0.8, 1) 0s;
      position: absolute;
      top: 100%;
      left: 0px;
      width: 100%;
      height: 1px;
      clip-path: 
        polygon(0% 0%, 0% 100%, 0px 100%, 0px 0px, 100% 0px, 100% 100%, 0px 100%, 0px 100%, 100% 100%, 100% 0%);
    }

    &:hover {
      &::before {
        transform: translate3d(0px, 2px, 0px) scale3d(1, 2, 1);
        clip-path: 
          polygon(0% 0%, 0% 100%, 100% 100%, 50% 0px, 50% 0px, 50% 100%, 50% 100%, 0px 100%, 100% 100%, 100% 0%)
      }
    }
  }
}
</style>
