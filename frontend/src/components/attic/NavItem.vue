<script setup>
import { computed, defineProps, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import _ from 'lodash';

// Vuex
const store = useStore();

// Component Props
const props = defineProps({
  path: {
    type: String,
    default: ""
  },
  label: {
    type: String,
    default: ""
  }
});

// Component Data
const padding = { vertical: 16, horizontal: 8 };

// Computed
const cssVars = computed(() => { return {
  '--padding': `${padding.vertical}px ${padding.horizontal}px`
}});

// DOM Element References
const navItem = ref(null);

// Methods
function updateButtonData() 
{
  const domRect = navItem.value.getBoundingClientRect();
  store.dispatch('siteElements/updateButtonData', {
    name: props.label,
    data: {
      left: padding.horizontal + domRect.left,
      width: domRect.width - (padding.horizontal * 2),
    }
  });
}

// Vue Lifecycle
onMounted(() => {
  window.addEventListener('resize', _.debounce(updateButtonData, 0));
  updateButtonData();
});
</script>


<template>
  <div 
    ref="navItem" 
    class="nav-item"
    :style="cssVars"
  >

    <router-link 
      :to="path"
      @click="updateButtonData()"
    >
      {{ label }}
    </router-link>
    
  </div>
</template>


<style lang="scss" scoped>
.nav-item {
  padding: var(--padding);

  font: 20pt 'Gruppo', sans-serif;
  text-transform: uppercase;

  a {
    text-decoration: none;
    transition-property: color;
    transition-duration: 0.2s;
    transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1.0);

    &:link, 
    &:visited {
      color: rgba(247, 243, 239, 0.5);
    }

    &:hover {
      color: rgba(255, 255, 255, 1);
    }
  }
}
</style>
