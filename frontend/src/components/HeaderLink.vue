<script setup lang="ts">
const props = defineProps<{
  to: string
  label: string
}>()
</script>

<template lang="pug">
.header-link 
  router-link(:to="props.to") {{ props.label }}
</template>

<style scoped lang="scss">
@import "@/../assets/css/layout.scss";

a {
  margin: 0 16px;
  font-weight: 600;
  font-size: 16px;

  @include tablet {
    font-size: 18px
  }

  @include desktop {
    font-size: 18px;
  }
}
</style>
