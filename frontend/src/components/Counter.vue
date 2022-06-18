<script setup lang="ts">
const props = defineProps({
  init: Number,
})

const counter = ref(props.init || 0)
</script>

<template>
  <div class="counter" debug="indigo">
    <div>Counter: {{ counter }}</div>
    <button @click="counter += 1">
      Inc
    </button>
    <button @click="counter -= 1">
      Dec
    </button>
  </div>
</template>
