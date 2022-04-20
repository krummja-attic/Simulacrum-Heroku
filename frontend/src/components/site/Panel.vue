<template>
  <div class="panel">
    <div class="panel-view">

    </div>
  </div>  
</template>

<script>
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';

export default {
  name: "panel",
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
.panel {
  flex-basis: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: rgba(21, 21, 21, 0.65);

  &-view {
    
  }
}
</style>
