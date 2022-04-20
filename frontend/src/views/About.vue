<template>
  <div class="about">
    <div ref="box" class="box"></div>
  </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
  name: "about",
  mounted() {
    const { box } = this.$refs;
    const tl = gsap.timeline();
    tl.to(box, { x: 200, rotation: 90, duration: 1 });
  }
}
</script>

<style lang="scss" scoped>
.box {
  height: 60px;
  width: 60px;
  background: red;
}
</style>