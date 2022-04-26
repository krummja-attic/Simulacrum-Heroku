<script setup>
import { computed, defineProps, ref } from 'vue';
import { gsap } from 'gsap';

// Component Props
const props = defineProps({
  width: {
    type: Number,
    default: 300
  },
  height: {
    type: Number,
    default: 200
  }
});

// Component Data
const polyTopLeft = [
  { x: 125, y:   0 },
  { x: 125, y:  70 },
  { x:  65, y: 105 },
  { x:   5, y:  70 },
]
const polyTopRight = [
  { x: 135, y:   0 },
  { x: 135, y:  70 },
  { x: 195, y: 105 },
  { x: 255, y:  70 },
]
const polyBottomLeft = [
  { x:  0, y:  80 },
  { x:  0, y: 143 },
  { x: 54, y: 111 },
]
const polyBottomCenter = [
  { x: 130, y:  80 },
  { x:  76, y: 111 },
  { x: 130, y: 143 },
  { x: 184, y: 111 },
]
const polyBottomRight = [
  { x: 260, y:  80 },
  { x: 260, y: 143 },
  { x: 207, y: 111 },
]

// Computed
const cssVars = computed(() => {
  return {
    '--width': `${props.width}px`,
    '--height': `${props.height}px`
  };
});

const viewBox = computed(() => {
  return `${-20} ${-20} ${props.width} ${props.height}`;
});

// DOM Element References
const topL = ref(null);
const topR = ref(null);
const botL = ref(null);
const botC = ref(null);
const botR = ref(null);

// Methods
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

  gsap.to(topL.value, { x: -sep, y: -sep, duration: 0.15 });
  gsap.to(topR.value, { x:  sep, y: -sep, duration: 0.15 });
  gsap.to(botL.value, { x: -sep * 1.5, y:  sep * 0, duration: 0.15 });
  gsap.to(botC.value, { x:    0, y:  sep, duration: 0.15 });
  gsap.to(botR.value, { x:  sep * 1.5, y:  sep * 0, duration: 0.15 });
}

function resetElements() 
{
  gsap.to(topL.value, { x: 0, y: 0, duration: 0.15 });
  gsap.to(topR.value, { x: 0, y: 0, duration: 0.15 });
  gsap.to(botL.value, { x: 0, y: 0, duration: 0.15 });
  gsap.to(botC.value, { x: 0, y: 0, duration: 0.15 });
  gsap.to(botR.value, { x: 0, y: 0, duration: 0.15 });
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
          :width="props.width"
          :height="props.height"
          :viewBox="viewBox"
          preserveAspectRatio="xMinYMin meet"
          :style="cssVars"
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
  margin: 30px 30px;
}

@include mobile {
  .logo-view {
    position: relative;

    svg {
      width: 75px;
      height: 50px;
      fill: var(--fg-primary);
    }
  }
}

@include tablet {
  .logo-view {
    position: relative;

    svg {
      width: 100px;
      height: 75px;
      fill: var(--fg-primary);
    }
  }
}


@include desktop {
  .logo-view {
    position: relative;

    svg {
      width: 100px;
      height: 50px;
      fill: var(--fg-primary);

      &:hover {
        transition-property: fill, filter;
        transition-duration: 0.6s;
        transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1.0);
      }

      &:active {
        transition-property: fill, filter;
        transition-duration: 0.1s;
        transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1.0);
      }
    }
  }
}
</style>