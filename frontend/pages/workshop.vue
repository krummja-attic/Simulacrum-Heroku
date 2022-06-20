<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div>
    <router-view v-slot="{ Component }">
      <component
        :is="Component"
        :route="route.fullPath"
      />
    </router-view>
  </div>
</template>
