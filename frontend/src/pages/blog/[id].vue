<script setup>
defineProps({
  id: {
    type: String,
    default: ''
  },
})
</script>

<template>
  blog/[id].vue: {{ id }}
</template>
