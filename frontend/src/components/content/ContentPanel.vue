<script setup>
import { defineProps } from 'vue';

defineProps({
  title: {
    type: String,
    default: ""
  },
  body: {
    type: String,
    default: ""
  }
});
</script>


<template>
  <div class="panel">
    <div class="panel-content">
      <h2>{{ title }}</h2>
      <p>{{ body }}</p>
    </div>
  </div>  
</template>


<style lang="scss" scoped>
$aberration: 6px;
$margin: 10px;

.panel {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin: $margin;
  width: calc(50% - ($margin * 2));
  height: 200px;
  
  @include cut-corners(45px);
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  
  transition-property: transform;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1.0);

  &:hover {
    transform: translateY(-0.5rem);
  }

  &-content {
    height: 100%;
    padding: 2.5rem 3rem;

    background-color: $nero;
    color: $papier;
    
    h2 {
      font: 26pt "Gruppo", sans-serif;
    }
  }
}
</style>
