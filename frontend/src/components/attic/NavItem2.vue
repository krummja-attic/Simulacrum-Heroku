<script setup>
import { defineProps, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

// Vue Router
const router = useRouter();
const route = useRoute();

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
})

// Computed
const activeClass = computed(() => { 
  if ( route.name === props.label ) {
    return 'active-route';
  }
  else {
    return 'inactive-route';
  }
});

// Methods
function routeTo()
{
  router.push({ path: props.path });
}
</script>


<template>
  <div
    class="nav-item"
    :class="activeClass"
    @click="routeTo"
  >
    {{ label }}
  </div>
</template>


<style lang="scss" scoped>
.nav-item {
  width: 100%;
  padding: 0.25rem 1.5rem;

  @include cut-corners(10px, 0px, 10px, 0px);
  font-family: 'Titillium Web', sans-serif;
  text-transform: uppercase;
  
  cursor: pointer;
}

@include tablet {
  .nav-item {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  .active-route {
    color: rgba($sakura-rgb, 0.75);
  }

  .inactive-route {
    color: $ash;

    &:hover {
      color: $papier;
    }
  }
}

@include desktop {
  .nav-item {
    font-size: 1.85rem;
    font-weight: 400;
  }

  .active-route {
    transition-property: all;
    transition-duration: 0.2s;
    // background-color: rgba($sakura-rgb, 1);
    background-color: $accent-purple-1;
    // color: $defaultian;
    color: $papier;
  }

  .inactive-route {
    color: $ash;
    background-size: 200% 100%;
    background-image: linear-gradient(to left, $accent-purple-3 50%, transparent 50%);

    &:hover {
      transition-property: all;
      transition-duration: 0.2s;
      background-position: -100% 0;
      // color: $papier;
      color: $nero;
    }
  }
}
</style>
