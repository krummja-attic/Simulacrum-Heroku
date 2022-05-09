<script setup>
import { defineProps, ref } from 'vue';
import { useTheme } from '@/plugins/useTheme';

const pill = useTheme(ref(null));

const props = defineProps({
  text: {
    type: String,
    default: '',
  },
});
</script>


<template>
  <div 
    ref="pill"
    class="tag-pill noselect"
  >
    <span class="tag-pill-text">
      {{ props.text }}
    </span>
  </div>
</template>


<style scoped lang="scss">
@use "sass:color";
@use "sass:map";
@import "@/assets/scss/utils.scss";
@import "@/assets/vars/_themes.scss";
@import "@/assets/vars/_colors.scss";

.tag-pill {
  padding: 3px 8px;
  border-radius: 8px;
  cursor: pointer;
}

[theme="dark"] {
  .tag-pill {
    $backgroundColor: map.get($deep-night, "normal");
    background-color: $backgroundColor;
    transition: transform 0.1s ease-out;

    &:hover {
      background-color: color.adjust(map.get($sunset, "red"), $alpha: -0.8);
    }

    &:active {
      transform: scale(0.95);
    }
  }
}

[theme="light"] {
  .tag-pill {
    $backgroundColor: map.get($overcast, "normal");
    background-color: $backgroundColor;
    transition: transform 0.1s ease-out;

    &:hover {
      background-color: color.adjust(map.get($sunset, "red"), $alpha: -0.8);
    }

    &:active {
      transform: scale(0.95);
    }
  }
}
</style>
