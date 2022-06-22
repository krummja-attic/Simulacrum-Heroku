<script setup lang="ts">
import anime from 'animejs'

function morphTop(value: Number): void {
  anime({
    targets: '.top',
    height: {
      value: `${value}`,
      duration: 300,
      direction: 'alternate',
      easing: 'easeOutElastic(1, 1)',
    },
  })
}
</script>

<template>
  <div
    class="hover-card"
    @mouseenter="morphTop(25)"
    @mouseleave="morphTop(200)"
  >
    <div class="top">
      <!--  -->
    </div>
  </div>
</template>

<style scoped lang="scss">
.hover-card {
  @apply bg-deepnight-light;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  height: 400px;
  width: 250px;
}

.top {
  @apply bg-cherryblossom-lighter;

  width: 100%;
  grid-row-start: 1;
  grid-row-end: 2;

  box-shadow: 0 8px 0 0 rgba(189, 87, 180, 0.25);
}
</style>
