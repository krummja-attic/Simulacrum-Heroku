<script>
import { gsap } from 'gsap';

export default {
  data() {
    return {
      polyTopLeft: [
        { x: 125, y: 0   },
        { x: 125, y: 70  },
        { x: 65,  y: 105 },
        { x: 5,   y: 70  },
      ],
      polyTopRight: [
        { x: 135, y: 0 },
        { x: 135, y: 70 },
        { x: 195, y: 105 },
        { x: 255, y: 70 },
      ],
      polyBottomLeft: [
        { x: 0, y: 80 },
        { x: 0, y: 148 },
        { x: 54, y: 111 },
      ],
      polyBottomCenter: [
        { x: 130, y: 80 },
        { x: 76, y: 111 },
        { x: 130, y: 141 },
        { x: 184, y: 111 },
      ],
      polyBottomRight: [
        { x: 260, y: 80 },
        { x: 207, y: 110 },
        { x: 260, y: 143 },
      ],
    }
  },
  methods: {
    constructPolygon(definition) {
      let path = "";
      for (let coords of definition) {
        path = path + `${coords.x},${coords.y},`;
      }

      return path;
    },

    separateElements() {
      const topL = this.$refs.topL;
      const topR = this.$refs.topR;
      const botL = this.$refs.botL;
      const botC = this.$refs.botC;
      const botR = this.$refs.botR;

      const sep = 6;

      gsap.to(topL, { x: -sep, y: -sep, duration: 0.35 });
      gsap.to(topR, { x:  sep, y: -sep, duration: 0.35 });
      gsap.to(botL, { x: -sep, y:  sep, duration: 0.35 });
      gsap.to(botC, { x:    0, y:  sep, duration: 0.35 });
      gsap.to(botR, { x:  sep, y:  sep, duration: 0.35 });
    },

    resetElements() {
      const topL = this.$refs.topL;
      const topR = this.$refs.topR;
      const botL = this.$refs.botL;
      const botC = this.$refs.botC;
      const botR = this.$refs.botR;

      gsap.to(topL, { x: 0, y: 0, duration: 0.35 });
      gsap.to(topR, { x: 0, y: 0, duration: 0.35 });
      gsap.to(botL, { x: 0, y: 0, duration: 0.35 });
      gsap.to(botC, { x: 0, y: 0, duration: 0.35 });
      gsap.to(botR, { x: 0, y: 0, duration: 0.35 });
    },
  }
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
        <svg ref="logo" viewBox="-10 -10 290 170">
          <polygon ref="topL" :points="constructPolygon(polyTopLeft)" />
          <polygon ref="topR" :points="constructPolygon(polyTopRight)" />
          <polygon ref="botL" :points="constructPolygon(polyBottomLeft)" />
          <polygon ref="botC" :points="constructPolygon(polyBottomCenter)" />
          <polygon ref="botR" :points="constructPolygon(polyBottomRight)" />
        </svg>
      </div> <!-- /logo-view -->
    </router-link>
  </div> <!-- /logo -->
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
      transition-timing-function: cubic-bezier();
      
      &:hover {
        transition-property: fill, filter;
        transition-duration: 0.6s;
        transition-timing-function: cubic-bezier();

        fill: rgba(255, 255, 255, 1);
        filter: 
          drop-shadow(-$aberration 0 rgba(255, 0, 0, 1))
          drop-shadow($aberration 0 rgba(0, 255, 0, 1))
          drop-shadow(0 $aberration rgba(0, 0, 255, 1));
      }

      &:active {
        transition-property: fill, filter;
        transition-duration: 0.1s;
        transition-timing-function: cubic-bezier();

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