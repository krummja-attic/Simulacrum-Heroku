<template>
  <div class="navbar">
    <div class="navbar-view">

      <div class="indicator" ref="indicator"></div>

      <NavItem 
        v-for="(item) in pathMap" 
        :key="item.path" 
        :path="item.path" 
        :label="item.label"
        :ref="item.label"
      />
      
    </div> <!-- /navbar-view -->
  </div> <!-- /navbar -->
</template>

<script>
import { gsap } from 'gsap';
import { mapState } from 'vuex';
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
  computed: mapState('siteElements', ["activeButton", "buttonData"]),
  methods: {
    updateIndicator() { 
      const indicator = this.$refs.indicator;
      const tl = gsap.timeline();
      
      tl.to(indicator, { 
        duration: 0.25,
        x: this.buttonData[this.activeButton].left, 
        width: this.buttonData[this.activeButton].width,
        ease: "circ.inOut"
      });

      if (indicator.style.opacity < 1) {
        tl.set(indicator, { opacity: 1 }, ">");
      }
    },
  },
  watch: {
    activeButton() {
      /**
       * Watch for an update to the store's `activeButton` property.
       * When detected, update the indicator's position accordingly.
       */
      this.updateIndicator();
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
