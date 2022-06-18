<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <router-view v-slot="{ Component }">
    <component
      :is="Component"
      :route="route.fullPath"
    />
  </router-view>
</template>
