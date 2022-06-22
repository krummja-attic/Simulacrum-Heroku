<script setup lang="ts">
const route = useRoute()
</script>

<template lang="pug">
Router(:route="route.fullPath")
</template>
