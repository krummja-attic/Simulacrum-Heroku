<script setup>
import { ref, computed } from 'vue';
import { gsap } from 'gsap';

const box = ref(null);
const tween = computed(() => gsap.to(box.value, {keyframes: [
  {x: 300, y: 100, duration: 1.5, delay: -0.25},
  {x: 600, y: 400, duration: 1.5, delay: -0.25},
  {x: 800, y: 600, duration: 1.5, delay: -0.25},
  {x: 0, y: 0, duration: 3}
]}));
</script>


<template>
  <div class="test">
    <div class="controls">
      <button @click="() => tween.play()">
        play
      </button>

      <button @click="() => tween.pause()">
        pause
      </button>

      <button @click="() => tween.reverse()">
        reverse
      </button>

      <button @click="() => tween.restart()">
        restart
      </button>
    </div>

    <div 
      ref="box" 
      class="box" 
    />
  </div>
</template>


<style lang="scss" scoped>
.test {
  width: 100%;
  height: 300px;
}

.controls {
  margin-bottom: 50px;
}

.box {
  width: 100px;
  height: 100px;
  background-color: rgba(red, 0.25);
  border: 2px solid rgba(red, 1);
}
</style>
