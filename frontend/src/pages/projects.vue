<!-- Project Index -- CONTAINER -->

<script setup>
const route = useRoute();
</script>

<template>
  <router-view v-slot="{ Component }">
    <component 
      :is="Component" 
      :route="route.fullPath"
    />
  </router-view>
</template>
