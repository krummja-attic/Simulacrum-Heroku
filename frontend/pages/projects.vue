<script setup lang="ts">
const route = useRoute()
</script>

<template lang="pug">
.projects
  Router(:route="route.fullPath")
</template>
