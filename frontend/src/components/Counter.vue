<script setup lang="ts">
const props = defineProps({
  init: Number,
})

const counter = ref(props.init || 0)
</script>

<template lang="pug">
.counter 
  div Counter: {{ counter }}
  button(@click="counter += 1") Inc
  button(@click="counter -= 1") Dec
</template>
