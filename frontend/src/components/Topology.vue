<script setup lang="ts">
// @ts-expect-error no declaration file
import TOPOLOGY from 'vanta/src/vanta.topology'
import * as THREE from 'three'
import * as p5 from 'p5'

const topology = ref(null)

onMounted(() => {
  const topRef = topology.value

  TOPOLOGY({
    el: topRef,
    minWidth: 1024.00,
    minHeight: 768.00,
    mouseControls: false,
    touchContols: false,
    scale: 1.00,
    color: 0x676566,
    backgroundColor: 0x272525,
    THREE,
    p5,
  })
})
</script>

<template>
  <div class="topology">
    <div ref="topology" />
  </div>
</template>

<style scoped lang="scss">
.topology {
  position: absolute;
  z-index: -1;

  width: 100%;
  height: 100%;

  & * {
    width: 100%;
    height: 100%;
  }
}
</style>
