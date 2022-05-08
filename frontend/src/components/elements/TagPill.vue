<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  text: {
    type: String,
    default: '',
  },
});
</script>


<template>
  <div class="tag-pill">
    <span class="tag-pill-text">
      {{ props.text }}
    </span>
  </div>
</template>


<style scoped lang="scss">
@import "@/assets/vars/_themes.scss";

.tag-pill {
  padding: 3px 8px;
  background-color: var(--secondary-background-color);
  border-radius: 8px;
}
</style>
