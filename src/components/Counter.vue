<script setup>
import { ref } from 'vue';

const props = defineProps({
  init: {
    type: Number,
  },
});

const counter = ref(props.init || 0);
</script>

<template>
  <div class="counter">
    <div>Counter: {{ counter }}</div>
    <button btn @click="counter += 1">Inc</button>
    <button btn @click="counter -= 1">Dec</button>
  </div>
</template>
