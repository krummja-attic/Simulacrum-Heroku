<script setup lang="ts">
const props = defineProps<{
  className: string
}>()
</script>

<template>
  <div
    class="list-picker--container"
    :class="`list-picker--${props.className}`"
  >
    <div class="list-picker--title">
      <!--  -->
    </div>
    <div class="list-picker--panel">
      <!--  -->
    </div>
  </div>
</template>
