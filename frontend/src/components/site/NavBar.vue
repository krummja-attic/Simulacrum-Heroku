<template>
  <div class="navbar">
    <div class="navbar-view">
      <div class="indicator" ref="indicator"></div>
      <NavItem 
        v-for="(item, index) in pathMap" 
        :key="item.path" 
        :path="item.path" 
        :label="item.label"
        :ref="item.label"
        @click="setIndicator"
        @updatePosition="onUpdatePosition($event, index)"
      />
    </div> <!-- /navbar-view -->
  </div> <!-- /navbar -->
</template>

<script>
import { gsap } from 'gsap';
import NavItem from '@/components/site/NavItem';

export default {
  components: {
    NavItem
  },
  data () {
    return {
      pathMap: [
        {
          path: "/",
          label: "home"
        },
        {
          path: "/blog",
          "label": "blog"
        },
        {
          path: "/projects",
          "label": "projects"
        },
        {
          path: "/about",
          "label": "about"
        }
      ],
    }
  },
  methods: {

    setIndicator(event) {
      let target = event.target;
      let pos = target.getBoundingClientRect();
      let indicator = this.$refs.indicator;
      gsap.to(indicator, { 
        duration: 0.25, 
        x: pos.left, 
        width: pos.width,
        ease: "circ.inOut"
      });
    },

    onUpdatePosition(rectData, index) {
      if ( index === 0 ) {
        let indicator = this.$refs.indicator;
        gsap.set(indicator, { 
          opacity: 1, 
          x: rectData.left, 
          width: rectData.width 
        });
      }
    }
    
  }
}
</script>

<style lang="scss" scoped>
.indicator {
  position: absolute;
  margin-top: 15px;
  height: 3px;
  border-top: 2px solid rgba(247, 243, 239, 0.5);

  left: 0;
  opacity: 0;
}

.navbar {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
  width: 35vw;

  &-view {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
