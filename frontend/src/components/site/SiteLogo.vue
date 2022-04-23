<script setup>
import { ref } from 'vue';
import { gsap } from 'gsap';

const polyTopLeft = [
  { x: 125, y: 0   },
  { x: 125, y: 70  },
  { x: 65,  y: 105 },
  { x: 5,   y: 70  },
]
const polyTopRight = [
  { x: 135, y: 0 },
  { x: 135, y: 70 },
  { x: 195, y: 105 },
  { x: 255, y: 70 },
]
const polyBottomLeft = [
  { x: 0, y: 80 },
  { x: 0, y: 148 },
  { x: 54, y: 111 },
]
const polyBottomCenter = [
  { x: 130, y: 80 },
  { x: 76, y: 111 },
  { x: 130, y: 141 },
  { x: 184, y: 111 },
]
const polyBottomRight = [
  { x: 260, y: 80 },
  { x: 207, y: 110 },
  { x: 260, y: 143 },
]

const topL = ref(null);
const topR = ref(null);
const botL = ref(null);
const botC = ref(null);
const botR = ref(null);

function constructPolygon(definition) 
{
  let path = "";
  for (let coords of definition) {
    path = path + `${coords.x},${coords.y},`;
  }

  return path;
}

function separateElements() 
{
  const sep = 6;

  gsap.to(topL.value, { x: -sep, y: -sep, duration: 0.35 });
  gsap.to(topR.value, { x:  sep, y: -sep, duration: 0.35 });
  gsap.to(botL.value, { x: -sep, y:  sep, duration: 0.35 });
  gsap.to(botC.value, { x:    0, y:  sep, duration: 0.35 });
  gsap.to(botR.value, { x:  sep, y:  sep, duration: 0.35 });
}

function resetElements() 
{
  gsap.to(topL.value, { x: 0, y: 0, duration: 0.35 });
  gsap.to(topR.value, { x: 0, y: 0, duration: 0.35 });
  gsap.to(botL.value, { x: 0, y: 0, duration: 0.35 });
  gsap.to(botC.value, { x: 0, y: 0, duration: 0.35 });
  gsap.to(botR.value, { x: 0, y: 0, duration: 0.35 });
}
</script>


<template>
  <div class="logo">
    <router-link :to="'/'">
      <div 
        class="logo-view" 
        @mouseenter="separateElements()" 
        @mouseleave="resetElements()"
      >
        <svg 
          ref="logo" 
          viewBox="-10 -10 290 170"
        >
          <polygon 
            ref="topL" 
            :points="constructPolygon(polyTopLeft)"
          />
          <polygon 
            ref="topR" 
            :points="constructPolygon(polyTopRight)" 
          />
          <polygon 
            ref="botL" 
            :points="constructPolygon(polyBottomLeft)" 
          />
          <polygon 
            ref="botC" 
            :points="constructPolygon(polyBottomCenter)" 
          />
          <polygon 
            ref="botR" 
            :points="constructPolygon(polyBottomRight)" 
          />
        </svg>
      </div>
    </router-link>
  </div>
</template>


<style lang="scss" scoped>
$aberration: 4px;

.logo {

  &-view {
    position: relative;
        
    svg {
      width: 200px;
      height: 120px;
      fill: rgba(247, 243, 239, 0.5);
        
      transition-property: fill, filter;
      transition-duration: 0.1s;
      transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1.0);
      
      &:hover {
        transition-property: fill, filter;
        transition-duration: 0.6s;
        transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1.0);

        fill: rgba(255, 255, 255, 1);
        filter: 
          drop-shadow(-$aberration 0 rgba(255, 0, 0, 1))
          drop-shadow($aberration 0 rgba(0, 255, 0, 1))
          drop-shadow(0 $aberration rgba(0, 0, 255, 1));
      }

      &:active {
        transition-property: fill, filter;
        transition-duration: 0.1s;
        transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1.0);

        fill: rgba(255, 255, 255, 1);
        filter: 
          drop-shadow((-$aberration - 5) 0 rgba(255, 0, 0, 1))
          drop-shadow(($aberration + 5) 0 rgba(0, 255, 0, 1))
          drop-shadow(0 ($aberration + 5) rgba(0, 0, 255, 1));
      }
    }
  }
}
</style>