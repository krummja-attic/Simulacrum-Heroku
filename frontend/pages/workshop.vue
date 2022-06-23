<script setup lang="ts">
const route = useRoute()
</script>

<template lang="pug">
.workshop
  Router(:route="route.fullPath")
</template>
