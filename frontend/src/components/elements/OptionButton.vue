<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  onClick: {
    type: Function,
    default: () => {},
  },
});
</script>

<template>
  <div 
    class="option-button"
    @click="props.onClick"
  >
    <slot />
  </div>
</template>

<style scoped lang="scss">
.option-button {
  display: flex;
  align-items: center;

  cursor: pointer;

  &:hover {
  }

  &:active {}
}
</style>
