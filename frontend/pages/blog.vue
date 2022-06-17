<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <router-view v-slot="{ Component }" debug="red">
    <component
      :is="Component"
      :route="route.fullPath"
    />
  </router-view>
</template>
