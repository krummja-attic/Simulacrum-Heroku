<script setup lang="ts">
const route = useRoute()
</script>

<template lang="pug">
.blog
  Router(:route="route.fullPath")
</template>
