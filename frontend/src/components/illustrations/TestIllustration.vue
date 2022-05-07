<script setup>
import { onMounted } from "vue";
import Zdog from "zdog";


onMounted(() => {
  let isSpinning = true;

  const illo = new Zdog.Illustration({
    element: '.zdog-canvas',
    dragRotate: true,
    zoom: 1.5,
    onDragStart: function() {
      isSpinning = false;
    }
  });

  new Zdog.Ellipse({
    addTo: illo,
    diameter: 80,
    translate: { z: 40 },
    stroke: 20,
    color: '#636',
  });

  new Zdog.Rect({
    addTo: illo,
    width: 80,
    height: 80,
    translate: { z: -40 },
    stroke: 12,
    color: '#E62',
    fill: true
  });

  const animate = () => {
    if ( isSpinning ) {
      illo.rotate.y += 0.03;
    }
    illo.updateRenderGraph();
    requestAnimationFrame( animate );
  };

  animate();
});
</script>

<template>
  <canvas 
    class="zdog-canvas"
    width="300"
    height="300"
  />
</template>

<style scoped lang="scss">
.zdog-canvas {
  width: 300px;
  height: 300px;
}
</style>
