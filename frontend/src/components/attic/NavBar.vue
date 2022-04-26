<script setup>
import { computed, ref, watch, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { gsap } from 'gsap';
import NavItem from '@/components/site/NavItem';
import _ from 'lodash';

// Vuex
const store = useStore();

// Router
const route = useRoute();

// Component Data
const pathMap = [
  {
    path: "/",
    label: "home"
  },
  {
    path: "/blog",
    label: "blog"
  },
  {
    path: "/projects",
    label: "projects"
  },
  {
    path: "/about",
    label: "about"
  }
];

// Computed
const activeButton = computed(() => { return store.state.siteElements.activeButton; });
const buttonData = computed(() => { return store.state.siteElements.buttonData; });

// DOM Element References
const indicator = ref(null);

// Methods
function updateIndicator() 
{ 
  const tl = gsap.timeline();

  tl.to(indicator.value, { 
    duration: 0.25,
    x: buttonData.value[activeButton.value].left, 
    width: buttonData.value[activeButton.value].width,
    ease: "circ.inOut"
  });

  if (indicator.value.style.opacity < 1) {
    tl.set(indicator.value, { opacity: 1 }, ">");
  }
}

function onResize()
{
  store.dispatch('siteElements/setActiveButton', route.name);
}

// Vue Lifecycle
onMounted(() => {
  window.addEventListener("resize", _.debounce(onResize, 0));
});

// Watchers
watch(activeButton, async () => updateIndicator());
</script>


<template>
  <div class="navbar">
    <div class="navbar-content">

      <div 
        ref="indicator" 
        class="indicator" 
      />

      <NavItem 
        v-for="(item) in pathMap" 
        :key="item.path" 
        :ref="item.label"
        :path="item.path" 
        :label="item.label"
      />
      
    </div>
  </div>
</template>


<style lang="scss" scoped>
@import '@/assets/scss/layout.scss';

.navbar {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  width: 100%;

  &-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 600px;
    padding: 4px 0;
  }
}

.indicator {
  position: absolute;
  margin-top: 15px;
  height: 3px;
  border-top: 2px solid $accent-purple-4;

  left: 0;
  opacity: 0;
}
</style>
