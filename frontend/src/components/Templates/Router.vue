<script setup lang="ts">
const props = defineProps<{
  route: string
}>()
</script>

<template lang="pug">
div
  router-view(v-slot="{ Component }")
    component(:is="Component" :route="props.route")
</template>
