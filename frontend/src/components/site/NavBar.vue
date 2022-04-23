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
      this.updateIndicator();
    }
  }
}
</script>


<template>
  <div class="navbar">
    <div class="navbar-content">

      <div class="indicator" ref="indicator" />

      <NavItem 
        v-for="(item) in pathMap" 
        :key="item.path" 
        :path="item.path" 
        :label="item.label"
        :ref="item.label"
      />
      
    </div>
  </div>
</template>


<style lang="scss" scoped>
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  width: 100%;

  &-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 35vw;
    padding: 4px 0;
  }
}

.indicator {
  position: absolute;
  margin-top: 15px;
  height: 3px;
  border-top: 2px solid rgba(247, 243, 239, 0.5);

  left: 0;
  opacity: 0;
}
</style>
